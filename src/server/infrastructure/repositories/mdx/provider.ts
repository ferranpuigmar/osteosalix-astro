import type { RepositoryProvider } from '../../types';
import { MdxHomeRepository } from './home';
import { MdxNavigationRepository } from './navigation';
import { MdxServicesRepository } from './services';
import { MdxLegalRepository } from './legal';
import { MdxPagesRepository } from './pages';
import { MdxHeaderRepository } from './header';

function notImplemented(): never {
  throw new Error('MDX repository not implemented for this field');
}

export const mdxProvider: RepositoryProvider = {
  home: new MdxHomeRepository(),
  navigation: new MdxNavigationRepository(),
  services: new MdxServicesRepository(),
  legal: new MdxLegalRepository(),
  pages: new MdxPagesRepository(),
  header: new MdxHeaderRepository(),
  contact: { get: notImplemented },
  center: { getAll: notImplemented, getBySlug: notImplemented },
};
