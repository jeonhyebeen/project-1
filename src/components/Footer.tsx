export default function Footer() {
  return (
    <footer className="gutter">
      <div className="max-w-6xl mx-auto py-10 flex flex-wrap justify-between gap-6 text-sm text-muted">
        <div>
          <p className="font-display text-xl text-ink">대구</p>
          <p className="mt-1">음식, 힐링, 즐길거리가 모두 있는 도시</p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
          <span>동대구역 (KTX·SRT)</span>
          <span>대구국제공항</span>
          <span>도시철도 1·2·3호선</span>
          <span>관광안내 1330</span>
        </div>
      </div>
    </footer>
  )
}
