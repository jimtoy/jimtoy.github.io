import { getCollection } from "astro:content";

export async function getPublishedPosts() {
	const posts = await getCollection("blog", ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

const dateFormat: Intl.DateTimeFormatOptions = {
	year: "numeric",
	month: "long",
	day: "numeric",
	timeZone: "UTC",
};

export function formatDate(date: Date) {
	return date.toLocaleDateString("en-US", dateFormat);
}
