
import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react"
import path from "path"
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import removeConsole from 'vite-plugin-remove-console';

export default defineConfig({
  plugins: [
    react(),
    removeConsole({
      exclude: ['error', 'warn'], // Keep only console.error and console.warn
    }),
    visualizer({
      open: true,
      gzipSize: true,
      template: 'treemap'
    }),
    viteCompression({
      algorithm: 'gzip',
      threshold: 10240
    }),
    ViteImageOptimizer({
      png: { quality: 70 },
      jpeg: { quality: 70 },
      jpg: { quality: 70 }
    })
  ],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          
          // Feature-based chunks
          'auth-vendor': [
            '@react-oauth/google'
          ],
          
          'query-vendor': [
            '@tanstack/react-query'
          ],
          
          // UI components chunk
          'ui-components': [
            '@/components/ui/button',
            '@/components/ui/card',
            '@/components/ui/input',
            '@/components/ui/form'
          ],
          
          // Admin features chunk
          'admin-features': [
            './src/components/admin/products/Products.jsx',
            './src/components/admin/categories/Categories.jsx',
            './src/components/admin/orders/Orders.jsx'
          ],
          
          // User features chunk
          'user-features': [
            './src/pages/user/ShopPage.jsx',
            './src/pages/user/ProductPage.jsx',
            './src/pages/user/CartPage.jsx'
          ]
        }
      }
    },
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  }
})


