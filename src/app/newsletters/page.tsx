'use client';

import { useMemo, useState } from 'react';
import { Check, Mail } from 'lucide-react';
import { newsletters } from '@/data/newsletters';
import { NewsletterCard } from '@/components/NewsletterCard';

export default function NewslettersPage() {
  const [selected, setSelected] = useState<string[]>(['the-daily-brief']);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const toggle = (slug: string) =>
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );

  const selectedNames = useMemo(
    () =>
      newsletters
        .filter((n) => selected.includes(n.slug))
        .map((n) => n.name),
    [selected]
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected.length === 0) {
      setError('Please pick at least one newsletter.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setConfirmed(true);
  };

  return (
    <div className="container-page py-10 lg:py-16">
      <header className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-accent">Newsletters</p>
        <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          The stories that matter, where you read them.
        </h1>
        <p className="mt-4 font-serif text-lg leading-relaxed text-graphite">
          Six newsletters from the reporters who actually work the beat. Pick what you want.
          Unsubscribe in one click, any time.
        </p>
      </header>

      {confirmed ? (
        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-forest/30 bg-forest/5 p-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-forest text-paper">
            <Check size={22} aria-hidden />
          </div>
          <h2 className="font-serif text-2xl font-bold text-forest">You&apos;re in.</h2>
          <p className="mt-3 font-serif text-base text-graphite">
            We&apos;ve sent a confirmation link to <strong>{email}</strong>. Click it to start
            receiving:
          </p>
          <ul className="mt-4 inline-flex flex-col items-start gap-1 text-left font-serif text-sm text-ink">
            {selectedNames.map((n) => (
              <li key={n} className="flex items-center gap-2">
                <Check size={14} aria-hidden className="text-forest" />
                {n}
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setConfirmed(false);
              setEmail('');
            }}
            className="mt-6 font-sans text-sm font-medium text-ink underline-offset-4 hover:underline"
          >
            Subscribe to more
          </button>
        </div>
      ) : (
        <>
          <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsletters.map((n) => (
              <NewsletterCard
                key={n.slug}
                newsletter={n}
                selected={selected.includes(n.slug)}
                onToggle={() => toggle(n.slug)}
              />
            ))}
          </section>

          <form
            onSubmit={submit}
            noValidate
            className="mx-auto mt-12 max-w-2xl rounded-2xl bg-ink p-6 text-paper sm:p-10"
          >
            <div className="flex items-center gap-3">
              <Mail size={18} aria-hidden className="text-accent" />
              <p className="font-sans text-sm font-semibold uppercase tracking-wider text-accent">
                {selected.length === 0
                  ? 'Pick at least one newsletter'
                  : `${selected.length} ${selected.length === 1 ? 'newsletter' : 'newsletters'} selected`}
              </p>
            </div>
            <h2 className="mt-3 font-serif text-2xl font-bold leading-tight sm:text-3xl">
              Subscribe with one email.
            </h2>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.name@example.com"
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'email-error' : undefined}
                className="flex-1 rounded-md border border-paper/20 bg-paper/10 px-4 py-3 font-sans text-sm text-paper placeholder:text-paper/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="rounded-md bg-accent px-6 py-3 font-sans text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                Subscribe
              </button>
            </div>
            {error && (
              <p id="email-error" role="alert" className="mt-3 font-sans text-sm text-accent">
                {error}
              </p>
            )}
            <p className="mt-4 font-sans text-xs text-paper/60">
              By subscribing you agree to our terms. No spam. Unsubscribe anytime.
            </p>
          </form>
        </>
      )}
    </div>
  );
}
