import { STEPS, stepPath } from '../site'

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 text-ink">
      <span className="grid grid-cols-3 gap-0.5" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-sm bg-blue" />
        <span className="w-2.5 h-2.5 rounded-sm bg-red" />
        <span className="w-2.5 h-2.5 rounded-sm bg-yellow" />
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight">
        Hangul<span className="text-blue">Easy</span>
      </span>
    </a>
  )
}

/** current: 지금 보고 있는 단계 번호. 메인 페이지는 0 */
export function Header({ current }: { current: number }) {
  const focus = current || 1
  return (
    <header className="site-header sticky z-20 bg-bg border-b border-line gutter">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-3">
        <Logo />
        <nav aria-label="Steps" className="flex items-center gap-1 sm:gap-2 text-sm font-bold">
          {STEPS.map((s) => {
            const active = s.n === current
            const vis = s.n === focus ? '' : Math.abs(s.n - focus) === 1 ? 'hidden sm:inline' : 'hidden md:inline'
            return active ? (
              <a key={s.n} href={stepPath(s)} className="rounded-full bg-yellow px-3 py-1 text-onyellow" aria-current="page">
                {s.n} {s.short}
              </a>
            ) : (
              <a key={s.n} href={stepPath(s)} className={`rounded-full px-3 py-1 hover:text-blue ${vis}`}>
                {s.n} {s.short}
              </a>
            )
          })}
          {current === 0 && (
            <a href={stepPath(STEPS[0])} className="ml-1 rounded-full bg-ink text-bg px-4 py-1.5">
              Start free
            </a>
          )}
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="gutter border-t border-line">
      <div className="max-w-6xl mx-auto py-10 flex flex-wrap justify-between gap-6 text-sm text-muted">
        <div>
          <p className="font-display font-extrabold text-lg text-ink">
            Hangul<span className="text-blue">Easy</span>
          </p>
          <p className="mt-1">Free Korean lessons for total beginners.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-1">
          <a href="/" className="hover:text-ink">Home</a>
          {STEPS.map((s) => (
            <a key={s.n} href={stepPath(s)} className="hover:text-ink">{s.name}</a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
