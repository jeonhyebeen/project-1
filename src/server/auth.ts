// 서버(Cloudflare Pages Functions)에서 쓰는 로그인 도우미.
// 1) 구글이 준 ID 토큰이 진짜인지 구글 공개키로 확인하고
// 2) 확인된 사용자 정보를 우리 비밀키로 서명한 쿠키(30일)에 담아 로그인 상태를 유지합니다.
import { createRemoteJWKSet, jwtVerify, SignJWT } from 'jose'
import { GOOGLE_CLIENT_ID } from '../site'

export type User = { sub: string; name: string; email: string; picture: string }
export type Env = { SESSION_SECRET?: string }

const GOOGLE_KEYS = createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'))
const COOKIE = 'he_session'
const MAX_AGE = 60 * 60 * 24 * 30

export async function verifyGoogleCredential(credential: string): Promise<User> {
  const { payload } = await jwtVerify(credential, GOOGLE_KEYS, {
    issuer: ['https://accounts.google.com', 'accounts.google.com'],
    audience: GOOGLE_CLIENT_ID,
  })
  if (!payload.sub || payload.email_verified !== true) throw new Error('unverified account')
  return {
    sub: payload.sub,
    name: String(payload.name ?? payload.email ?? ''),
    email: String(payload.email ?? ''),
    picture: String(payload.picture ?? ''),
  }
}

function secretKey(env: Env) {
  if (!env.SESSION_SECRET) throw new Error('SESSION_SECRET is not set')
  return new TextEncoder().encode(env.SESSION_SECRET)
}

export async function sessionCookie(user: User, env: Env) {
  const token = await new SignJWT({ name: user.name, email: user.email, picture: user.picture })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(user.sub)
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(secretKey(env))
  return `${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${MAX_AGE}`
}

export const clearCookie = () => `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`

export async function readSession(request: Request, env: Env): Promise<User | null> {
  const cookie = request.headers.get('Cookie') ?? ''
  const token = cookie.split(/;\s*/).find((c) => c.startsWith(COOKIE + '='))?.slice(COOKIE.length + 1)
  if (!token) return null
  try {
    const { payload } = await jwtVerify(token, secretKey(env), { algorithms: ['HS256'] })
    return { sub: payload.sub!, name: String(payload.name), email: String(payload.email), picture: String(payload.picture) }
  } catch {
    return null
  }
}

export function json(data: unknown, init: ResponseInit = {}) {
  const headers = new Headers(init.headers)
  headers.set('Content-Type', 'application/json; charset=utf-8')
  headers.set('Cache-Control', 'no-store')
  return new Response(JSON.stringify(data), { ...init, headers })
}

export type Ctx = { request: Request; env: Env }
