import { gqlSdk } from '@/server/infrastructure/graphql/client';
import type { HeaderData } from '../../../application/ports/header-repository';
import type { IHeaderRepository } from '../../../application/ports/header-repository';
import type { MenuGroup } from '@/server/domain/models';

const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';

export class StrapiHeaderRepository implements IHeaderRepository {
  private cache: HeaderData | null = null;

  async get(): Promise<HeaderData> {
    if (this.cache) return this.cache;

    const data = await gqlSdk.Header();
    const header = data.header;

    if (!header) {
      this.cache = { logo: '', logoTextStart: '', logoTextEnd: '', whatsappNumber: '', navigation: [] };
      return this.cache;
    }

    const navigation: MenuGroup[] = (header.navigation?.items ?? [])
      .filter((item): item is NonNullable<typeof item> => item !== null)
      .map((item) => ({
        id: item.id,
        title: item.title,
        link: item.link,
        submenuItem: (item.submenuItem ?? []).filter(
          (sub): sub is NonNullable<typeof sub> => sub !== null
        ),
      }));

    this.cache = {
      logo: header.logo ? `${STRAPI_URL}${header.logo.url}` : '',
      logoTextStart: header.logoTextStart,
      logoTextEnd: header.logoTextEnd,
      whatsappNumber: header.whatsappNumber,
      navigation,
    };
    return this.cache;
  }
}
