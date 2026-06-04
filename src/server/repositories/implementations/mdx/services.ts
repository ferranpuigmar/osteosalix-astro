import { getCollection } from 'astro:content';
import type { ServiceEntry } from '../../types';
import type { IServicesRepository } from '../../interfaces/services';

export class MdxServicesRepository implements IServicesRepository {
  async getAll(): Promise<ServiceEntry[]> {
    const entries = await getCollection('services');
    return entries.map((entry) => ({
      slug: entry.slug,
      title: entry.data.title,
      description: entry.data.description,
      titleImage: entry.data.titleImage,
      contentImage: entry.data.contentImage,
      order: entry.data.order,
    }));
  }

  async getBySlug(slug: string): Promise<ServiceEntry | null> {
    const entries = await getCollection('services');
    const entry = entries.find((e) => e.slug === slug);
    if (!entry) return null;
    return {
      slug: entry.slug,
      title: entry.data.title,
      description: entry.data.description,
      titleImage: entry.data.titleImage,
      contentImage: entry.data.contentImage,
      order: entry.data.order,
    };
  }
}
