import { homeData } from '@/data/home';
import type { HomeData } from '../../types';
import type { IHomeRepository } from '../../interfaces/home';

export class MdxHomeRepository implements IHomeRepository {
  async get(): Promise<HomeData> {
    return homeData;
  }
}
