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
      // 🔥 HELAH PENYELAMAT 🔥
      // Kita tak install fail ni (sebab dia tak wujud),
      // tapi kita tipu Vite suruh dia baca 'ethers' bila dia cari fail ni.
      "@safe-global/safe-ethers-adapters": "ethers",
      "@safe-global/safe-core-sdk": "ethers",
      "@safe-global/safe-service-client": "ethers"
    },
  },
});
