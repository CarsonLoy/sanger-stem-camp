import eslint from "@eslint/js";
import astro from "eslint-plugin-astro";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist/", ".astro/", "node_modules/"]),
  eslint.configs.recommended,
  ...astro.configs.recommended,
]);
