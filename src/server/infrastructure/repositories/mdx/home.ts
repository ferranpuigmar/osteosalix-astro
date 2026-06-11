import { homeData } from '@/data/home';
import type { HomeData } from '@/server/domain/models';
import type { IHomeRepository } from '../../../application/interfaces/home-repository';

export class MdxHomeRepository implements IHomeRepository {
  async get(): Promise<HomeData> {
    return homeData;
  }
}
