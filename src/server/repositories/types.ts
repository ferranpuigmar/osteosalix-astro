import type { IHomeRepository } from './interfaces/home';
import type { INavigationRepository } from './interfaces/navigation';
import type { IServicesRepository } from './interfaces/services';
import type { ILegalRepository } from './interfaces/legal';
import type { IPagesRepository } from './interfaces/pages';
import type { IHeaderRepository } from './interfaces/header';

export interface RepositoryProvider {
  home: IHomeRepository;
  navigation: INavigationRepository;
  services: IServicesRepository;
  legal: ILegalRepository;
  pages: IPagesRepository;
  header: IHeaderRepository;
}
