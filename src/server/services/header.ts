import { repositories } from '@/server/repositories';
import type { HeaderData } from '@/server/repositories/interfaces/header';

export async function getHeader(): Promise<HeaderData> {
  return repositories.header.get();
}
