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
      // 🔥 INI UBATNYA:
      // Kita ikut nasihat error log Vercel. Kita suruh dia JANGAN bundle fail-fail ni.
      external: [
        "@safe-global/safe-ethers-adapters",
        "@safe-global/safe-core-sdk",
        "@safe-global/safe-service-client"
      ],
    },
  },
});
