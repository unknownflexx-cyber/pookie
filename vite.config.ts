// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pookie/',        // <-- add this (repo name with leading & trailing slashes)
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
})
