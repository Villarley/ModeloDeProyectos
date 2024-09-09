import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
// import mdx from "@astrojs/mdx";

// https://astro.build/config
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs(), image(), react()],
  output: "server",
  adapter: vercel()
});