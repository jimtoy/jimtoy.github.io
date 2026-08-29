import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		description: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

const notes = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
	schema: z.object({
		date: z.coerce.date(),
		title: z.string().optional(),
	}),
});

const resume = defineCollection({
	loader: glob({ pattern: "*.yaml", base: "./src/content/resume" }),
	schema: z.object({
		name: z.string(),
		location: z.string(),
		contact: z.object({
			email: z.string(),
			linkedin: z.string(),
			github: z.string(),
		}),
		experience: z.array(
			z.object({
				company: z.string(),
				location: z.string(),
				title: z.string(),
				dates: z.string(),
				bullets: z.array(z.string()),
			}),
		),
		earlierCareer: z.object({
			dates: z.string(),
			roles: z.string(),
			location: z.string(),
			summary: z.string(),
		}),
		education: z.array(
			z.object({
				school: z.string(),
				location: z.string(),
				degree: z.string(),
				year: z.string(),
			}),
		),
		skills: z.object({
			technical: z.record(z.string(), z.array(z.string())),
			soft: z.array(z.string()),
		}),
		projects: z.array(
			z.object({
				name: z.string(),
				role: z.string(),
				bullets: z.array(z.string()),
				technologies: z.array(z.string()),
			}),
		),
	}),
});

export const collections = { blog, notes, resume };
