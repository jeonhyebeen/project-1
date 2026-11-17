import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// HangulEasy 사이트. 대구 사이트와 별개로 hangul-easy 폴더 안에서 빌드합니다.
export default defineConfig({
  root: import.meta.dirname,
  plugins: [react(), tailwindcss()],
})
