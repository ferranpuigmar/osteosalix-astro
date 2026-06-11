import { getHeader } from '@/server/services/header';

export { getHeader };

export async function GET() {
  const data = await getHeader();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
