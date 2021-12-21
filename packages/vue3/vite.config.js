import path from 'path'
import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const rootDir = fileURLToPath(new URL('.', import.meta.url))
console.log(path.resolve(rootDir, '../../node_modules/vue3'))

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      vue: 'vue3',
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
