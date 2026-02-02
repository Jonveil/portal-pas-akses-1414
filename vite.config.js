import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portal-pas-akses-1414/", // WAJIB untuk GitHub Pages
  plugins: [react()],
  define: {
    global: "window",
    "process.env": {},
  },
  resolve: {
    alias: {
      process: "process/browser",
      util: "util",
    },
  },
  build: {
    rollupOptions: {
      external: [
        /^@safe-global\/.*$/,
        /^@safe-window\/.*$/,
      ],
    },
  },
});
