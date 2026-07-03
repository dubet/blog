import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/articles" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		locale: z.string(),
		slug: z.string(),
		draft: z.boolean(),
	}),
});

export const collections = { articles };
