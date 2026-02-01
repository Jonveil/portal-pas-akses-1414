import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    "global": "window",
  },
  resolve: {
    alias: {
      // INI HELAH DIA: Kita paksa dia guna 'ethers' bila dia cari fail hantu tu
      "@safe-window/safe-ethers-adapters": "ethers",
    },
  },
});
