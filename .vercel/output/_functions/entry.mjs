import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C43ajDwm.mjs';
import { manifest } from './manifest_BbuvotSH.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/centers/_slug_.astro.mjs');
const _page2 = () => import('./pages/api/centers-list.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/api/contact-config.astro.mjs');
const _page5 = () => import('./pages/api/header.astro.mjs');
const _page6 = () => import('./pages/api/home.astro.mjs');
const _page7 = () => import('./pages/api/legal/_slug_.astro.mjs');
const _page8 = () => import('./pages/api/legal-list.astro.mjs');
const _page9 = () => import('./pages/api/navigation.astro.mjs');
const _page10 = () => import('./pages/api/pages/_slug_.astro.mjs');
const _page11 = () => import('./pages/api/pages-list.astro.mjs');
const _page12 = () => import('./pages/api/rebuild.astro.mjs');
const _page13 = () => import('./pages/api/services/_slug_.astro.mjs');
const _page14 = () => import('./pages/api/services-list.astro.mjs');
const _page15 = () => import('./pages/centro/_slug_.astro.mjs');
const _page16 = () => import('./pages/design.astro.mjs');
const _page17 = () => import('./pages/legal/_slug_.astro.mjs');
const _page18 = () => import('./pages/servicios/_slug_.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/centers/[slug].ts", _page1],
    ["src/pages/api/centers-list.ts", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/api/contact-config.ts", _page4],
    ["src/pages/api/header.ts", _page5],
    ["src/pages/api/home.ts", _page6],
    ["src/pages/api/legal/[slug].ts", _page7],
    ["src/pages/api/legal-list.ts", _page8],
    ["src/pages/api/navigation.ts", _page9],
    ["src/pages/api/pages/[slug].ts", _page10],
    ["src/pages/api/pages-list.ts", _page11],
    ["src/pages/api/rebuild.ts", _page12],
    ["src/pages/api/services/[slug].ts", _page13],
    ["src/pages/api/services-list.ts", _page14],
    ["src/pages/centro/[slug].astro", _page15],
    ["src/pages/design.astro", _page16],
    ["src/pages/legal/[slug].astro", _page17],
    ["src/pages/servicios/[slug].astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8da7d803-063a-489c-b119-08541b87adca",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
