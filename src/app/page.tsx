import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  getHeroArticle,
  getFeaturedArticles,
  getAllArticles,
  getArticlesByCategory,
  getAllCategories,
} from '@/lib/data';
import { HeroStory } from '@/components/HeroStory';
import { ArticleCard } from '@/components/ArticleCard';
import { NewsletterCTA } from '@/components/NewsletterCTA';

export default function HomePage() {
  const hero = getHeroArticle();
  const featured = getFeaturedArticles().filter((a) => a.id !== hero?.id);
  const all = getAllArticles();
  const latest = all.filter((a) => a.id !== hero?.id).slice(0, 6);
  const categories = getAllCategories();
  const secondaryFeatured = featured.slice(0, 2);
  const tertiaryFeatured = featured.slice(2, 4);

  return (
    <div className="container-wide pb-16 pt-6 lg:pt-10">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-rule pb-3">
        <h1 className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-ink">
          Today&apos;s coverage
        </h1>
        <time
          className="font-sans text-xs text-muted"
          dateTime={new Date().toISOString()}
        >
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </time>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-9">
          {hero && <HeroStory article={hero} />}

          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-rule pt-10 md:grid-cols-2">
            {secondaryFeatured.map((article) => (
              <ArticleCard key={article.id} article={article} variant="large" showExcerpt />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-rule pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {tertiaryFeatured.concat(latest.slice(0, 4)).slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} variant="medium" />
            ))}
          </div>
        </div>

        <aside className="lg:col-span-3 lg:border-l lg:border-rule lg:pl-8">
          <h2 className="eyebrow mb-4 text-ink">Latest</h2>
          <ol className="divide-y divide-rule">
            {latest.map((article, i) => (
              <li key={article.id} className="py-4 first:pt-0">
                <div className="flex gap-3">
                  <span
                    className="font-mono text-xs font-semibold text-accent"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <Link
                      href={`/category/${article.category}`}
                      className="eyebrow text-muted link-hover"
                    >
                      {categories.find((c) => c.slug === article.category)?.name}
                    </Link>
                    <h3 className="mt-1 font-serif text-base font-semibold leading-snug">
                      <Link href={`/article/${article.slug}`} className="link-hover text-ink">
                        {article.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <NewsletterCTA variant="block" />
          </div>
        </aside>
      </div>

      {categories.map((category) => {
        const items = getArticlesByCategory(category.slug).slice(0, 4);
        if (items.length < 2) return null;
        return (
          <section key={category.slug} className="mt-20">
            <div className="mb-6 flex items-end justify-between gap-4 border-b border-rule pb-3">
              <div>
                <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
                  {category.name}
                </h2>
                <p className="mt-1 max-w-xl font-serif text-sm text-muted">
                  {category.description}
                </p>
              </div>
              <Link
                href={`/category/${category.slug}`}
                className="inline-flex items-center gap-1 font-sans text-sm font-medium text-ink link-hover"
              >
                More <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {items.map((article, i) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  variant={i === 0 ? 'medium' : 'small'}
                  showExcerpt={i === 0}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
