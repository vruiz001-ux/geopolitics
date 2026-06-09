import Link from 'next/link';
import type { Article } from '@/lib/types';
import { getAuthorById, getCategoryBySlug, formatRelativeDate } from '@/lib/data';

type Variant = 'hero' | 'large' | 'medium' | 'small' | 'list' | 'compact';

interface Props {
  article: Article;
  variant?: Variant;
  showImage?: boolean;
  showExcerpt?: boolean;
  showAuthor?: boolean;
}

export function ArticleCard({
  article,
  variant = 'medium',
  showImage = true,
  showExcerpt,
  showAuthor = true,
}: Props) {
  const author = getAuthorById(article.authorId);
  const category = getCategoryBySlug(article.category);
  const href = `/article/${article.slug}`;

  const titleSizes: Record<Variant, string> = {
    hero: 'text-3xl sm:text-4xl lg:text-5xl leading-[1.05]',
    large: 'text-2xl lg:text-3xl leading-[1.1]',
    medium: 'text-xl leading-snug',
    small: 'text-lg leading-snug',
    list: 'text-lg leading-snug',
    compact: 'text-base leading-snug',
  };

  const showSubtitle = variant === 'hero' || variant === 'large' || showExcerpt;

  if (variant === 'list') {
    return (
      <article className="group flex gap-4 py-4">
        {showImage && (
          <Link
            href={href}
            className="relative aspect-[4/3] w-24 flex-none overflow-hidden rounded-md bg-rule sm:w-32"
            aria-label={article.title}
          >
            <img
              src={article.image}
              alt={article.imageAlt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </Link>
        )}
        <div className="flex-1">
          <Link href={`/category/${article.category}`} className="eyebrow text-accent link-hover">
            {category?.name}
          </Link>
          <h3 className={`mt-1 font-serif font-semibold text-ink ${titleSizes.list}`}>
            <Link href={href} className="link-hover">{article.title}</Link>
          </h3>
          {showAuthor && (
            <p className="mt-1.5 font-sans text-xs text-muted">
              {author?.name} · {formatRelativeDate(article.publishedAt)}
            </p>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col">
      {showImage && (
        <Link
          href={href}
          aria-label={article.title}
          className="relative aspect-[16/10] overflow-hidden rounded-md bg-rule"
        >
          <img
            src={article.image}
            alt={article.imageAlt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </Link>
      )}
      <div className={`flex-1 ${showImage ? 'pt-3' : ''}`}>
        <Link href={`/category/${article.category}`} className="eyebrow text-accent link-hover">
          {category?.name}
        </Link>
        <h3 className={`mt-2 font-serif font-semibold text-ink ${titleSizes[variant]}`}>
          <Link href={href} className="link-hover">{article.title}</Link>
        </h3>
        {showSubtitle && (
          <p className="mt-2 font-serif text-base leading-relaxed text-graphite">
            {article.subtitle}
          </p>
        )}
        {showAuthor && (
          <div className="mt-3 flex items-center gap-2 font-sans text-xs text-muted">
            <span>{author?.name}</span>
            <span aria-hidden>·</span>
            <span>{article.readingTime} min read</span>
          </div>
        )}
      </div>
    </article>
  );
}
