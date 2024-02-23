import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(), critters()],
  vite: {
    plugins: [Icons({
      compiler: "astro"
    })]
  }
});