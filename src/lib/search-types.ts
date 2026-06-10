export interface ArticleSearchLite {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  categoryName: string;
  tags: string[];
  tagNames: string[];
  authorSlug: string;
  authorName: string;
  image: string;
  imageAlt: string;
  readingTime: number;
  publishedAt: string;
}

export function filterArticles(
  index: ArticleSearchLite[],
  query: string
): ArticleSearchLite[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return index.filter((a) => {
    const hay = [
      a.title,
      a.subtitle,
      a.excerpt,
      a.categoryName,
      ...a.tagNames,
      a.authorName,
    ]
      .join(' ')
      .toLowerCase();
    return hay.includes(q);
  });
}
