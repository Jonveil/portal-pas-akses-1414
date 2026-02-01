import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  define: {
    global: 'window',
  },

  resolve: {
    alias: {
      '@safe-window/safe-ethers-adapters': 'ethers',
    },
  },

  optimizeDeps: {
    include: ['ethers'],
  },

  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
