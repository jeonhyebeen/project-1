import StepLayout from '../components/StepLayout'
import { Section, PhraseGrid, Dialogue, Pattern, Signs, Callout, Ko } from '../components/Blocks'

export default function Words() {
  return (
    <StepLayout
      n={3}
      heroTint="tint-red"
      chips={['초보 Beginner', '3 lessons', '24 words']}
      h1={<>Everyday Korean: Order Coffee, Ride the Subway &amp; Pay at a Store</>}
      lede="Learn the words you actually need on a normal day in Seoul. Each lesson is a real situation with a short conversation, the key words and one pattern you can reuse everywhere."
      lessons={[
        { id: 'cafe', label: 'At a café' },
        { id: 'subway', label: 'On the subway' },
        { id: 'store', label: 'At the store' },
        { label: 'Numbers & prices' },
        { label: 'At a restaurant' },
      ]}
      quizTitle="Would you survive a day in Seoul?"
      quiz={[
        { word: '출구', ask: 'You need to leave the station. Which sign is this?', options: ['Exit', 'Entrance', 'Transfer', 'Restroom'], answer: 'Exit', explain: '출구 (chulgu) means exit.' },
        { word: '얼마예요?', ask: 'What are you asking?', options: ['Where is it?', 'How much is it?', 'Is it hot?', 'Can I pay by card?'], answer: 'How much is it?', explain: '얼마 means “how much”.' },
        { word: '포장', ask: 'The barista asks 드시고 가세요? You answer with this word. What does it mean?', options: ['For here', 'To go', 'Iced', 'Receipt'], answer: 'To go', explain: '포장 means takeout, to go.' },
        { word: '물 주세요', ask: 'What does this mean?', options: ['Water, please', 'Coffee, please', 'More, please', 'This one, please'], answer: 'Water, please', explain: '물 is water, and 주세요 means “please give me”.' },
        { word: '갈아타는 곳', ask: 'What will you find here?', options: ['The exit', 'A transfer to another line', 'The ticket machine', 'A restroom'], answer: 'A transfer to another line', explain: '갈아타다 means “to change trains”.' },
      ]}
    >
      <Section id="cafe" eyebrow="Lesson 1" title="Ordering at a café" ko="카페에서" audio
        intro="Most café menus in Korea are English loanwords written in Hangul, so you already know half the words.">
        <Dialogue title="Listen to the conversation" lines={[
          { who: 'Staff', ko: '어서 오세요.', ro: 'eoseo oseyo', en: 'Welcome.' },
          { who: 'You', ko: '아이스 아메리카노 하나 주세요.', ro: 'aiseu amerikano hana juseyo', en: 'One iced americano, please.', me: true },
          { who: 'Staff', ko: '드시고 가세요?', ro: 'deusigo gaseyo?', en: 'For here?' },
          { who: 'You', ko: '아니요, 포장이요.', ro: 'aniyo, pojang-iyo', en: 'No, to go.', me: true },
          { who: 'Staff', ko: '사천오백 원입니다.', ro: 'sacheon-obaek wonimnida', en: 'That’s 4,500 won.' },
        ]} />
        <Pattern formula="[thing] + 주세요 = “___, please”" examples={[
          ['물 주세요', 'mul juseyo', 'Water, please'],
          ['이거 주세요', 'igeo juseyo', 'This one, please'],
          ['영수증 주세요', 'yeongsujeung juseyo', 'Receipt, please'],
          ['하나 더 주세요', 'hana deo juseyo', 'One more, please'],
        ]} />
        <PhraseGrid cols="grid-cols-2 lg:grid-cols-4" items={[
          { ko: '따뜻한', ro: 'ttatteuthan', en: 'hot (drink)' },
          { ko: '아이스', ro: 'aiseu', en: 'iced' },
          { ko: '포장', ro: 'pojang', en: 'to go / takeout' },
          { ko: '매장', ro: 'maejang', en: 'for here (in store)' },
        ]} />
      </Section>

      <Section id="subway" eyebrow="Lesson 2" title="Riding the subway" ko="지하철" audio
        intro="Seoul’s subway signs are in Korean and English, but announcements start in Korean. Catch these words and you won’t miss your stop.">
        <Signs items={[
          { ko: '출구', ro: 'chulgu', en: 'Exit', color: 'yellow' },
          { ko: '입구', ro: 'ipgu', en: 'Entrance', color: 'green' },
          { ko: '갈아타는 곳', ro: 'garataneun got', en: 'Transfer', color: 'blue' },
          { ko: '화장실', ro: 'hwajangsil', en: 'Restroom', color: 'ink' },
        ]} />
        <PhraseGrid items={[
          { ko: '이번 역은 시청역입니다', ro: 'ibeon yeogeun sicheong-yeogimnida', en: 'This stop is City Hall', note: 'The announcement you hear before every station.' },
          { ko: '교통카드', ro: 'gyotong kadeu', en: 'Transit card', note: 'T-money cards work on subways, buses and taxis.' },
          { ko: '몇 번 출구예요?', ro: 'myeot beon chulguyeyo?', en: 'Which exit number?', note: 'Locals give directions by exit number.' },
          { ko: '내려요', ro: 'naeryeoyo', en: 'I’m getting off', note: 'Say it softly to get through a crowded train.', reg: 'Polite' },
        ]} />
      </Section>

      <Section id="store" eyebrow="Lesson 3" title="Paying at a store" ko="가게에서" audio
        intro="Convenience store staff usually ask two questions: do you need a bag, and do you want a receipt. Now you can answer both.">
        <PhraseGrid items={[
          { ko: '얼마예요?', ro: 'eolmayeyo?', en: 'How much is it?', reg: 'Polite' },
          { ko: '카드 돼요?', ro: 'kadeu dwaeyo?', en: 'Can I pay by card?', note: 'Almost always yes. Cards work everywhere.', reg: 'Polite' },
          { ko: '봉투 필요하세요?', ro: 'bongtu piryohaseyo?', en: 'Do you need a bag?', note: <>Bags cost extra. Answer <Ko className="font-hangul">네</Ko> (yes) or <Ko className="font-hangul">괜찮아요</Ko> (no thanks).</> },
          { ko: '영수증 드릴까요?', ro: 'yeongsujeung deurilkkayo?', en: 'Do you want the receipt?', note: <>Most people say <Ko className="font-hangul">버려 주세요</Ko> (beoryeo juseyo, “please throw it away”).</> },
        ]} />
        <Callout title="Yes and no" tint="tint-blue">
          <Ko className="font-hangul text-xl">네</Ko> <span className="text-muted">ne</span> = yes &nbsp;·&nbsp; <Ko className="font-hangul text-xl">아니요</Ko>{' '}
          <span className="text-muted">aniyo</span> = no. You will also hear <Ko className="font-hangul text-xl">예</Ko> <span className="text-muted">(ye)</span>, a more formal yes.
        </Callout>
      </Section>
    </StepLayout>
  )
}
