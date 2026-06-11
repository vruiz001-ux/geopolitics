import type { Metadata } from 'next';
import { getAllAuthors } from '@/lib/data';
import { AuthorCard } from '@/components/AuthorCard';
import { NewsletterCTA } from '@/components/NewsletterCTA';

export const metadata: Metadata = {
  title: 'About',
  description:
    'GeoScope is an independent newsroom covering the people, institutions, and forces shaping the global order.',
};

export default function AboutPage() {
  const authors = getAllAuthors();
  return (
    <div className="container-page py-10 lg:py-16">
      <header className="mx-auto max-w-3xl">
        <p className="eyebrow text-accent">About</p>
        <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          We cover the world the way it actually moves.
        </h1>
        <p className="mt-6 font-serif text-xl leading-relaxed text-graphite">
          GeoScope is an independent newsroom built for readers who care about how decisions get
          made, by whom, and what comes next. Our reporting is original, structured, and honest
          about what we know and what we do not.
        </p>
      </header>

      <section className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 border-y border-rule py-12 sm:grid-cols-3">
        <div>
          <p className="eyebrow text-muted">What we do</p>
          <p className="mt-2 font-serif text-base leading-relaxed text-ink">
            Reported journalism on global power, business, technology, and climate, written by
            specialists with sources in the rooms where decisions happen.
          </p>
        </div>
        <div>
          <p className="eyebrow text-muted">How we write</p>
          <p className="mt-2 font-serif text-base leading-relaxed text-ink">
            Every story uses a structured format. You see the facts, why they matter, our analysis,
            another view, and what to watch next. No buried lede.
          </p>
        </div>
        <div>
          <p className="eyebrow text-muted">How we&apos;re funded</p>
          <p className="mt-2 font-serif text-base leading-relaxed text-ink">
            Subscriptions, sponsored newsletter takeovers labeled as such, and a small set of
            institutional partners. No clickbait. No surveillance ads.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">The newsroom</h2>
        <p className="mt-3 max-w-2xl font-serif text-base text-graphite">
          A small team of specialists, each covering one beat seriously.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {authors.map((author) => (
            <AuthorCard key={author.slug} author={author} variant="card" />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-3xl">
        <NewsletterCTA variant="block" />
      </section>
    </div>
  );
}
