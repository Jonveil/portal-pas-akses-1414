import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // Konfigurasi untuk pastikan variable global wujud
  define: {
    "global": "window",
    "process.env": {},
  },
  resolve: {
    alias: {
      // 🔥 HELAH PENYELAMAT (The Fix) 🔥
      // Bila Vercel cari fail-fail 'Safe' ni, kita tipu dia.
      // Kita halakan dia ke pakej 'ethers' yang memang dah ada.
      "@safe-global/safe-ethers-adapters": "ethers",
      "@safe-global/safe-core-sdk": "ethers",
      "@safe-global/safe-service-client": "ethers"
    },
  },
});
