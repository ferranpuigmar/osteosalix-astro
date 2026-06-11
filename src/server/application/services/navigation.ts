import { repositories } from '@/server/infrastructure/di';
import type { MenuGroup } from '@/server/domain/models';

export async function getNavigation(): Promise<MenuGroup[]> {
  return repositories.navigation.get();
}
