import { repositories } from '@/server/repositories';
import type { PageEntry } from '@/server/repositories/types';

export async function getAllPages(): Promise<PageEntry[]> {
  return repositories.pages.getAll();
}

export async function getPageBySlug(slug: string): Promise<PageEntry | null> {
  return repositories.pages.getBySlug(slug);
}
