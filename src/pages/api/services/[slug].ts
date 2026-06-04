import { getAllServices, getServiceBySlug } from '@/server/services/services';

export { getAllServices, getServiceBySlug };

export async function GET({ params }: { params: { slug: string } }) {
  const data = await getServiceBySlug(params.slug);
  if (!data) {
    return new Response(null, { status: 404 });
  }
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function getStaticPaths() {
  const entries = await getAllServices();
  return entries.map((entry) => ({ params: { slug: entry.slug } }));
}
