import type { HomeData } from '../types';

export interface IHomeRepository {
  get(): Promise<HomeData>;
}
