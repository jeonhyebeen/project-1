// 기본 자음 14자, 모음 10자. 유니코드 한글 조합: 0xAC00 + (초성*21 + 중성)*28 + 종성

export type Consonant = { ch: string; idx: number; ro: string; sound: string; name: string; nameRo: string; ex: string; exRo: string; mean: string }
export type Vowel = { ch: string; idx: number; ro: string; dir: 'v' | 'h'; written: string; hint: string; ex: string; exRo: string; mean: string }

export const CONSONANTS: Consonant[] = [
  { ch: 'ㄱ', idx: 0, ro: 'g', sound: 'g / k', name: '기역', nameRo: 'giyeok', ex: '가방', exRo: 'gabang', mean: 'bag' },
  { ch: 'ㄴ', idx: 2, ro: 'n', sound: 'n', name: '니은', nameRo: 'nieun', ex: '나비', exRo: 'nabi', mean: 'butterfly' },
  { ch: 'ㄷ', idx: 3, ro: 'd', sound: 'd / t', name: '디귿', nameRo: 'digeut', ex: '다리', exRo: 'dari', mean: 'leg, bridge' },
  { ch: 'ㄹ', idx: 5, ro: 'r', sound: 'r / l', name: '리을', nameRo: 'rieul', ex: '라면', exRo: 'ramyeon', mean: 'ramen' },
  { ch: 'ㅁ', idx: 6, ro: 'm', sound: 'm', name: '미음', nameRo: 'mieum', ex: '물', exRo: 'mul', mean: 'water' },
  { ch: 'ㅂ', idx: 7, ro: 'b', sound: 'b / p', name: '비읍', nameRo: 'bieup', ex: '바다', exRo: 'bada', mean: 'sea' },
  { ch: 'ㅅ', idx: 9, ro: 's', sound: 's', name: '시옷', nameRo: 'siot', ex: '사과', exRo: 'sagwa', mean: 'apple' },
  { ch: 'ㅇ', idx: 11, ro: '', sound: 'silent / ng', name: '이응', nameRo: 'ieung', ex: '강', exRo: 'gang', mean: 'river' },
  { ch: 'ㅈ', idx: 12, ro: 'j', sound: 'j', name: '지읒', nameRo: 'jieut', ex: '주스', exRo: 'juseu', mean: 'juice' },
  { ch: 'ㅊ', idx: 14, ro: 'ch', sound: 'ch', name: '치읓', nameRo: 'chieut', ex: '치즈', exRo: 'chijeu', mean: 'cheese' },
  { ch: 'ㅋ', idx: 15, ro: 'k', sound: 'k', name: '키읔', nameRo: 'kieuk', ex: '커피', exRo: 'keopi', mean: 'coffee' },
  { ch: 'ㅌ', idx: 16, ro: 't', sound: 't', name: '티읕', nameRo: 'tieut', ex: '토마토', exRo: 'tomato', mean: 'tomato' },
  { ch: 'ㅍ', idx: 17, ro: 'p', sound: 'p', name: '피읖', nameRo: 'pieup', ex: '피자', exRo: 'pija', mean: 'pizza' },
  { ch: 'ㅎ', idx: 18, ro: 'h', sound: 'h', name: '히읗', nameRo: 'hieut', ex: '하나', exRo: 'hana', mean: 'one' },
]

export const VOWELS: Vowel[] = [
  { ch: 'ㅏ', idx: 0, ro: 'a', dir: 'v', written: '아', hint: 'a in “father”', ex: '아이', exRo: 'ai', mean: 'child' },
  { ch: 'ㅑ', idx: 2, ro: 'ya', dir: 'v', written: '야', hint: 'ya in “yard”', ex: '야구', exRo: 'yagu', mean: 'baseball' },
  { ch: 'ㅓ', idx: 4, ro: 'eo', dir: 'v', written: '어', hint: 'u in “up”', ex: '어머니', exRo: 'eomeoni', mean: 'mother' },
  { ch: 'ㅕ', idx: 6, ro: 'yeo', dir: 'v', written: '여', hint: 'yu in “yummy”', ex: '여자', exRo: 'yeoja', mean: 'woman' },
  { ch: 'ㅗ', idx: 8, ro: 'o', dir: 'h', written: '오', hint: 'o in “go”', ex: '오이', exRo: 'oi', mean: 'cucumber' },
  { ch: 'ㅛ', idx: 12, ro: 'yo', dir: 'h', written: '요', hint: 'yo in “yoga”', ex: '요리', exRo: 'yori', mean: 'cooking' },
  { ch: 'ㅜ', idx: 13, ro: 'u', dir: 'h', written: '우', hint: 'oo in “moon”', ex: '우유', exRo: 'uyu', mean: 'milk' },
  { ch: 'ㅠ', idx: 17, ro: 'yu', dir: 'h', written: '유', hint: '“you”', ex: '유리', exRo: 'yuri', mean: 'glass' },
  { ch: 'ㅡ', idx: 18, ro: 'eu', dir: 'h', written: '으', hint: 'like “oo” with lips flat', ex: '그림', exRo: 'geurim', mean: 'picture' },
  { ch: 'ㅣ', idx: 20, ro: 'i', dir: 'v', written: '이', hint: 'ee in “see”', ex: '이름', exRo: 'ireum', mean: 'name' },
]

export const FINALS: { ch: string; idx: number; ro: string }[] = [
  { ch: '', idx: 0, ro: '' },
  { ch: 'ㄱ', idx: 1, ro: 'k' },
  { ch: 'ㄴ', idx: 4, ro: 'n' },
  { ch: 'ㄹ', idx: 8, ro: 'l' },
  { ch: 'ㅁ', idx: 16, ro: 'm' },
  { ch: 'ㅂ', idx: 17, ro: 'p' },
  { ch: 'ㅇ', idx: 21, ro: 'ng' },
]

export const compose = (i: number, v: number, f: number) => String.fromCharCode(0xac00 + (i * 21 + v) * 28 + f)
