// GET /api/auth/me → 로그인한 사용자 정보 (없으면 null)
import { readSession, json, type Ctx } from '../../../src/server/auth'

export const onRequestGet = async ({ request, env }: Ctx) => json({ user: await readSession(request, env) })
