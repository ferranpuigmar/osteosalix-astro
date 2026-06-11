import type { MenuGroup } from '@/server/types';

export interface INavigationRepository {
  get(): Promise<MenuGroup[]>;
}
