import { repositories } from '@/server/repositories';
import type { ServiceEntry } from '@/server/types';

export async function getAllServices(): Promise<ServiceEntry[]> {
  return repositories.services.getAll();
}

export async function getServiceBySlug(slug: string): Promise<ServiceEntry | null> {
  return repositories.services.getBySlug(slug);
}
