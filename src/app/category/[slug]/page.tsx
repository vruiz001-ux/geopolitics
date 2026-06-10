import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getCategoryBySlug,
  getArticlesByCategory,
  getAllCategories,
} from '@/lib/data';
import { ArticleCard } from '@/components/ArticleCard';
import { HeroStory } from '@/components/HeroStory';
import { NewsletterCTA } from '@/components/NewsletterCTA';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) return { title: 'Not found' };
  return {
    title: category.name,
    description: category.description,
  };
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug);
  if (!category) return notFound();
  const articles = getArticlesByCategory(category.slug);
  const [featured, ...rest] = articles;

  return (
    <div className="container-wide py-8 lg:py-12">
      <header className="mb-10 border-b border-rule pb-8">
        <p
          className="eyebrow font-semibold"
          style={{ color: category.color }}
        >
          Section
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {category.name}
        </h1>
        <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-graphite">
          {category.description}
        </p>
      </header>

      {articles.length === 0 ? (
        <div className="rounded-lg border border-dashed border-rule px-6 py-16 text-center">
          <p className="font-serif text-lg text-muted">
            No stories in this section yet. Check back soon.
          </p>
        </div>
      ) : (
        <>
          {featured && (
            <section className="mb-12 border-b border-rule pb-12">
              <HeroStory article={featured} />
            </section>
          )}

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="eyebrow mb-6 text-muted">More in {category.name}</h2>
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                {rest.map((article) => (
                  <ArticleCard key={article.slug} article={article} variant="medium" showExcerpt />
                ))}
              </div>
            </div>
            <aside className="lg:col-span-4 lg:border-l lg:border-rule lg:pl-8">
              <NewsletterCTA variant="block" />
              <div className="mt-8">
                <h2 className="eyebrow mb-4 text-muted">Recent picks</h2>
                <ul className="divide-y divide-rule">
                  {rest.slice(0, 5).map((a) => (
                    <li key={a.slug} className="py-3">
                      <ArticleCard
                        article={a}
                        variant="list"
                        showImage={false}
                        showAuthor={false}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </>
      )}
    </div>
  );
}
