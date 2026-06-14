import type { ContactFormConfig } from '@/server/domain/models';

export interface IContactRepository {
  get(): Promise<ContactFormConfig>;
}
