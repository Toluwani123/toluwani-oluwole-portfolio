import { defineConfig } from "astro/config";
export default defineConfig({
  site: "https://toluwanioluwole.onrender.com",
  output: "static",
  trailingSlash: "always",
  vite: { build: { assetsInlineLimit: 0 } },
  devToolbar: { enabled: false },
});
