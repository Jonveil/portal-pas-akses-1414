import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Ini sahaja ubat yang kita perlukan untuk Thirdweb
    "global": "window",
    "process.env": {},
  },
});
