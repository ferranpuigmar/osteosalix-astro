import { getAllCenters, getCenterBySlug } from '@/server/application/services/centers';

export { getAllCenters, getCenterBySlug };

export async function GET({ params }: { params: { slug: string } }) {
  const data = await getCenterBySlug(params.slug);
  if (!data) {
    return new Response(null, { status: 404 });
  }
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function getStaticPaths() {
  const entries = await getAllCenters();
  return entries.map((entry) => ({ params: { slug: entry.slug } }));
}
