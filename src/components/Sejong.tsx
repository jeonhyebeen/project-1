// 세종대왕 캐릭터 (직접 그린 SVG). 익선관, 붉은 곤룡포, 가슴의 금색 용 무늬(보), 한글 두루마리.
const INK = '#16171D'
const SKIN = '#F7D2B0'
const ROBE = '#D8392C'
const ROBE_DARK = '#B32A20'
const GOLD = '#FFC21A'

type Props = { className?: string; wave?: boolean; title?: string }

export default function Sejong({ className = '', wave = false, title = 'Cartoon of King Sejong holding a scroll of Hangul letters' }: Props) {
  return (
    <svg viewBox="0 0 240 300" className={className} role="img" aria-label={title}>
      <g stroke={INK} strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round">
        {/* 익선관 뒤 날개 */}
        <ellipse cx="84" cy="50" rx="15" ry="24" transform="rotate(-24 84 50)" fill={INK} />
        <ellipse cx="156" cy="50" rx="15" ry="24" transform="rotate(24 156 50)" fill={INK} />

        {/* 몸통: 곤룡포 */}
        <path d="M58 206 Q58 172 92 162 L148 162 Q182 172 182 206 L190 292 Q120 302 50 292 Z" fill={ROBE} />
        {/* 둥근 깃(단령) */}
        <path d="M92 162 Q120 190 148 162" fill="#FFF8EC" />
        <path d="M98 163 Q120 182 142 163" fill={SKIN} strokeWidth="2.5" />
        {/* 가슴 금색 용 무늬 */}
        <circle cx="120" cy="206" r="17" fill={GOLD} />
        <path d="M111 208 Q114 198 122 200 Q130 202 127 210 Q124 216 118 212" fill="none" strokeWidth="2.5" />
        {/* 옥대 */}
        <rect x="62" y="246" width="116" height="11" rx="5.5" fill="#2A2B33" />
        <g fill={GOLD} strokeWidth="2">
          <circle cx="76" cy="251.5" r="3" />
          <circle cx="164" cy="251.5" r="3" />
        </g>

        {/* 소매와 손 */}
        <path d="M64 180 Q44 218 60 254 Q78 266 98 252 L101 234 Q86 214 86 186 Z" fill={ROBE_DARK} />
        {wave ? (
          <>
            <path d="M176 180 Q204 160 206 118 Q194 106 182 116 Q176 146 154 186 Z" fill={ROBE_DARK} />
            <circle cx="196" cy="108" r="10" fill={SKIN} />
          </>
        ) : (
          <path d="M176 180 Q196 218 180 254 Q162 266 142 252 L139 234 Q154 214 154 186 Z" fill={ROBE_DARK} />
        )}

        {/* 한글 두루마리 */}
        <rect x="90" y="228" width={wave ? 58 : 60} height="32" rx="3" fill="#FFF6DD" />
        <rect x="82" y="225" width="10" height="38" rx="5" fill="#E7CF95" />
        {!wave && <rect x="148" y="225" width="10" height="38" rx="5" fill="#E7CF95" />}
        <circle cx="88" cy="252" r="8" fill={SKIN} />
        {!wave && <circle cx="152" cy="252" r="8" fill={SKIN} />}
      </g>
      <text x={wave ? 121 : 120} y="249" textAnchor="middle" fontSize="14" fontWeight="800" fill={INK} fontFamily="Pretendard Variable, Pretendard, sans-serif">ㄱㄴㄷ</text>

      <g stroke={INK} strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round">
        {/* 얼굴 */}
        <circle cx="70" cy="120" r="9" fill={SKIN} />
        <circle cx="170" cy="120" r="9" fill={SKIN} />
        <circle cx="120" cy="114" r="51" fill={SKIN} />

        {/* 익선관 */}
        <path d="M74 96 Q78 44 120 42 Q162 44 166 96 Z" fill={INK} />
        <path d="M68 96 Q120 78 172 96 L172 108 Q120 92 68 108 Z" fill="#2A2B33" />
        <path d="M98 60 Q120 51 142 60" fill="none" stroke="#4A4C58" strokeWidth="3" />

        {/* 눈썹, 웃는 눈 */}
        <path d="M95 112 L110 109" strokeWidth="4.5" />
        <path d="M130 109 L145 112" strokeWidth="4.5" />
        <path d="M97 124 Q103 117 109 124" fill="none" />
        <path d="M131 124 Q137 117 143 124" fill="none" />
        {/* 볼 */}
        <ellipse cx="94" cy="137" rx="8" ry="5" fill="#F4A19A" stroke="none" opacity=".75" />
        <ellipse cx="146" cy="137" rx="8" ry="5" fill="#F4A19A" stroke="none" opacity=".75" />
        {/* 코 */}
        <path d="M117 131 Q120 135 123 131" fill="none" strokeWidth="3" />
        {/* 콧수염, 입, 턱수염 */}
        <path d="M120 141 Q110 137 99 146 Q110 145 120 145 Q130 145 141 146 Q130 137 120 141 Z" fill={INK} strokeWidth="2" />
        <path d="M113 151 Q120 156 127 151" fill="none" strokeWidth="3" />
        <path d="M112 160 Q120 180 128 160 Q120 164 112 160 Z" fill={INK} strokeWidth="2" />
      </g>
    </svg>
  )
}
