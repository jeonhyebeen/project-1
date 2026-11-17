import { SpeechProvider } from './speech'
import { AuthProvider } from './auth'
import { normalizePath } from './site'
import Home from './pages/Home'
import Hangul from './pages/Hangul'
import Sentences from './pages/Sentences'
import Words from './pages/Words'
import KLife from './pages/KLife'
import Privacy from './pages/Privacy'

const PAGES: Record<string, () => React.ReactNode> = {
  '/': Home,
  '/hangul/': Hangul,
  '/words/': Words,
  '/sentences/': Sentences,
  '/k-life/': KLife,
  '/privacy/': Privacy,
}

export default function App({ path }: { path: string }) {
  const Page = PAGES[normalizePath(path)]
  return (
    <AuthProvider>
      <SpeechProvider>
        <Page />
      </SpeechProvider>
    </AuthProvider>
  )
}
