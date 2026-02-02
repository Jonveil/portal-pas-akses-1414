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
      // 🔥 KUASA VETO (REGEX) 🔥
      // Kita tak payah tulis nama penuh.
      // Kita suruh dia abaikan SEMUA fail yang mula dengan '@safe-'
      external: [
        /^@safe-global\/.*$/,
        /^@safe-window\/.*$/
      ],
    },
  },
});
