// 히어로 오른쪽의 그림 카드 6개. 색은 index.css 의 .ill 클래스가 테마에 맞춰 정합니다.

function Makchang() {
  return (
    <svg className="ill" viewBox="0 0 120 120" role="img" aria-label="불판 위 막창">
      <path d="M48 24c-4-4 4-8 0-12M60 24c-4-4 4-8 0-12M72 24c-4-4 4-8 0-12" />
      <circle className="fs" cx="60" cy="68" r="40" />
      <path d="M28 56h64M22 68h76M28 80h64" />
      <path className="sa thick" d="M34 58q7-8 14 0t14 0" />
      <path className="sa thick" d="M58 76q7-8 14 0t14 0" />
      <path className="sa thick" d="M36 84q6-6 12 0" />
    </svg>
  )
}

function Mandu() {
  return (
    <svg className="ill" viewBox="0 0 120 120" role="img" aria-label="접시에 담긴 납작만두">
      <ellipse className="fs" cx="60" cy="76" rx="48" ry="18" />
      <path className="fa" d="M22 74Q39 48 56 74Z" />
      <path className="fa" d="M48 70Q66 42 84 70Z" />
      <path className="fa" d="M66 80Q83 54 100 80Z" />
      <path d="M32 66l3 3M40 61l2 4M58 61l3 3M66 55l2 4M76 72l3 3M84 67l2 4" />
      <path className="sp" d="M42 70l5-3M70 64l5-3M86 76l5-3" />
    </svg>
  )
}

function Tteokbokki() {
  return (
    <svg className="ill" viewBox="0 0 120 120" role="img" aria-label="그릇에 담긴 떡볶이">
      <path d="M50 30c-4-4 4-8 0-12M66 30c-4-4 4-8 0-12" />
      <path className="fs" d="M16 58h88a44 36 0 0 1-88 0Z" />
      <ellipse className="fa" cx="60" cy="58" rx="44" ry="9" />
      <rect className="fs" x="30" y="46" width="28" height="10" rx="5" transform="rotate(-14 44 51)" />
      <rect className="fs" x="56" y="44" width="28" height="10" rx="5" transform="rotate(12 70 49)" />
      <rect className="fs" x="44" y="52" width="26" height="10" rx="5" transform="rotate(4 57 57)" />
      <path className="fs" d="M76 58l10-14 8 14Z" />
      <path d="M48 96h24" />
    </svg>
  )
}

function Jungangro() {
  return (
    <svg className="ill" viewBox="0 0 120 120" role="img" aria-label="중앙로 거리와 지하철역 표지">
      <path className="fp" d="M12 96V42h22v54Z" />
      <path className="fs" d="M34 96V58h14v38Z" />
      <path className="fp" d="M86 96V36h22v60Z" />
      <path className="fs" d="M72 96V54h14v42Z" />
      <path d="M18 52h10M18 62h10M18 72h10M18 82h10M92 46h10M92 56h10M92 66h10M92 76h10" />
      <path d="M60 40v56" />
      <circle className="fA" cx="60" cy="30" r="11" />
      <path className="ss" d="M55 35v-10l5 6 5-6v10" />
      <path d="M4 96h112M46 116l10-20M74 116l-10-20" />
    </svg>
  )
}

function KimKwangseokStreet() {
  return (
    <svg className="ill" viewBox="0 0 120 120" role="img" aria-label="벽화 앞 기타와 음표">
      <rect className="fp" x="8" y="14" width="104" height="92" rx="6" />
      <path className="neck" d="M64 54L90 24" />
      <path className="neck" d="M86 22l8 6" />
      <circle className="halo" cx="50" cy="78" r="17" />
      <circle className="halo" cx="62" cy="60" r="11" />
      <circle className="fs nostroke" cx="50" cy="78" r="17" />
      <circle className="fs nostroke" cx="62" cy="60" r="11" />
      <circle className="fk" cx="54" cy="72" r="4.5" />
      <path d="M42 86l11-7" />
      <path className="sa" d="M86 70V54l12-4v16" />
      <circle className="fA nostroke" cx="83" cy="70" r="4" />
      <circle className="fA nostroke" cx="95" cy="66" r="4" />
    </svg>
  )
}

function Palgongsan() {
  return (
    <svg className="ill" viewBox="0 0 120 120" role="img" aria-label="팔공산 봉우리와 단풍">
      <circle className="fa" cx="90" cy="30" r="10" />
      <path className="fp" d="M6 96L40 42l18 22 18-28 38 60Z" />
      <path className="fP" d="M6 96l26-26 16 14 22-22 44 34Z" />
      <path className="fA nostroke" d="M22 30l5-8 5 8-5 8Z" />
      <path className="fA nostroke" d="M34 44l4-6 4 6-4 6Z" />
      <path d="M4 96h112" />
    </svg>
  )
}

const tiles = [
  { label: '막창', Art: Makchang },
  { label: '납작만두', Art: Mandu },
  { label: '떡볶이', Art: Tteokbokki },
  { label: '중앙로', Art: Jungangro },
  { label: '김광석거리', Art: KimKwangseokStreet },
  { label: '팔공산', Art: Palgongsan },
]

export default function HeroIllustrations() {
  return (
    <div className="grid grid-cols-3 gap-3 min-w-0">
      {tiles.map(({ label, Art }) => (
        <figure key={label} className="tile">
          <Art />
          <figcaption>{label}</figcaption>
        </figure>
      ))}
    </div>
  )
}
