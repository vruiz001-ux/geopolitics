// Generates static JSON files in public/ that the client needs.
// Runs as predev and prebuild. Reads from content/ (CMS-managed).
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const contentDir = join(root, 'content');
const publicDir = join(root, 'public');

mkdirSync(publicDir, { recursive: true });

function readJsonDir<T>(dir: string): T[] {
  const path = join(contentDir, dir);
  let files: string[] = [];
  try {
    files = readdirSync(path).filter((f) => f.endsWith('.json'));
  } catch {
    return [];
  }
  return files.map((f) => JSON.parse(readFileSync(join(path, f), 'utf8')) as T);
}

interface ArticleLite {
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

const articles = readJsonDir<any>('articles');
const authors = readJsonDir<any>('authors');
const categories = readJsonDir<any>('categories');
const newsletters = readJsonDir<any>('newsletters');
const tags = JSON.parse(readFileSync(join(contentDir, 'tags.json'), 'utf8')) as { slug: string; name: string }[];

const authorBySlug = new Map(authors.map((a) => [a.slug, a]));
const categoryBySlug = new Map(categories.map((c) => [c.slug, c]));
const tagBySlug = new Map(tags.map((t) => [t.slug, t]));

const searchIndex: ArticleLite[] = articles
  .map((a) => ({
    slug: a.slug,
    title: a.title,
    subtitle: a.subtitle,
    excerpt: a.excerpt,
    category: a.category,
    categoryName: categoryBySlug.get(a.category)?.name ?? a.category,
    tags: a.tags ?? [],
    tagNames: (a.tags ?? []).map((t: string) => tagBySlug.get(t)?.name ?? t),
    authorSlug: a.authorSlug,
    authorName: authorBySlug.get(a.authorSlug)?.name ?? '',
    image: a.image,
    imageAlt: a.imageAlt,
    readingTime: a.readingTime,
    publishedAt: a.publishedAt,
  }))
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

writeFileSync(join(publicDir, 'search-index.json'), JSON.stringify(searchIndex), 'utf8');

// Newsletters need to be client-fetchable for the multi-select signup form.
// Enrich with authorName so the client doesn't need to load the server data layer.
const newslettersEnriched = newsletters.map((n) => ({
  ...n,
  authorName: authorBySlug.get(n.authorSlug)?.name ?? '',
}));
writeFileSync(join(publicDir, 'newsletters.json'), JSON.stringify(newslettersEnriched), 'utf8');

console.log(
  `Wrote public/search-index.json (${searchIndex.length} articles) and public/newsletters.json (${newsletters.length} newsletters).`
);
