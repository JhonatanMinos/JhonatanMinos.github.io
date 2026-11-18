// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Repo: JhonatanMinos.github.io -> GitHub Pages user site, served from the root.
export default defineConfig({
  site: "https://jhonatanminos.github.io",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
