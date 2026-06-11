import { navigation } from '@/data/navigation';
import type { MenuGroup } from '@/server/domain/models';
import type { INavigationRepository } from '../../../application/interfaces/navigation-repository';

export class MdxNavigationRepository implements INavigationRepository {
  async get(): Promise<MenuGroup[]> {
    return navigation;
  }
}
