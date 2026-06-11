import { repositories } from '@/server/infrastructure/di';
import type { HomeData } from '@/server/domain/models';

export async function getHomeData(): Promise<HomeData> {
  return repositories.home.get();
}
