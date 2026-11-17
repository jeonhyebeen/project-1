// 사이트 주소와 페이지별 SEO 정보. 첫 배포 후 실제 pages.dev 주소로 SITE_URL을 바꿔 주세요.
export const SITE_URL = 'https://hangul-easy.pages.dev'
export const SITE_NAME = 'HangulEasy'

// 구글 클라우드 콘솔 → 클라이언트에서 받은 웹 클라이언트 ID. 비어 있으면 로그인 버튼이 보이지 않습니다.
export const GOOGLE_CLIENT_ID = '1041805887690-pl5clpdefldm9bb1doipht7o29f67u2e.apps.googleusercontent.com'

export type StepMeta = {
  n: number
  slug: string
  short: string
  name: string
  ko: string
  level: string
  blurb: string
  title: string
  description: string
}

export const STEPS: StepMeta[] = [
  {
    n: 1, slug: 'hangul', short: 'Hangul', name: 'Hangul letters', ko: '한글', level: '입문 Starter',
    blurb: 'ㄱ ㄴ ㄷ, ㅏ ㅓ ㅗ, how blocks and 받침 work.',
    title: 'Learn to Read Hangul: Korean Vowels & Consonants',
    description: 'Learn the 10 basic Korean vowels and 14 consonants with audio, romanization and example words, then test yourself with a quick reading quiz.',
  },
  {
    n: 2, slug: 'greetings', short: 'Greetings', name: 'Greetings', ko: '인사말', level: '입문 Starter',
    blurb: 'Hello, thank you, sorry, goodbye. Polite and casual.',
    title: 'Korean Greetings: Hello, Thank You, Sorry & Goodbye',
    description: 'Say hello, thank you, sorry and goodbye in Korean. Learn when to use polite or casual speech, with audio and romanization for every phrase.',
  },
  {
    n: 3, slug: 'words', short: 'Words', name: 'Everyday words', ko: '생활 단어', level: '초보 Beginner',
    blurb: 'Ordering coffee, riding the subway, paying at a store.',
    title: 'Everyday Korean Words for Cafés, Subway & Shops',
    description: 'Order coffee, read subway signs and pay at a store in Korean. Real conversations, key words and the “주세요” pattern for travelers and beginners.',
  },
  {
    n: 4, slug: 'kpop', short: 'K-pop', name: 'K-pop phrases', ko: 'K-pop 표현', level: '초보 Beginner',
    blurb: 'Words you hear in songs, explained line by line.',
    title: 'K-pop Korean: Words & Phrases from Songs, Explained',
    description: 'Learn the Korean words K-pop songs use again and again, fan words like 최애 and 막내, and how to read a lyric line word by word.',
  },
  {
    n: 5, slug: 'culture', short: 'Culture', name: 'Korean culture', ko: '한국 문화', level: '초보 Beginner',
    blurb: 'Honorifics, holidays, table manners, daily life.',
    title: 'Korean Culture Basics: Honorifics, Holidays & Table Manners',
    description: 'How to address people in Korean, what happens on Seollal and Chuseok, table manners at a shared meal and daily habits you will notice in Korea.',
  },
]

export const HOME = {
  title: 'Learn the Korean Alphabet (Hangul) for Beginners & Korean Culture',
  description: 'Learn to read Hangul in five easy steps: letters, greetings, everyday words, K-pop phrases and Korean culture. Free lessons with audio and romanization.',
}

export const PRIVACY = {
  title: 'Privacy Policy',
  description: 'How HangulEasy handles your information when you sign in with Google.',
}

export const stepPath = (s: StepMeta) => `/${s.slug}/`
export const ROUTES = ['/', ...STEPS.map(stepPath), '/privacy/']

export function normalizePath(path: string) {
  const p = path.endsWith('/') ? path : path + '/'
  return ROUTES.includes(p) ? p : '/'
}

export function stepForPath(path: string) {
  return STEPS.find((s) => stepPath(s) === normalizePath(path))
}
