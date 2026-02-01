import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    "global": "window",
    "process.env": {},
  },
  resolve: {
    alias: {
      // 🔥 INI HELAHNYA: Kita tipu Vercel.
      // Bila dia cari pakej Safe yang hilang tu, kita bagi dia 'ethers' supaya dia senyap.
      "@safe-global/safe-ethers-adapters": "ethers",
      "@safe-global/safe-core-sdk": "ethers",
      "@safe-global/safe-service-client": "ethers"
    },
  },
});
