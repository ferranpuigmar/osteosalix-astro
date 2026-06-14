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

export const gqlSdk = getSdk(
  new GraphQLClient(`${STRAPI_URL}/graphql`, { headers })
);
