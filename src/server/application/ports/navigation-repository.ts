import type { MenuGroup } from '@/server/domain/models';

export interface INavigationRepository {
  get(): Promise<MenuGroup[]>;
}
