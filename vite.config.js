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
      // Kalau dia cari Safe Adapter, kita bagi dia Ethers (Plan B)
      "@safe-global/safe-ethers-adapters": "ethers",
    },
  },
});
