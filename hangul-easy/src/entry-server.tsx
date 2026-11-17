import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

export { head } from './head'
export { ROUTES, SITE_URL } from './site'

export function render(path: string) {
  return renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  )
}
