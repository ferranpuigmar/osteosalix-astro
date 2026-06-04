import { getAllPages } from '@/server/services/pages';

export { getAllPages };

export async function GET() {
  const data = await getAllPages();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
