import type { MenuGroup } from '@/server/domain/models';

export interface HeaderData {
  logo: string;
  logoTextStart: string;
  logoTextEnd: string;
  whatsappNumber: string;
  navigation: MenuGroup[];
}

export interface IHeaderRepository {
  get(): Promise<HeaderData>;
}
