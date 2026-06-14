import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generated';

const isLocal = (host: string) =>
  host.includes('localhost') || host.includes('127.0.0.1') || host.includes('::1');

const rawUrl = import.meta.env.STRAPI_URL || '';
const STRAPI_URL = rawUrl
  ? isLocal(rawUrl)
    ? rawUrl
    : rawUrl.replace(/^http:\/\//, 'https://')
  : 'https://cms.osteosalix.com';

const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN;

const headers: Record<string, string> = {
  'Content-Type': 'application/json',
  'apollo-require-preflight': 'true',
};
if (STRAPI_TOKEN) {
  headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
}

const graphqlUrl = `${STRAPI_URL}/graphql`;

export const gqlSdk = getSdk(
  new GraphQLClient(graphqlUrl, {
    headers,
    fetch: async (url, init) => {
      console.log(`[gql] fetching ${url} method=${init?.method}`);
      const res = await fetch(url, { ...init, redirect: 'manual' });
      console.log(`[gql] response status=${res.status} ok=${res.ok}`);
      return res;
    },
  })
);
