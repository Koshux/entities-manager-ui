import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/v1/circuits': {
        target: 'http://127.0.0.1:3333/',
        changeOrigin: false
      },
      '/v1/meters': {
        target: 'http://127.0.0.1:3333/',
        changeOrigin: false
      },
      '/v1/profile': {
        target: 'http://127.0.0.1:3333/',
        changeOrigin: false
      },
      '/v1/sites': {
        target: 'http://127.0.0.1:3333/',
        changeOrigin: false
      }
    }
  }
})
