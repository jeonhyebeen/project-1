import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// 빌드 결과물은 미리 렌더링된 HTML이 있으므로 hydrate, 개발 서버에서는 새로 그립니다.
if (container.firstElementChild) hydrateRoot(container, app)
else createRoot(container).render(app)
