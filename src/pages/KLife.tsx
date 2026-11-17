import StepLayout from '../components/StepLayout'
import { Section, PhraseGrid, InfoCards, DoDont, SayCard, Callout, Ko } from '../components/Blocks'

export default function KLife() {
  return (
    <StepLayout
      n={4}
      heroTint="tint-yellow"
      chips={['초보 Beginner', '5 lessons', 'Final step']}
      h1={<>K-Life: Korean Culture, Manners &amp; K-pop Fan Talk</>}
      lede="Language and life go together in Korea. Learn how to address people, what happens on the big holidays, how to behave at a shared meal and the words K-pop fans use every day."
      lessons={[
        { id: 'titles', label: 'Names & titles' },
        { id: 'holidays', label: 'Holidays' },
        { id: 'table', label: 'Table manners' },
        { id: 'daily', label: 'Daily life' },
        { id: 'fan-talk', label: 'K-pop fan talk' },
      ]}
      quizTitle="Culture check"
      quiz={[
        { word: '', ask: 'What do you say before you start eating?', options: ['잘 먹겠습니다', '잘 먹었습니다', '안녕히 계세요', '괜찮아요'], answer: '잘 먹겠습니다', explain: '잘 먹겠습니다 means “I will eat well.”' },
        { word: '추석', ask: 'What is this holiday?', options: ['Lunar New Year', 'Harvest festival', 'Hangul Day', 'Pepero Day'], answer: 'Harvest festival', explain: '추석 is Chuseok, the autumn harvest festival.' },
        { word: '씨', ask: 'Where should this title go?', options: ['After your own name', 'After a coworker’s name', 'After your grandmother’s name', 'Before any name'], answer: 'After a coworker’s name', explain: '씨 is polite, but never for yourself or much older people.' },
        { word: '젓가락', ask: 'What should you never do with chopsticks?', options: ['Rest them on the table', 'Use them for side dishes', 'Stick them upright in rice', 'Hold them in your right hand'], answer: 'Stick them upright in rice', explain: 'It looks like a funeral offering.' },
        { word: '막내', ask: 'Who is this in a K-pop group?', options: ['The leader', 'The oldest member', 'The youngest member', 'The main dancer'], answer: 'The youngest member', explain: '막내 is the youngest, in groups and in families.' },
        { word: '세배', ask: 'What is this?', options: ['A New Year’s bow to elders', 'Rice cake soup', 'A birthday song', 'A family card game'], answer: 'A New Year’s bow to elders', explain: 'Children do 세배 on Seollal and get 세뱃돈 (money) in return.' },
      ]}
    >
      <Section id="titles" eyebrow="Lesson 1" title="How to call people" ko="호칭" audio
        intro="Using someone’s first name alone is only for close friends of the same age or younger. With everyone else, add a title.">
        <PhraseGrid items={[
          { ko: '지민 씨', ro: 'Jimin ssi', en: 'Jimin (polite)', note: '씨 after a name is polite for coworkers and new acquaintances. Never add it to your own name.' },
          { ko: '선생님', ro: 'seonsaengnim', en: 'Teacher / Sir, Ma’am', note: '님 adds respect. Also used for doctors and many professionals.' },
          { ko: '선배', ro: 'seonbae', en: 'Senior (school, work)', note: 'Someone who started before you. You are their 후배 (hubae).' },
          { ko: '사장님', ro: 'sajangnim', en: 'Boss / Shop owner', note: 'How customers call the owner of a restaurant or shop.' },
        ]} />
        <Callout title="Why Koreans ask your age">
          <Ko>몇 살이에요?</Ko> <span className="text-muted">(myeot sarieyo?, “How old are you?”)</span> is not rude. Age decides who uses polite speech and which title to use, so people ask early.
        </Callout>
      </Section>

      <Section id="holidays" eyebrow="Lesson 2" title="The big holidays" ko="명절과 기념일"
        intro="Two holidays empty out Seoul as families travel home. A few others are just for fun.">
        <InfoCards items={[
          { ko: '설날', ro: 'Seollal', when: 'Jan–Feb', title: 'Lunar New Year', body: 'Children bow to elders (세배, sebae) and get money (세뱃돈). Everyone eats 떡국, rice cake soup, to turn a year older.' },
          { ko: '추석', ro: 'Chuseok', when: 'Sep–Oct', title: 'Harvest festival', body: 'Families visit hometowns, honor ancestors and make half-moon rice cakes called 송편 (songpyeon).' },
          { ko: '한글날', ro: 'Hangeullal', when: 'Oct 9', title: 'Hangul Day', body: 'A national holiday celebrating the alphabet you learned in step 1.' },
          { ko: '빼빼로데이', ro: 'Ppaeppaero Day', when: 'Nov 11', title: 'Pepero Day', body: 'The date looks like four thin chocolate sticks, so friends and couples trade them.' },
        ]} />
      </Section>

      <Section id="table" eyebrow="Lesson 3" title="Table manners" ko="식사 예절" audio
        intro="Korean meals are shared: many side dishes in the middle, one bowl of rice each. Respect for elders guides everything.">
        <DoDont
          dos={[
            'Wait for the oldest person to start eating.',
            'Pour drinks for others, and hold your glass with two hands when an elder pours for you.',
            'Turn your head slightly away when drinking with elders.',
            'Leave your rice and soup bowls on the table while you eat.',
          ]}
          donts={[
            'Stick your chopsticks upright in rice. It looks like a funeral offering.',
            'Pour your own drink at a group dinner.',
            'Blow your nose at the table.',
            'Start eating before everyone has been served.',
          ]}
        />
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <SayCard label="Before eating" ko="잘 먹겠습니다" ro="jal meokgesseumnida">“I will eat well.” Thanks to whoever cooked or paid.</SayCard>
          <SayCard label="After eating" ko="잘 먹었습니다" ro="jal meogeosseumnida">“I ate well.” Say it when you finish or leave.</SayCard>
        </div>
      </Section>

      <Section id="daily" eyebrow="Lesson 4" title="Daily life" ko="일상" intro="Small habits you will notice in your first week.">
        <InfoCards cols="sm:grid-cols-2 xl:grid-cols-4" items={[
          { ko: '신발', ro: 'sinbal', title: 'Shoes off indoors', body: 'In homes and some restaurants with floor seating. Look for a row of shoes at the door.' },
          { ko: '빨리빨리', ro: 'ppalli-ppalli', title: '“Quick, quick!”', body: 'Fast delivery, fast internet, fast service. Speed is part of daily life.' },
          { ko: '배달', ro: 'baedal', title: 'Delivery, anytime', body: 'Food arrives almost anywhere, even to a park bench along the Han River.' },
          { ko: '만 나이', ro: 'man nai', title: 'Age, the international way', body: 'Since 2023, official age is counted like everywhere else. Older people may still use the traditional count.' },
        ]} />
      </Section>

      <Section id="fan-talk" eyebrow="Lesson 5" title="K-pop fan talk" ko="팬 용어"
        intro="Words you will see in comments, livestreams and fan cafés. Many of them come from family life in Korea.">
        <InfoCards items={[
          { ko: '최애', ro: 'choeae', title: 'Favorite member (bias)', body: 'Short for 최고로 애정하는, “loved the most”.' },
          { ko: '막내', ro: 'maknae', title: 'Youngest member', body: 'Used in families too. The 막내 is often teased and protected.' },
          { ko: '컴백', ro: 'keombaek', title: 'Comeback', body: 'Any new release, even if the group never went away.' },
          { ko: '오빠 · 언니', ro: 'oppa · eonni', title: 'Older brother · older sister', body: 'What women call older men and women. Men say 형 (hyeong) and 누나 (nuna).' },
          { ko: '대박', ro: 'daebak', title: 'Awesome! / Jackpot!', body: 'Big surprise, good or shocking. Very casual.' },
          { ko: '화이팅', ro: 'hwaiting', title: 'You can do it!', body: 'From English “fighting”. Cheer for anyone before a big moment.' },
        ]} />
      </Section>
    </StepLayout>
  )
}
