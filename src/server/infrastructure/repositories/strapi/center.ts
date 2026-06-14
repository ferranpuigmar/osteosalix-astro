import { gqlSdk } from '@/server/infrastructure/graphql/client';
import { assetUrl } from '@/server/infrastructure/strapi-url';
import type { CenterCardData, CenterEntry } from '@/server/domain/models';
import type { ICenterRepository } from '../../../application/ports/center-repository';

export class StrapiCenterRepository implements ICenterRepository {
  async getAll(): Promise<CenterCardData[]> {
    const data = await gqlSdk.CentersList();
    return (data.centers ?? [])
      .filter((c): c is NonNullable<typeof c> => c !== null)
      .map((c) => ({
        slug: c.slug,
        name: c.name,
        address: c.address,
        phone: c.phone,
        image: assetUrl(c.image?.url),
      }));
  }

  async getBySlug(slug: string): Promise<CenterEntry | null> {
    const data = await gqlSdk.CenterBySlug({ slug });
    const center = data.centers?.[0];
    if (!center) return null;

    return {
      slug: center.slug,
      name: center.name,
      subtitle: center.subtitle,
      address: center.address,
      phone: center.phone,
      hours: center.hours,
      lat: center.lat,
      lng: center.lng,
      image: assetUrl(center.image?.url),
      galleryImages: (center.galleryImages ?? [])
        .filter((g): g is NonNullable<typeof g> => g !== null)
        .map((g) => assetUrl(g.url)),
      services: (center.services ?? [])
        .filter((s): s is NonNullable<typeof s> => s !== null)
        .map((s) => ({
          slug: s.slug,
          title: s.title,
          description: s.description,
          cardImage: assetUrl(s.cardImage?.url),
        })),
    };
  }
}
