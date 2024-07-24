import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import partytown from '@astrojs/partytown';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://himelmaj.vercel.app/',
  integrations: [tailwind(), astroI18next(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap()]
});