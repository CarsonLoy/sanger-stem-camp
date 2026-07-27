import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import { defineConfig } from "astro/config";
import rehypeActivityImages from "./src/markdown/rehypeActivityImages.mjs";
import remarkPublicImages from "./src/markdown/remarkPublicImages.mjs";

export default defineConfig({
  site: "https://carsonloy.github.io",
  base: "/sanger-stem-camp",
  output: "static",
  integrations: [sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkPublicImages],
      rehypePlugins: [[rehypeActivityImages, { base: "/sanger-stem-camp" }]],
    }),
  },
  image: {
    responsiveStyles: true,
  },
});
