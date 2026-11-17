import { useState } from 'react'
import { say } from '../speech'

export type QuizItem = { word: string; ask: string; options: string[]; answer: string; explain: string }

const isHangul = (s: string) => /[가-힣]/.test(s)

export default function Quiz({ title, items }: { title: string; items: QuizItem[] }) {
  const [q, setQ] = useState(0)
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const done = q >= items.length
  const it = items[Math.min(q, items.length - 1)]

  function pick(o: string) {
    if (picked) return
    setPicked(o)
    if (o === it.answer) setScore((s) => s + 1)
    if (isHangul(it.word)) say(it.word)
  }
  function next() {
    setPicked(null)
    setQ((n) => n + 1)
  }
  function retry() {
    setQ(0)
    setScore(0)
    setPicked(null)
  }

  const ok = picked === it.answer
  const progress = ((done ? items.length : q) / items.length) * 100

  return (
    <section id="quiz" aria-labelledby="quiz-title">
      <p className="eyebrow text-xs font-bold text-red">Quick check</p>
      <h2 id="quiz-title" className="font-display font-extrabold text-3xl mt-2 tracking-tight">{title}</h2>
      <div className="mt-6 rounded-3xl border-2 border-ink bg-surface p-5 sm:p-8" style={{ boxShadow: '8px 8px 0 var(--yellow)' }}>
        <div className="flex items-center justify-between gap-3 text-sm">
          <p className="font-bold">{done ? 'Finished' : `Question ${q + 1} of ${items.length}`}</p>
          <p className="text-muted">Score <b className="text-ink">{score}</b></p>
        </div>
        <div className="mt-4 w-full h-2 rounded-full tint-yellow overflow-hidden">
          <div className="h-full bg-blue transition-all" style={{ width: `${progress}%` }} />
        </div>

        {done ? (
          <div>
            <p className="mt-6 font-hangul text-5xl" lang="ko">잘했어요!</p>
            <p className="text-blue font-bold">jalhaesseoyo · Well done!</p>
            <p className="mt-3 text-lg">You got <b>{score}</b> out of {items.length}.</p>
            <button type="button" onClick={retry} className="mt-5 rounded-full border-2 border-ink px-6 py-2.5 font-bold">Try again</button>
          </div>
        ) : (
          <div>
            <p className="mt-6 text-sm text-muted">{it.ask}</p>
            {it.word && <p className="mt-1 font-hangul text-5xl sm:text-6xl" lang="ko">{it.word}</p>}
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {it.options.map((o) => {
                const state = picked ? (o === it.answer ? ' right' : o === picked ? ' wrong' : '') : ''
                return (
                  <button
                    key={o}
                    type="button"
                    disabled={!!picked}
                    onClick={() => pick(o)}
                    className={`opt${state}${isHangul(o) ? ' font-hangul text-lg font-normal' : ''}`}
                  >
                    {o}
                  </button>
                )
              })}
            </div>
            <p className="mt-4 min-h-[1.6em] font-bold" aria-live="polite">
              {picked && (
                <span className={ok ? 'text-good' : 'text-red'}>
                  {ok ? 'Correct! ' : `Not quite. The answer is “${it.answer}”. `}
                  {it.explain}
                </span>
              )}
            </p>
            {picked && (
              <button type="button" onClick={next} className="mt-2 rounded-full bg-ink text-bg px-6 py-2.5 font-bold">
                {q === items.length - 1 ? 'See my score →' : 'Next question →'}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
