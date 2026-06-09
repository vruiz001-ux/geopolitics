'use client';

import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

interface Props {
  variant?: 'inline' | 'block' | 'compact';
  newsletter?: string;
}

export function NewsletterCTA({ variant = 'block', newsletter = 'The Daily Brief' }: Props) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <div
        className={`flex items-center gap-3 rounded-xl border border-forest/30 bg-forest/5 p-5 ${
          variant === 'compact' ? 'text-sm' : ''
        }`}
        role="status"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-paper">
          <Check size={18} aria-hidden />
        </span>
        <div>
          <p className="font-sans text-sm font-semibold text-forest">You&apos;re subscribed.</p>
          <p className="font-serif text-sm text-graphite">
            Check your inbox to confirm. The next issue arrives tomorrow.
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row" noValidate>
        <label htmlFor="nl-email-compact" className="sr-only">Email address</label>
        <input
          id="nl-email-compact"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="input-base flex-1"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'nl-error-compact' : undefined}
        />
        <button type="submit" className="btn-primary">Subscribe</button>
        {error && (
          <p id="nl-error-compact" className="font-sans text-xs text-accent sm:hidden">
            {error}
          </p>
        )}
      </form>
    );
  }

  return (
    <div className={`rounded-xl bg-ink p-6 text-paper sm:p-8 ${variant === 'inline' ? 'my-10' : ''}`}>
      <div className="flex items-start gap-4">
        <span className="hidden h-10 w-10 flex-none items-center justify-center rounded-full bg-accent text-paper sm:inline-flex">
          <Mail size={18} aria-hidden />
        </span>
        <div className="flex-1">
          <p className="eyebrow text-accent">Newsletter</p>
          <h3 className="mt-1 font-serif text-2xl font-bold leading-tight">{newsletter}</h3>
          <p className="mt-2 font-serif text-base leading-relaxed text-paper/80">
            The headlines that matter, with the context that does not fit in a tweet. Delivered every weekday.
          </p>
          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-2 sm:flex-row" noValidate>
            <label htmlFor="nl-email-block" className="sr-only">Email address</label>
            <input
              id="nl-email-block"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-md border border-paper/20 bg-paper/10 px-4 py-3 font-sans text-sm text-paper placeholder:text-paper/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'nl-error-block' : undefined}
            />
            <button
              type="submit"
              className="rounded-md bg-accent px-5 py-3 font-sans text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Subscribe
            </button>
          </form>
          {error && (
            <p id="nl-error-block" className="mt-2 font-sans text-xs text-accent">
              {error}
            </p>
          )}
          <p className="mt-3 font-sans text-xs text-paper/60">
            No spam. Unsubscribe with one click.
          </p>
        </div>
      </div>
    </div>
  );
}
