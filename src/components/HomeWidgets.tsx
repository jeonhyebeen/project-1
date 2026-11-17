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
