import { createContext, useContext, useEffect, useState } from 'react'

// 브라우저 음성 합성(ko-KR). 서버 렌더링 결과와 맞추기 위해 처음에는 false로 시작하고, 화면에 붙은 뒤 확인합니다.
const SpeechContext = createContext(false)

export function SpeechProvider({ children }: { children: React.ReactNode }) {
  const [canSpeak, setCanSpeak] = useState(false)
  useEffect(() => {
    setCanSpeak('speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined')
  }, [])
  return <SpeechContext.Provider value={canSpeak}>{children}</SpeechContext.Provider>
}

export const useCanSpeak = () => useContext(SpeechContext)

export function say(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
  try {
    speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'ko-KR'
    u.rate = 0.8
    speechSynthesis.speak(u)
  } catch {
    // 음성을 낼 수 없는 환경이면 조용히 넘어갑니다.
  }
}

export function PlayButton({ text, tint = 'tint-yellow' }: { text: string; tint?: string }) {
  const canSpeak = useCanSpeak()
  if (!canSpeak) return null
  return (
    <button type="button" className={`play ${tint}`} onClick={() => say(text)} aria-label={`Listen to ${text}`}>
      ▶
    </button>
  )
}

export function AudioHint({ children = 'Tap ▶ to hear it.' }: { children?: React.ReactNode }) {
  const canSpeak = useCanSpeak()
  if (!canSpeak) return null
  return <p className="text-sm text-muted">{children}</p>
}
