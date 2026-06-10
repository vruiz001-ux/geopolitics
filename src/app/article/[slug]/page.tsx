import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getArticleBySlug,
  getAuthorBySlug,
  getCategoryBySlug,
  getRelatedArticles,
  getTagName,
  formatDate,
  getAllArticles,
} from '@/lib/data';
import { SITE_URL } from '@/lib/site';
import { AuthorCard } from '@/components/AuthorCard';
import { ShareButtons } from '@/components/ShareButtons';
import { TableOfContents } from '@/components/TableOfContents';
import { StructuredArticleSection } from '@/components/StructuredArticleSection';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { RelatedArticles } from '@/components/RelatedArticles';
import { NewsletterCTA } from '@/components/NewsletterCTA';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: 'Not found' };
  const author = getAuthorBySlug(article.authorSlug);
  return {
    title: article.title,
    description: article.excerpt,
    authors: author ? [{ name: author.name }] : undefined,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: author ? [author.name] : undefined,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) return notFound();

  const author = getAuthorBySlug(article.authorSlug);
  const category = getCategoryBySlug(article.category);
  const related = getRelatedArticles(article);
  const sectionsWithIds = article.sections.map((section, i) => ({
    id: `section-${section.type}-${i}`,
    section,
  }));
  const articleUrl = `${SITE_URL}/article/${article.slug}`;

  return (
    <article className="container-wide py-8 lg:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 font-sans text-xs uppercase tracking-wider text-muted">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="link-hover">Home</Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href={`/category/${article.category}`} className="link-hover text-accent">
              {category?.name}
            </Link>
          </li>
        </ol>
      </nav>

      <header className="mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {article.title}
        </h1>
        <p className="mt-5 font-serif text-xl leading-relaxed text-graphite lg:text-2xl">
          {article.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-rule py-4">
          {author && <AuthorCard author={author} variant="inline" />}
          <div className="flex items-center gap-4 font-sans text-xs text-muted">
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            <span aria-hidden>·</span>
            <span>{article.readingTime} min read</span>
            <span aria-hidden className="hidden sm:inline">·</span>
            <div className="hidden sm:block">
              <ShareButtons title={article.title} url={articleUrl} />
            </div>
          </div>
        </div>
        <div className="mt-4 sm:hidden">
          <ShareButtons title={article.title} url={articleUrl} />
        </div>
      </header>

      <figure className="mx-auto mt-10 max-w-5xl">
        <img
          src={article.image}
          alt={article.imageAlt}
          className="aspect-[16/9] w-full rounded-lg object-cover"
        />
        {article.imageCredit && (
          <figcaption className="mt-2 font-sans text-xs text-muted">
            {article.imageCredit}
          </figcaption>
        )}
      </figure>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <aside className="hidden lg:col-span-3 lg:block">
          <TableOfContents sections={sectionsWithIds} />
        </aside>

        <div className="lg:col-span-6">
          <div className="rounded-lg border border-rule bg-white/40 px-5 py-4">
            <p className="eyebrow mb-2 text-accent">In brief</p>
            <p className="font-serif text-base leading-relaxed text-graphite">
              {article.excerpt}
            </p>
          </div>

          {sectionsWithIds.map(({ id, section }, i) => (
            <div key={id}>
              <StructuredArticleSection section={section} index={i} id={id} />
              {i === 2 && <AdPlaceholder variant="inline" />}
              {i === 4 && (
                <div className="mt-8">
                  <NewsletterCTA variant="inline" />
                </div>
              )}
            </div>
          ))}

          {article.tags.length > 0 && (
            <div className="mt-12 border-t border-rule pt-6">
              <p className="eyebrow mb-3 text-muted">Topics</p>
              <ul className="flex flex-wrap gap-2">
                {article.tags.map((t) => (
                  <li key={t}>
                    <Link
                      href={`/search?q=${encodeURIComponent(getTagName(t))}`}
                      className="inline-flex items-center rounded-full border border-rule bg-white/40 px-3 py-1 font-sans text-xs text-ink transition-colors hover:border-ink"
                    >
                      {getTagName(t)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {author && (
            <div className="mt-10">
              <AuthorCard author={author} variant="detailed" />
            </div>
          )}
        </div>

        <aside className="lg:col-span-3">
          <div className="sticky top-28 space-y-6">
            <AdPlaceholder variant="sidebar" />
            <div className="rounded-lg border border-rule bg-white/40 p-5">
              <p className="eyebrow mb-3 text-muted">More from this section</p>
              <ul className="space-y-4">
                {related.slice(0, 3).map((a) => (
                  <li key={a.slug}>
                    <Link href={`/article/${a.slug}`} className="block group">
                      <p className="eyebrow text-accent">{category?.name}</p>
                      <p className="mt-1 font-serif text-sm font-semibold leading-snug text-ink group-hover:text-accent">
                        {a.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>

      <RelatedArticles articles={related} />
    </article>
  );
}
