import { mdxProvider } from './implementations/mdx/provider';
import { strapiProvider } from './implementations/strapi/provider';
import type { RepositoryProvider } from './types';

export type { RepositoryProvider } from './types';

export const repositories: RepositoryProvider = {
  ...strapiProvider,
  ...mdxProvider,
  header: strapiProvider.header,
};
