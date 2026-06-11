import type { PageEntry } from '@/server/types';

export interface IPagesRepository {
  getAll(): Promise<PageEntry[]>;
  getBySlug(slug: string): Promise<PageEntry | null>;
}
