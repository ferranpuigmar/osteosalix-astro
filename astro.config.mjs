import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import react from '@astrojs/react';
import svgr from 'vite-plugin-svgr';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://osteosalix.com',
  output: 'static',
  integrations: [mdx(), react(), icon()],
  trailingSlash: 'ignore',
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  vite: {
    plugins: [svgr()],
    css: {
      postcss: './postcss.config.mjs',
    },
    optimizeDeps: {
      include: ['astro-leaflet > leaflet'],
    },
  },
});