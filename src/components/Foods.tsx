import { foods } from '../data/daegu'
import SectionTitle from './SectionTitle'

export default function Foods() {
  return (
    <section id="food" aria-labelledby="food-title" className="bg-surface border-y border-line gutter">
      <div className="max-w-6xl mx-auto py-16 sm:py-20 grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div className="min-w-0">
          <SectionTitle id="food-title" eyebrow="Food" title="대구 10미(味)" />
          <p className="mt-4 text-muted max-w-sm">
            대구시가 꼽은 열 가지 향토 음식입니다. 막창 한 접시로 시작해 납작만두로 마무리해 보세요.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 border-t border-line min-w-0">
          {foods.map((f) => (
            <li key={f.name} className="flex justify-between gap-4 py-3 border-b border-line">
              <span className="font-bold">{f.name}</span>
              <span className="text-sm text-muted text-right">{f.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
