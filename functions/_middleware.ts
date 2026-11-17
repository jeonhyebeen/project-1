// 사이트 잠금: Cloudflare에 SITE_PASSWORD 비밀값이 있으면 모든 페이지에 아이디/비밀번호를 묻습니다.
// 다시 공개하려면 비밀값만 지우면 됩니다: npx wrangler pages secret delete SITE_PASSWORD --project-name hangul-easy
type Ctx = { request: Request; env: { SITE_PASSWORD?: string }; next: () => Promise<Response> }

const USER = 'hangul'

function sameText(a: string, b: string) {
  const x = new TextEncoder().encode(a)
  const y = new TextEncoder().encode(b)
  let diff = x.length ^ y.length
  for (let i = 0; i < Math.max(x.length, y.length); i++) diff |= (x[i] ?? 0) ^ (y[i] ?? 0)
  return diff === 0
}

export const onRequest = async ({ request, env, next }: Ctx) => {
  const password = env.SITE_PASSWORD
  if (!password) return next()

  const header = request.headers.get('Authorization') ?? ''
  if (header.startsWith('Basic ')) {
    let decoded = ''
    try {
      decoded = atob(header.slice(6))
    } catch {
      // 잘못된 값이면 아래에서 다시 묻습니다.
    }
    const i = decoded.indexOf(':')
    if (i > 0 && sameText(decoded.slice(0, i), USER) && sameText(decoded.slice(i + 1), password)) {
      const res = await next()
      const out = new Response(res.body, res)
      out.headers.set('X-Robots-Tag', 'noindex')
      out.headers.set('Cache-Control', 'private, no-store')
      return out
    }
  }

  return new Response('This site is being updated. Please check back soon.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="HangulEasy (private preview)", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex',
      'Cache-Control': 'no-store',
    },
  })
}
