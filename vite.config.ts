import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/formacion-vial-extreme/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo-vinculacion.png', 'vite.svg'],
      manifest: {
        name: 'Vinculación con el futuro',
        short_name: 'Vinculación con el futuro',
        description: 'La formación vial no es un trámite. Es tu primera aventura extrema.',
        theme_color: '#001C30',
        background_color: '#001C30',
        display: 'standalone',
        icons: [
          {
            src: 'logo-vinculacion.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo-vinculacion.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
