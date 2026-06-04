import type { ServiceEntry } from '../types';

export interface IServicesRepository {
  getAll(): Promise<ServiceEntry[]>;
  getBySlug(slug: string): Promise<ServiceEntry | null>;
}
