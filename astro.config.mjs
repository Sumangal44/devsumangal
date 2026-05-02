// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import partytown from '@astrojs/partytown';

import markdoc from '@astrojs/markdoc';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown(), markdoc(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});