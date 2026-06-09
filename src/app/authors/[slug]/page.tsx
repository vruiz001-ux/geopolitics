import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Twitter, Linkedin, Mail, MapPin } from 'lucide-react';
import {
  getAuthorBySlug,
  getArticlesByAuthor,
  getAllAuthors,
} from '@/lib/data';
import { ArticleCard } from '@/components/ArticleCard';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllAuthors().map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const author = getAuthorBySlug(params.slug);
  if (!author) return { title: 'Not found' };
  return {
    title: author.name,
    description: author.bio,
  };
}

export default function AuthorPage({ params }: Props) {
  const author = getAuthorBySlug(params.slug);
  if (!author) return notFound();
  const articles = getArticlesByAuthor(author.id);

  return (
    <div className="container-wide py-10 lg:py-16">
      <header className="grid grid-cols-1 gap-8 border-b border-rule pb-12 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <img
            src={author.avatar}
            alt={`Portrait of ${author.name}`}
            className="aspect-square w-40 rounded-full object-cover lg:w-full"
          />
        </div>
        <div className="lg:col-span-9">
          <p className="eyebrow text-accent">{author.role}</p>
          <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {author.name}
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-graphite">
            {author.bio}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} aria-hidden /> {author.location}
            </span>
            {author.social?.twitter && (
              <a
                href={`https://twitter.com/${author.social.twitter.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 link-hover"
              >
                <Twitter size={14} aria-hidden /> {author.social.twitter}
              </a>
            )}
            {author.social?.linkedin && (
              <a
                href={`https://www.linkedin.com/in/${author.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 link-hover"
              >
                <Linkedin size={14} aria-hidden /> LinkedIn
              </a>
            )}
            {author.social?.email && (
              <a
                href={`mailto:${author.social.email}`}
                className="inline-flex items-center gap-1.5 link-hover"
              >
                <Mail size={14} aria-hidden /> Email
              </a>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {author.expertise.map((e) => (
              <span
                key={e}
                className="inline-flex items-center rounded-full border border-rule bg-white/40 px-3 py-1 font-sans text-xs text-ink"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="mt-12">
        <h2 className="eyebrow mb-6 text-muted">
          Stories by {author.name} <span className="text-ink">({articles.length})</span>
        </h2>
        {articles.length === 0 ? (
          <p className="font-serif text-muted">No articles yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="medium" showExcerpt />
            ))}
          </div>
        )}
      </section>

      <div className="mt-16 border-t border-rule pt-10 text-center">
        <p className="font-sans text-sm text-muted">
          More from the newsroom?{' '}
          <Link href="/" className="text-ink underline-offset-4 hover:underline">
            Browse all coverage
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
