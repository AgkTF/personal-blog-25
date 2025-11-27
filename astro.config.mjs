import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});
