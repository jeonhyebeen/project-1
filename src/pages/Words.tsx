import StepLayout from '../components/StepLayout'
import { Section, PhraseGrid, Signs, Callout, Ko } from '../components/Blocks'

export default function Words() {
  return (
    <StepLayout
      n={2}
      heroTint="tint-blue"
      chips={['입문 Starter', '4 lessons', '28 words']}
      h1={<>Everyday Korean Words: Café, Subway, Store &amp; Songs</>}
      lede="Now that you can read Hangul, learn the words you will see and hear on a normal day in Korea. Many of them come from English, so you already know more than you think."
      lessons={[
        { id: 'cafe', label: 'At a café' },
        { id: 'subway', label: 'On the subway' },
        { id: 'store', label: 'At the store' },
        { id: 'song-words', label: 'Words in songs' },
        { label: 'Numbers & prices' },
        { label: 'Food & restaurants' },
      ]}
      quizTitle="Do you know these words?"
      quiz={[
        { word: '출구', ask: 'You need to leave the station. Which sign is this?', options: ['Exit', 'Entrance', 'Transfer', 'Restroom'], answer: 'Exit', explain: '출구 (chulgu) means exit.' },
        { word: '포장', ask: 'The barista asks if you want it for here. You answer with this word. What does it mean?', options: ['For here', 'To go', 'Iced', 'Receipt'], answer: 'To go', explain: '포장 means takeout, to go.' },
        { word: '현금', ask: 'What does this mean?', options: ['Card', 'Cash', 'Receipt', 'Bag'], answer: 'Cash', explain: '현금 (hyeongeum) is cash.' },
        { word: '사랑', ask: 'You hear this word in almost every love song. What does it mean?', options: ['Dream', 'Sky', 'Love', 'Heart'], answer: 'Love', explain: '사랑 (sarang) means love.' },
        { word: '영수증', ask: 'What does this mean?', options: ['Receipt', 'Menu', 'Change', 'Price'], answer: 'Receipt', explain: '영수증 (yeongsujeung) is a receipt.' },
      ]}
    >
      <Section id="cafe" eyebrow="Lesson 1" title="At a café" ko="카페" audio
        intro="Café menus in Korea are mostly English words written in Hangul. Read them slowly and you will recognize them.">
        <PhraseGrid cols="grid-cols-2 lg:grid-cols-3" items={[
          { ko: '아메리카노', ro: 'amerikano', en: 'Americano' },
          { ko: '아이스', ro: 'aiseu', en: 'iced' },
          { ko: '따뜻한', ro: 'ttatteuthan', en: 'hot (drink)' },
          { ko: '포장', ro: 'pojang', en: 'to go / takeout' },
          { ko: '매장', ro: 'maejang', en: 'for here (in store)' },
          { ko: '물', ro: 'mul', en: 'water' },
        ]} />
        <Callout title="Loanwords: English in Hangul" tint="tint-blue">
          Korean has no “f” or “z” sound, so English words change a little: coffee becomes <Ko>커피</Ko> (keopi) and pizza becomes <Ko>피자</Ko> (pija).
          Say them out loud and you will hear the English word.
        </Callout>
      </Section>

      <Section id="subway" eyebrow="Lesson 2" title="On the subway" ko="지하철" audio
        intro="Seoul’s subway signs are in Korean and English, but announcements start in Korean. Catch these words and you won’t miss your stop.">
        <Signs items={[
          { ko: '출구', ro: 'chulgu', en: 'Exit', color: 'yellow' },
          { ko: '입구', ro: 'ipgu', en: 'Entrance', color: 'green' },
          { ko: '갈아타는 곳', ro: 'garataneun got', en: 'Transfer', color: 'blue' },
          { ko: '화장실', ro: 'hwajangsil', en: 'Restroom', color: 'ink' },
        ]} />
        <PhraseGrid cols="grid-cols-2 lg:grid-cols-4" items={[
          { ko: '지하철', ro: 'jihacheol', en: 'subway' },
          { ko: '역', ro: 'yeok', en: 'station' },
          { ko: '교통카드', ro: 'gyotong kadeu', en: 'transit card', note: 'T-money works on subways, buses and taxis.' },
          { ko: '호선', ro: 'hoseon', en: 'line (number)', note: '2호선 = Line 2' },
        ]} />
      </Section>

      <Section id="store" eyebrow="Lesson 3" title="At the store" ko="가게" audio
        intro="Convenience stores are everywhere in Korea. These words cover almost every visit.">
        <PhraseGrid cols="grid-cols-2 lg:grid-cols-3" items={[
          { ko: '편의점', ro: 'pyeonuijeom', en: 'convenience store' },
          { ko: '계산', ro: 'gyesan', en: 'checkout, paying' },
          { ko: '카드', ro: 'kadeu', en: 'card' },
          { ko: '현금', ro: 'hyeongeum', en: 'cash' },
          { ko: '봉투', ro: 'bongtu', en: 'bag', note: 'Bags cost extra, so staff will ask.' },
          { ko: '영수증', ro: 'yeongsujeung', en: 'receipt' },
        ]} />
      </Section>

      <Section id="song-words" eyebrow="Lesson 4" title="Words in songs" ko="노래 단어" audio
        intro="K-pop songs reuse a small set of words again and again. Learn these and you will start catching them in your favorite songs.">
        <PhraseGrid cols="grid-cols-2 lg:grid-cols-4" items={[
          { ko: '사랑', ro: 'sarang', en: 'love' },
          { ko: '너', ro: 'neo', en: 'you' },
          { ko: '우리', ro: 'uri', en: 'we, us, our' },
          { ko: '꿈', ro: 'kkum', en: 'dream' },
          { ko: '마음', ro: 'maeum', en: 'heart, mind' },
          { ko: '하늘', ro: 'haneul', en: 'sky' },
          { ko: '영원히', ro: 'yeongwonhi', en: 'forever' },
          { ko: '오늘 밤', ro: 'oneul bam', en: 'tonight' },
        ]} />
        <Callout title="Next: put words together">
          In step 3 you will join these words into real sentences, like <Ko>물 주세요</Ko> (“water, please”) and a full song line.
        </Callout>
      </Section>
    </StepLayout>
  )
}
