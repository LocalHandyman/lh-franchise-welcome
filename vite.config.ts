import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { buildLandingPages } from "./landing/build.mjs";

export default defineConfig(async () => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
  root: "client",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: { input: { main: path.resolve(__dirname, "client/index.html"), ignite: path.resolve(__dirname, "client/ignite/index.html"), ...(await buildLandingPages()) } },
  },
}));
