import type { PageEntry } from '@/server/domain/models';

export interface IPagesRepository {
  getAll(): Promise<PageEntry[]>;
  getBySlug(slug: string): Promise<PageEntry | null>;
}
