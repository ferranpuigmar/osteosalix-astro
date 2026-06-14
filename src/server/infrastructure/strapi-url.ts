const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';

export function assetUrl(path?: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${STRAPI_URL}${path}`;
}

export async function inlineSvg(url?: string): Promise<string> {
  if (!url) return '';
  const resolved = url.startsWith('http://') || url.startsWith('https://') ? url : `${STRAPI_URL}${url}`;
  const response = await fetch(resolved);
  if (!response.ok) return '';
  return response.text();
}
