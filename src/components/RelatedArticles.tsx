import type { Article } from '@/lib/types';
import { ArticleCard } from './ArticleCard';

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;
  return (
    <section aria-labelledby="related-heading" className="mt-16 border-t border-rule pt-10">
      <h2 id="related-heading" className="eyebrow mb-6 text-muted">
        Related coverage
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} variant="medium" />
        ))}
      </div>
    </section>
  );
}
