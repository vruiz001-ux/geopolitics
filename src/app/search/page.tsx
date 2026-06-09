'use client';

import { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search as SearchIcon } from 'lucide-react';
import { searchArticles, getAuthorById, getCategoryBySlug } from '@/lib/data';
import { ArticleCard } from '@/components/ArticleCard';

function highlight(text: string, query: string) {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig'));
  return parts.map((p, i) =>
    p.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="rounded-sm bg-accentSoft px-0.5 text-accent">
        {p}
      </mark>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

function SearchInner() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get('q') ?? '';
  const [query, setQuery] = useState(initial);
  const results = searchArticles(query);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.replace(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="container-page py-10 lg:py-16">
      <header className="mb-10">
        <p className="eyebrow text-muted">Search</p>
        <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Find a story
        </h1>
      </header>

      <form onSubmit={submit} role="search" className="mb-8">
        <label htmlFor="search-input" className="sr-only">Search</label>
        <div className="flex items-center gap-2 rounded-full border border-rule bg-white/40 px-4 py-1 focus-within:border-ink">
          <SearchIcon size={18} aria-hidden className="text-muted" />
          <input
            id="search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by topic, headline, or author"
            className="flex-1 bg-transparent py-3 font-sans text-base text-ink placeholder:text-muted focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-ink px-4 py-2 font-sans text-xs font-medium uppercase tracking-wider text-paper transition-colors hover:bg-accent"
          >
            Search
          </button>
        </div>
      </form>

      {query.length === 0 ? (
        <div className="rounded-lg border border-dashed border-rule px-6 py-16 text-center">
          <p className="font-serif text-lg text-muted">
            Type a query above. Try a topic, a country, an author, or a category.
          </p>
        </div>
      ) : results.length === 0 ? (
        <div className="rounded-lg border border-dashed border-rule px-6 py-16 text-center">
          <p className="font-serif text-lg text-ink">
            No results for &ldquo;{query}&rdquo;.
          </p>
          <p className="mt-2 font-serif text-sm text-muted">
            Try a broader term or a different spelling.
          </p>
        </div>
      ) : (
        <>
          <p className="mb-6 font-sans text-sm text-muted" aria-live="polite">
            {results.length} {results.length === 1 ? 'result' : 'results'} for &ldquo;{query}&rdquo;
          </p>
          <ul className="divide-y divide-rule">
            {results.map((article) => {
              const author = getAuthorById(article.authorId);
              const category = getCategoryBySlug(article.category);
              return (
                <li key={article.id} className="py-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                    <a
                      href={`/article/${article.slug}`}
                      className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-rule sm:col-span-1"
                    >
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                    </a>
                    <div className="sm:col-span-3">
                      <a
                        href={`/category/${article.category}`}
                        className="eyebrow text-accent link-hover"
                      >
                        {category?.name}
                      </a>
                      <h2 className="mt-1 font-serif text-xl font-semibold leading-snug text-ink">
                        <a href={`/article/${article.slug}`} className="link-hover">
                          {highlight(article.title, query)}
                        </a>
                      </h2>
                      <p className="mt-2 font-serif text-base leading-relaxed text-graphite">
                        {highlight(article.subtitle, query)}
                      </p>
                      <p className="mt-2 font-sans text-xs text-muted">
                        {author?.name} · {article.readingTime} min read
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="container-page py-16">
          <p className="font-serif text-muted">Loading search…</p>
        </div>
      }
    >
      <SearchInner />
    </Suspense>
  );
}
