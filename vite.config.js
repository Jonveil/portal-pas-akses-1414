import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  define: {
    global: 'window',
    'process.env': {},
  },

  resolve: {
    alias: {
      process: 'process/browser',
      stream: 'stream-browserify',
      util: 'util',
      buffer: 'buffer',
      // zlib tak perlu kalau tak guna compression
    },
  },

  build: {
    target: 'es2020',
    rollupOptions: {
      external: [
        /^@safe-global\/.*$/,
        /^@walletconnect\/.*$/,
        'crypto',
        'events',
      ],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
