import { repositories } from '@/server/repositories';
import type { LegalEntry } from '@/server/types';

export async function getAllLegalPages(): Promise<LegalEntry[]> {
  return repositories.legal.getAll();
}

export async function getLegalPage(slug: string): Promise<LegalEntry | null> {
  return repositories.legal.getBySlug(slug);
}
