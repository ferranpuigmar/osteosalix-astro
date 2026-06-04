import type { LegalEntry } from '../types';

export interface ILegalRepository {
  getAll(): Promise<LegalEntry[]>;
  getBySlug(slug: string): Promise<LegalEntry | null>;
}
