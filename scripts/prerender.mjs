// 빌드된 index.html 안에 React 화면을 미리 HTML로 넣어 둡니다.
// 검색엔진이 자바스크립트를 실행하지 않아도 본문을 읽을 수 있습니다.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const { render } = await import(pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href)

const file = resolve(root, 'dist/index.html')
const html = await readFile(file, 'utf8')
if (!html.includes('<!--app-html-->')) throw new Error('dist/index.html 에 <!--app-html--> 자리표시가 없습니다.')
await writeFile(file, html.replace('<!--app-html-->', render()))
await rm(resolve(root, 'dist-ssr'), { recursive: true, force: true })
console.log('prerendered dist/index.html')
