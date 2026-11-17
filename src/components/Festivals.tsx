import { festivals } from '../data/daegu'
import SectionTitle from './SectionTitle'

const months = Array.from({ length: 12 }, (_, i) => `${i + 1}월`)

export default function Festivals() {
  return (
    <section id="festival" aria-labelledby="festival-title" className="bg-surface border-y border-line gutter">
      <div className="max-w-6xl mx-auto py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle id="festival-title" eyebrow="Festivals" title="계절마다 열리는 축제" />
          <p className="text-xs text-muted">정확한 일정은 매년 공식 홈페이지에서 확인하세요.</p>
        </div>
        <div className="mt-10 overflow-x-auto">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-12 text-xs text-muted font-mono tnum border-b border-line pb-2">
              {months.map((m) => <span key={m}>{m}</span>)}
            </div>
            <ul className="grid grid-cols-12 gap-y-3 mt-4 text-sm">
              {festivals.map((f, i) => (
                <li
                  key={f.name}
                  className="rounded px-2 py-1.5 font-medium"
                  style={{
                    gridColumn: `${f.startMonth} / span ${f.months}`,
                    gridRow: i + 1,
                    background: `color-mix(in oklab, var(--${f.tint}) ${f.tint === 'pine' ? 20 : 18}%, var(--surface))`,
                  }}
                >
                  {f.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
