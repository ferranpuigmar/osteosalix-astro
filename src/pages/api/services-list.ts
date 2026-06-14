import { getAllServices, getServiceBySlug } from '@/server/application/services/services';

export { getAllServices, getServiceBySlug };

export async function GET() {
  const data = await getAllServices();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
