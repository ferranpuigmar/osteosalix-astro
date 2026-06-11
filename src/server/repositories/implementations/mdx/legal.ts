import { getCollection } from 'astro:content';
import type { LegalEntry } from '@/server/types';
import type { ILegalRepository } from '../../interfaces/legal';

export class MdxLegalRepository implements ILegalRepository {
  async getAll(): Promise<LegalEntry[]> {
    const entries = await getCollection('legal');
    return entries.map((entry) => ({
      slug: entry.slug,
      title: entry.data.title,
      description: entry.data.description,
      label: entry.data.label,
    }));
  }

  async getBySlug(slug: string): Promise<LegalEntry | null> {
    const entries = await getCollection('legal');
    const entry = entries.find((e) => e.slug === slug);
    if (!entry) return null;
    return {
      slug: entry.slug,
      title: entry.data.title,
      description: entry.data.description,
      label: entry.data.label,
    };
  }
}
