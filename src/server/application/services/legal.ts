import { repositories } from '@/server/infrastructure/di';
import type { LegalEntry } from '@/server/domain/models';

export async function getAllLegalPages(): Promise<LegalEntry[]> {
  return repositories.legal.getAll();
}

export async function getLegalPage(slug: string): Promise<LegalEntry | null> {
  return repositories.legal.getBySlug(slug);
}
