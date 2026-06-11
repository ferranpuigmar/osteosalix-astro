import { getCollection } from 'astro:content';
import type { PageEntry } from '@/server/types';
import type { IPagesRepository } from '../../interfaces/pages';

export class MdxPagesRepository implements IPagesRepository {
  async getAll(): Promise<PageEntry[]> {
    const entries = await getCollection('pages');
    return entries.map((entry) => ({
      slug: entry.slug,
      title: entry.data.title,
      description: entry.data.description,
      titleImage: entry.data.titleImage,
      contentImage: entry.data.contentImage,
    }));
  }

  async getBySlug(slug: string): Promise<PageEntry | null> {
    const entries = await getCollection('pages');
    const entry = entries.find((e) => e.slug === slug);
    if (!entry) return null;
    return {
      slug: entry.slug,
      title: entry.data.title,
      description: entry.data.description,
      titleImage: entry.data.titleImage,
      contentImage: entry.data.contentImage,
    };
  }
}
