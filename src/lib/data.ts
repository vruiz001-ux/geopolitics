import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import type { Article, Author, Category, Newsletter, Tag } from './types';

const contentRoot = join(process.cwd(), 'content');

function readJson<T>(rel: string): T {
  return JSON.parse(readFileSync(join(contentRoot, rel), 'utf8')) as T;
}

function readCollection<T>(dir: string): T[] {
  const path = join(contentRoot, dir);
  let files: string[] = [];
  try {
    files = readdirSync(path).filter((f) => f.endsWith('.json'));
  } catch {
    return [];
  }
  return files.map((f) => readJson<T>(`${dir}/${f}`));
}

// In-memory caches built once per build
const _articles: Article[] = readCollection<Article>('articles');
const _authors: Author[] = readCollection<Author>('authors');
const _categories: Category[] = readCollection<Category>('categories');
const _newsletters: Newsletter[] = readCollection<Newsletter>('newsletters');
let _tags: Tag[] = [];
try {
  _tags = readJson<Tag[]>('tags.json');
} catch {
  _tags = [];
}

// Preserve declared category order from old file by using a canonical sort:
// politics, business, technology, climate, world, media; unknowns alphabetical after.
const CATEGORY_ORDER = ['politics', 'business', 'technology', 'climate', 'world', 'media'];
_categories.sort((a, b) => {
  const ai = CATEGORY_ORDER.indexOf(a.slug);
  const bi = CATEGORY_ORDER.indexOf(b.slug);
  if (ai === -1 && bi === -1) return a.name.localeCompare(b.name);
  if (ai === -1) return 1;
  if (bi === -1) return -1;
  return ai - bi;
});

export function getAllArticles(): Article[] {
  return [..._articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return _articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getArticlesByAuthor(authorSlug: string): Article[] {
  return getAllArticles().filter((a) => a.authorSlug === authorSlug);
}

export function getRelatedArticles(article: Article): Article[] {
  return (article.relatedSlugs ?? [])
    .map((s) => _articles.find((a) => a.slug === s))
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

export function getAuthorBySlug(slug: string): Author | undefined {
  return _authors.find((a) => a.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return _categories.find((c) => c.slug === slug);
}

export function getAllCategories(): Category[] {
  return _categories;
}

export function getAllAuthors(): Author[] {
  return _authors;
}

export function getAllNewsletters(): Newsletter[] {
  return _newsletters;
}

export function getNewsletterBySlug(slug: string): Newsletter | undefined {
  return _newsletters.find((n) => n.slug === slug);
}

export function getTagName(slug: string): string {
  return _tags.find((t) => t.slug === slug)?.name ?? slug;
}

export function getAllTags(): Tag[] {
  return _tags;
}

export function searchArticles(query: string): Article[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getAllArticles().filter((a) => {
    const author = getAuthorBySlug(a.authorSlug);
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
