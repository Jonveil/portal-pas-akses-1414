import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Wajib ada untuk Thirdweb berfungsi
    "global": "window",
    "process.env": {},
  },
});
