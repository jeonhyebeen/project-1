import StepLayout from '../components/StepLayout'
import { Section, PhraseGrid, InfoCards, LyricLines, Callout, Ko } from '../components/Blocks'

export default function Kpop() {
  return (
    <StepLayout
      n={4}
      heroTint="tint-blue"
      chips={['초보 Beginner', '3 lessons', '20 expressions']}
      h1="K-pop Korean: Words You Hear in Songs, Explained"
      lede="Love, dreams and missing someone: K-pop songs reuse a small set of words again and again. Learn them here, then catch them in your next favorite song."
      lessons={[
        { id: 'song-words', label: 'Words in every song' },
        { id: 'fan-talk', label: 'Fan talk' },
        { id: 'lines', label: 'Read a line' },
        { label: 'Concert chants' },
        { label: 'Variety show slang' },
      ]}
      quizTitle="Fan quiz"
      quiz={[
        { word: '사랑해', ask: 'What does this mean?', options: ['I miss you', 'I love you', 'Thank you', 'Goodbye'], answer: 'I love you', explain: '사랑 means love.' },
        { word: '막내', ask: 'Who is this in a group?', options: ['The leader', 'The oldest member', 'The youngest member', 'The main dancer'], answer: 'The youngest member', explain: '막내 is the youngest.' },
        { word: '보고 싶어', ask: 'What does this mean?', options: ['I miss you', 'Look at me', 'I can see you', 'See you later'], answer: 'I miss you', explain: 'It literally means “I want to see you.”' },
        { word: '대박', ask: 'Your favorite group just announced a world tour. Which meaning fits?', options: ['Awesome!', 'Be careful!', 'I’m sorry', 'Too bad'], answer: 'Awesome!', explain: '대박 is an exclamation of big surprise.' },
        { word: '최애', ask: 'What does this mean?', options: ['Comeback', 'Favorite member', 'Fan club', 'New album'], answer: 'Favorite member', explain: 'Your 최애 is your bias.' },
      ]}
    >
      <Section id="song-words" eyebrow="Lesson 1" title="Words in every song" ko="노래 단어" audio
        intro="Songs use casual speech (반말), because they sound like talking to someone close. That is why you won’t see many “-요” endings here.">
        <PhraseGrid items={[
          { ko: '사랑해', ro: 'saranghae', en: 'I love you', reg: 'Casual' },
          { ko: '보고 싶어', ro: 'bogo sipeo', en: 'I miss you', note: 'Literally “I want to see you.”', reg: 'Casual' },
          { ko: '너', ro: 'neo', en: 'you' },
          { ko: '우리', ro: 'uri', en: 'we, us, our', note: <>Koreans say 우리 where English says “my”: <Ko className="font-hangul">우리 엄마</Ko>, “our mom”.</> },
          { ko: '꿈', ro: 'kkum', en: 'dream' },
          { ko: '마음', ro: 'maeum', en: 'heart, mind' },
          { ko: '영원히', ro: 'yeongwonhi', en: 'forever' },
          { ko: '하늘', ro: 'haneul', en: 'sky' },
        ]} />
      </Section>

      <Section id="fan-talk" eyebrow="Lesson 2" title="Fan talk" ko="팬 용어"
        intro="Words you will see in comments, livestreams and fan cafés.">
        <InfoCards items={[
          { ko: '최애', ro: 'choeae', title: 'Favorite member (bias)', body: 'Short for 최고로 애정하는, “loved the most”.' },
          { ko: '막내', ro: 'maknae', title: 'Youngest member', body: 'Used in families too. The 막내 is often teased and protected.' },
          { ko: '컴백', ro: 'keombaek', title: 'Comeback', body: 'Any new release, even if the group never went away.' },
          { ko: '오빠 · 언니', ro: 'oppa · eonni', title: 'Older brother · older sister', body: 'What women call older men and women. Men say 형 (hyeong) and 누나 (nuna).' },
          { ko: '대박', ro: 'daebak', title: 'Awesome! / Jackpot!', body: 'Big surprise, good or shocking. Very casual.' },
          { ko: '화이팅', ro: 'hwaiting', title: 'You can do it!', body: 'From English “fighting”. Cheer for anyone before a big moment.' },
        ]} />
      </Section>

      <Section id="lines" eyebrow="Lesson 3" title="Read a line, word by word" ko="한 줄 읽기" audio
        intro="Each colored word below matches its meaning underneath. These are example lines written for this lesson, in the style of a ballad chorus.">
        <LyricLines lines={[
          { tokens: [['너를', 'you (the one I…)'], ['보고', 'see'], ['싶어', 'want to'], ['오늘 밤', 'tonight']], ro: 'neoreul bogo sipeo oneul bam', en: 'I want to see you tonight' },
          { tokens: [['우리', 'our'], ['꿈은', 'dream (is)'], ['영원히', 'forever'], ['빛나', 'shines']], ro: 'uri kkumeun yeongwonhi binna', en: 'Our dream shines forever' },
        ]} />
        <Callout title="Grammar spotted: little tags after nouns">
          <Ko>를</Ko> marks what you see or love, and <Ko>은</Ko> marks the topic. English uses word order for this. Korean uses these small tags, so singers can move words around to fit the melody.
        </Callout>
      </Section>
    </StepLayout>
  )
}
