import { repositories } from '@/server/infrastructure/di';

export async function getAllCenters() {
  return repositories.center.getAll();
}

export async function getCenterBySlug(slug: string) {
  return repositories.center.getBySlug(slug);
}
