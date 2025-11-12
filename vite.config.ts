import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          'react-vendor': ['react', 'react-dom'],
          
          // Router
          'router': ['react-router-dom'],
          
          // Animasyonlar
          'animations': ['gsap', '@gsap/react'],
          
          // Harita kütüphaneleri
          'maps': ['leaflet', 'react-leaflet'],
          
          // UI kütüphaneleri
          'ui': ['lucide-react', 'react-fast-marquee', 'swiper'],
          
          // SEO
          'seo': ['react-helmet-async']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})