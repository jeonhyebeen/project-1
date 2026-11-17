import { STEPS, stepPath } from '../site'
import { Header, Footer } from '../components/Layout'
import { SyllableBuilder } from '../components/HomeWidgets'

const PATH_STYLE = [
  { card: 'bg-yellow text-onyellow', num: '', text: 'opacity-80', chip: 'bg-surface text-ink' },
  { card: 'tint-blue', num: 'text-blue', text: 'text-muted', chip: 'bg-surface' },
  { card: 'tint-red', num: 'text-red', text: 'text-muted', chip: 'bg-surface' },
  { card: 'tint-good', num: 'text-good', text: 'text-muted', chip: 'bg-surface' },
]

export default function Home() {
  return (
    <>
      <Header current={0} />
      <main id="top">
        {/* 히어로: 글자 조립 */}
        <section className="gutter border-b border-line">
          <div className="max-w-6xl mx-auto py-12 sm:py-16 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 rounded-full tint-yellow px-3 py-1 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-red" /> For total beginners · 입문 · 초보
              </p>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-[1.1] mt-5 tracking-tight">
                Learn the Korean Alphabet <span className="text-blue">(Hangul)</span> for Beginners &amp; <span className="squiggle">Korean Life</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted">
                Hangul was designed to be learned fast. Start with 14 consonants and 10 vowels, then build up to words, sentences and everyday life in Korea.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={stepPath(STEPS[0])} className="rounded-full bg-red px-6 py-3 font-bold text-white">Start lesson 1</a>
                <a href="#path" className="rounded-full border-2 border-ink px-6 py-3 font-bold">See the four steps</a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
                <li>✓ No sign-up to start</li>
                <li>✓ Audio for every word</li>
                <li>✓ Romanization included</li>
              </ul>
            </div>
            <SyllableBuilder />
          </div>
        </section>

        {/* 학습 순서 */}
        <section id="path" className="gutter">
          <div className="max-w-6xl mx-auto py-16">
            <p className="eyebrow text-xs font-bold text-red">Your path</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">Four steps from zero</h2>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => {
                const st = PATH_STYLE[i]
                return (
                  <li key={s.n}>
                    <a href={stepPath(s)} className={`block h-full rounded-2xl p-5 ${st.card} transition-transform hover:-translate-y-1`}>
                      <div className="flex items-center justify-between">
                        <span className={`font-display font-extrabold text-3xl ${st.num}`}>{s.n}</span>
                        <span className={`chip ${st.chip}`}>{s.level}</span>
                      </div>
                      <h3 className="font-bold text-lg mt-6">{s.name}</h3>
                      <p className={`text-sm mt-1 ${st.text}`}>{s.blurb}</p>
                    </a>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="gutter">
          <div className="max-w-6xl mx-auto py-16">
            <div className="rounded-3xl bg-yellow text-onyellow p-8 sm:p-12 flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="font-hangul text-5xl sm:text-6xl" lang="ko">시작해 볼까요?</p>
                <p className="mt-2 font-bold">sijakhae bolkkayo? · Shall we start?</p>
              </div>
              <a href={stepPath(STEPS[0])} className="rounded-full px-7 py-3.5 font-bold text-lg" style={{ background: 'var(--on-yellow)', color: '#FFFDF8' }}>
                Start with ㄱ →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
