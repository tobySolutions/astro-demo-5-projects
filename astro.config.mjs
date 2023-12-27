import { defineConfig } from "astro/config";
import million from "million/compiler";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    plugins: [million.vite({
      mode: "react",
      server: true,
      auto: true
    })]
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});