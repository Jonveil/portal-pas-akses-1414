import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // base: "/portal-pas-akses-1414/",  <-- JANGAN ADA BARIS INI UNTUK RENDER
  plugins: [react()],
  define: {
    global: "window",      // Ini BAGUS (Wajib untuk Web3/Wallet)
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
