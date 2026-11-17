import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import { pageMeta } from './head'
import './index.css'

const path = window.location.pathname
const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <App path={path} />
  </StrictMode>
)

// 빌드 결과물은 미리 렌더링된 HTML이 있으므로 hydrate, 개발 서버에서는 새로 그리고 제목도 채웁니다.
if (container.firstElementChild) hydrateRoot(container, app)
else {
  document.title = pageMeta(path).title
  createRoot(container).render(app)
}
