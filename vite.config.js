import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    // Code splitting for faster page loads
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          bootstrap: ['react-bootstrap', 'bootstrap'],
          icons: ['react-icons'],
        },
      },
    },
    // Minify & compress
    minify: 'esbuild',
    target: 'es2015',
    // Chunk size warnings
    chunkSizeWarningLimit: 600,
    // Generate source maps for debugging (disable in prod if preferred)
    sourcemap: false,
  },
  // Optimise dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
  },
})
