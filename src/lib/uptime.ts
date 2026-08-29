export const CAREER_START = new Date("1995-04-01T00:00:00Z");

export function formatUptime(ms: number) {
	const totalSeconds = Math.floor(ms / 1000);
	const years = Math.floor(totalSeconds / (365.25 * 24 * 3600));
	const days = Math.floor((totalSeconds - years * 365.25 * 24 * 3600) / (24 * 3600));
	const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;
	return `${years}y ${days}d ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
