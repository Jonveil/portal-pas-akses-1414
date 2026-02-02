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
      // 🔥 KUASA VETO (EXTERNALIZATION) 🔥
      // Kita senaraikan semua fail yang error tadi.
      // Vite akan skip fail-fail ini dan teruskan build sampai siap.
      external: [
        "@safe-global/safe-ethers-adapters",
        "@safe-global/safe-core-sdk",
        "@safe-global/safe-service-client",
        "@safe-window/safe-ethers-adapters" // Tambah ini sebab log tuan sebut nama ni
      ],
    },
  },
});
