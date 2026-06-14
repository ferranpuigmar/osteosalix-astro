export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  {
    console.error("[rebuild] STRAPI_WEBHOOK_SECRET is not set");
    return new Response("Webhook secret not configured", { status: 500 });
  }
};
const GET = () => {
  return new Response("Method not allowed", { status: 405 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
