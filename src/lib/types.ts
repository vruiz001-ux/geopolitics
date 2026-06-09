export type SectionType =
  | 'facts'
  | 'why'
  | 'analysis'
  | 'another-view'
  | 'global'
  | 'whats-next'
  | 'sources';

export interface ArticleSection {
  type: SectionType;
  heading: string;
  content: string[];
  sources?: { label: string; url: string }[];
}

export interface Author {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  location: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
  expertise: string[];
}

export interface Category {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  color: string;
}

export interface Tag {
  slug: string;
  name: string;
}

export interface Newsletter {
  id: string;
  slug: string;
  name: string;
  description: string;
  frequency: string;
  authorId: string;
  subscribers: string;
  preview: string;
  accent: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  authorId: string;
  publishedAt: string;
  readingTime: number;
  image: string;
  imageAlt: string;
  imageCredit?: string;
  featured?: boolean;
  hero?: boolean;
  excerpt: string;
  sections: ArticleSection[];
  relatedArticleIds: string[];
}
