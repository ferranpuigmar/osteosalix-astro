import { repositories } from '@/server/infrastructure/di';
import type { PageEntry } from '@/server/domain/models';

export async function getAllPages(): Promise<PageEntry[]> {
  return repositories.pages.getAll();
}

export async function getPageBySlug(slug: string): Promise<PageEntry | null> {
  return repositories.pages.getBySlug(slug);
}
