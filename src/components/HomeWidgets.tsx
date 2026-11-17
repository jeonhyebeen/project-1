import { useState } from 'react'
import { CONSONANTS, VOWELS, FINALS, compose } from '../letters'
import { say, useCanSpeak } from '../speech'

/** 히어로: 초성 + 중성 + 받침을 골라 글자 하나를 조립해 보는 블록 */
export function SyllableBuilder() {
  const [i, setI] = useState(13) // ㅎ
  const [v, setV] = useState(0) // ㅏ
  const [f, setF] = useState(2) // ㄴ  → 한
  const canSpeak = useCanSpeak()
  const I = CONSONANTS[i], V = VOWELS[v], F = FINALS[f]
  const syl = compose(I.idx, V.idx, F.idx)
  const roman = I.ro + V.ro + F.ro
  const noFinal = F.ch === ''

  const picker = (label: React.ReactNode, items: { key: string; text: string; aria: string }[], sel: number, set: (n: number) => void) => (
    <div>
      <p className="text-xs font-bold text-muted mb-1.5">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((it, idx) => (
          <button
            key={it.key}
            type="button"
            className={`jamo${it.text === 'None' ? ' small' : ''}`}
            aria-pressed={sel === idx}
            aria-label={it.aria}
            onClick={() => set(idx)}
          >
            {it.text}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-w-0 rounded-3xl border-2 border-ink bg-surface p-5 sm:p-6" style={{ boxShadow: '8px 8px 0 var(--yellow)' }}>
      <div className="flex items-center justify-between gap-3">
        <p className="font-bold">Build a syllable</p>
        <p className="text-xs text-muted">Tap the letters</p>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-5">
        <div className={`syl-block ${V.dir === 'v' ? 'vertical' : 'horizontal'}${noFinal ? ' nofinal' : ''}`} aria-hidden="true">
          <span className="slot slot-i">{I.ch}</span>
          <span className="slot slot-v">{V.ch}</span>
          {!noFinal && <span className="slot slot-f">{F.ch}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <span key={syl} className="text-6xl font-hangul leading-none pop" lang="ko" aria-live="polite">{syl}</span>
          <span className="text-lg font-bold text-blue">{roman}</span>
          {canSpeak && (
            <button type="button" onClick={() => say(syl)} className="mt-2 self-start rounded-full tint-blue px-3 py-1 text-sm font-bold">▶ Listen</button>
          )}
        </div>
      </div>
      <p className="mt-4 text-sm text-muted">
        {V.dir === 'v'
          ? <>Vertical vowels like {V.ch} go on the <b className="text-ink">right</b> of the first consonant.</>
          : <>Horizontal vowels like {V.ch} go <b className="text-ink">under</b> the first consonant.</>}
        {!noFinal && <> The final consonant (받침) sits at the <b className="text-ink">bottom</b>.</>}
      </p>
      <div className="mt-5 space-y-3">
        {picker(<>1 · First consonant <span className="font-normal">(초성)</span></>, CONSONANTS.map((c) => ({ key: c.ch, text: c.ch, aria: c.ch })), i, setI)}
        {picker(<>2 · Vowel <span className="font-normal">(중성)</span></>, VOWELS.map((c) => ({ key: c.ch, text: c.ch, aria: c.ch })), v, setV)}
        {picker(<>3 · Final consonant <span className="font-normal">(받침, optional)</span></>, FINALS.map((c) => ({ key: c.ch || 'none', text: c.ch || 'None', aria: c.ch || 'No final consonant' })), f, setF)}
      </div>
    </div>
  )
}

/** 글자표: 누르면 소리를 들려줍니다 */
export function LetterChart() {
  const canSpeak = useCanSpeak()
  const card = (key: string, ch: string, ro: string, sub: string, sayText: string) => (
    <button key={key} type="button" className="letter" aria-label={`${ch}, ${ro}`} onClick={() => say(sayText)}>
      <span className="block font-hangul text-3xl leading-tight" lang="ko">{ch}</span>
      <span className="block text-xs font-bold text-blue">{ro}</span>
      {sub && <span className="block text-[11px] text-muted">{sub}</span>}
    </button>
  )
  return (
    <>
      {canSpeak && <p className="mt-2 text-sm text-muted">Tap a letter to hear it.</p>}
      <h3 className="mt-8 font-bold">Consonants <span className="font-hangul font-normal text-muted" lang="ko">자음</span></h3>
      <div className="mt-3 grid grid-cols-4 sm:grid-cols-7 gap-2">
        {CONSONANTS.map((c) => card(c.ch, c.ch, c.sound, c.nameRo, c.name))}
      </div>
      <h3 className="mt-8 font-bold">Vowels <span className="font-hangul font-normal text-muted" lang="ko">모음</span></h3>
      <div className="mt-3 grid grid-cols-5 sm:grid-cols-10 gap-2">
        {VOWELS.map((v) => card(v.ch, v.ch, v.ro, '', v.written))}
      </div>
    </>
  )
}

const PLACES: Record<string, [string, string, string][]> = {
  'Café 카페': [['아이스 아메리카노', 'aiseu amerikano', 'Iced americano'], ['따뜻한 걸로 주세요', 'ttatteuthan geollo juseyo', 'A hot one, please'], ['포장이요', 'pojang-iyo', 'To go, please'], ['여기서 먹을게요', 'yeogiseo meogeulgeyo', 'For here'], ['영수증', 'yeongsujeung', 'Receipt']],
  'Store 편의점': [['얼마예요?', 'eolmayeyo?', 'How much is it?'], ['봉투 필요해요', 'bongtu piryohaeyo', 'I need a bag'], ['카드로 할게요', 'kadeuro halgeyo', 'I’ll pay by card'], ['현금', 'hyeongeum', 'Cash'], ['삼각김밥', 'samgak gimbap', 'Triangle kimbap']],
  'Subway 지하철': [['역', 'yeok', 'Station'], ['출구', 'chulgu', 'Exit'], ['환승', 'hwanseung', 'Transfer'], ['교통카드', 'gyotong kadeu', 'Transit card'], ['몇 호선이에요?', 'myeot hoseon-ieyo?', 'Which line is it?']],
  'Restaurant 식당': [['메뉴판 주세요', 'menyupan juseyo', 'Menu, please'], ['이거 주세요', 'igeo juseyo', 'This one, please'], ['물', 'mul', 'Water'], ['안 맵게 해 주세요', 'an maepge hae juseyo', 'Not spicy, please'], ['계산할게요', 'gyesanhalgeyo', 'I’d like to pay']],
}

/** 장소별 생활 단어 탭. children은 왼쪽 열(제목, 설명) */
export function PlaceTabs({ children }: { children: React.ReactNode }) {
  const names = Object.keys(PLACES)
  const [cur, setCur] = useState(0)
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
      <div className="min-w-0">
      {children}
      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Places">
        {names.map((n, idx) => (
          <button
            key={n}
            type="button"
            role="tab"
            id={`tab-${idx}`}
            aria-selected={idx === cur}
            aria-controls="word-list"
            className="rounded-full border-2 border-line bg-surface px-4 py-1.5 text-sm font-bold aria-selected:bg-ink aria-selected:text-bg aria-selected:border-ink"
            onClick={() => setCur(idx)}
          >
            {n}
          </button>
        ))}
      </div>
      </div>
      <ul id="word-list" role="tabpanel" aria-labelledby={`tab-${cur}`} className="min-w-0 rounded-2xl bg-surface border-2 border-ink divide-y divide-line">
        {PLACES[names[cur]].map(([ko, ro, en]) => (
          <li key={ko} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 py-4">
            <span className="min-w-0">
              <span className="block font-hangul text-2xl" lang="ko">{ko}</span>
              <span className="block text-sm font-bold text-blue">{ro}</span>
            </span>
            <span className="text-sm text-muted">{en}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
