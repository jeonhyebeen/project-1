import { AudioHint, PlayButton } from '../speech'

type Reg = 'Polite' | 'Casual' | 'Formal'
export type Phrase = { ko: string; ro: string; en: string; note?: React.ReactNode; reg?: Reg }

export function Ko({ children, className = 'font-hangul text-lg' }: { children: React.ReactNode; className?: string }) {
  return <span className={className} lang="ko">{children}</span>
}

function RegChip({ reg }: { reg?: Reg }) {
  if (!reg) return null
  if (reg === 'Casual') return <span className="chip tint-red text-red">Casual</span>
  if (reg === 'Formal') return <span className="chip bg-ink text-bg">Formal</span>
  return <span className="chip tint-blue text-blue">Polite</span>
}

export function Section({ id, eyebrow, title, ko, intro, audio, children }: {
  id: string; eyebrow: string; title: React.ReactNode; ko?: string; intro?: React.ReactNode; audio?: boolean; children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="eyebrow text-xs font-bold text-red">{eyebrow}</p>
          <h2 id={`${id}-title`} className="font-display font-extrabold text-3xl mt-2 tracking-tight">
            {title}{ko && <> <span className="font-hangul font-normal text-muted" lang="ko">{ko}</span></>}
          </h2>
        </div>
        {audio && <AudioHint />}
      </div>
      {intro && <p className="mt-3 text-muted max-w-2xl">{intro}</p>}
      {children}
    </section>
  )
}

export function PhraseGrid({ items, cols = 'sm:grid-cols-2' }: { items: Phrase[]; cols?: string }) {
  return (
    <div className={`mt-6 grid gap-3 ${cols}`}>
      {items.map((p) => (
        <article key={p.ko} className="card p-5 flex flex-col">
          <div className="flex items-start justify-between gap-3">
            <p className="font-hangul text-3xl leading-tight" lang="ko">{p.ko}</p>
            <RegChip reg={p.reg} />
          </div>
          <p className="mt-1 font-bold text-blue">{p.ro}</p>
          <div className="mt-1 flex items-end justify-between gap-3 flex-1">
            <div className="min-w-0">
              <p className="font-bold">{p.en}</p>
              {p.note && <p className="mt-2 text-sm text-muted">{p.note}</p>}
            </div>
            <PlayButton text={p.ko} />
          </div>
        </article>
      ))}
    </div>
  )
}

export type Line = { who: string; ko: string; ro: string; en: string; me?: boolean }

export function Dialogue({ title, lines }: { title: string; lines: Line[] }) {
  return (
    <div className="mt-6 card p-5 sm:p-6">
      <p className="eyebrow text-xs font-bold text-muted">{title}</p>
      <div className="mt-4 space-y-3">
        {lines.map((l) => (
          <div key={l.ko} className={`flex flex-col ${l.me ? 'items-end text-right' : 'items-start'}`}>
            <p className="text-xs font-bold text-muted mb-1">{l.who}</p>
            <div className={`bubble ${l.me ? 'me tint-blue' : 'them tint-yellow'}`}>
              <div className={`flex items-center gap-3 ${l.me ? 'flex-row-reverse' : ''}`}>
                <p className="font-hangul text-xl" lang="ko">{l.ko}</p>
                <PlayButton text={l.ko} tint="bg-surface" />
              </div>
              <p className="text-sm font-bold text-blue mt-1">{l.ro}</p>
              <p className="text-sm text-muted">{l.en}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function KoCell({ ko, ro }: { ko: string; ro: string }) {
  return (
    <>
      <span className="font-hangul text-xl" lang="ko">{ko}</span>
      <span className="block text-xs text-muted">{ro}</span>
    </>
  )
}

export function DataTable({ headers, rows, minWidth = 560 }: { headers: React.ReactNode[]; rows: React.ReactNode[][]; minWidth?: number }) {
  return (
    <div className="mt-6 overflow-x-auto card">
      <table className="w-full text-left" style={{ minWidth }}>
        <thead className="text-xs text-muted eyebrow">
          <tr className="border-b-2 border-line">
            {headers.map((h, i) => <th key={i} className="px-4 py-3 font-bold">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-line last:border-0 align-top">
              {r.map((c, j) => <td key={j} className={`px-4 py-3 ${j === 0 ? 'font-bold' : ''}`}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Callout({ title, tint = 'tint-yellow', children }: { title: string; tint?: string; children: React.ReactNode }) {
  return (
    <div className={`mt-6 rounded-2xl ${tint} p-5 sm:p-6`}>
      <p className="font-bold">{title}</p>
      <div className="mt-2 text-sm sm:text-base">{children}</div>
    </div>
  )
}

export function Pattern({ formula, examples }: { formula: React.ReactNode; examples: [string, string, string][] }) {
  return (
    <div className="mt-6 rounded-3xl border-2 border-ink bg-surface p-5 sm:p-6" style={{ boxShadow: '6px 6px 0 var(--blue)' }}>
      <p className="eyebrow text-xs font-bold text-muted">Pattern</p>
      <p className="mt-1 font-display font-extrabold text-2xl">{formula}</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 tint-blue rounded-2xl p-2">
        {examples.map(([ko, ro, en]) => (
          <li key={ko} className="flex items-center justify-between gap-3 rounded-xl bg-surface px-4 py-2.5">
            <span><Ko className="font-hangul text-xl">{ko}</Ko> <span className="text-sm text-muted">{ro} · {en}</span></span>
            <PlayButton text={ko} />
          </li>
        ))}
      </ul>
    </div>
  )
}

const SIGN_STYLE = {
  yellow: { background: '#FFC21A', color: '#16171D' },
  green: { background: '#138A4F', color: '#fff' },
  blue: { background: '#1E5AD7', color: '#fff' },
  ink: { background: '#16171D', color: '#fff' },
}

export function Signs({ items }: { items: { ko: string; ro: string; en: string; color: keyof typeof SIGN_STYLE }[] }) {
  return (
    <div className="mt-6 card p-5">
      <p className="eyebrow text-xs font-bold text-muted">Signs you will see</p>
      <ul className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {items.map((s) => (
          <li key={s.ko} className="text-center">
            <div className="sign px-3 py-4" style={SIGN_STYLE[s.color]}>
              <p className="text-2xl" lang="ko">{s.ko}</p>
              <p className="text-xs opacity-90 font-sans font-bold">{s.en}</p>
            </div>
            <p className="mt-1.5 text-xs text-muted">{s.ro}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const TOK_TEXT = ['text-blue', 'text-red', 'text-good', 'text-muted']
const TOK_DOT = ['var(--blue)', 'var(--red)', 'var(--good)', 'var(--muted)']

export function LyricLines({ lines }: { lines: { tokens: [string, string][]; ro: string; en: string }[] }) {
  return (
    <div className="mt-6 space-y-4">
      {lines.map((l) => {
        const full = l.tokens.map(([t]) => t).join(' ')
        return (
          <article key={full} className="card p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <p className="font-hangul text-3xl sm:text-4xl leading-snug" lang="ko">
                {l.tokens.map(([t], i) => (
                  <span key={i}>
                    {i > 0 && ' '}
                    <span className={`tok ${TOK_TEXT[i % 4]}`}><span className="text-ink">{t}</span></span>
                  </span>
                ))}
              </p>
              <PlayButton text={full} />
            </div>
            <p className="mt-2 font-bold text-blue">{l.ro}</p>
            <p className="text-muted">“{l.en}”</p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2 border-t border-line pt-4">
              {l.tokens.map(([t, m], i) => (
                <li key={i} className="flex items-baseline gap-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: TOK_DOT[i % 4] }} aria-hidden="true" />
                  <Ko>{t}</Ko>
                  <span className="text-sm text-muted">{m}</span>
                </li>
              ))}
            </ul>
          </article>
        )
      })}
    </div>
  )
}

const TINTS = ['tint-blue', 'tint-red', 'tint-yellow', 'tint-good']

export function InfoCards({ items, cols = 'sm:grid-cols-2' }: {
  items: { ko?: string; ro?: string; when?: string; title: string; body: React.ReactNode }[]; cols?: string
}) {
  return (
    <div className={`mt-6 grid gap-3 ${cols}`}>
      {items.map((it, i) => (
        <article key={it.title} className={`rounded-2xl ${TINTS[i % 4]} p-5`}>
          <div className="flex items-start justify-between gap-3">
            <div>
              {it.ko && <p className="font-hangul text-2xl" lang="ko">{it.ko}</p>}
              {it.ro && <p className="text-xs font-bold text-blue">{it.ro}</p>}
            </div>
            {it.when && <span className="chip bg-surface">{it.when}</span>}
          </div>
          <h3 className="font-bold mt-2">{it.title}</h3>
          <p className="mt-1 text-sm text-muted">{it.body}</p>
        </article>
      ))}
    </div>
  )
}

export function DoDont({ dos, donts }: { dos: React.ReactNode[]; donts: React.ReactNode[] }) {
  const list = (xs: React.ReactNode[], mark: string, cls: string) => (
    <ul className="mt-3 space-y-3 text-sm sm:text-base">
      {xs.map((x, i) => (
        <li key={i} className="flex gap-3">
          <span className={`w-6 h-6 shrink-0 rounded-full grid place-items-center text-xs font-bold ${cls}`} aria-hidden="true">{mark}</span>
          <span>{x}</span>
        </li>
      ))}
    </ul>
  )
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      <div className="card p-5" style={{ borderColor: 'var(--good)' }}>
        <p className="font-bold text-good">Do</p>
        {list(dos, '✓', 'tint-good text-good')}
      </div>
      <div className="card p-5" style={{ borderColor: 'var(--red)' }}>
        <p className="font-bold text-red">Don’t</p>
        {list(donts, '✕', 'tint-red text-red')}
      </div>
    </div>
  )
}

/** 상황 라벨 + 표현 하나를 크게 보여 주는 카드 (가세요/계세요, 잘 먹겠습니다 등) */
export function SayCard({ label, ko, ro, children, tint = 'card' }: { label: string; ko: string; ro: string; children: React.ReactNode; tint?: string }) {
  return (
    <div className={`${tint === 'card' ? 'card' : `rounded-2xl ${tint}`} p-5`}>
      <p className="text-xs font-bold text-muted eyebrow">{label}</p>
      <div className="mt-2 flex items-center justify-between gap-3">
        <p className="font-hangul text-2xl" lang="ko">{ko}</p>
        <PlayButton text={ko} tint={tint === 'card' ? 'tint-yellow' : 'bg-surface'} />
      </div>
      <p className="text-sm font-bold text-blue">{ro}</p>
      <p className="text-sm text-muted mt-1">{children}</p>
    </div>
  )
}
