// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "public": "/public",
      },
    },
  },

  adapter: cloudflare(),
});