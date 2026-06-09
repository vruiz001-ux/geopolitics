'use client';

import type { Newsletter } from '@/lib/types';
import { getAuthorById } from '@/lib/data';
import { Check } from 'lucide-react';

interface Props {
  newsletter: Newsletter;
  selected: boolean;
  onToggle: () => void;
}

export function NewsletterCard({ newsletter, selected, onToggle }: Props) {
  const author = getAuthorById(newsletter.authorId);
  const id = `newsletter-${newsletter.slug}`;
  return (
    <label
      htmlFor={id}
      className={`group relative flex h-full cursor-pointer flex-col rounded-xl border bg-white/40 p-6 transition-all hover:shadow-md ${
        selected ? 'border-ink ring-1 ring-ink' : 'border-rule'
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span
          className="inline-block h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: newsletter.accent }}
          aria-hidden
        />
        <div className="flex items-center gap-2">
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-md border transition-colors ${
              selected ? 'border-ink bg-ink text-paper' : 'border-rule bg-white'
            }`}
            aria-hidden
          >
            {selected && <Check size={12} strokeWidth={3} />}
          </span>
          <input
            id={id}
            type="checkbox"
            checked={selected}
            onChange={onToggle}
            className="sr-only"
            aria-label={`Select ${newsletter.name}`}
          />
        </div>
      </div>
      <p className="eyebrow text-muted">{newsletter.frequency}</p>
      <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-ink">
        {newsletter.name}
      </h3>
      <p className="mt-3 font-serif text-[0.95rem] leading-relaxed text-graphite">
        {newsletter.description}
      </p>
      <div className="mt-5 border-t border-rule pt-4">
        <p className="font-sans text-xs text-muted">
          Written by <span className="text-ink">{author?.name}</span> · {newsletter.subscribers} subscribers
        </p>
        <p className="mt-2 font-serif text-sm italic text-muted">
          &ldquo;{newsletter.preview}&rdquo;
        </p>
      </div>
    </label>
  );
}
