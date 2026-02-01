import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Ini 'ubat' untuk pastikan coding blockchain berjalan lancar
    "global": "window",
    "process.env": {},
  },
  resolve: {
    alias: {
      // Kita pastikan dia tak keliru antara folder
      process: "process/browser",
    }
  }
});
