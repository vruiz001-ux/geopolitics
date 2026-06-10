import type { MetadataRoute } from 'next';
import { getAllArticles, getAllAuthors, getAllCategories } from '@/lib/data';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'hourly', priority: 1 },
    { url: `${SITE_URL}/newsletters`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/search`, changeFrequency: 'monthly', priority: 0.3 },
  ];

  const articles: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${SITE_URL}/article/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const categories: MetadataRoute.Sitemap = getAllCategories().map((c) => ({
    url: `${SITE_URL}/category/${c.slug}`,
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  const authors: MetadataRoute.Sitemap = getAllAuthors().map((a) => ({
    url: `${SITE_URL}/authors/${a.slug}`,
    changeFrequency: 'weekly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...articles, ...categories, ...authors];
}
