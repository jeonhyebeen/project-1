import StepLayout from '../components/StepLayout'
import { Section, PhraseGrid, DataTable, KoCell, Callout, SayCard, Ko } from '../components/Blocks'

export default function Greetings() {
  return (
    <StepLayout
      n={2}
      heroTint="tint-blue"
      chips={['입문 Starter', '3 lessons', '18 phrases']}
      h1={<>Korean Greetings: Hello, Thank You, Sorry &amp; Goodbye</>}
      lede="Five short phrases cover most of your first day in Korea. Learn which one fits a stranger, a shop owner or a friend, and you will sound polite from the start."
      lessons={[
        { id: 'hello', label: 'Hello & goodbye' },
        { id: 'thanks', label: 'Thank you & sorry' },
        { id: 'levels', label: 'Polite or casual?' },
        { label: 'Introduce yourself' },
        { label: 'On the phone' },
      ]}
      quizTitle="What do these mean?"
      quiz={[
        { word: '감사합니다', ask: 'What does this mean?', options: ['Hello', 'Thank you', 'Excuse me', 'Goodbye'], answer: 'Thank you', explain: '감사합니다 is the formal “thank you”.' },
        { word: '안녕히 계세요', ask: 'You are walking out of a café. Who do you say this to?', options: ['The staff who stay', 'A friend who leaves with you', 'Nobody, it means hello', 'Only your teacher'], answer: 'The staff who stay', explain: '계세요 means “stay”, so you say it to the people staying behind.' },
        { word: '괜찮아요', ask: 'Someone says 미안해요 to you. What does this reply mean?', options: ['Me too', 'It’s okay', 'Thank you', 'See you again'], answer: 'It’s okay', explain: '괜찮아요 means “it’s okay” or “no problem”.' },
        { word: '미안해', ask: 'Who can you say this to?', options: ['Your boss', 'A shop owner', 'A close friend', 'A stranger on the bus'], answer: 'A close friend', explain: 'It has no 요, so it is casual speech for close friends.' },
        { word: '반가워요', ask: 'What does this mean?', options: ['Nice to meet you', 'Excuse me', 'I’m sorry', 'Good night'], answer: 'Nice to meet you', explain: '반가워요 is what you say when meeting someone new.' },
      ]}
    >
      <Section id="hello" eyebrow="Lesson 1" title="Hello & goodbye" ko="만남과 헤어짐" audio
        intro="Korean has one “hello” for any time of day. Goodbye is trickier: it changes depending on who walks away.">
        <PhraseGrid items={[
          { ko: '안녕하세요', ro: 'annyeonghaseyo', en: 'Hello', note: 'Works morning, noon and night. Add a small nod.', reg: 'Polite' },
          { ko: '안녕', ro: 'annyeong', en: 'Hi / Bye', note: 'Only with close friends or kids. Same word for hello and goodbye.', reg: 'Casual' },
          { ko: '반가워요', ro: 'bangawoyo', en: 'Nice to meet you', note: 'Say it right after hello when you meet someone new.', reg: 'Polite' },
          { ko: '또 만나요', ro: 'tto mannayo', en: 'See you again', note: 'A warm way to end a first meeting.', reg: 'Polite' },
        ]} />
        <h3 className="mt-10 font-bold text-xl">Two kinds of goodbye</h3>
        <p className="mt-1 text-muted">Ask yourself one question: who is leaving?</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <SayCard label="They are leaving" ko="안녕히 가세요" ro="annyeonghi gaseyo" tint="tint-blue">
            “Go in peace.” Say it to a guest walking out of your shop or home.
          </SayCard>
          <SayCard label="You are leaving" ko="안녕히 계세요" ro="annyeonghi gyeseyo" tint="tint-red">
            “Stay in peace.” Say it to the person who stays behind.
          </SayCard>
        </div>
      </Section>

      <Section id="thanks" eyebrow="Lesson 2" title="Thank you & sorry" ko="감사와 사과" audio
        intro="The long “-ㅂ니다” forms are what you hear from staff and announcements. The shorter “-요” forms are friendly but still polite.">
        <PhraseGrid items={[
          { ko: '감사합니다', ro: 'gamsahamnida', en: 'Thank you', note: 'The safest choice with anyone you don’t know.', reg: 'Formal' },
          { ko: '고마워요', ro: 'gomawoyo', en: 'Thanks', note: 'Softer and warmer. Good with coworkers or a friend’s parents.', reg: 'Polite' },
          { ko: '죄송합니다', ro: 'joesonghamnida', en: 'I’m sorry', note: 'For real apologies, or when you bump into someone.', reg: 'Formal' },
          { ko: '미안해요', ro: 'mianhaeyo', en: 'Sorry', note: 'Lighter apology between people who know each other.', reg: 'Polite' },
          { ko: '괜찮아요', ro: 'gwaenchanayo', en: 'It’s okay / No thanks', note: 'The answer to “sorry”, and a polite way to turn something down.', reg: 'Polite' },
          { ko: '실례합니다', ro: 'sillyehamnida', en: 'Excuse me', note: 'To get past someone or before asking a stranger a question.', reg: 'Formal' },
        ]} />
      </Section>

      <Section id="levels" eyebrow="Lesson 3" title="Polite or casual?" ko="존댓말 · 반말"
        intro="The same idea has three levels. When in doubt, use the middle column: you will never offend anyone with it.">
        <DataTable
          minWidth={620}
          headers={['', 'Formal', 'Polite (use this)', 'Casual']}
          rows={[
            ['Hello', <KoCell ko="안녕하십니까" ro="annyeonghasimnikka" />, <KoCell ko="안녕하세요" ro="annyeonghaseyo" />, <KoCell ko="안녕" ro="annyeong" />],
            ['Thank you', <KoCell ko="감사합니다" ro="gamsahamnida" />, <KoCell ko="고마워요" ro="gomawoyo" />, <KoCell ko="고마워" ro="gomawo" />],
            ['Sorry', <KoCell ko="죄송합니다" ro="joesonghamnida" />, <KoCell ko="미안해요" ro="mianhaeyo" />, <KoCell ko="미안해" ro="mianhae" />],
            ['Bye (they leave)', <KoCell ko="안녕히 가십시오" ro="annyeonghi gasipsio" />, <KoCell ko="안녕히 가세요" ro="annyeonghi gaseyo" />, <KoCell ko="잘 가" ro="jal ga" />],
            ['Use with', 'Customers, bosses, speeches', 'Strangers, shop staff, new friends', 'Close friends, younger people'],
          ]}
        />
        <Callout title="Tip: listen for “-요”">
          If a sentence ends in <Ko>요</Ko>, it is polite. If you drop the 요 with someone older, it can sound rude, so wait until they say{' '}
          <Ko>말 놓으세요</Ko> <span className="text-muted">(mal noeuseyo, “speak casually with me”)</span>.
        </Callout>
      </Section>
    </StepLayout>
  )
}
