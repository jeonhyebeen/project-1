import { STEPS, stepPath } from '../site'
import { Header, Footer } from '../components/Layout'
import { SyllableBuilder } from '../components/HomeWidgets'
import Sejong from '../components/Sejong'
import { PlayButton } from '../speech'

const PATH_STYLE = [
  { card: 'bg-yellow text-onyellow', num: '', text: 'opacity-80', chip: 'bg-surface text-ink' },
  { card: 'tint-blue', num: 'text-blue', text: 'text-muted', chip: 'bg-surface' },
  { card: 'tint-red', num: 'text-red', text: 'text-muted', chip: 'bg-surface' },
  { card: 'tint-good', num: 'text-good', text: 'text-muted', chip: 'bg-surface' },
]

/** 세종대왕 말풍선 */
function Bubble({ ko, ro, children, tail = 'left' }: { ko: string; ro: string; children: React.ReactNode; tail?: 'left' | 'top-then-left' }) {
  return (
    <div className="relative rounded-3xl border-2 border-ink bg-surface p-5 shadow-[6px_6px_0_var(--blue)]">
      <div className="flex items-center justify-between gap-3">
        <p className="font-hangul text-2xl sm:text-3xl" lang="ko">{ko}</p>
        <PlayButton text={ko} />
      </div>
      <p className="text-sm font-bold text-blue">{ro}</p>
      <p className="mt-2 text-muted">{children}</p>
      <span
        aria-hidden="true"
        className={`absolute w-5 h-5 bg-surface border-ink rotate-45 ${
          tail === 'left'
            ? 'left-[-11px] top-10 border-l-2 border-b-2'
            : 'left-1/2 -translate-x-1/2 top-[-11px] border-l-2 border-t-2 sm:translate-x-0 sm:left-[-11px] sm:top-10 sm:border-t-0 sm:border-b-2'
        }`}
      />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Header current={0} />
      <main id="top">
        {/* 히어로: 제목 + 세종대왕 */}
        <section className="gutter border-b border-line overflow-hidden">
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
                <a href="#try" className="rounded-full border-2 border-ink px-6 py-3 font-bold">Build a syllable</a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
                <li>✓ No sign-up to start</li>
                <li>✓ Audio for every word</li>
                <li>✓ Romanization included</li>
              </ul>
            </div>

            <div className="min-w-0 grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:items-center">
              <div className="relative mx-auto w-full max-w-[17rem]">
                <div className="absolute inset-x-2 bottom-2 top-10 rounded-full tint-yellow" aria-hidden="true" />
                <Sejong className="relative w-full h-auto" />
              </div>
              <Bubble ko="안녕하세요!" ro="annyeonghaseyo · Hello!" tail="top-then-left">
                I’m <b className="text-ink">King Sejong</b>. I created Hangul in 1443 so everyone could read. Let me show you how easy it is.
              </Bubble>
            </div>
          </div>
        </section>

        {/* 학습 순서 */}
        <section id="path" className="gutter tint-yellow border-b border-line">
          <div className="max-w-6xl mx-auto py-16">
            <p className="eyebrow text-xs font-bold text-red">Your path</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">Four steps from zero</h2>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => {
                const st = PATH_STYLE[i]
                return (
                  <li key={s.n}>
                    <a href={stepPath(s)} className={`block h-full rounded-2xl p-5 border-2 border-transparent hover:border-ink ${st.card === 'bg-yellow text-onyellow' ? 'bg-surface' : st.card} transition-transform hover:-translate-y-1`}>
                      <div className="flex items-center justify-between">
                        <span className={`font-display font-extrabold text-3xl ${st.num}`}>{s.n}</span>
                        <span className={`chip ${st.chip}`}>{s.level}</span>
                      </div>
                      <h3 className="font-bold text-lg mt-6">{s.name} <span className="font-hangul font-normal text-muted" lang="ko">{s.ko}</span></h3>
                      <p className="text-sm mt-1 text-muted">{s.blurb}</p>
                    </a>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        {/* 글자 조립 체험 */}
        <section id="try" className="gutter">
          <div className="max-w-6xl mx-auto py-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="min-w-0">
              <p className="eyebrow text-xs font-bold text-red">Try it now</p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">Build your first syllable</h2>
              <p className="mt-3 text-muted max-w-lg">
                Korean letters stack into blocks. Pick a consonant, a vowel and an optional final consonant, and watch them become one syllable.
              </p>
              <div className="mt-8 flex items-end gap-4">
                <Sejong className="w-24 h-auto shrink-0" title="King Sejong" />
                <div className="mb-6 flex-1">
                  <Bubble ko="한" ro="han · the han in 한글" tail="left">
                    ㅎ + ㅏ + ㄴ = 한. Now try making your own!
                  </Bubble>
                </div>
              </div>
            </div>
            <SyllableBuilder />
          </div>
        </section>

        {/* CTA */}
        <section className="gutter">
          <div className="max-w-6xl mx-auto pb-16">
            <div className="rounded-3xl bg-yellow text-onyellow p-8 sm:p-12 flex flex-wrap items-center justify-between gap-6 overflow-hidden relative">
              <div className="flex items-center gap-6">
                <Sejong wave className="hidden sm:block w-32 h-auto shrink-0 -mb-16" title="King Sejong waving" />
                <div>
                  <p className="font-hangul text-5xl sm:text-6xl" lang="ko">시작해 볼까요?</p>
                  <p className="mt-2 font-bold">sijakhae bolkkayo? · Shall we start?</p>
                </div>
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
