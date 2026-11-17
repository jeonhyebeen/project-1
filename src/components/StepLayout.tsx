import { useEffect, useState } from 'react'
import { STEPS, stepPath } from '../site'
import { Header, Footer } from './Layout'
import Quiz, { type QuizItem } from './Quiz'

export type Lesson = { label: string; id?: string } // id가 없으면 아직 준비 중인 수업

type Props = {
  n: number
  heroTint: string
  chips: string[]
  h1: React.ReactNode
  lede: React.ReactNode
  lessons: Lesson[]
  quizTitle: string
  quiz: QuizItem[]
  children: React.ReactNode
}

export default function StepLayout({ n, heroTint, chips, h1, lede, lessons, quizTitle, quiz, children }: Props) {
  const step = STEPS[n - 1]
  const prev = STEPS[n - 2]
  const next = STEPS[n]
  const open = lessons.filter((l) => l.id)
  const [active, setActive] = useState(open[0]?.id)

  // 스크롤 위치에 맞춰 왼쪽 수업 목록에 현재 수업을 표시합니다.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-30% 0px -60% 0px' },
    )
    open.forEach((l) => {
      const el = document.getElementById(l.id!)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header current={n} />
      <main id="top">
        <section className={`gutter ${heroTint} border-b border-line`}>
          <div className="max-w-6xl mx-auto py-10 sm:py-12">
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <a href="/" className="hover:text-ink">Home</a> <span aria-hidden="true">›</span>{' '}
              <span className="text-ink font-bold" aria-current="page">Step {n} · {step.name}</span>
            </nav>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
              <div className="min-w-0 max-w-3xl">
                <div className="flex flex-wrap gap-2">
                  {chips.map((c) => <span key={c} className="chip bg-surface">{c}</span>)}
                </div>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-[1.1] mt-4 tracking-tight">{h1}</h1>
                <p className="mt-4 text-lg text-muted">{lede}</p>
              </div>
              <div className="flex items-center gap-3" aria-label="Course progress">
                <div className="text-right">
                  <p className="text-xs text-muted">Step</p>
                  <p className="font-display font-extrabold text-2xl">{n} / {STEPS.length}</p>
                </div>
                <div className="w-28 h-3 rounded-full bg-surface border-2 border-ink overflow-hidden">
                  <div className="h-full bg-red" style={{ width: `${(n / STEPS.length) * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="gutter">
          <div className="max-w-6xl mx-auto py-10 grid gap-10 lg:grid-cols-[15rem_1fr]">
            <aside className="min-w-0">
              <div className="side lg:sticky">
                <p className="eyebrow text-xs font-bold text-muted">Lessons in step {n}</p>
                <ol className="mt-3 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
                  {lessons.map((l, i) => (
                    <li key={l.label}>
                      {l.id ? (
                        <a
                          href={`#${l.id}`}
                          className="lesson flex items-center gap-3 rounded-xl px-3 py-2 whitespace-nowrap hover:bg-line"
                          aria-current={active === l.id ? 'step' : undefined}
                        >
                          <span className="num w-6 h-6 rounded-full grid place-items-center text-xs font-bold tint-blue">{i + 1}</span>
                          {l.label}
                        </a>
                      ) : (
                        <span className="lesson flex items-center gap-3 rounded-xl px-3 py-2 whitespace-nowrap text-muted" title="Coming soon">
                          <span className="num w-6 h-6 rounded-full grid place-items-center text-xs font-bold border border-line">{i + 1}</span>
                          {l.label}
                        </span>
                      )}
                    </li>
                  ))}
                  <li>
                    <a href="#quiz" className="lesson flex items-center gap-3 rounded-xl px-3 py-2 whitespace-nowrap hover:bg-line">
                      <span className="num w-6 h-6 rounded-full grid place-items-center text-xs font-bold tint-yellow">✓</span>
                      Quick check
                    </a>
                  </li>
                </ol>
              </div>
            </aside>

            <div className="min-w-0 space-y-14">
              {children}
              <Quiz title={quizTitle} items={quiz} />

              <nav aria-label="Step navigation" className="grid gap-3 sm:grid-cols-2">
                <a href={prev ? stepPath(prev) : '/'} className="card p-5 hover:border-ink">
                  <p className="text-xs text-muted">← Back to</p>
                  <p className="font-bold text-lg">
                    {prev ? <>Step {prev.n} · {prev.name} <span className="font-hangul font-normal text-muted" lang="ko">{prev.ko}</span></> : 'Home'}
                  </p>
                </a>
                {next ? (
                  <a href={stepPath(next)} className="rounded-[18px] bg-blue p-5 text-right text-white">
                    <p className="text-xs opacity-80">Next step →</p>
                    <p className="font-bold text-lg">Step {next.n} · {next.name} <span className="font-hangul font-normal" lang="ko">{next.ko}</span></p>
                  </a>
                ) : (
                  <a href="/" className="rounded-[18px] bg-red p-5 text-right text-white">
                    <p className="text-xs opacity-80">All {STEPS.length} steps done →</p>
                    <p className="font-bold text-lg">Back to the start <span className="font-hangul font-normal" lang="ko">처음으로</span></p>
                  </a>
                )}
              </nav>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
