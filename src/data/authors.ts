import type { Author } from '@/lib/types';

export const authors: Author[] = [
  {
    id: 'a1',
    slug: 'iris-marchand',
    name: 'Iris Marchand',
    role: 'Chief Geopolitical Correspondent',
    bio: 'Iris has covered foreign policy and security for fifteen years, reporting from Brussels, Kyiv, and Singapore. Before joining Geopolitics she led the Europe desk at a wire service and was a fellow at the Council on Strategic Affairs.',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    location: 'London',
    social: {
      twitter: '@irismarchand',
      linkedin: 'iris-marchand',
      email: 'iris@geopolitics.example',
    },
    expertise: ['Europe', 'Security', 'NATO', 'Diplomacy'],
  },
  {
    id: 'a2',
    slug: 'daniel-okoro',
    name: 'Daniel Okoro',
    role: 'Business & Markets Editor',
    bio: 'Daniel writes about the intersection of capital and statecraft. He previously reported from Lagos and Johannesburg, and his investigation into sovereign debt restructuring won the Crossroads Prize.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    location: 'New York',
    social: {
      twitter: '@danielokoro',
      linkedin: 'danielokoro',
      email: 'daniel@geopolitics.example',
    },
    expertise: ['Markets', 'Sovereign Debt', 'Africa', 'M&A'],
  },
  {
    id: 'a3',
    slug: 'mei-zhang',
    name: 'Mei Zhang',
    role: 'Technology Correspondent',
    bio: 'Mei reports on the chip industry, AI policy, and the contest between the United States and China over compute. She holds a degree in computer science and previously worked as an engineer at a major foundry.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    location: 'Taipei',
    social: {
      twitter: '@meizhang',
      linkedin: 'meizhang',
      email: 'mei@geopolitics.example',
    },
    expertise: ['Semiconductors', 'AI Policy', 'East Asia', 'Industrial Policy'],
  },
  {
    id: 'a4',
    slug: 'rafael-cordoba',
    name: 'Rafael Córdoba',
    role: 'Senior Climate Reporter',
    bio: 'Rafael covers the energy transition and the politics of decarbonization. His work has taken him from lithium fields in the Atacama to wind farms in the North Sea.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    location: 'Mexico City',
    social: {
      twitter: '@rafcordoba',
      linkedin: 'rafael-cordoba',
      email: 'rafael@geopolitics.example',
    },
    expertise: ['Energy', 'Climate Policy', 'Latin America', 'Critical Minerals'],
  },
  {
    id: 'a5',
    slug: 'amara-singh',
    name: 'Amara Singh',
    role: 'Media & Platforms Editor',
    bio: 'Amara writes about the global information ecosystem, from state media operations to platform governance. She was previously a research fellow studying influence operations.',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    location: 'Singapore',
    social: {
      twitter: '@amarasingh',
      linkedin: 'amara-singh',
      email: 'amara@geopolitics.example',
    },
    expertise: ['Media', 'Platforms', 'Influence Operations', 'South Asia'],
  },
];
