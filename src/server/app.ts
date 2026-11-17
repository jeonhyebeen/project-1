import { Hono } from 'hono'
import { places, foods, festivals } from '../data/daegu'

const app = new Hono().basePath('/api')

app.get('/health', (c) => c.json({ ok: true }))
app.get('/places', (c) => c.json(places))
app.get('/foods', (c) => c.json(foods))
app.get('/festivals', (c) => c.json(festivals))

app.notFound((c) => c.json({ error: '요청한 API를 찾을 수 없습니다.' }, 404))

export default app
