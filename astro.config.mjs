import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://sofidev.blog/",
  vite: {
    plugins: [tailwindcss()],
  },
});
