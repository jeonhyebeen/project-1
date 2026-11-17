import { stats } from '../data/daegu'
import HeroIllustrations from './HeroIllustrations'

export default function Hero() {
  return (
    <section className="border-b border-line gutter">
      <div className="max-w-6xl mx-auto py-14 sm:py-20 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div className="min-w-0">
          <p className="font-mono text-xs text-muted eyebrow tnum">35.87°N · 128.60°E · 대구광역시</p>
          <h1 className="font-display text-5xl sm:text-6xl leading-tight mt-4 max-w-3xl">
            음식도, 힐링도, 즐길거리도
            <br />
            모두 있는 도시 <span className="text-apple">대구</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted">
            막창과 납작만두로 배를 채우고, 수성못과 팔공산에서 쉬어 가고, 근대골목과 서문시장 야시장에서 밤까지 즐겨 보세요.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#places" className="inline-flex items-center rounded-full bg-apple text-bg px-5 py-2.5 text-sm font-medium">
              명소 둘러보기
            </a>
            <a href="#course" className="inline-flex items-center rounded-full border border-ink text-ink px-5 py-2.5 text-sm font-medium">
              하루 코스 보기
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-6 max-w-3xl tnum">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs text-muted">{s.label}</dt>
                <dd className="font-display text-2xl mt-1">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <HeroIllustrations />
      </div>
    </section>
  )
}
