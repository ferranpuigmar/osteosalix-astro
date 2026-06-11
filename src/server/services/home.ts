import { repositories } from '@/server/repositories';
import type { HomeData } from '@/server/types';

export async function getHomeData(): Promise<HomeData> {
  return repositories.home.get();
}
