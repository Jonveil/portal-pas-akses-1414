import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    "global": "window",
    "process.env": {},
  },
  build: {
    rollupOptions: {
      // 🔥 INI BAHAGIAN WAJIB ADA 🔥
      // Kita senaraikan fail yang Vercel tak jumpa supaya dia tak error.
      external: [
        "@safe-global/safe-ethers-adapters",
        "@safe-global/safe-core-sdk",
        "@safe-global/safe-service-client"
      ],
    },
  },
});
