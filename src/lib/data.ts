import { articles } from '@/data/articles';
import { authors } from '@/data/authors';
import { categories } from '@/data/categories';
import { newsletters } from '@/data/newsletters';
import { tags } from '@/data/tags';
import type { Article, Author, Category, Newsletter } from './types';

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getArticlesByAuthor(authorId: string): Article[] {
  return getAllArticles().filter((a) => a.authorId === authorId);
}

export function getRelatedArticles(article: Article): Article[] {
  return article.relatedArticleIds
    .map((id) => articles.find((a) => a.id === id))
    .filter((a): a is Article => Boolean(a));
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles().filter((a) => a.featured);
}

export function getHeroArticle(): Article | undefined {
  return getAllArticles().find((a) => a.hero);
}

export function getLatestArticles(limit = 6): Article[] {
  return getAllArticles().slice(0, limit);
}

export function getAuthorById(id: string): Author | undefined {
  return authors.find((a) => a.id === id);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getAllAuthors(): Author[] {
  return authors;
}

export function getAllNewsletters(): Newsletter[] {
  return newsletters;
}

export function getNewsletterBySlug(slug: string): Newsletter | undefined {
  return newsletters.find((n) => n.slug === slug);
}

export function getTagByslug(slug: string) {
  return tags.find((t) => t.slug === slug);
}

export function getTagName(slug: string): string {
  return tags.find((t) => t.slug === slug)?.name ?? slug;
}

export function searchArticles(query: string): Article[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getAllArticles().filter((a) => {
    const author = getAuthorById(a.authorId);
    const haystack = [
      a.title,
      a.subtitle,
      a.excerpt,
      a.category,
      ...a.tags.map(getTagName),
      author?.name ?? '',
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}

export function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatRelativeDate(iso: string): string {
  const date = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  if (hours < 1) return 'Just now';
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return formatDate(iso);
}
