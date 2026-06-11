import type { ServiceEntry } from '@/server/types';

export interface IServicesRepository {
  getAll(): Promise<ServiceEntry[]>;
  getBySlug(slug: string): Promise<ServiceEntry | null>;
}
