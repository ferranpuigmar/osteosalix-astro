import { getAllPages } from '@/server/application/services/pages';

export { getAllPages };

export async function GET() {
  const data = await getAllPages();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
