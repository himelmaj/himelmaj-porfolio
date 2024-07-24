import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://himelmaj.vercel.app/',
  prefetch: true,
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), astroI18next(), sitemap()],
});