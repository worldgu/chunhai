import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoryLabels, statuses } from './data/site';

const work = defineCollection({
	loader: file('src/data/work.json'),
	schema: z.object({
		title: z.string().min(1),
		category: z.enum(categoryLabels),
		status: z.enum(statuses),
		summary: z.string().min(1).max(80),
		role: z.string().min(1),
		tags: z.array(z.string().min(1)).max(5),
		featured: z.boolean(),
		order: z.number().int(),
		cover: z.string().min(1),
		coverAlt: z.string().min(1),
		note: z.string().optional(),
		links: z
			.array(
				z.object({
					label: z.string().min(1),
					href: z.url(),
					kind: z.enum(['live', 'github', 'article', 'gallery']),
				}),
			)
			.max(5),
	}),
});

export const collections = { work };
