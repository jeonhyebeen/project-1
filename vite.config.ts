import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import devServer from '@hono/vite-dev-server'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // 개발 중에는 /api/* 요청을 Hono 앱으로 보냅니다. 배포 후에는 functions/api 가 같은 앱을 실행합니다.
    devServer({
      entry: 'src/server/app.ts',
      exclude: [/^(?!\/api(\/|$)).*/],
      injectClientScript: false,
    }),
  ],
})
