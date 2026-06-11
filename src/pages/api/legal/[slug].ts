import { getAllLegalPages, getLegalPage } from '@/server/application/services/legal';

export { getAllLegalPages, getLegalPage };

export async function GET({ params }: { params: { slug: string } }) {
  const data = await getLegalPage(params.slug);
  if (!data) {
    return new Response(null, { status: 404 });
  }
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function getStaticPaths() {
  const entries = await getAllLegalPages();
  return entries.map((entry) => ({ params: { slug: entry.slug } }));
}
