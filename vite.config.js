import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    "global": "window",
    "process.env": {},
  },
  resolve: {
    alias: {
      // 🔥 HELAH PENYELAMAT:
      // Bila Vercel cari fail adapter tu, kita redirect ke 'ethers' supaya dia tak error.
      "@safe-global/safe-ethers-adapters": "ethers",
    },
  },
});
