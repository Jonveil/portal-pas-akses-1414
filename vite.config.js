import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Setting khas untuk App Blockchain (Thirdweb)
export default defineConfig({
  plugins: [react()],
  define: {
    // Ini 'ubat' paling penting untuk elak error "Global not defined"
    "global": "window",
  },
});
