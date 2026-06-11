import { homeData } from '@/data/home';
import type { HomeData } from '@/server/types';
import type { IHomeRepository } from '../../interfaces/home';

export class MdxHomeRepository implements IHomeRepository {
  async get(): Promise<HomeData> {
    return homeData;
  }
}
