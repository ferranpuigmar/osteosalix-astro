import type { CenterCardData, CenterEntry } from '@/server/domain/models';

export interface ICenterRepository {
  getAll(): Promise<CenterCardData[]>;
  getBySlug(slug: string): Promise<CenterEntry | null>;
}
