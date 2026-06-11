import type { HomeData } from '@/server/types';

export interface IHomeRepository {
  get(): Promise<HomeData>;
}
