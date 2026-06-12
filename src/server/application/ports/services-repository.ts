import type { ServiceEntry } from '@/server/domain/models';

export interface IServicesRepository {
  getAll(): Promise<ServiceEntry[]>;
  getBySlug(slug: string): Promise<ServiceEntry | null>;
}
