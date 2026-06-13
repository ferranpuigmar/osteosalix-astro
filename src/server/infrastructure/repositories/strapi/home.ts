import { gqlSdk } from '@/server/infrastructure/graphql/client';
import type { HomeData } from '@/server/domain/models';
import type { IHomeRepository } from '../../../application/ports/home-repository';

const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';

// CKEditor envuelve todo en bloques HTML (<p>, <h2>, etc).
// stripBlocks los elimina, conservando solo tags inline (<strong>, <em>, <br>, <a>, <span>).
const BLOCK_TAGS = /<\/?(p|h[1-6]|div|section|article|header|footer|main|nav|aside|blockquote|pre|ul|ol|li|table|thead|tbody|tr|th|td|figure|figcaption|form|fieldset)(\s[^>]*)?>/gi;

function stripBlocks(html: string): string {
  return html
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/<\/?\s*br\s*\/?>/gi, '<br>')
    .replace(BLOCK_TAGS, '\n')
    .replace(/\n+/g, '\n')
    .trim();
}

export class StrapiHomeRepository implements IHomeRepository {
  private cache: HomeData | null = null;

  async get(): Promise<HomeData> {
    if (this.cache) return this.cache;

    const data = await gqlSdk.Home();
    const home = data.home;
    const heroSection = home?.heroSection?.[0];
    const center = home?.center?.[0];

    this.cache = {
      heroSection: heroSection
        ? {
            badge: heroSection.badge,
            title: heroSection.title,
            description: heroSection.description,
            bgImageUrl: heroSection.bgImage ? `${STRAPI_URL}${heroSection.bgImage.url}` : '',
            bgOverlayUrl: '',
            heroImageUrl: heroSection.heroImage ? `${STRAPI_URL}${heroSection.heroImage.url}` : '',
          }
        : { badge: '', title: '', description: '', bgImageUrl: '', bgOverlayUrl: '', heroImageUrl: '' },
      center: center
        ? {
            label: stripBlocks(center.label),
            title: stripBlocks(center.title),
            content: stripBlocks(center.content),
            values: (center.values ?? [])
              .filter((v): v is NonNullable<typeof v> => v !== null)
              .map((v) => ({ icon: v.icon, title: v.title })),
            button: {
              title: center.button.title,
              link: center.button.link,
            },
            image: center.image ? `${STRAPI_URL}${center.image.url}` : '',
            image2: center.image2 ? `${STRAPI_URL}${center.image2.url}` : '',
          }
        : { label: '', title: '', content: '', values: [], button: { title: '', link: '' }, image: '', image2: '' },
      services: { title: '', subtitle: '', service: [] },
      philosophy: { textureUrl: '' },
    };
    return this.cache;
  }
}
