import type { IHomeRepository } from '@/server/application/ports/home-repository';
import type { INavigationRepository } from '@/server/application/ports/navigation-repository';
import type { IServicesRepository } from '@/server/application/ports/services-repository';
import type { ILegalRepository } from '@/server/application/ports/legal-repository';
import type { IPagesRepository } from '@/server/application/ports/pages-repository';
import type { IHeaderRepository } from '@/server/application/ports/header-repository';
import type { IContactRepository } from '@/server/application/ports/contact-repository';
import type { ICenterRepository } from '@/server/application/ports/center-repository';

export interface RepositoryProvider {
  home: IHomeRepository;
  navigation: INavigationRepository;
  services: IServicesRepository;
  legal: ILegalRepository;
  pages: IPagesRepository;
  header: IHeaderRepository;
  contact: IContactRepository;
  center: ICenterRepository;
}
