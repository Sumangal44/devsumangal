// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import partytown from '@astrojs/partytown';

import markdoc from '@astrojs/markdoc';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://devsumangal.netlify.app/', // Replace with your actual deployed domain
  integrations: [react(), partytown(), markdoc(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});