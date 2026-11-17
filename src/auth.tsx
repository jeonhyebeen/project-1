import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { GOOGLE_CLIENT_ID } from './site'

// 구글 로그인 버튼(Google Identity Services). 버튼이 준 ID 토큰을 서버(/api/auth/login)에 보내 확인받고,
// 서버가 로그인 쿠키를 심어 주면 페이지를 옮겨도 로그인 상태가 유지됩니다.

export type User = { sub: string; name: string; email: string; picture: string }
type Status = 'loading' | 'in' | 'out'

type GoogleId = {
  initialize(o: { client_id: string; callback: (r: { credential: string }) => void; auto_select?: boolean; cancel_on_tap_outside?: boolean }): void
  renderButton(el: HTMLElement, o: Record<string, string | number>): void
  disableAutoSelect(): void
}
declare global {
  interface Window { google?: { accounts: { id: GoogleId } } }
}

type AuthValue = { status: Status; user: User | null; gisReady: boolean; error: string; signOut: () => Promise<void> }
const AuthContext = createContext<AuthValue>({ status: 'loading', user: null, gisReady: false, error: '', signOut: async () => {} })
export const useAuth = () => useContext(AuthContext)

let gisPromise: Promise<void> | null = null
function loadGis() {
  gisPromise ??= new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = 'https://accounts.google.com/gsi/client?hl=en'
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('Google sign-in could not load'))
    document.head.appendChild(s)
  })
  return gisPromise
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Status>('loading')
  const [user, setUser] = useState<User | null>(null)
  const [gisReady, setGisReady] = useState(false)
  const [error, setError] = useState('')

  // 1) 이미 로그인했는지 서버에 묻기
  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'same-origin' })
      .then((r) => (r.ok ? r.json() : { user: null }))
      .catch(() => ({ user: null }))
      .then((d: { user: User | null }) => {
        setUser(d.user)
        setStatus(d.user ? 'in' : 'out')
      })
  }, [])

  // 2) 로그인 안 했으면 구글 버튼 준비
  useEffect(() => {
    if (status !== 'out' || gisReady || !GOOGLE_CLIENT_ID) return
    loadGis()
      .then(() => {
        window.google!.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          cancel_on_tap_outside: true,
          callback: async ({ credential }) => {
            setError('')
            try {
              const r = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ credential }),
              })
              const d = await r.json()
              if (!r.ok) throw new Error(d.error || 'Sign-in failed')
              setUser(d.user)
              setStatus('in')
            } catch (e) {
              setError(e instanceof Error ? e.message : 'Sign-in failed')
            }
          },
        })
        setGisReady(true)
      })
      .catch(() => setError('Google sign-in could not load'))
  }, [status, gisReady])

  const signOut = useCallback(async () => {
    await fetch('/api/auth/logout', { method: 'POST' }).catch(() => {})
    window.google?.accounts.id.disableAutoSelect()
    setUser(null)
    setStatus('out')
  }, [])

  return <AuthContext.Provider value={{ status, user, gisReady, error, signOut }}>{children}</AuthContext.Provider>
}

/** 헤더 오른쪽: 로그인 전에는 구글 버튼, 로그인 후에는 프로필 사진과 메뉴 */
export function AuthButton() {
  const { status, user, gisReady, error, signOut } = useAuth()
  const btnRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (status !== 'out' || !gisReady || !btnRef.current) return
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const narrow = window.matchMedia('(max-width: 639px)').matches
    btnRef.current.innerHTML = ''
    window.google!.accounts.id.renderButton(btnRef.current, {
      type: narrow ? 'icon' : 'standard',
      theme: dark ? 'filled_black' : 'outline',
      size: 'medium',
      shape: 'pill',
      text: 'signin',
      locale: 'en',
    })
  }, [status, gisReady])

  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === 'Escape' : !menuRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', close)
    }
  }, [open])

  if (!GOOGLE_CLIENT_ID) return null
  if (status === 'loading') return <div className="w-9 h-9 shrink-0" aria-hidden="true" />

  if (status === 'out') {
    return (
      <div className="relative shrink-0">
        <div ref={btnRef} className="min-h-9 flex items-center" />
        {error && <p role="alert" className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-surface border-2 border-red p-2 text-xs text-red">{error}</p>}
      </div>
    )
  }

  return (
    <div ref={menuRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`Account: ${user!.name}`}
        className="w-9 h-9 rounded-full overflow-hidden border-2 border-line hover:border-ink grid place-items-center bg-yellow text-onyellow font-bold"
      >
        {user!.picture ? <img src={user!.picture} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" /> : user!.name.slice(0, 1)}
      </button>
      {open && (
        <div role="menu" className="absolute right-0 top-full mt-2 w-64 rounded-2xl border-2 border-ink bg-surface p-4 z-30" style={{ boxShadow: '6px 6px 0 var(--yellow)' }}>
          <p className="font-bold truncate">{user!.name}</p>
          <p className="text-sm text-muted truncate">{user!.email}</p>
          <button
            type="button"
            role="menuitem"
            onClick={() => { setOpen(false); signOut() }}
            className="mt-4 w-full rounded-full border-2 border-ink px-4 py-2 text-sm font-bold hover:bg-ink hover:text-bg"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  )
}
