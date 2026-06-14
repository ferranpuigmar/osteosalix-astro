import type { RepositoryProvider } from '../../types';
import { StrapiCenterRepository } from './center';
import { StrapiContactRepository } from './contact';
import { StrapiHeaderRepository } from './header';
import { StrapiHomeRepository } from './home';
import { StrapiServicesRepository } from './services';

function notImplemented(): never {
  throw new Error('Strapi repository not implemented yet');
}

export const strapiProvider: RepositoryProvider = {
  home: new StrapiHomeRepository(),
  navigation: { get: notImplemented },
  services: new StrapiServicesRepository(),
  legal: { getAll: notImplemented, getBySlug: notImplemented },
  pages: { getAll: notImplemented, getBySlug: notImplemented },
  header: new StrapiHeaderRepository(),
  contact: new StrapiContactRepository(),
  center: new StrapiCenterRepository(),
};
