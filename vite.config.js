import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    "global": "window",
  },
  resolve: {
    alias: {
      // 🔥 HELAH SAKTI:
      // Bila Vercel cari fail 'hantu' tu, kita bagi dia 'ethers' supaya dia diam.
      "@safe-window/safe-ethers-adapters": "ethers",
    },
  },
});
