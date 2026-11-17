// POST /api/auth/logout → 로그인 쿠키 삭제
import { clearCookie, json } from '../../../src/server/auth'

export const onRequestPost = async () => json({ ok: true }, { headers: { 'Set-Cookie': clearCookie() } })
