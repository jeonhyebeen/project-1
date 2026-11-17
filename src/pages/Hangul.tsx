import StepLayout from '../components/StepLayout'
import { Section, Ko, DataTable } from '../components/Blocks'
import { PlayButton } from '../speech'
import { CONSONANTS, VOWELS } from '../letters'

export default function Hangul() {
  return (
    <StepLayout
      n={1}
      heroTint="tint-yellow"
      chips={['입문 Starter', '3 lessons', '24 letters']}
      h1={<>Learn to Read Hangul: Vowels, Consonants &amp; Syllable Blocks</>}
      lede="Every Korean word is made of the same 24 basic letters. Learn the 10 vowels first, then the 14 consonants, and you can sound out signs, menus and song titles."
      lessons={[
        { id: 'why', label: 'Why it’s easy' },
        { id: 'vowels', label: 'Basic vowels' },
        { id: 'consonants', label: 'Basic consonants' },
        { label: 'Final consonants 받침' },
        { label: 'Double letters' },
      ]}
      quizTitle="Can you read these?"
      quiz={[
        { word: '커피', ask: 'How do you read this word?', options: ['keopi', 'kopi', 'geobi', 'keoppi'], answer: 'keopi', explain: '커피 means “coffee”.' },
        { word: '나비', ask: 'How do you read this word?', options: ['mabi', 'nabi', 'nobi', 'labi'], answer: 'nabi', explain: '나비 means “butterfly”.' },
        { word: '우유', ask: 'How do you read this word?', options: ['oyo', 'uyu', 'yuyu', 'eoyu'], answer: 'uyu', explain: '우유 means “milk”.' },
        { word: '라면', ask: 'How do you read this word?', options: ['ramyeon', 'ramyon', 'lamen', 'namyeon'], answer: 'ramyeon', explain: '라면 means “ramen”.' },
        { word: '하나', ask: 'How do you read this word?', options: ['gana', 'hano', 'hana', 'haeun'], answer: 'hana', explain: '하나 means “one”.' },
      ]}
    >
      <Section id="why" eyebrow="Before you start" title="Why Hangul is easy to learn"
        intro="King Sejong created Hangul in 1443 so everyone could read. The letters are not random: their shapes show how you make each sound.">
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="card p-5">
            <h3 className="font-bold">Consonants draw your mouth</h3>
            <ul className="mt-4 grid grid-cols-5 gap-2 text-center">
              {[['ㄱ', 'tongue back'], ['ㄴ', 'tongue tip'], ['ㅁ', 'closed lips'], ['ㅅ', 'teeth'], ['ㅇ', 'throat']].map(([ch, d]) => (
                <li key={ch} className="rounded-xl tint-blue p-2">
                  <p className="font-hangul text-3xl" lang="ko">{ch}</p>
                  <p className="text-[11px] text-muted leading-tight mt-1">{d}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="font-bold">Vowels come from three symbols</h3>
            <ul className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[['ㆍ', 'sky 天'], ['ㅡ', 'earth 地'], ['ㅣ', 'person 人']].map(([ch, d]) => (
                <li key={ch} className="rounded-xl tint-red p-2">
                  <p className="font-hangul text-3xl" lang="ko">{ch}</p>
                  <p className="text-xs text-muted">{d}</p>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted">
              Add a short stroke (the old “sky” dot) to ㅣ and you get <Ko className="font-hangul text-ink">ㅏ</Ko>. Add it to ㅡ and you get <Ko className="font-hangul text-ink">ㅗ</Ko>.
            </p>
          </div>
        </div>
      </Section>

      <Section id="vowels" eyebrow="Lesson 1" title="The 10 basic vowels" ko="모음" audio
        intro={<>A vowel can’t stand alone in writing. It always gets the silent consonant <Ko className="font-hangul text-ink">ㅇ</Ko> in front, so <Ko className="font-hangul text-ink">ㅏ</Ko> is written <Ko className="font-hangul text-ink">아</Ko>.</>}>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {VOWELS.map((v, i) => (
            <article key={v.ch} className="card p-4 flex items-center gap-4">
              <div className={`w-16 h-16 shrink-0 rounded-2xl grid place-items-center font-hangul text-4xl ${i % 2 ? 'tint-red' : 'tint-blue'}`} lang="ko">{v.ch}</div>
              <div className="min-w-0 flex-1">
                <p className="flex items-baseline gap-2"><span className="font-bold text-blue text-lg">{v.ro}</span><span className="text-sm text-muted">{v.hint}</span></p>
                <p className="mt-1 text-sm"><Ko className="font-hangul text-xl">{v.ex}</Ko> <span className="text-muted">{v.exRo} · {v.mean}</span></p>
              </div>
              <PlayButton text={v.written} />
            </article>
          ))}
        </div>
      </Section>

      <Section id="consonants" eyebrow="Lesson 2" title="The 14 basic consonants" ko="자음" audio
        intro="Each example is a word you probably already know. Many everyday Korean words come from English.">
        <DataTable
          headers={['Letter', 'Name', 'Sound', 'Example', <span className="sr-only">Listen</span>]}
          rows={CONSONANTS.map((c) => [
            <Ko className="font-hangul text-3xl font-normal">{c.ch}</Ko>,
            <><Ko>{c.name}</Ko><span className="block text-xs text-muted">{c.nameRo}</span></>,
            <span className="font-bold text-blue">{c.sound}</span>,
            <><Ko className="font-hangul text-xl">{c.ex}</Ko><span className="block text-xs text-muted">{c.exRo} · {c.mean}</span></>,
            <div className="flex justify-end"><PlayButton text={c.ex} tint="tint-blue" /></div>,
          ])}
        />
      </Section>
    </StepLayout>
  )
}
