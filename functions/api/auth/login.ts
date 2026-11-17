// POST /api/auth/login  { credential } → 구글 토큰 확인 후 로그인 쿠키 발급
import { verifyGoogleCredential, sessionCookie, json, type Ctx } from '../../../src/server/auth'

export const onRequestPost = async ({ request, env }: Ctx) => {
  let credential: unknown
  try {
    credential = ((await request.json()) as { credential?: unknown }).credential
  } catch {
    return json({ error: 'Invalid request' }, { status: 400 })
  }
  if (typeof credential !== 'string') return json({ error: 'Missing credential' }, { status: 400 })

  let user
  try {
    user = await verifyGoogleCredential(credential)
  } catch {
    return json({ error: 'Google sign-in could not be verified' }, { status: 401 })
  }
  const cookie = await sessionCookie(user, env)
  return json({ user }, { headers: { 'Set-Cookie': cookie } })
}
