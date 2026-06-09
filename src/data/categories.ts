import type { Category } from '@/lib/types';

export const categories: Category[] = [
  {
    slug: 'politics',
    name: 'Politics',
    shortName: 'Politics',
    description:
      'Statecraft, elections, and the slow grind of power. Reporting on the people and institutions shaping the political landscape.',
    color: '#A03C1F',
  },
  {
    slug: 'business',
    name: 'Business',
    shortName: 'Business',
    description:
      'Markets, deals, and the strategy behind global commerce. Insight into the companies redrawing the world economy.',
    color: '#1F3B2B',
  },
  {
    slug: 'technology',
    name: 'Technology',
    shortName: 'Tech',
    description:
      'AI, semiconductors, platforms, and the policy contests around them. The forces remaking what is possible.',
    color: '#3B2E78',
  },
  {
    slug: 'climate',
    name: 'Climate',
    shortName: 'Climate',
    description:
      'Energy transition, adaptation, and the geopolitics of a warming planet. Where physics meets policy.',
    color: '#1E5742',
  },
  {
    slug: 'world',
    name: 'World',
    shortName: 'World',
    description:
      'Conflict, diplomacy, and the long currents shaping nations. Original reporting from every region.',
    color: '#5B2A1C',
  },
  {
    slug: 'media',
    name: 'Media',
    shortName: 'Media',
    description:
      'Newsrooms, platforms, and the contested information space. How the story gets told.',
    color: '#6B4423',
  },
];
