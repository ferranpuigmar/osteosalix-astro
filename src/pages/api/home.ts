import { getHomeData } from '@/server/application/services/home';

export { getHomeData };

export async function GET() {
  const data = await getHomeData();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
