import { gqlSdk } from '@/server/infrastructure/graphql/client';
import { assetUrl } from '@/server/infrastructure/strapi-url';
import type { ServiceEntry } from '@/server/domain/models';
import type { IServicesRepository } from '../../../application/ports/services-repository';

export class StrapiServicesRepository implements IServicesRepository {
  async getAll(): Promise<ServiceEntry[]> {
    const data = await gqlSdk.ServicesList();
    return (data.services ?? [])
      .filter((s): s is NonNullable<typeof s> => s !== null)
      .map((s) => ({
        slug: s.slug,
        title: s.title,
        description: s.description,
        order: s.order ?? undefined,
      }));
  }

  async getBySlug(slug: string): Promise<ServiceEntry | null> {
    const data = await gqlSdk.ServiceBySlug({ slug });
    const service = data.services?.[0];
    if (!service) return null;

    return {
      slug: service.slug,
      title: service.title,
      description: service.description,
      order: service.order ?? undefined,
      titleImage: service.titleImage ? assetUrl(service.titleImage.url) : undefined,
      descriptionHtml: service.descriptionHtml ?? undefined,
      treatments: (service.treatments ?? [])
        .filter((t): t is NonNullable<typeof t> => t !== null)
        .map((t) => ({ icon: t.icon, title: t.title, description: t.description })),
      ctaTitle: service.ctaTitle ?? undefined,
      ctaDescription: service.ctaDescription ?? undefined,
      methodSteps: (service.method?.methodSteps ?? [])
        .filter((s): s is NonNullable<typeof s> => s !== null)
        .map((s) => ({ num: s.num, title: s.title, description: s.description })),
    };
  }
}
