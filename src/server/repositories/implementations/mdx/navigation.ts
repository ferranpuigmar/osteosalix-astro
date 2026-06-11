import { navigation } from '@/data/navigation';
import type { MenuGroup } from '@/server/types';
import type { INavigationRepository } from '../../interfaces/navigation';

export class MdxNavigationRepository implements INavigationRepository {
  async get(): Promise<MenuGroup[]> {
    return navigation;
  }
}
