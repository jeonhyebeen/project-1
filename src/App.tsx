import { SpeechProvider } from './speech'
import { AuthProvider } from './auth'
import { normalizePath } from './site'
import Home from './pages/Home'
import Hangul from './pages/Hangul'
import Greetings from './pages/Greetings'
import Words from './pages/Words'
import Kpop from './pages/Kpop'
import Culture from './pages/Culture'
import Privacy from './pages/Privacy'

const PAGES: Record<string, () => React.ReactNode> = {
  '/': Home,
  '/hangul/': Hangul,
  '/greetings/': Greetings,
  '/words/': Words,
  '/kpop/': Kpop,
  '/culture/': Culture,
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
