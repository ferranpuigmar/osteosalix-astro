import type { LegalEntry } from '@/server/domain/models';

export interface ILegalRepository {
  getAll(): Promise<LegalEntry[]>;
  getBySlug(slug: string): Promise<LegalEntry | null>;
}
