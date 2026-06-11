import type { RepositoryProvider } from '../../types';
import { StrapiHeaderRepository } from './header';

function notImplemented(): never {
  throw new Error('Strapi repository not implemented yet');
}

export const strapiProvider: RepositoryProvider = {
  home: { get: notImplemented },
  navigation: { get: notImplemented },
  services: { getAll: notImplemented, getBySlug: notImplemented },
  legal: { getAll: notImplemented, getBySlug: notImplemented },
  pages: { getAll: notImplemented, getBySlug: notImplemented },
  header: new StrapiHeaderRepository(),
};
