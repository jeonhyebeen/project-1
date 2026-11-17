// 사이트에 보이는 모든 내용을 여기서 관리합니다.
// 숫자와 축제 시기는 대략적인 값이므로 공개 전에 공식 자료로 확인하세요.

export type Tint = 'pine' | 'apple' | 'ink'

export interface Stat { label: string; value: string }
export interface Place { name: string; district: string; category: string; description: string; tint: Tint }
export interface Food { name: string; description: string }
export interface CourseStop { time: string; title: string; description: string }
export interface Festival { name: string; startMonth: number; months: number; tint: 'apple' | 'pine' }

export const stats: Stat[] = [
  { label: '인구', value: '약 236만' },
  { label: '면적', value: '1,499㎢' },
  { label: '약령시 개장', value: '1658년' },
  { label: '서울 → 동대구 KTX', value: '약 1시간 50분' },
]

export const places: Place[] = [
  { name: '팔공산', district: '동구', category: '자연', description: '해발 1,192m. 갓바위와 동화사가 있고 가을 단풍길이 유명합니다.', tint: 'pine' },
  { name: '근대골목', district: '중구', category: '역사', description: '청라언덕, 계산성당, 3·1만세운동길을 잇는 도보 골목 투어.', tint: 'apple' },
  { name: '김광석 다시그리기길', district: '중구', category: '문화', description: '방천시장 옆 350m 벽화 골목. 노래와 벽화가 함께하는 산책길.', tint: 'ink' },
  { name: '서문시장', district: '중구', category: '시장', description: '조선시대부터 이어진 대구 대표 시장. 해가 지면 야시장이 열립니다.', tint: 'apple' },
  { name: '수성못', district: '수성구', category: '야경', description: '호수 둘레 산책로와 카페 거리. 저녁 음악분수가 볼거리입니다.', tint: 'pine' },
  { name: '앞산 전망대', district: '남구', category: '전망', description: '케이블카로 올라 분지 한가운데 펼쳐진 도심 야경을 내려다봅니다.', tint: 'ink' },
]

export const foods: Food[] = [
  { name: '막창구이', description: '된장 소스에 찍어 먹는 돼지 막창' },
  { name: '납작만두', description: '얇게 부친 만두에 간장과 파' },
  { name: '동인동 찜갈비', description: '마늘·고춧가루로 맵게 찐 갈비' },
  { name: '뭉티기', description: '두툼하게 썬 한우 생고기' },
  { name: '따로국밥', description: '밥과 국을 따로 내는 육개장' },
  { name: '누른국수', description: '콩가루 넣은 손칼국수' },
  { name: '무침회', description: '오징어·고둥을 초장에 무친 회' },
  { name: '야끼우동', description: '매콤하게 볶은 중화풍 우동' },
  { name: '논메기매운탕', description: '논에서 기른 메기 매운탕' },
  { name: '복어불고기', description: '콩나물과 함께 볶은 복어' },
]

export const course: CourseStop[] = [
  { time: '10:00', title: '근대골목 걷기', description: '청라언덕에서 출발해 계산성당까지 약 1.6km.' },
  { time: '12:30', title: '서문시장 점심', description: '칼국수와 납작만두. 근대골목에서 걸어서 10분.' },
  { time: '15:00', title: '김광석 다시그리기길', description: '벽화 골목 산책 후 방천시장 카페에서 쉬어가기.' },
  { time: '19:00', title: '수성못 야경', description: '호숫가 산책과 막창으로 마무리.' },
]

export const festivals: Festival[] = [
  { name: '컬러풀대구', startMonth: 5, months: 1, tint: 'apple' },
  { name: '대구국제뮤지컬페스티벌', startMonth: 6, months: 2, tint: 'pine' },
  { name: '치맥페스티벌', startMonth: 7, months: 1, tint: 'apple' },
  { name: '약령시 한방문화축제', startMonth: 10, months: 1, tint: 'pine' },
  { name: '팔공산 단풍', startMonth: 10, months: 2, tint: 'apple' },
]
