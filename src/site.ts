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
    n: 2, slug: 'words', short: 'Words', name: 'Korean words', ko: '단어', level: '입문 Starter',
    blurb: 'Café, subway and store words, plus the words in K-pop songs.',
    title: 'Everyday Korean Words: Café, Subway, Store & Songs',
    description: 'Learn the Korean words you need at a café, on the subway and in a store, plus the words K-pop songs use again and again. Audio and romanization included.',
  },
  {
    n: 3, slug: 'sentences', short: 'Sentences', name: 'Korean sentences', ko: '문장', level: '초보 Beginner',
    blurb: 'Hello, thank you, sorry, “___, please”. Polite and casual.',
    title: 'Basic Korean Sentences: Greetings, Polite Speech & Ordering',
    description: 'Say hello, thank you, sorry and goodbye in Korean, choose polite or casual speech, order with “주세요” and read a song line word by word.',
  },
  {
    n: 4, slug: 'k-life', short: 'K-Life', name: 'K-Life', ko: 'K-라이프', level: '초보 Beginner',
    blurb: 'Honorifics, holidays, table manners and K-pop fan talk.',
    title: 'K-Life: Korean Culture, Manners, Holidays & K-pop Fan Talk',
    description: 'How to address people in Korea, what happens on Seollal and Chuseok, table manners at a shared meal, daily habits and the words K-pop fans use.',
  },
]

export const HOME = {
  title: 'Learn the Korean Alphabet (Hangul) for Beginners & Korean Life',
  description: 'Learn Korean in four easy steps: Hangul letters, words, sentences and K-Life. Free lessons with audio and romanization.',
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
