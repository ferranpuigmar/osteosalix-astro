const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';

function resolveImageUrl(url: string): string {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) {
    const imgHost = new URL(url).host;
    if (imgHost.includes('localhost') || imgHost.includes('127.0.0.1') || imgHost.includes('::1')) {
      return url.replace(/^https?:\/\/[^/]+/, STRAPI_URL.replace(/\/$/, ''));
    }
    return url;
  }
  return `${STRAPI_URL}${url}`;
}

export function assetUrl(path?: string): string {
  if (!path) return '';
  return resolveImageUrl(path);
}

export async function inlineSvg(url?: string): Promise<string> {
  if (!url) return '';
  const resolved = resolveImageUrl(url);
  try {
    const response = await fetch(resolved);
    if (!response.ok) return '';
    return response.text();
  } catch (err) {
    console.error(`[inlineSvg] fetch failed for ${resolved}:`, (err as Error).message);
    return '';
  }
}
