import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 👇 INI YANG PALING PENTING (Menghidupkan Thirdweb)
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
  build: {
    rollupOptions: {
      external: [
        /^@safe-global\/.*$/,
        /^@safe-window\/.*$/
      ],
    },
  },
});
