import { HOME, SITE_NAME, SITE_URL, STEPS, normalizePath, stepForPath } from './site'

export function pageMeta(path: string) {
  const step = stepForPath(path)
  const base = step ?? HOME
  return { path: normalizePath(path), step, title: `${base.title} | ${SITE_NAME}`, description: base.description }
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const json = (o: unknown) => JSON.stringify(o).replace(/</g, '\\u003c')

/** 페이지마다 다른 <head> 태그: 제목, 설명, 대표 주소, 공유 미리보기, 구조화 데이터 */
export function head(path: string) {
  const { path: p, step, title, description } = pageMeta(path)
  const url = SITE_URL + p
  const ld = step
    ? [
        {
          '@context': 'https://schema.org',
          '@type': 'LearningResource',
          name: step.title,
          description: step.description,
          url,
          inLanguage: 'en',
          educationalLevel: 'Beginner',
          teaches: `Korean: ${step.name}`,
          isPartOf: { '@type': 'Course', name: 'Korean for Beginners', url: SITE_URL + '/' },
          position: step.n,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
            { '@type': 'ListItem', position: 2, name: `Step ${step.n} · ${step.name}`, item: url },
          ],
        },
      ]
    : [
        { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME, url: SITE_URL + '/', inLanguage: 'en' },
        {
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'Korean for Beginners: Hangul, Greetings, Everyday Words, K-pop & Culture',
          description: HOME.description,
          url: SITE_URL + '/',
          inLanguage: 'en',
          provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL + '/' },
          hasPart: STEPS.map((s) => ({ '@type': 'LearningResource', name: s.title, url: `${SITE_URL}/${s.slug}/` })),
        },
      ]

  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    ...ld.map((o) => `<script type="application/ld+json">${json(o)}</script>`),
  ].join('\n    ')
}
