import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
import tailwind from "@astrojs/tailwind";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress()],
  vite: {
    plugins: [Icons({
      compiler: "astro"
    })]
  }
});