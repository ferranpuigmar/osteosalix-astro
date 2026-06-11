import { repositories } from '@/server/repositories';
import type { MenuGroup } from '@/server/types';

export async function getNavigation(): Promise<MenuGroup[]> {
  return repositories.navigation.get();
}
