import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ledger79.com",
  output: "server",
  adapter: vercel(),
  integrations: [sitemap()],
});