import { getNavigation } from '@/server/services/navigation';

export { getNavigation };

export async function GET() {
  const data = await getNavigation();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
