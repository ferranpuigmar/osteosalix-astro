import { getCollection } from 'astro:content';
import type { ServiceEntry } from '@/server/domain/models';
import type { IServicesRepository } from '../../../application/ports/services-repository';

export class MdxServicesRepository implements IServicesRepository {
  async getAll(): Promise<ServiceEntry[]> {
    const entries = await getCollection('services');
    return entries.map((entry) => ({
      slug: entry.id,
      title: entry.data.title,
      description: entry.data.description,
      titleImage: entry.data.titleImage,
      contentImage: entry.data.contentImage,
      order: entry.data.order,
      descriptionHtml: entry.data.descriptionHtml,
      treatments: entry.data.treatments,
      ctaTitle: entry.data.ctaTitle,
      ctaDescription: entry.data.ctaDescription,
      methodSteps: entry.data.methodSteps,
    }));
  }

  async getBySlug(slug: string): Promise<ServiceEntry | null> {
    const entries = await getCollection('services');
    const entry = entries.find((e) => e.id === slug);
    if (!entry) return null;
    return {
      slug: entry.id,
      title: entry.data.title,
      description: entry.data.description,
      titleImage: entry.data.titleImage,
      contentImage: entry.data.contentImage,
      order: entry.data.order,
      descriptionHtml: entry.data.descriptionHtml,
      treatments: entry.data.treatments,
      ctaTitle: entry.data.ctaTitle,
      ctaDescription: entry.data.ctaDescription,
      methodSteps: entry.data.methodSteps,
    };
  }
}
