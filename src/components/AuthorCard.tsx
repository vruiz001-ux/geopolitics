import Link from 'next/link';
import type { Author } from '@/lib/types';

interface Props {
  author: Author;
  variant?: 'inline' | 'detailed' | 'card';
}

export function AuthorCard({ author, variant = 'inline' }: Props) {
  if (variant === 'detailed') {
    return (
      <div className="flex flex-col gap-4 rounded-lg border border-rule bg-white/40 p-6 sm:flex-row sm:items-start">
        <img
          src={author.avatar}
          alt={`Portrait of ${author.name}`}
          className="h-16 w-16 flex-none rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="eyebrow text-muted">Author</p>
          <Link
            href={`/authors/${author.slug}`}
            className="mt-1 block font-serif text-xl font-semibold text-ink link-hover"
          >
            {author.name}
          </Link>
          <p className="font-sans text-sm text-muted">{author.role}</p>
          <p className="mt-3 font-serif text-[0.95rem] leading-relaxed text-graphite">
            {author.bio}
          </p>
        </div>
      </div>
    );
  }
  if (variant === 'card') {
    return (
      <Link
        href={`/authors/${author.slug}`}
        className="group block rounded-lg border border-rule bg-white/40 p-5 transition-shadow hover:shadow-md"
      >
        <div className="flex items-center gap-4">
          <img
            src={author.avatar}
            alt={`Portrait of ${author.name}`}
            className="h-14 w-14 flex-none rounded-full object-cover"
          />
          <div>
            <p className="font-serif text-lg font-semibold text-ink group-hover:text-accent">
              {author.name}
            </p>
            <p className="font-sans text-xs text-muted">{author.role}</p>
          </div>
        </div>
        <p className="mt-3 font-serif text-sm leading-relaxed text-graphite line-clamp-3">
          {author.bio}
        </p>
      </Link>
    );
  }
  return (
    <Link
      href={`/authors/${author.slug}`}
      className="inline-flex items-center gap-3 link-hover"
    >
      <img
        src={author.avatar}
        alt={`Portrait of ${author.name}`}
        className="h-9 w-9 rounded-full object-cover"
      />
      <div className="leading-tight">
        <p className="font-sans text-sm font-medium text-ink">{author.name}</p>
        <p className="font-sans text-xs text-muted">{author.role}</p>
      </div>
    </Link>
  );
}
