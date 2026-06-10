'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { X, Search as SearchIcon } from 'lucide-react';
import {
  filterArticles,
  type ArticleSearchLite,
} from '@/lib/search-types';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: Props) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState<ArticleSearchLite[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    if (open && index.length === 0) {
      fetch('/search-index.json')
        .then((r) => r.json())
        .then((data) => {
          if (!cancelled) setIndex(data);
        })
        .catch(() => {});
    }
    return () => {
      cancelled = true;
    };
  }, [open, index.length]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  const results = filterArticles(index, query).slice(0, 8);

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      className="fixed inset-0 z-[100] flex items-start justify-center bg-ink/40 px-4 pt-20 sm:pt-28 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="w-full max-w-2xl rounded-xl bg-paper shadow-2xl ring-1 ring-rule">
        <div className="flex items-center gap-3 border-b border-rule px-4 py-3">
          <SearchIcon size={18} className="text-muted" aria-hidden />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories, authors, topics…"
            aria-label="Search query"
            className="flex-1 bg-transparent font-sans text-base text-ink placeholder:text-muted focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="rounded-full p-1.5 text-muted transition-colors hover:bg-rule/60 hover:text-ink"
          >
            <X size={18} aria-hidden />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-3">
          {query && results.length === 0 && (
            <div className="px-3 py-10 text-center font-serif text-muted">
              <p>No results for &ldquo;{query}&rdquo;.</p>
              <p className="mt-1 text-sm">Try a broader term, or check the categories below.</p>
            </div>
          )}
          {!query && (
            <div className="px-3 py-6">
              <p className="eyebrow mb-3 text-muted">Try searching for</p>
              <div className="flex flex-wrap gap-2">
                {['Semiconductors', 'EU defense', 'AI rules', 'Climate', 'Markets'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setQuery(t)}
                    className="rounded-full bg-rule/50 px-3 py-1 font-sans text-xs text-ink transition-colors hover:bg-rule"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}
          {results.map((article) => (
            <Link
              key={article.slug}
              href={`/article/${article.slug}`}
              onClick={onClose}
              className="block rounded-lg px-3 py-3 transition-colors hover:bg-rule/40"
            >
              <p className="eyebrow text-accent">{article.categoryName}</p>
              <p className="mt-1 font-serif text-[1.05rem] font-semibold leading-snug text-ink">
                {article.title}
              </p>
              <p className="mt-1 font-sans text-xs text-muted">
                By {article.authorName} · {article.readingTime} min read
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
