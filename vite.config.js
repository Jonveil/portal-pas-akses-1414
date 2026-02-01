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
      // 🔥 INI BAHAGIAN PENTING:
      // Kita ikut arahan Vercel sebiji-sebiji.
      // Kita senaraikan fail yang dia tak jumpa supaya dia 'skip' dan tak error.
      external: [
        "@safe-global/safe-ethers-adapters",
        "@safe-global/safe-core-sdk",
        "@safe-global/safe-service-client"
      ],
    },
  },
});
