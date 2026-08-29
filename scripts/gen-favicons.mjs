import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const SRC = process.argv[2];
if (!SRC) {
	console.error("Usage: node scripts/gen-favicons.mjs <path-to-source-image>");
	process.exit(1);
}
const OUT = fileURLToPath(new URL("../public", import.meta.url));

async function pngBuffer(size) {
	return sharp(SRC).resize(size, size, { fit: "cover" }).png().toBuffer();
}

// Minimal ICO container (PNG-in-ICO format supported since Windows Vista).
function buildIco(pngBuffers) {
	const count = pngBuffers.length;
	const headerSize = 6;
	const dirEntrySize = 16;
	let offset = headerSize + dirEntrySize * count;

	const header = Buffer.alloc(headerSize);
	header.writeUInt16LE(0, 0); // reserved
	header.writeUInt16LE(1, 2); // type: icon
	header.writeUInt16LE(count, 4);

	const dirEntries = [];
	for (const { size, buffer } of pngBuffers) {
		const entry = Buffer.alloc(dirEntrySize);
		entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256)
		entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
		entry.writeUInt8(0, 2); // color palette
		entry.writeUInt8(0, 3); // reserved
		entry.writeUInt16LE(1, 4); // color planes
		entry.writeUInt16LE(32, 6); // bits per pixel
		entry.writeUInt32LE(buffer.length, 8); // image size
		entry.writeUInt32LE(offset, 12); // image offset
		offset += buffer.length;
		dirEntries.push(entry);
	}

	return Buffer.concat([header, ...dirEntries, ...pngBuffers.map((p) => p.buffer)]);
}

const sizes = [16, 32, 48];
const pngBuffers = await Promise.all(
	sizes.map(async (size) => ({ size, buffer: await pngBuffer(size) })),
);

writeFileSync(`${OUT}/favicon.ico`, buildIco(pngBuffers));
writeFileSync(`${OUT}/favicon-16x16.png`, await pngBuffer(16));
writeFileSync(`${OUT}/favicon-32x32.png`, await pngBuffer(32));
writeFileSync(`${OUT}/apple-touch-icon.png`, await pngBuffer(180));

console.log("Favicon assets written to", OUT);
