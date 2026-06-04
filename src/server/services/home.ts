import { repositories } from '@/server/repositories';
import type { HomeData } from '@/server/repositories/types';

export async function getHomeData(): Promise<HomeData> {
  return repositories.home.get();
}
