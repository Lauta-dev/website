import { defineCollection, z } from "astro:content";

/*
 ---
title: "Website Screenshot Capture"
technologies: ["Astro", "Puppeteer", "Node.js"]
demo: "https://..."
repo: "https://github.com/lauta-dev/website-screenshot-capture"
--- 
 */

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		technologies: z.array(z.string()),
		demo: z.string(),
		repo: z.string().url(),
		img: z.string(),
	}),
});

export const collection = { projects };
