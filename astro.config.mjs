import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import image from "@astrojs/image";
import svgr from "vite-plugin-svgr";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), image(), mdx()],
  vite: {
    plugins: [svgr()],
  },
});
