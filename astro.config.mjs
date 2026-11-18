// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Repo: JhonatanMinos.github.io -> GitHub Pages user site, served from the root.
export default defineConfig({
  site: "https://jhonatanminos.github.io",
  base: "/",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
