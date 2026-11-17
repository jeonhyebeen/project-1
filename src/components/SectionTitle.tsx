interface Props { eyebrow: string; title: string; id?: string }

export default function SectionTitle({ eyebrow, title, id }: Props) {
  return (
    <div>
      <p className="text-xs text-apple font-medium eyebrow">{eyebrow}</p>
      <h2 id={id} className="font-display text-3xl sm:text-4xl mt-2">{title}</h2>
    </div>
  )
}
