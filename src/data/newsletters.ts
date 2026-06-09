import type { Newsletter } from '@/lib/types';

export const newsletters: Newsletter[] = [
  {
    id: 'n1',
    slug: 'the-daily-brief',
    name: 'The Daily Brief',
    description:
      'A six-minute read on the stories shaping the day, delivered before your first coffee. The headlines that matter, with the context that does not fit in a tweet.',
    frequency: 'Weekdays, 6:30am ET',
    authorId: 'a1',
    subscribers: '184K',
    preview: 'Today: a contested election in Eastern Europe, a fresh chip ban, and what the Fed minutes really said.',
    accent: '#C2410C',
  },
  {
    id: 'n2',
    slug: 'capital-flows',
    name: 'Capital Flows',
    description:
      'Markets through a geopolitical lens. Where the money is moving, who is moving it, and what it means for sovereign risk, M&A, and the new industrial policy.',
    frequency: 'Tuesdays & Thursdays',
    authorId: 'a2',
    subscribers: '72K',
    preview: 'This week: the Gulf sovereign funds quietly buying European utilities.',
    accent: '#1F3B2B',
  },
  {
    id: 'n3',
    slug: 'silicon-and-state',
    name: 'Silicon & State',
    description:
      'The contest over chips, models, and compute. Industrial policy, export controls, and the companies caught in the middle.',
    frequency: 'Weekly, Wednesdays',
    authorId: 'a3',
    subscribers: '96K',
    preview: 'How a single fab in Hsinchu became the most strategically valuable building on earth.',
    accent: '#3B2E78',
  },
  {
    id: 'n4',
    slug: 'the-transition',
    name: 'The Transition',
    description:
      'Climate, energy, and the rewiring of the global economy. Reporting from the front lines of decarbonization, plus the policy fights that will decide its pace.',
    frequency: 'Weekly, Mondays',
    authorId: 'a4',
    subscribers: '54K',
    preview: 'Why lithium prices fell off a cliff, and what comes next for the EV supply chain.',
    accent: '#1E5742',
  },
  {
    id: 'n5',
    slug: 'the-information-war',
    name: 'The Information War',
    description:
      'Platforms, propaganda, and the contested information space. Inside the newsrooms, state media operations, and tech companies shaping what billions of people believe.',
    frequency: 'Fridays',
    authorId: 'a5',
    subscribers: '38K',
    preview: 'A new investigation into a network of fake newsrooms operating across three continents.',
    accent: '#6B4423',
  },
  {
    id: 'n6',
    slug: 'the-weekend-read',
    name: 'The Weekend Read',
    description:
      'A single long piece every Saturday. Deeply reported, ambitious, and built for the kind of attention the news cycle rarely allows.',
    frequency: 'Saturdays',
    authorId: 'a1',
    subscribers: '128K',
    preview: 'This week: inside the year-long negotiation that almost averted a war.',
    accent: '#5B2A1C',
  },
];
