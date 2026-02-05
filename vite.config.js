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
      zlib: 'browserify-zlib',
      util: 'util',
    },
  },

  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
    include: [
      '@thirdweb-dev/react',
      '@thirdweb-dev/sdk',
      '@thirdweb-dev/wallets',
      'ethers',
    ],
  },

  build: {
    target: 'es2020',
    rollupOptions: {
      external: [
        /^@safe-global\/.*$/,
        /^@walletconnect\/.*$/,
        'buffer',
        'crypto',
        'events',
        'stream',
        'util',
      ],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
