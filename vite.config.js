import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 👇 INI BAHAGIAN PALING PENTING UNTUK ELAK SKRIN GELAP
  define: {
    "global": "window",
    "process.env": {},
  },
  resolve: {
    alias: {
      process: "process/browser",
      util: "util",
    },
  },
  // 👆 TAMAT BAHAGIAN PENTING
  build: {
    rollupOptions: {
      external: [
        /^@safe-global\/.*$/,
        /^@safe-window\/.*$/
      ],
    },
  },
});
