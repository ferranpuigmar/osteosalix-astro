import type { MenuGroup } from '../types';

export interface INavigationRepository {
  get(): Promise<MenuGroup[]>;
}
