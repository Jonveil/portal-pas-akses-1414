import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Ini ubat 'global' wajib
    "global": "window",
  },
  build: {
    rollupOptions: {
      // 🔥 INI BAHAGIAN PENTING 🔥
      // Kita suruh Vercel abaikan library 'Safe' yang bermasalah ni
      external: [
        "@safe-window/safe-ethers-adapters",
        "@safe-window/safe-ethers-adapters/dist/safe-ethers-adapters.esm"
      ],
    },
  },
});
