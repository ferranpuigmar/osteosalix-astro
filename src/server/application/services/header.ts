import { repositories } from '@/server/infrastructure/di';
import type { HeaderData } from '@/server/application/interfaces/header-repository';

export async function getHeader(): Promise<HeaderData> {
  return repositories.header.get();
}
