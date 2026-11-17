import { STEPS, stepPath } from '../site'
import { Header, Footer } from '../components/Layout'
import { SyllableBuilder, LetterChart, PlaceTabs } from '../components/HomeWidgets'

const PATH_STYLE = [
  { card: 'bg-yellow text-onyellow', num: '', text: 'opacity-80', chip: 'bg-surface text-ink' },
  { card: 'tint-blue', num: 'text-blue', text: 'text-muted', chip: 'bg-surface' },
  { card: 'tint-red', num: 'text-red', text: 'text-muted', chip: 'bg-surface' },
  { card: 'tint-good', num: 'text-good', text: 'text-muted', chip: 'bg-surface' },
]

function StepLink({ n, label }: { n: number; label: string }) {
  return (
    <a href={stepPath(STEPS[n - 1])} className="mt-8 inline-flex rounded-full border-2 border-ink px-5 py-2 font-bold hover:bg-ink hover:text-bg">
      {label} →
    </a>
  )
}

function Eyebrow({ n }: { n: number }) {
  const s = STEPS[n - 1]
  return <p className="eyebrow text-xs font-bold text-red">Step {n} · {s.short}</p>
}

const GREETINGS: [string, string, 'Polite' | 'Casual', React.ReactNode][] = [
  ['안녕하세요', 'annyeonghaseyo', 'Polite', <><b>Hello</b>. Works any time of day, with anyone.</>],
  ['감사합니다', 'gamsahamnida', 'Polite', <><b>Thank you</b>. Use with shop staff, teachers, strangers.</>],
  ['고마워', 'gomawo', 'Casual', <><b>Thanks</b>. Only with friends or younger people.</>],
  ['죄송합니다', 'joesonghamnida', 'Polite', <><b>I’m sorry</b>. A formal apology.</>],
  ['안녕히 가세요', 'annyeonghi gaseyo', 'Polite', <><b>Goodbye</b>, said to the person who is <b>leaving</b>.</>],
  ['안녕히 계세요', 'annyeonghi gyeseyo', 'Polite', <><b>Goodbye</b>, said when <b>you</b> leave and they stay.</>],
]

const KPOP_WORDS: [string, string, string, string, string][] = [
  ['사랑해', 'saranghae', 'I love you', 'bg-yellow text-onyellow', ''],
  ['보고 싶어', 'bogo sipeo', 'I miss you', 'tint-red', 'text-red'],
  ['같이', 'gachi', 'together', 'tint-blue', 'text-blue'],
  ['꿈', 'kkum', 'dream', 'tint-yellow', ''],
  ['오늘 밤', 'oneul bam', 'tonight', 'tint-blue', 'text-blue'],
  ['심장', 'simjang', 'heart', 'tint-yellow', ''],
  ['화이팅', 'hwaiting', 'You can do it!', 'bg-red text-white', ''],
  ['대박', 'daebak', 'Awesome!', 'tint-red', 'text-red'],
]

const CULTURE: [string, string, string][] = [
  ['존댓말', 'Honorifics', 'Speak politely to elders and strangers. Switch to casual only when invited.'],
  ['밥 먹었어요?', '“Did you eat?”', 'A friendly way to ask how someone is doing, not a lunch invite.'],
  ['설날 · 추석', 'The two big holidays', 'Lunar New Year and the autumn harvest festival. Families gather and share food.'],
  ['두 손으로', 'Use two hands', 'Give and receive things, and pour drinks for elders, with both hands.'],
  ['빨리빨리', '“Hurry, hurry”', 'Fast delivery, fast internet, fast everything. A word you’ll hear daily.'],
  ['신발 벗기', 'Shoes off', 'Take your shoes off at home and in many traditional restaurants.'],
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
                <a href="#letters" className="rounded-full border-2 border-ink px-6 py-3 font-bold">See all letters</a>
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

        {/* 글자표 */}
        <section id="letters" className="gutter tint-yellow border-y border-line">
          <div className="max-w-6xl mx-auto py-16">
            <Eyebrow n={1} />
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">24 letters. That’s the whole alphabet.</h2>
            <LetterChart />
            <StepLink n={1} label="Learn every letter" />
          </div>
        </section>

        {/* 생활 단어 */}
        <section id="words" className="gutter">
          <div className="max-w-6xl mx-auto py-16">
            <PlaceTabs>
              <Eyebrow n={2} />
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">Words for real places</h2>
              <p className="mt-3 text-muted">Learn the words you actually need when you walk into a café, a convenience store, a subway station or a restaurant in Korea.</p>
            </PlaceTabs>
            <StepLink n={2} label="Learn everyday words" />
          </div>
        </section>

        {/* 인사말 */}
        <section id="greetings" className="gutter tint-blue border-y border-line">
          <div className="max-w-6xl mx-auto py-16">
            <Eyebrow n={3} />
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">Say it like a local</h2>
            <p className="mt-3 text-muted max-w-2xl">
              Korean changes with who you talk to. Each phrase is marked <span className="chip tint-blue text-blue">Polite</span> for strangers and elders, or{' '}
              <span className="chip tint-red text-red">Casual</span> for close friends.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GREETINGS.map(([ko, ro, reg, en]) => (
                <article key={ko} className="rounded-2xl border-2 border-line bg-surface p-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-hangul text-3xl" lang="ko">{ko}</p>
                    <span className={`chip ${reg === 'Polite' ? 'tint-blue text-blue' : 'tint-red text-red'}`}>{reg}</span>
                  </div>
                  <p className="text-blue font-bold mt-1">{ro}</p>
                  <p className="mt-2">{en}</p>
                </article>
              ))}
            </div>
            <StepLink n={3} label="Learn basic sentences" />
          </div>
        </section>

        {/* K-pop */}
        <section id="kpop" className="gutter">
          <div className="max-w-6xl mx-auto py-16">
            <p className="eyebrow text-xs font-bold text-red">For K-pop fans · Steps 2–4</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">Understand the songs you love</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="min-w-0">
                <h3 className="font-bold">Words you’ll hear again and again</h3>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {KPOP_WORDS.map(([ko, ro, en, card, roCls]) => (
                    <div key={ko} className={`rounded-xl p-3 ${card}`}>
                      <p className="font-hangul text-2xl" lang="ko">{ko}</p>
                      <p className={`text-xs font-bold ${roCls}`}>{ro}</p>
                      <p className="text-sm">{en}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="min-w-0 rounded-3xl border-2 border-ink bg-surface p-5 sm:p-6" style={{ boxShadow: '8px 8px 0 var(--blue)' }}>
                <div className="flex items-center justify-between gap-3">
                  <p className="font-bold">Song lesson preview</p>
                  <span className="chip tint-red text-red">Example line</span>
                </div>
                <p className="mt-4 font-hangul text-3xl sm:text-4xl" lang="ko">우리 같이 걸어요</p>
                <p className="text-blue font-bold">uri gachi georeoyo</p>
                <p className="mt-1 text-muted">“Let’s walk together.”</p>
                <ul className="mt-5 grid grid-cols-3 gap-2 text-center">
                  <li className="rounded-xl tint-yellow p-2"><p className="font-hangul text-xl" lang="ko">우리</p><p className="text-xs text-muted">we</p></li>
                  <li className="rounded-xl tint-blue p-2"><p className="font-hangul text-xl" lang="ko">같이</p><p className="text-xs text-muted">together</p></li>
                  <li className="rounded-xl tint-red p-2"><p className="font-hangul text-xl" lang="ko">걸어요</p><p className="text-xs text-muted">walk (polite)</p></li>
                </ul>
                <p className="mt-5 text-sm">
                  <b>Grammar tip:</b> <span className="font-hangul" lang="ko">-요</span> at the end makes a sentence polite. Songs often drop it to sound closer:{' '}
                  <span className="font-hangul" lang="ko">걸어</span>.
                </p>
              </div>
            </div>
            <StepLink n={3} label="Read a song line word by word" />
          </div>
        </section>

        {/* 문화 */}
        <section id="culture" className="gutter tint-red border-y border-line">
          <div className="max-w-6xl mx-auto py-16">
            <Eyebrow n={4} />
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">Why Koreans say it that way</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CULTURE.map(([ko, title, body]) => (
                <article key={ko} className="rounded-2xl bg-surface p-5 border-2 border-line">
                  <p className="font-hangul text-2xl text-blue" lang="ko">{ko}</p>
                  <h3 className="font-bold mt-1">{title}</h3>
                  <p className="text-sm text-muted mt-1">{body}</p>
                </article>
              ))}
            </div>
            <StepLink n={4} label="Explore K-Life" />
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
