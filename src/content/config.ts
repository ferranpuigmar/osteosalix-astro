import { defineCollection, z } from 'astro:content';

const seoPages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    titleImage: z.string().optional(),
    contentImage: z.string().optional(),
    publishedAt: z.date().optional(),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    titleImage: z.string().optional(),
    contentImage: z.string().optional(),
    order: z.number().optional(),
    publishedAt: z.date().optional(),
  }),
});

const legal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    label: z.string(),
    publishedAt: z.date().optional(),
  }),
});

export const collections = {
  pages: seoPages,
  services,
  legal,
};
