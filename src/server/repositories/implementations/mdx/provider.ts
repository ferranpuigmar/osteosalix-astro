import type { RepositoryProvider } from '../../types';
import { MdxHomeRepository } from './home';
import { MdxNavigationRepository } from './navigation';
import { MdxServicesRepository } from './services';
import { MdxLegalRepository } from './legal';
import { MdxPagesRepository } from './pages';

export const mdxProvider: RepositoryProvider = {
  home: new MdxHomeRepository(),
  navigation: new MdxNavigationRepository(),
  services: new MdxServicesRepository(),
  legal: new MdxLegalRepository(),
  pages: new MdxPagesRepository(),
};
