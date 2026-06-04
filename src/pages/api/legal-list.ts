import { getAllLegalPages } from '@/server/services/legal';

export { getAllLegalPages };

export async function GET() {
  const data = await getAllLegalPages();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
