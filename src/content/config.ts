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

const treatmentSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});

const methodStepSchema = z.object({
  num: z.string(),
  title: z.string(),
  description: z.string(),
});

const services = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    descriptionHtml: z.string().optional(),
    titleImage: z.string().optional(),
    contentImage: z.string().optional(),
    order: z.number().optional(),
    publishedAt: z.date().optional(),
    treatments: z.array(treatmentSchema).optional(),
    ctaTitle: z.string().optional(),
    ctaDescription: z.string().optional(),
    methodSteps: z.array(methodStepSchema).optional(),
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
