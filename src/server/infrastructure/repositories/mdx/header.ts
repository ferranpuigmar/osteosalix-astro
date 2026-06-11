import { headerData } from '@/data/header';
import type { HeaderData } from '../../../application/interfaces/header-repository';
import type { IHeaderRepository } from '../../../application/interfaces/header-repository';

export class MdxHeaderRepository implements IHeaderRepository {
  async get(): Promise<HeaderData> {
    return headerData;
  }
}
