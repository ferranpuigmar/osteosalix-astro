/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GMAIL_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
