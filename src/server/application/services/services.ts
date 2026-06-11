import { repositories } from '@/server/infrastructure/di';
import type { ServiceEntry } from '@/server/domain/models';

export async function getAllServices(): Promise<ServiceEntry[]> {
  return repositories.services.getAll();
}

export async function getServiceBySlug(slug: string): Promise<ServiceEntry | null> {
  return repositories.services.getBySlug(slug);
}
