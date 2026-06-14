import { gqlSdk } from '@/server/infrastructure/graphql/client';
import { assetUrl } from '@/server/infrastructure/strapi-url';
import type { HomeData } from '@/server/domain/models';
import type { IHomeRepository } from '../../../application/ports/home-repository';

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
            bgOverlayUrl: assetUrl(heroSection.bgImage?.url),
            heroImageUrl: assetUrl(heroSection.heroImage?.url),
          }
        : { badge: '', title: '', description: '', bgOverlayUrl: '', heroImageUrl: '' },
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
            image: assetUrl(center.image?.url),
            image2: assetUrl(center.image2?.url),
          }
        : { label: '', title: '', content: '', values: [], button: { title: '', link: '' }, image: '', image2: '' },
      services: {
        title: home?.servicesTitle ?? '',
        subtitle: home?.servicesSubtitle ?? '',
        service: (home?.services ?? [])
          .filter((s): s is NonNullable<typeof s> => s !== null)
          .map((s) => ({
            id: s.documentId,
            title: s.title,
            description: s.description,
            link: `/servicios/${s.slug}`,
            cardImage: assetUrl(s.cardImage?.url),
          })),
      },
      philosophy: {
        textureUrl: assetUrl(home?.philosophy?.textureImage?.url),
        title: home?.philosophy?.title ?? '',
        description: home?.philosophy?.description ?? '',
        items: (home?.philosophy?.philosophyItems ?? [])
          .filter((i): i is NonNullable<typeof i> => i !== null)
          .map((i) => ({ icon: i.icon, text: i.text })),
      },
      centers: {
        title: home?.centersTitle ?? '',
        subtitle: home?.centersSubtitle ?? '',
        list: (home?.centers ?? [])
          .filter((c): c is NonNullable<typeof c> => c !== null)
          .map((c) => ({
            slug: c.slug,
            name: c.name,
            address: c.address,
            phone: c.phone,
            image: assetUrl(c.image?.url),
          })),
      },
    };
    return this.cache;
  }
}
