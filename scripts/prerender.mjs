// 빌드된 index.html을 주소마다 복사하고, 각 페이지의 본문과 SEO 태그를 미리 HTML로 넣어 둡니다.
// 검색엔진이 자바스크립트를 실행하지 않아도 페이지마다 제목, 설명, 본문을 읽을 수 있습니다.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { resolve, dirname } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const { render, head, ROUTES, SITE_URL } = await import(pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href)

const template = await readFile(resolve(root, 'dist/index.html'), 'utf8')
for (const mark of ['<!--head-->', '<!--app-html-->']) {
  if (!template.includes(mark)) throw new Error(`dist/index.html 에 ${mark} 자리표시가 없습니다.`)
}

const today = new Date().toISOString().slice(0, 10)
for (const path of ROUTES) {
  const html = template.replace('<!--head-->', head(path)).replace('<!--app-html-->', render(path))
  const file = resolve(root, 'dist', '.' + path, 'index.html')
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, html)
  console.log('prerendered', path)
}

const urls = ROUTES.map((p) => `  <url>\n    <loc>${SITE_URL}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p === '/' ? '1.0' : '0.8'}</priority>\n  </url>`).join('\n')
await writeFile(resolve(root, 'dist/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
await writeFile(resolve(root, 'dist/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
await rm(resolve(root, 'dist-ssr'), { recursive: true, force: true })
console.log('wrote sitemap.xml, robots.txt')
