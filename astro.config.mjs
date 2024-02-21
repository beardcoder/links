import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [Icons({
      compiler: "astro"
    })]
  },
  output: "server",
  adapter: cloudflare()
});