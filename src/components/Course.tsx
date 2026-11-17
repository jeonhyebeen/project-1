import { course } from '../data/daegu'
import SectionTitle from './SectionTitle'

export default function Course() {
  return (
    <section id="course" aria-labelledby="course-title" className="gutter">
      <div className="max-w-6xl mx-auto py-16 sm:py-20">
        <SectionTitle id="course-title" eyebrow="One-day course" title="대구에서 보내는 하루" />
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {course.map((c) => (
            <li key={c.time} className="border-t-2 border-ink pt-4">
              <p className="font-mono text-sm text-apple tnum">{c.time}</p>
              <h3 className="font-bold text-lg mt-1">{c.title}</h3>
              <p className="text-sm text-muted mt-1">{c.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
