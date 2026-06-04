import { repositories } from '@/server/repositories';
import type { MenuGroup } from '@/server/repositories/types';

export async function getNavigation(): Promise<MenuGroup[]> {
  return repositories.navigation.get();
}
