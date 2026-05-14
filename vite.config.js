import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,
    open: false,
  },

  build: {
    // Target modern browsers for smaller bundles
    target: 'es2020',

    // Minify with esbuild (fastest + great compression)
    minify: 'esbuild',

    // Enable CSS code splitting per-chunk
    cssCodeSplit: true,

    // Raise chunk warning to 600 KB before alerting
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Manual chunk splitting — keep vendor libs separate from app code
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
          'icons': ['lucide-react'],
        },

        // Content-hash filenames for long-term caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },

  // Pre-bundle deps for faster dev cold starts
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
})
