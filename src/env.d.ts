/// <reference types="astro/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly GMAIL_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
