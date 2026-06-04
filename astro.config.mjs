import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://osteosalix.com',
  output: 'static',
  integrations: [mdx(), react()],
  trailingSlash: 'ignore',
  vite: {
    css: {
      postcss: './postcss.config.mjs',
    },
  },
});