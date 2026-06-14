import type { APIRoute } from 'astro';
import { createHmac, timingSafeEqual } from 'node:crypto';

export const prerender = false;

const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
const GITHUB_REPO_OWNER = import.meta.env.GITHUB_REPO_OWNER ?? 'ferranpuigmar';
const GITHUB_REPO_NAME = import.meta.env.GITHUB_REPO_NAME ?? 'osteosalix-astro';
const GITHUB_WORKFLOW_ID = import.meta.env.GITHUB_WORKFLOW_ID ?? 'deploy.yml';
const STRAPI_WEBHOOK_SECRET = import.meta.env.STRAPI_WEBHOOK_SECRET;

function verifySignature(payload: string, signature: string, secret: string): boolean {
  const hmac = createHmac('sha256', secret);
  const digest = hmac.update(payload, 'utf8').digest('hex');

  const sigBuffer = Buffer.from(signature, 'utf8');
  const digBuffer = Buffer.from(digest, 'utf8');

  if (sigBuffer.length !== digBuffer.length) return false;
  return timingSafeEqual(sigBuffer, digBuffer);
}

function isAuthorized(request: Request): boolean {
  if (!STRAPI_WEBHOOK_SECRET) {
    console.warn('[rebuild] STRAPI_WEBHOOK_SECRET is not set; accepting request without auth');
    return true;
  }

  const headerSecret = request.headers.get('x-webhook-secret');
  if (headerSecret === STRAPI_WEBHOOK_SECRET) return true;

  return false;
}

function isSignatureValid(request: Request, payload: string): boolean {
  if (!STRAPI_WEBHOOK_SECRET) return true;

  const signature = request.headers.get('x-strapi-signature');
  if (signature && verifySignature(payload, signature, STRAPI_WEBHOOK_SECRET)) return true;

  return false;
}

export const POST: APIRoute = async ({ request }) => {
  const payload = await request.text();
  console.log('[rebuild] Received webhook payload:', payload.slice(0, 500));

  if (!isAuthorized(request) && !isSignatureValid(request, payload)) {
    console.error('[rebuild] Unauthorized request');
    return new Response('Unauthorized', { status: 401 });
  }

  let event: Record<string, unknown>;
  try {
    event = JSON.parse(payload);
  } catch {
    console.error('[rebuild] Invalid JSON payload');
    return new Response('Invalid JSON payload', { status: 400 });
  }

  const eventName = typeof event.event === 'string' ? event.event : '';
  const model = typeof event.model === 'string' ? event.model : '';

  console.log('[rebuild] Webhook event:', eventName, 'model:', model);

  if (!GITHUB_TOKEN) {
    console.error('[rebuild] GITHUB_TOKEN is not set');
    return new Response('GitHub token not configured', { status: 500 });
  }

  const githubUrl = `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/actions/workflows/${GITHUB_WORKFLOW_ID}/dispatches`;

  const response = await fetch(githubUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ref: 'main',
      inputs: {
        triggeredBy: 'strapi-webhook',
        event: eventName,
        model,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('[rebuild] GitHub API error:', response.status, error);
    return new Response('Failed to trigger build', { status: 502 });
  }

  console.log('[rebuild] GitHub workflow triggered successfully');
  return new Response(
    JSON.stringify({ ok: true, message: 'Build triggered', model, event: eventName }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};

export const GET: APIRoute = () => {
  return new Response('Method not allowed', { status: 405 });
};
