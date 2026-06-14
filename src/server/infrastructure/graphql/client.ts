import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generated';

const rawUrl = import.meta.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_URL =
  rawUrl.includes('localhost') || rawUrl.includes('127.0.0.1')
    ? rawUrl
    : rawUrl.replace(/^http:\/\//, 'https://');
const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN;

const headers: Record<string, string> = {
  'Content-Type': 'application/json',
  'apollo-require-preflight': 'true',
};
if (STRAPI_TOKEN) {
  headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
}

export const gqlSdk = getSdk(
  new GraphQLClient(`${STRAPI_URL}/graphql`, {
    headers,
    fetch: (url, init) =>
      fetch(url, { ...init, redirect: 'manual' }),
  })
);
