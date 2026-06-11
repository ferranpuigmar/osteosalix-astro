import type { MenuGroup } from '@/server/types';

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
