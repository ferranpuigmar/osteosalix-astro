import type { PageEntry } from '../types';

export interface IPagesRepository {
  getAll(): Promise<PageEntry[]>;
  getBySlug(slug: string): Promise<PageEntry | null>;
}
