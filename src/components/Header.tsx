const links = [
  { href: '#places', label: '명소' },
  { href: '#food', label: '먹거리' },
  { href: '#course', label: '하루 코스', hideOnMobile: true },
  { href: '#festival', label: '축제' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-bg border-b border-line gutter">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-3">
        <a href="#top" className="flex items-baseline gap-2 text-ink">
          <span className="font-display text-2xl leading-none">대구</span>
          <span className="font-mono text-xs text-muted hidden sm:inline">DAEGU</span>
        </a>
        <nav aria-label="주요 메뉴" className="flex gap-4 sm:gap-6 text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`text-ink hover:text-apple ${l.hideOnMobile ? 'hidden sm:inline' : ''}`}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
