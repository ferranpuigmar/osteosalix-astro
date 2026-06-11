import { headerData } from '@/data/header';
import type { HeaderData } from '../../interfaces/header';
import type { IHeaderRepository } from '../../interfaces/header';

export class MdxHeaderRepository implements IHeaderRepository {
  async get(): Promise<HeaderData> {
    return headerData;
  }
}
