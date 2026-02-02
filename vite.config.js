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
      // 🔥 KUASA VETO:
      // Senaraikan fail degil ini sebagai 'external'.
      // Netlify takkan cuba bundle fail ini, jadi build akan LULUS.
      external: [
        "@safe-global/safe-ethers-adapters",
        "@safe-global/safe-core-sdk",
        "@safe-global/safe-service-client"
      ],
    },
  },
});
