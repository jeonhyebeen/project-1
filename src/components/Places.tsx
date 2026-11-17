import { places, type Tint } from '../data/daegu'
import SectionTitle from './SectionTitle'

const tintVar: Record<Tint, string> = { pine: 'var(--pine)', apple: 'var(--apple)', ink: 'var(--ink)' }

export default function Places() {
  return (
    <section id="places" aria-labelledby="places-title" className="gutter">
      <div className="max-w-6xl mx-auto py-16 sm:py-20">
        <SectionTitle id="places-title" eyebrow="Places" title="꼭 가봐야 할 곳" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((p) => (
            <article key={p.name} className="group">
              {/* 사진이 준비되면 이 div 를 <img> 로 바꾸세요. */}
              <div
                className="photo aspect-[4/3] rounded-md flex items-end p-3"
                style={{ ['--tint' as string]: tintVar[p.tint] }}
              >
                <span className="font-mono text-[11px] text-muted">사진 영역</span>
              </div>
              <p className="mt-4 text-xs text-muted">{p.district} · {p.category}</p>
              <h3 className="text-lg font-bold mt-1 group-hover:text-apple">{p.name}</h3>
              <p className="text-sm text-muted mt-1">{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
