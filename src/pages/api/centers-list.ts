import { getAllCenters } from '@/server/application/services/centers';

export { getAllCenters };

export async function GET() {
  const data = await getAllCenters();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
