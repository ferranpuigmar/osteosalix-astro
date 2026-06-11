import { siteConfig } from './site-config';
import { navigation } from './navigation';

export const headerData = {
  logo: siteConfig.logo.url,
  logoTextStart: 'osteo',
  logoTextEnd: 'salix',
  whatsappNumber: siteConfig.phone,
  navigation,
};
