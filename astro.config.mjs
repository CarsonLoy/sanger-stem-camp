import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://carsonloy.github.io",
  base: "/sanger-stem-camp",
  output: "static",
  integrations: [mdx(), sitemap()],
  image: {
    responsiveStyles: true,
  },
});
