import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// HangulEasy 사이트
export default defineConfig({
  root: import.meta.dirname,
  plugins: [react(), tailwindcss()],
})
