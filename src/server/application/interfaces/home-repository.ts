import type { HomeData } from '@/server/domain/models';

export interface IHomeRepository {
  get(): Promise<HomeData>;
}
