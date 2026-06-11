import type { IHomeRepository } from '@/server/application/interfaces/home-repository';
import type { INavigationRepository } from '@/server/application/interfaces/navigation-repository';
import type { IServicesRepository } from '@/server/application/interfaces/services-repository';
import type { ILegalRepository } from '@/server/application/interfaces/legal-repository';
import type { IPagesRepository } from '@/server/application/interfaces/pages-repository';
import type { IHeaderRepository } from '@/server/application/interfaces/header-repository';

export interface RepositoryProvider {
  home: IHomeRepository;
  navigation: INavigationRepository;
  services: IServicesRepository;
  legal: ILegalRepository;
  pages: IPagesRepository;
  header: IHeaderRepository;
}
