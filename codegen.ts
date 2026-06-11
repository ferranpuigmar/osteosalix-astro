import type { CodegenConfig } from '@graphql-codegen/cli';
import { config as dotenv } from 'dotenv';

dotenv();

const config: CodegenConfig = {
  schema: {
    'http://localhost:1337/graphql': {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    },
  },
  documents: 'src/lib/graphql/queries/*.graphql',
  generates: {
    'src/lib/graphql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        rawRequest: false,
        useTypeImports: true,
        dedupeFragments: true,
      },
    },
  },
};

export default config;
