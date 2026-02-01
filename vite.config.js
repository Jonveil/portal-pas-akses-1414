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
      // 🔥 INI UBATNYA: Kita ikut cakap error log tu.
      // Kita suruh Vercel JANGAN bundle benda-benda ni.
      external: [
        "@safe-global/safe-ethers-adapters",
        "@safe-global/safe-core-sdk",
        "@safe-global/safe-service-client"
      ],
    },
  },
});

