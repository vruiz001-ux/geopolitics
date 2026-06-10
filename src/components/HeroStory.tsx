import Link from 'next/link';
import type { Article } from '@/lib/types';
import { getAuthorBySlug, getCategoryBySlug, formatDate } from '@/lib/data';

export function HeroStory({ article }: { article: Article }) {
  const author = getAuthorBySlug(article.authorSlug);
  const category = getCategoryBySlug(article.category);
  const href = `/article/${article.slug}`;

  return (
    <article className="group">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
        <Link
          href={href}
          aria-label={article.title}
          className="relative col-span-1 aspect-[16/10] overflow-hidden rounded-lg bg-rule lg:col-span-7 lg:aspect-[16/11]"
        >
          <img
            src={article.image}
            alt={article.imageAlt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </Link>
        <div className="lg:col-span-5 lg:py-2">
          <Link href={`/category/${article.category}`} className="eyebrow text-accent link-hover">
            {category?.name}
          </Link>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-[1.05] tracking-tight text-ink sm:text-4xl lg:text-5xl">
            <Link href={href} className="link-hover">{article.title}</Link>
          </h2>
          <p className="mt-4 font-serif text-lg leading-relaxed text-graphite lg:text-xl">
            {article.subtitle}
          </p>
          <div className="mt-5 flex items-center gap-3 font-sans text-sm text-muted">
            {author && (
              <Link href={`/authors/${author.slug}`} className="link-hover">
                By {author.name}
              </Link>
            )}
            <span aria-hidden>·</span>
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            <span aria-hidden>·</span>
            <span>{article.readingTime} min read</span>
          </div>
        </div>
      </div>
    </article>
  );
}
