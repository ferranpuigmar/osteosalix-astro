import { repositories } from '@/server/infrastructure/di';

export async function getContactConfig() {
  return repositories.contact.get();
}
