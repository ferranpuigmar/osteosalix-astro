import { getAllPages, getPageBySlug } from '@/server/application/services/pages';

export { getAllPages, getPageBySlug };

export async function GET({ params }: { params: { slug: string } }) {
  const data = await getPageBySlug(params.slug);
  if (!data) {
    return new Response(null, { status: 404 });
  }
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function getStaticPaths() {
  const entries = await getAllPages();
  return entries.map((entry) => ({ params: { slug: entry.slug } }));
}
