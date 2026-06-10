import { ImageResponse } from 'next/og';
import {
  getArticleBySlug,
  getAuthorBySlug,
  getCategoryBySlug,
  getAllArticles,
} from '@/lib/data';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  const author = article ? getAuthorBySlug(article.authorSlug) : undefined;
  const category = article ? getCategoryBySlug(article.category) : undefined;

  const title = article?.title ?? 'Geopolitics';
  const fontSize = title.length > 80 ? 52 : title.length > 50 ? 60 : 72;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#F6F1E7',
          padding: '64px 72px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: category?.color ?? '#C2410C',
            }}
          >
            {category?.name ?? 'News'}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              fontSize,
              fontWeight: 800,
              lineHeight: 1.08,
              color: '#1A1916',
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '2px solid #E2DAC8',
            paddingTop: 28,
          }}
        >
          <div style={{ display: 'flex', fontSize: 26, color: '#6B655A' }}>
            {author ? `By ${author.name}` : ''}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              fontSize: 34,
              fontWeight: 800,
              color: '#1A1916',
            }}
          >
            Geo
            <span style={{ color: '#C2410C', margin: '0 4px' }}>·</span>
            politics
          </div>
        </div>
      </div>
    ),
    size
  );
}
