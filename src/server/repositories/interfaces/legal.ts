import type { LegalEntry } from '@/server/types';

export interface ILegalRepository {
  getAll(): Promise<LegalEntry[]>;
  getBySlug(slug: string): Promise<LegalEntry | null>;
}
