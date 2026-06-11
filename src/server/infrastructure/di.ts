import { mdxProvider } from './repositories/mdx/provider';
import { strapiProvider } from './repositories/strapi/provider';
import type { RepositoryProvider } from './types';

export type { RepositoryProvider } from './types';

export const repositories: RepositoryProvider = {
  ...strapiProvider,
  ...mdxProvider,
  header: strapiProvider.header,
};
