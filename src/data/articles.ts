import type { Article } from '@/lib/types';

export const articles: Article[] = [
  {
    id: '1',
    slug: 'eu-summit-defense-package',
    title: 'EU leaders agree on a defense package that splits the bloc',
    subtitle:
      'A 240 billion euro plan to underwrite European arms production passed at 3am after a sleepless negotiation in Brussels. Three governments are already trying to walk it back.',
    category: 'politics',
    tags: ['eu', 'defense', 'elections'],
    authorId: 'a1',
    publishedAt: '2026-06-06T05:30:00Z',
    readingTime: 9,
    image:
      'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1600&h=900&fit=crop',
    imageAlt: 'EU flags outside the European Council building in Brussels at dawn',
    imageCredit: 'Unsplash',
    featured: true,
    hero: true,
    excerpt:
      'The package commits member states to joint procurement and a common arms fund. Hungary, Slovakia, and Ireland want to renegotiate before the September ratification deadline.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'The European Council approved a 240 billion euro defense industrial package at 3:14am on Friday, the largest joint defense commitment in the bloc\'s history.',
          'The deal creates a common procurement fund, a shared munitions stockpile, and a fast-track approval mechanism for cross-border arms projects.',
          'France, Germany, Poland, and the Nordics drove the agreement. Hungary and Slovakia abstained in the final vote, and Ireland appended a neutrality reservation.',
          'Ratification is required by September 30. Three governments have said they will seek revisions before then.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'For the first time since the failed European Defence Community in 1954, member states have agreed to pool a meaningful share of defense industrial policy.',
          'If the package survives ratification, it will redirect a generation of European industrial investment, shift the transatlantic balance, and remake several mid-cap defense firms into European champions.',
          'If it does not, the political damage to the bloc\'s credibility on hard security would be severe, and the gap between commitments and capability will widen further.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Iris\'s view',
        content: [
          'The interesting thing is not the headline number. It is the procurement fund. By committing roughly a third of the spend to joint orders, the bloc has built a mechanism that will, over time, force consolidation across nine national defense industrial bases.',
          'That consolidation is the point. Officials I spoke with in the small hours admit the package is partly a vehicle to do what no European government has been willing to do alone, which is shut down redundant production lines.',
          'The political fragility is real. But the structural pressure created by the fund will outlast the current set of governments. Once ministries write joint contracts, unwinding them becomes very expensive.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A senior official in Budapest told us the package is a "fait accompli dressed as consensus" and warned that Hungary will use every procedural lever available to delay ratification.',
          'Defense industrialists in two member states say the procurement fund will, in practice, channel orders to a small set of incumbents and squeeze out mid-cap suppliers, the opposite of the consolidation officials describe.',
          'A former NATO planner argued the package leaves the alliance\'s core problem untouched: the shortage of trained personnel, which no amount of industrial spending will solve in this decade.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'Washington has signaled cautious support. Officials say a credible European defense industrial base reduces the burden on the United States but worry about specific procurement rules that could exclude American suppliers.',
          'Moscow described the package in state media as evidence of European aggression. In private, analysts note Russian defense planners are taking it seriously.',
          'Beijing has been quiet. Chinese industrial planners are watching the joint procurement mechanism closely as a possible model for state-coordinated capacity expansion in other sectors.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'Ratification deadlines fall in three waves between July and September. Watch the Czech and Italian votes in late July, both currently expected to pass narrowly.',
          'The first joint procurement contracts under the fund are scheduled for the fourth quarter. The artillery shell and air defense missile lines will be the early tests.',
          'Expect a renewed political fight in the autumn over whether non-EU NATO members, particularly the United Kingdom and Norway, can participate in funded projects.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'European Council conclusions, June meeting', url: 'https://example.com/eucouncil' },
          { label: 'EDA industrial base report, 2026', url: 'https://example.com/eda-report' },
          { label: 'CSIS analysis: European defense consolidation', url: 'https://example.com/csis' },
        ],
      },
    ],
    relatedArticleIds: ['2', '7', '11'],
  },
  {
    id: '2',
    slug: 'chip-export-controls-third-wave',
    title: 'The third wave of chip export controls is the one that bites',
    subtitle:
      'New restrictions target the equipment used to make memory chips, a market Beijing was on track to dominate within five years. The fallout will reshape three industries.',
    category: 'technology',
    tags: ['semiconductors', 'china', 'us', 'sanctions'],
    authorId: 'a3',
    publishedAt: '2026-06-05T14:00:00Z',
    readingTime: 11,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=900&fit=crop',
    imageAlt: 'Close-up of a silicon wafer reflecting colored light',
    featured: true,
    hero: false,
    excerpt:
      'A coordinated rule update from Washington, The Hague, and Tokyo will block the sale of advanced lithography service contracts to roughly thirty Chinese fabs. The supply chain is already adapting.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'The United States, the Netherlands, and Japan issued coordinated export control updates last week targeting service and maintenance contracts on advanced lithography and deposition equipment installed in roughly thirty named Chinese facilities.',
          'The rules close a workaround that had allowed Chinese fabs to keep older equipment running through third-party service intermediaries based in Singapore and Malaysia.',
          'Memory chip producers in Wuxi and Hefei are the most exposed. Analysts estimate the new rules will cut the affected fabs\' effective capacity by 30 to 45 percent within eighteen months.',
          'Equipment makers ASML and Tokyo Electron have already revised guidance. Lam Research is expected to follow.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'Memory was the segment where Chinese fabs had a credible path to global cost leadership within the decade. These rules close that path for the foreseeable future.',
          'Global memory pricing, which has been soft for two years, will likely firm up through 2027 as Chinese capacity stalls and incumbents discipline output.',
          'The broader signal is the consolidation of an allied export control regime. Three years ago, this kind of coordination was thought impossible. It is now routine.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Mei\'s view',
        content: [
          'I spent last week in Hsinchu and Tainan. The mood in the executive offices is quiet relief mixed with anxiety about what comes next.',
          'Relief because the immediate competitive pressure from Yangtze Memory and CXMT recedes. Anxiety because every executive I spoke to understands that Beijing will respond, and the most plausible response targets the rare earth and gallium markets where China has near-monopoly leverage.',
          'The first-order impact is bullish for the memory incumbents. The second-order impact, the retaliatory escalation, is bearish for the entire semiconductor supply chain.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A semiconductor analyst in Seoul argues the controls are already priced in and that Chinese fabs have eighteen months of stockpiled spare parts. The cliff is real but slower than the consensus.',
          'A former Commerce Department official says the rules are too narrow and that the next wave should target the analog and power chip segments where Chinese producers have been quietly building dominant positions.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'In Brussels, officials are studying whether to join the coordinated regime formally. The European Council will discuss the question in the autumn.',
          'South Korean memory producers are publicly supportive and privately uncomfortable. They benefit from reduced competition but worry about retaliation against their Chinese assembly footprint.',
          'India is using the moment to pitch a renewed industrial policy package to attract memory packaging investment, particularly to Gujarat.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'Watch for a Chinese countermeasure within sixty days. The most likely target is the gallium and germanium export licensing regime, which Beijing tightened last year.',
          'A possible Korean exemption is under negotiation. If granted, it will signal the rules are aimed narrowly at Chinese capacity rather than the broader memory market.',
          'Equipment maker earnings in late July will be the first hard read on the demand impact.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'BIS rule update, June', url: 'https://example.com/bis' },
          { label: 'METI export control notice', url: 'https://example.com/meti' },
          { label: 'CSIS chip war tracker', url: 'https://example.com/chip-tracker' },
        ],
      },
    ],
    relatedArticleIds: ['1', '6', '12'],
  },
  {
    id: '3',
    slug: 'sovereign-wealth-utilities',
    title: 'Why Gulf sovereign funds are quietly buying European utilities',
    subtitle:
      'Three deals in the past quarter have brought GCC capital into critical European energy infrastructure. The pattern is deliberate, and Brussels is starting to notice.',
    category: 'business',
    tags: ['markets', 'eu', 'energy', 'middle-east'],
    authorId: 'a2',
    publishedAt: '2026-06-05T08:00:00Z',
    readingTime: 7,
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&h=900&fit=crop',
    imageAlt: 'Power lines crossing a European countryside at sunset',
    featured: true,
    excerpt:
      'A consortium led by ADIA and Mubadala has acquired stakes in grid operators across three EU member states. The deals are small enough to slip under the headline threshold but coordinated enough to look strategic.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'A consortium of Gulf sovereign funds has acquired non-controlling stakes in three European grid operators since March, with total disclosed deal value of 6.3 billion euros.',
          'The acquisitions span Iberia, the Benelux, and the Nordics, all in transmission rather than generation assets.',
          'Each deal sits below the 25 percent threshold that triggers automatic foreign investment review under the EU\'s screening regulation.',
          'A fourth transaction, targeting a French interconnector operator, is in due diligence.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'Transmission assets are long-duration, regulated, and politically sensitive. They are exactly the kind of infrastructure Brussels has been trying to keep under European ownership.',
          'The deals signal a deliberate Gulf strategy of acquiring positions in the European energy transition without triggering the political reaction that a single large transaction would produce.',
          'If the pattern continues, Gulf funds could hold influential minority positions across most of the EU\'s critical electricity infrastructure within five years.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Daniel\'s view',
        content: [
          'The structuring tells you these deals are coordinated even if the funds say otherwise. Each one sits just below the review threshold. Each one is in a regulated, predictable cash-flow asset. Each one happened in a country with a fiscally stressed government willing to sell.',
          'European utilities investors have been forced sellers for two reasons: the cost of the transition and political pressure to keep retail prices low. Gulf funds have been the deepest pool of patient capital willing to take the other side.',
          'The political reaction is coming. The question is whether Brussels updates the screening regulation, which would slow but not stop the trend, or whether member states act unilaterally, which would fragment the response.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A European pension fund executive argues the Gulf capital is unambiguously welcome. European pensions cannot deploy at the scale required by the transition, and excluding the largest pool of available capital would slow the buildout.',
          'A regulator in Spain pointed out that minority stakes in regulated transmission assets carry no operational control. The political concern, in this view, is overstated.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'The Gulf strategy mirrors a longer-running pattern in UK water and Australian airports, where sovereign funds have built dominant minority positions over a decade.',
          'In Washington, CFIUS officials are watching closely. A similar pattern in the US would face a tougher screening environment.',
          'Singapore and Norwegian sovereign funds have been quietly increasing European utility exposure as well, though through more conventional channels.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'The French interconnector deal is the next test. If it clears, expect a wave of similar transactions through year end.',
          'A revised EU screening regulation is on the Commission\'s agenda for the autumn. The threshold debate will be the central fight.',
          'Watch for a coordinated response in two or three capitals that bypasses the EU framework entirely.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'EU FDI screening report', url: 'https://example.com/eu-fdi' },
          { label: 'ADIA annual review', url: 'https://example.com/adia' },
        ],
      },
    ],
    relatedArticleIds: ['1', '4', '9'],
  },
  {
    id: '4',
    slug: 'lithium-collapse',
    title: 'The lithium crash is rewiring the EV supply chain',
    subtitle:
      'Spot prices have fallen 78 percent from the 2023 peak. The pain is concentrated in a handful of mid-tier producers, and the consolidation is just starting.',
    category: 'climate',
    tags: ['climate', 'energy', 'latam', 'markets'],
    authorId: 'a4',
    publishedAt: '2026-06-04T11:00:00Z',
    readingTime: 8,
    image:
      'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=1600&h=900&fit=crop',
    imageAlt: 'Aerial view of a lithium brine evaporation pond',
    featured: true,
    excerpt:
      'Three Australian producers have suspended operations. Argentinian projects are quietly delayed. The new lithium price is reshaping which battery chemistries dominate the next decade.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'Lithium carbonate spot prices fell to $9,400 per ton last week, down 78 percent from the November 2023 peak.',
          'Three Australian hard-rock producers have suspended operations citing unviable economics. Two Argentinian brine projects have been delayed by twelve to eighteen months.',
          'Chinese refiners continue to ramp output, accepting margin compression in exchange for share.',
          'Battery cell makers are renegotiating long-term contracts, with some demanding floors at $12,000 per ton.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'The lithium price collapse is forcing a generational consolidation in the upstream supply chain. The mid-tier independents that funded the last cycle\'s growth are largely uneconomic at current prices.',
          'The crash is also shifting the competitive landscape between battery chemistries. LFP, which uses less lithium per kWh, gains; high-nickel chemistries lose ground.',
          'The longer-term concern is that today\'s low prices are killing the supply investment needed to meet 2030 demand. The cycle is setting up the next shortage.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Rafael\'s view',
        content: [
          'I visited two projects in the Salta region last month. The mood has shifted from cautious optimism to triage. Engineering teams are being released. Off-take negotiations have stalled.',
          'The producers that survive this cycle will be the integrated Chinese refiners and a small number of well-capitalized incumbents. The independent juniors that defined the last cycle are mostly finished.',
          'The strategic question is whether Western governments respond with floor-price mechanisms or strategic stockpiles. Both are politically difficult. The status quo is the de facto policy, and it is delivering the supply chain to Chinese consolidation.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A battery materials trader in Shanghai argues the price decline is necessary and overdue, and that the 2023 peak was an anomaly driven by speculative inventory.',
          'An Australian mining executive countered that current prices reflect Chinese refiners willing to operate below cash cost to drive out competition, and that policy intervention is justified.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'The United States Inflation Reduction Act provisions are partially insulating American producers, but the gap with Chinese costs has widened.',
          'The European Critical Raw Materials Act offers indicative price support but no committed floor. Industry is lobbying for stronger language in the autumn revision.',
          'Chile is reconsidering its national lithium strategy, with the state company pushing for a larger operating role to manage the cycle.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'Watch the next round of long-term contract negotiations, due in the third quarter. The floor price debate will be central.',
          'A coordinated supply discipline announcement from the four largest producers is possible but unlikely; the structure of the market makes it hard to enforce.',
          'Battery cell maker guidance in the August earnings cycle will reveal how much of the price decline is passing through to consumers.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'IEA critical minerals outlook', url: 'https://example.com/iea' },
          { label: 'Benchmark Mineral Intelligence', url: 'https://example.com/benchmark' },
        ],
      },
    ],
    relatedArticleIds: ['9', '3', '15'],
  },
  {
    id: '5',
    slug: 'state-media-network',
    title: 'Inside a network of fake newsrooms operating across three continents',
    subtitle:
      'A six-month investigation has traced more than forty pseudo-local news sites to a single content operation. The model is sophisticated, and it is spreading.',
    category: 'media',
    tags: ['platforms', 'china', 'africa'],
    authorId: 'a5',
    publishedAt: '2026-06-03T16:00:00Z',
    readingTime: 12,
    image:
      'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1600&h=900&fit=crop',
    imageAlt: 'Newspapers piled on a desk',
    featured: true,
    excerpt:
      'The sites publish a mix of harmless local-interest pieces and carefully placed narratives that align with a single foreign state. The infrastructure is shared, the editors anonymous, and the reach growing.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'Researchers at three independent organizations have identified forty-three websites operating since 2022 that present as local news outlets in West Africa, the Balkans, and Central Asia.',
          'Technical analysis links the sites to a single content management infrastructure hosted across three jurisdictions.',
          'Roughly seventy percent of the content is innocuous local-interest material aggregated from legitimate sources. The remainder is targeted political and geopolitical commentary aligned with a single state actor.',
          'Combined monthly readership exceeds 18 million unique users, with the largest reach in three African capitals.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'The model is more sophisticated than the meme-and-troll-farm operations of the previous decade. By burying narrative content inside a high volume of legitimate local journalism, the operation acquires the credibility that algorithmic detection systems use to weight content.',
          'The sites are also harder to take down. Each one has a plausible local masthead, a real-seeming editorial calendar, and content that does not, on its face, violate platform policies.',
          'If this model scales, the long-term effect is the gradual displacement of independent local journalism in markets where it is already economically fragile.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Amara\'s view',
        content: [
          'I spent four months tracing this network. The most striking thing is the patience of it. The sites built credibility for nearly two years before any narrative content appeared, and the narrative content is still less than a third of the total output.',
          'This is what the next generation of influence operations looks like. Not bots, not meme farms, but slow infrastructure that mimics the actual structure of local journalism, including hiring real freelancers for the cover content.',
          'The defense is hard because the sites are not, technically, lying about being newsrooms. They are newsrooms. They publish news. The problem is the editorial layer above them, which is invisible.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A platform policy executive argued that takedown is the wrong frame, and that the more durable response is investment in independent local journalism in the affected markets.',
          'A media development organization warned that aggressive labeling of foreign-linked sites risks collateral damage to legitimate diaspora media operations that share infrastructure for unrelated reasons.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'Variants of the model have been documented in Latin America, though at smaller scale and with different state sponsors.',
          'European regulators are watching closely. The Digital Services Act gives the Commission authority to compel platform transparency about content provenance, but enforcement against this kind of operation is untested.',
          'Civil society organizations in two of the affected African countries have asked their governments not to respond with broad media restrictions that would also harm domestic press freedom.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'The full investigation report will be published next week, including the technical infrastructure analysis.',
          'Two major platforms have been briefed on the findings and have indicated they will take action; the scope and timing remain uncertain.',
          'Expect copycat operations within a year. The model is replicable, and the cost of entry is low.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'Stanford Internet Observatory archive', url: 'https://example.com/sio' },
          { label: 'EU DisinfoLab reports', url: 'https://example.com/disinfolab' },
        ],
      },
    ],
    relatedArticleIds: ['13', '17', '18'],
  },
  {
    id: '6',
    slug: 'ai-model-regulation-final-text',
    title: 'The final AI model rules are narrower than industry feared and broader than civil society hoped',
    subtitle:
      'The compromise text emerged from a week of late-night drafting. It will set the global baseline whether other jurisdictions follow it or not.',
    category: 'technology',
    tags: ['ai', 'eu', 'platforms'],
    authorId: 'a3',
    publishedAt: '2026-06-03T09:00:00Z',
    readingTime: 10,
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&h=900&fit=crop',
    imageAlt: 'Server room interior with blue lighting',
    excerpt:
      'Frontier models above the compute threshold face new transparency and incident-reporting obligations. Open-source models get a narrow but real exemption. The downstream deployer rules are the surprise.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'The compromise text on frontier AI regulation was finalized at 11pm Tuesday after a week of trilogue negotiation.',
          'Models above a 10^25 FLOPS training compute threshold face mandatory pre-deployment evaluation, incident reporting within seven days, and red-team disclosure to a new oversight body.',
          'A narrow exemption for open-weight models was preserved, conditional on documented compute and dataset disclosures.',
          'Downstream deployers above a use-volume threshold face their own obligations, a late addition that surprised most industry observers.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'The compute threshold is high enough to exclude most current models but low enough that the next generation will fall under the rules.',
          'The downstream deployer obligations are the most consequential novelty. They extend regulatory reach beyond the labs to the companies actually integrating models into production systems.',
          'As the first comprehensive frontier model regime, this text will set the global default. Other jurisdictions will copy parts of it whether or not they adopt the full framework.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Mei\'s view',
        content: [
          'The compute threshold debate was the loudest fight, but the downstream rules are the more interesting outcome. They reflect a recognition that model behavior in deployment is shaped at least as much by the deployer\'s integration choices as by the lab\'s training decisions.',
          'The labs got most of what they wanted on the threshold. The deployers got blindsided. Expect a year of lobbying to soften the use-volume calculations before the rules take effect.',
          'The open-weight exemption is narrow but real. It will keep European open-source viable, which matters strategically even if the open models are not at the frontier.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A civil society advocate argued the threshold is too high and that the rules effectively grandfather the existing labs while doing nothing about most of the AI systems that affect ordinary people today.',
          'A US tech industry representative said the downstream deployer rules are unworkable and will be challenged in court as soon as the implementing regulations appear.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'Washington is studying the text. The administration\'s own framework is expected to borrow the incident reporting structure while diverging on thresholds.',
          'London has signaled it will not match the rules and is positioning the UK as a lighter-touch alternative jurisdiction.',
          'Beijing\'s domestic model rules are already stricter on content but lighter on transparency. Convergence is unlikely.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'Implementing regulations are due in eighteen months. The detailed evaluation methodology will be the central fight.',
          'The new oversight body needs to be staffed; senior hires expected by year end.',
          'Watch for early test cases involving incident reporting, where the seven-day window will be the friction point.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'EU AI Office briefing', url: 'https://example.com/aioffice' },
          { label: 'OECD AI Principles', url: 'https://example.com/oecd' },
        ],
      },
    ],
    relatedArticleIds: ['2', '12', '19'],
  },
  {
    id: '7',
    slug: 'eastern-europe-election-result',
    title: 'A contested election in Eastern Europe ends with two governments claiming victory',
    subtitle:
      'The ruling party and the opposition coalition both announced wins before the official count was complete. The constitutional court will decide.',
    category: 'politics',
    tags: ['elections', 'eu'],
    authorId: 'a1',
    publishedAt: '2026-06-02T22:00:00Z',
    readingTime: 6,
    image:
      'https://images.unsplash.com/photo-1495546968767-f0573cca821e?w=1600&h=900&fit=crop',
    imageAlt: 'Voters lining up outside a polling station',
    excerpt:
      'Exit polls put the opposition coalition ahead by three points. The state election commission, controlled by ruling party appointees, has not yet certified results.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'Polls closed at 9pm Sunday in a parliamentary election widely seen as a test of democratic backsliding.',
          'Exit polls from three independent organizations showed the opposition coalition winning by between two and four percentage points.',
          'The ruling party declared victory at 10:14pm; the opposition coalition declared victory at 11:02pm.',
          'The state election commission has not certified results. International observers have flagged procedural concerns at roughly twelve percent of polling stations.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'The outcome will determine whether the country\'s judicial reforms, frozen for two years under EU pressure, are reversed or accelerated.',
          'A contested transition would test the constitutional court, itself the subject of three years of partisan restructuring.',
          'The result also bears on the country\'s position in the EU defense package, where the current government has been a holdout.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Iris\'s view',
        content: [
          'The most important number is not the headline margin but the variance between regions. The opposition\'s lead is concentrated in cities; the ruling party held rural districts more strongly than polls suggested.',
          'That pattern matters because the constitutional court has, in past disputes, weighted procedural challenges from rural districts more heavily.',
          'A clean transition is still the most likely outcome. But the path to it runs through institutions that have been weakened by the last decade of pressure.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A ruling party official insisted the exit polls oversample urban voters and that the ground-truth result will favor the government once rural mail-in ballots are counted.',
          'A constitutional law professor warned that even a clean opposition victory will face a court that may invalidate the result on procedural grounds.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'Brussels has signaled it will recognize the opposition coalition\'s declaration if the election commission delays beyond seventy-two hours.',
          'Washington has been quieter. Officials describe the situation as primarily a European matter.',
          'Russian and Chinese state media have amplified the ruling party\'s narrative.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'The election commission has a 72-hour window before procedural concerns escalate. Watch the Tuesday certification deadline.',
          'A constitutional court ruling is expected within ten days if the result is challenged.',
          'Street mobilization is possible. Both sides have called for "vigilance" near the parliament building.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'OSCE/ODIHR observation report', url: 'https://example.com/osce' },
        ],
      },
    ],
    relatedArticleIds: ['1', '11', '14'],
  },
  {
    id: '8',
    slug: 'central-bank-pivot',
    title: 'Two more central banks pivot. The question is whether the Fed follows.',
    subtitle:
      'The Bank of Canada cut yesterday. The ECB cuts next week, almost certainly. Powell\'s next move is the one that matters for global capital flows.',
    category: 'business',
    tags: ['central-banks', 'markets', 'us'],
    authorId: 'a2',
    publishedAt: '2026-06-02T13:00:00Z',
    readingTime: 7,
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=900&fit=crop',
    imageAlt: 'Skyscrapers in a financial district at dusk',
    excerpt:
      'Markets have priced two more US cuts this year. The minutes suggest the FOMC is less convinced. The mismatch is setting up a volatile summer.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'The Bank of Canada cut its policy rate by 25 basis points yesterday, the third cut in this cycle.',
          'The European Central Bank meets next week; market-implied probability of a cut sits at 92 percent.',
          'The Bank of England signaled in last week\'s minutes that a cut is possible at the August meeting.',
          'Federal Reserve minutes released last week showed greater caution than markets had expected, with multiple participants flagging sticky services inflation.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'A growing divergence between the Fed and other major central banks would strengthen the dollar materially and put renewed pressure on emerging market currencies.',
          'For emerging market sovereign borrowers, the dollar path is the dominant variable. A delayed Fed pivot means another six months of expensive funding.',
          'The divergence also raises questions about the political durability of independent central banking, with the US election cycle making the politics of high rates harder.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Daniel\'s view',
        content: [
          'The market is pricing two cuts this year. The minutes suggest one, possibly zero. That gap is the trade for the summer.',
          'The interesting positioning is in EM sovereign credit. The spread compression of the past three months assumes the dollar weakens. If it does not, those positions unwind quickly.',
          'Powell\'s political situation is harder than the market acknowledges. The institutional pressure to ease before the election is real even if the data does not support it.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A former FOMC governor argued that the minutes are being over-read and that the median participant remains comfortable with two cuts on the current data.',
          'A sovereign debt strategist countered that EM has more cushion than 2022 levels suggest, and that the pivot delay is manageable.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'Japan continues to normalize on its own track, mostly disconnected from the Fed cycle.',
          'Emerging market central banks are increasingly willing to ease ahead of the Fed, a shift from the 2022 pattern when they followed.',
          'China is running a different cycle entirely, with quasi-fiscal stimulus substituting for explicit rate moves.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'ECB next Thursday. The press conference will be more important than the decision itself.',
          'US payrolls on Friday. A soft print would partially close the market-Fed gap.',
          'The September FOMC is the live meeting. Positioning into it is already underway.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'FOMC minutes', url: 'https://example.com/fomc' },
          { label: 'ECB monetary policy decisions', url: 'https://example.com/ecb' },
        ],
      },
    ],
    relatedArticleIds: ['3', '15', '16'],
  },
  {
    id: '9',
    slug: 'green-hydrogen-reality-check',
    title: 'The green hydrogen reality check has arrived',
    subtitle:
      'Three flagship projects cancelled in two months. The technology works. The economics, at current power prices, do not.',
    category: 'climate',
    tags: ['climate', 'energy'],
    authorId: 'a4',
    publishedAt: '2026-06-01T10:00:00Z',
    readingTime: 8,
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&h=900&fit=crop',
    imageAlt: 'Wind turbines on a hillside',
    excerpt:
      'The cancellations are not a verdict on hydrogen. They are a verdict on the assumption that subsidies plus cheap renewables would close the gap on their own. Without firm offtake, they do not.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'Three large-scale green hydrogen projects have been cancelled or indefinitely postponed in the past two months, with combined nameplate capacity of 2.1 GW of electrolysis.',
          'Affected projects span Spain, Australia, and a Gulf state, all previously held up as flagship demonstrations of the emerging supply chain.',
          'The common factor across cancellations is the absence of firm offtake contracts at prices that close the gap to grey hydrogen.',
          'Project costs have risen roughly 35 percent from 2022 estimates, driven by power purchase agreements and balance-of-plant inflation.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'Green hydrogen was the centerpiece of decarbonization plans for heavy industry, shipping, and chemicals. Its delay reshapes the achievable trajectory for those sectors.',
          'The cancellations also reset investor expectations and will reduce capital availability for the next wave of projects, even ones with stronger fundamentals.',
          'The political durability of net-zero plans depends on demonstration projects working. When the flagship projects fail, the broader plans lose credibility.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Rafael\'s view',
        content: [
          'The cancellations are not a failure of the technology. The electrolyzer cost curve is moving in the right direction. The failure is a policy design that assumed subsidies plus cheap renewables would create demand.',
          'They do not. The buyers, mostly hard-to-abate industrials, need certainty on both price and supply. The current contract structures deliver neither.',
          'The fix is not more subsidy on the supply side. It is firm offtake mandates or contracts-for-difference on the demand side. Until governments are willing to take that step, the next wave of projects will look like the last.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A hydrogen industry executive argued the cancellations are a healthy correction and that the projects proceeding now are better structured and more likely to succeed.',
          'A climate policy researcher pushed back on the offtake-mandate framing, noting that the political coalition required to impose mandates on industry is weaker than it was two years ago.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'The US Inflation Reduction Act\'s hydrogen tax credit, in its narrower interpretation, is delivering projects but at a smaller scale than originally projected.',
          'Japan and South Korea are pivoting toward blue hydrogen and ammonia imports while the green economics improve.',
          'Chile and Namibia, two of the most ambitious green hydrogen export hopes, are recalibrating timelines.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'EU revision of the Renewable Energy Directive provisions on hydrogen is due in the autumn. The additionality and temporal correlation rules will be the central fight.',
          'A handful of projects with credible firm offtake remain on track. Watch their final investment decisions over the next twelve months.',
          'Steel and ammonia offtake contracts will be the test. If those sectors do not sign, the green hydrogen demand case weakens further.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'IEA hydrogen review 2025', url: 'https://example.com/iea-h2' },
        ],
      },
    ],
    relatedArticleIds: ['4', '15', '20'],
  },
  {
    id: '10',
    slug: 'platform-news-deal-collapse',
    title: 'The platform-publisher news deal that defined a decade is collapsing',
    subtitle:
      'Three of the major platforms have signaled they will not renew their content licensing agreements with publishers. The revenue cliff is real, and it lands by the end of the year.',
    category: 'media',
    tags: ['platforms', 'us', 'eu'],
    authorId: 'a5',
    publishedAt: '2026-05-31T15:00:00Z',
    readingTime: 9,
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&h=900&fit=crop',
    imageAlt: 'A hand scrolling through news on a phone',
    excerpt:
      'For most large publishers, platform deals are between five and eighteen percent of digital revenue. The expiration calendars are now visible on the horizon, and there is no replacement.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'Three major platforms have indicated to publishers that current content licensing agreements will not be renewed when they expire between September and February.',
          'A fourth platform has signaled it will renew on materially less favorable terms.',
          'For large publishers, these deals represent between 5 and 18 percent of digital revenue.',
          'A handful of jurisdictions (Australia, France, Canada) have legislative frameworks that mandate negotiation; the platforms are testing whether those frameworks survive a withdrawal.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'For publishers, the loss of platform revenue is the third major hit to the business model in a decade, after the collapse of print classifieds and the rise of programmatic ads.',
          'For platforms, the calculation is that AI summaries reduce their need for high-quality content licensing, and that the legislative frameworks compelling them to pay can be either repealed or routed around.',
          'For readers, the effect is a structural reduction in the supply of reported journalism, particularly in the markets where the platforms are dropping out.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Amara\'s view',
        content: [
          'The platforms are doing this now because they think they can. The political environment for forcing them to pay has weakened in two of the four major jurisdictions, and AI gives them a credible-sounding substitute for the licensed content.',
          'For publishers, the response cannot be defensive. The platforms will not be brought back. The viable strategy is to harden direct relationships with readers and to invest in the formats, like longform and audio, that the platforms cannot substitute for.',
          'The places where it gets ugly are the smaller and mid-tier publishers who do not have the brand to convert direct, and who built their business around the platform revenue.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A platform executive argued the licensing deals never made economic sense for either side and that publishers benefit more from organic platform traffic than from licensing payments.',
          'A media analyst countered that the loss of licensing revenue will accelerate consolidation, with the surviving publishers being the ones already most dependent on subscription revenue.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'Australia\'s news media bargaining code is the central test case. If the platforms successfully withdraw without paying, the model is dead globally.',
          'The EU is watching closely and may pursue a regulatory response under existing competition law, though the timeline is long.',
          'Smaller markets without legislative frameworks are seeing the steepest declines in platform-driven traffic already.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'The first major contract expiration is in September. Watch for last-minute legislative pressure in two affected jurisdictions.',
          'Publisher M&A activity in the autumn will signal how the industry is repositioning.',
          'A coordinated publisher response, modeled on previous antitrust complaints, is being discussed but faces collective action problems.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'Reuters Institute Digital News Report', url: 'https://example.com/rdi' },
        ],
      },
    ],
    relatedArticleIds: ['5', '17', '18'],
  },
  {
    id: '11',
    slug: 'turkey-pivot',
    title: 'Ankara\'s quiet pivot is reshaping the eastern Mediterranean',
    subtitle:
      'A series of small announcements over the past quarter point to a more pragmatic Turkish foreign policy. The strategic implications are large.',
    category: 'world',
    tags: ['middle-east', 'eu', 'defense'],
    authorId: 'a1',
    publishedAt: '2026-05-30T07:00:00Z',
    readingTime: 8,
    image:
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1600&h=900&fit=crop',
    imageAlt: 'The Bosphorus strait at dawn',
    excerpt:
      'Maritime delimitation talks have resumed with Greece. A new gas exploration agreement with Egypt is in the final stages. The pivot is real, and Brussels has noticed.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'Turkey and Greece resumed maritime delimitation talks in March, the first formal engagement at this level in over a decade.',
          'A bilateral gas exploration agreement with Egypt has cleared technical drafting and awaits political sign-off in both capitals.',
          'Turkish defense industrial cooperation with two Gulf states has expanded materially, with three new contracts disclosed in the past quarter.',
          'EU-Turkey customs union modernization talks, dormant since 2018, are scheduled to resume in July.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'The eastern Mediterranean has been a chronic source of friction for fifteen years. A durable Turkish pivot toward pragmatic engagement reduces a meaningful tail risk for European security.',
          'Turkey\'s defense industrial relationships are reshaping arms markets in the Gulf and parts of Africa, with second-order effects on legacy Western suppliers.',
          'The EU customs union modernization, if it happens, is the most significant deepening of EU-Turkey economic ties in a generation.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Iris\'s view',
        content: [
          'The Turkish pivot is real but conditional. It depends on a set of domestic economic pressures that are unlikely to abate in the near term.',
          'The question for Europe is whether to embed the pivot in institutional commitments while the window is open. The customs union modernization is the natural vehicle.',
          'The risk is that the EU treats the pivot as a permanent shift and over-invests in commitments that a future Turkish government might walk back. The pragmatic course is to lock in the gains incrementally.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A Greek diplomat argued the maritime talks are progressing but that the underlying issues remain unresolved and the talks could break down at any time.',
          'A Turkish defense analyst pushed back on the framing of a pivot, arguing that Turkish foreign policy has been consistently transactional and that the recent moves are simply better-marketed.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'Washington has welcomed the pivot but is cautious about over-investing given the volatility of US-Turkey relations over the past decade.',
          'Russia is watching the shift carefully, particularly the cooperation with Egypt, which complicates Moscow\'s eastern Mediterranean posture.',
          'Gulf capitals are leveraging the moment to deepen defense ties at favorable commercial terms.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'EU customs union talks open in July. The Cyprus question will be the central friction point.',
          'Egypt gas agreement expected in the autumn. Implementation will reveal whether the pivot is durable or cosmetic.',
          'Turkish elections in 2028 are the structural risk. Watch domestic political signaling for early indications.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'European External Action Service briefings', url: 'https://example.com/eeas' },
        ],
      },
    ],
    relatedArticleIds: ['1', '7', '14'],
  },
  {
    id: '12',
    slug: 'frontier-lab-safety-incident',
    title: 'A frontier lab\'s safety incident, and what it tells us about the next wave',
    subtitle:
      'The incident was contained quickly and disclosed within the new seven-day window. The interesting question is what happens when a lab decides not to disclose.',
    category: 'technology',
    tags: ['ai', 'us', 'platforms'],
    authorId: 'a3',
    publishedAt: '2026-05-29T12:00:00Z',
    readingTime: 7,
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&h=900&fit=crop',
    imageAlt: 'Abstract image of glowing circuit lines',
    excerpt:
      'A red-team exercise surfaced a capability that the lab had not previously documented. The disclosure was clean. The next one will not be.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'A frontier lab disclosed last week that an internal red-team exercise surfaced an unanticipated capability in its latest model.',
          'The capability involved improved chemistry reasoning above the threshold the lab had committed to flag.',
          'Disclosure to the new oversight body occurred within six days of the finding, inside the seven-day window.',
          'Deployment of the model was paused pending evaluation, with the lab estimating a four to six week delay.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'This is the first significant disclosure under the new regime, and the cleanness of it sets a precedent for how subsequent incidents will be handled.',
          'The four to six week deployment delay is meaningful commercial cost. If the regime is to remain credible, that cost has to be borne consistently.',
          'The harder test will come when a lab is tempted not to disclose. The detection mechanisms outside the labs themselves are weak.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Mei\'s view',
        content: [
          'This was the easy case. The lab caught the capability internally, disclosed within the window, and absorbed the deployment delay. The regime worked because the lab wanted it to work.',
          'The hard cases are the ones where the capability is surfaced post-deployment, or where the lab\'s internal evaluation processes do not catch it. The current rules assume the labs are the primary evaluators, and that assumption has not been tested.',
          'Watch for the first non-disclosure dispute. It is the case that will define whether the regime has teeth.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A safety researcher argued the incident shows the regime working as designed and that external evaluation should remain a complement rather than a substitute for internal red-teaming.',
          'A competing lab pointed out that the disclosed capability is not, in their view, materially above existing models, raising questions about how the thresholds are being interpreted.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'EU regulators welcomed the disclosure as validating the framework adopted last year.',
          'US officials have used the incident to push their own framework, which would mandate similar disclosure with different thresholds.',
          'UK Safety Institute has been quietly involved in the technical evaluation, a signal of the cross-jurisdictional cooperation that has emerged in this area.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'Deployment redate expected in early July.',
          'The oversight body is preparing a public summary of the evaluation, due within sixty days.',
          'Other labs are accelerating their own red-team protocols in anticipation of similar findings.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'AI Safety Institute reports', url: 'https://example.com/aisi' },
        ],
      },
    ],
    relatedArticleIds: ['6', '2', '19'],
  },
  {
    id: '13',
    slug: 'subscription-fatigue',
    title: 'The end of subscription growth',
    subtitle:
      'The major streamers reported their first joint quarter of subscriber decline in mature markets. The growth strategy is officially over.',
    category: 'media',
    tags: ['platforms', 'us', 'markets'],
    authorId: 'a5',
    publishedAt: '2026-05-28T11:00:00Z',
    readingTime: 6,
    image:
      'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1600&h=900&fit=crop',
    imageAlt: 'A remote control pointing at a television',
    excerpt:
      'For a decade the question was how fast subscriber bases could grow. The new question is how much margin can be extracted from a flat base. The strategic implications are larger than they look.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'The five largest US streaming services reported a combined net subscriber decline in mature markets for the quarter ending March.',
          'It was the first joint quarter of decline since the launch of the post-Netflix streaming wars.',
          'Average revenue per user is up materially, driven by price increases and the migration to ad-supported tiers.',
          'Churn rates rose between 80 and 140 basis points across the major services.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'The subscription growth story underwrote a decade of content spending and capital availability for the streamers. Its end means a structural shift in how content is funded.',
          'The financial model for premium scripted television, in particular, depended on subscription growth absorbing per-show economics. With growth gone, the show count will fall.',
          'For talent, the implications are uneven. Top-tier writers and showrunners will be fine. Mid-tier development is already contracting.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Amara\'s view',
        content: [
          'The decline in mature markets is structural, not cyclical. Penetration is at the ceiling, and the marginal subscriber is gone.',
          'The growth that remains is in price, ad load, and bundles. All three are unpopular with consumers, and all three accelerate churn at the margin.',
          'The interesting strategic question is whether any of the streamers attempt to differentiate through prestige content rather than competing on volume. The economics now favor it, but the corporate cultures do not.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A streaming executive argued the decline is a one-quarter anomaly driven by household consolidation as bundles tighten.',
          'An analyst at a major investment bank countered that the underlying penetration data is unambiguous and that the market is simply mature.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'Emerging markets remain the growth pocket, but ARPU is structurally lower and content costs are not.',
          'European public broadcasters are gaining share, partially reversing a decade of decline.',
          'In Asia, regional streamers and aggregator bundles are eating into the global services\' share.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'Watch the major streamers\' second-quarter content commitment announcements, due in late July.',
          'Bundling activity will intensify in the autumn, particularly cross-service bundles that share churn risk.',
          'Expect consolidation. A merger between two mid-tier services within twelve months is plausible.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'Ampere Analysis quarterly', url: 'https://example.com/ampere' },
        ],
      },
    ],
    relatedArticleIds: ['10', '5', '17'],
  },
  {
    id: '14',
    slug: 'india-china-border',
    title: 'A border de-escalation that neither side wants to talk about',
    subtitle:
      'Quiet progress on India-China border disengagement has taken the issue out of the headlines. The underlying relationship is shifting, just not in the way most analysts expected.',
    category: 'world',
    tags: ['india', 'china', 'defense'],
    authorId: 'a1',
    publishedAt: '2026-05-27T09:00:00Z',
    readingTime: 8,
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop',
    imageAlt: 'Snow-capped Himalayan peaks',
    excerpt:
      'Three more friction points along the Line of Actual Control have been quietly resolved in the past six months. The political pressure to claim victory has been carefully managed on both sides.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'Disengagement has been completed at three additional friction points along the India-China Line of Actual Control in the past six months.',
          'Bilateral trade is up 18 percent year-over-year, driven by Chinese components flowing into Indian manufacturing.',
          'Visa processing for business travelers has accelerated materially on both sides.',
          'Neither government has made the disengagement a central political message; the progress has been kept low-key by mutual agreement.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'India-China relations are the most consequential bilateral relationship in Asia that does not involve the United States. Their trajectory shapes everything from supply chains to security architecture.',
          'The quiet pattern of de-escalation is consistent with a longer Indian recalculation about the costs of strategic decoupling from China, particularly in manufacturing inputs.',
          'For supply chains, the easing matters most in electronics, where Indian assembly increasingly depends on Chinese components.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Iris\'s view',
        content: [
          'The Indian calculation has changed. The cost of full strategic decoupling, in terms of manufacturing competitiveness, has become visible, and the political appetite for paying it has weakened.',
          'The Chinese calculation has changed too. With US export controls tightening, India has become a more valuable economic partner, and the friction at the border has become a more expensive luxury.',
          'Neither side wants to advertise the rapprochement, which is a sign that both expect it to be partial and reversible. But the direction is clear.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A retired Indian general argued the disengagement is tactical and that the underlying strategic competition is intensifying, not easing.',
          'A Chinese strategic analyst countered that the trade figures overstate the recovery and that Indian industrial policy continues to discriminate against Chinese firms in important sectors.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'Washington is watching closely. A durable India-China easing complicates the Indo-Pacific strategy that has been built around Indian alignment.',
          'European officials see the easing as a positive in trade terms but worry about its implications for the Quad.',
          'ASEAN governments quietly welcome the easing, which reduces the pressure to choose sides on regional security questions.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'A bilateral leader-level meeting is plausible at the next BRICS summit. Watch the framing carefully.',
          'Indian electronics manufacturing PLI scheme updates this autumn will signal how much room is being made for Chinese components.',
          'The two remaining major friction points along the LAC are the test of how far the disengagement goes.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'Stimson Center South Asia briefs', url: 'https://example.com/stimson' },
        ],
      },
    ],
    relatedArticleIds: ['7', '11', '20'],
  },
  {
    id: '15',
    slug: 'industrial-policy-return',
    title: 'Industrial policy is back. The question is whether it works.',
    subtitle:
      'Four major economies have launched programs over the past eighteen months. The early results are uneven, and the political durability of the approach is the central question.',
    category: 'business',
    tags: ['us', 'eu', 'india', 'markets'],
    authorId: 'a2',
    publishedAt: '2026-05-26T13:00:00Z',
    readingTime: 9,
    image:
      'https://images.unsplash.com/photo-1565434019920-5fee5e1d3f99?w=1600&h=900&fit=crop',
    imageAlt: 'Factory interior with production lines',
    excerpt:
      'The Inflation Reduction Act, the Chips Act, the European equivalents, and India\'s PLI schemes have moved more than three quarters of a trillion dollars. The economic returns are uneven and the political returns are starting to weaken.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'The four largest industrial policy programs of the past eighteen months have committed over $760 billion in announced support.',
          'Roughly 60 percent of committed capacity has reached construction stage; the rest has been delayed, downsized, or quietly cancelled.',
          'Job creation has been concentrated in a narrower set of geographies than the programs anticipated.',
          'Political support has weakened in two of the four jurisdictions as the gap between announcements and delivery becomes visible.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'Industrial policy is the dominant economic policy paradigm of the decade. If it works, it reshapes global trade. If it does not, the alternative is a return to a more orthodox framework that the politics no longer support.',
          'The actual record so far is mixed. Some sectors, particularly batteries and solar, have seen meaningful investment. Others, particularly hydrogen and advanced packaging, have lagged.',
          'The political question is whether voters reward the policy for the announcements or punish it for the delivery gap.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Daniel\'s view',
        content: [
          'The programs that are working have a common feature: they tie subsidies to defined milestones and they are administered by agencies with industrial competence. The programs that are struggling lack one or both.',
          'The selection bias in early results matters. The first wave of projects to break ground are the ones that were already economic; the harder cases are still in due diligence or already cancelled.',
          'The political durability question is real. In two jurisdictions, the next election cycle will test whether industrial policy survives a change in government. The early signs are not encouraging.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'An industrial economist argued that judging the programs by eighteen-month delivery is premature and that the structural effects will take five to seven years to assess properly.',
          'A free-trade-leaning analyst countered that the programs are already producing measurable allocative distortions and that the longer they run, the harder the unwinding becomes.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'US program implementation is materially ahead of the European equivalents, partly because of simpler approval processes.',
          'India\'s PLI scheme has delivered electronics assembly investment but lagged on more complex segments.',
          'China continues to run a parallel and larger industrial policy regime with different design choices.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'The European Critical Raw Materials Act revision in the autumn will be a major test of political appetite for stronger industrial policy.',
          'US programs face an election-year test. Even partial repeal would dent investor confidence.',
          'A coordinated allied framework, long discussed, remains unlikely in the near term.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'Brookings industrial policy tracker', url: 'https://example.com/brookings' },
        ],
      },
    ],
    relatedArticleIds: ['2', '4', '8'],
  },
  {
    id: '16',
    slug: 'private-credit-stress',
    title: 'The first cracks in private credit',
    subtitle:
      'Two recent defaults have shifted the conversation from how big the asset class can get to whether it has been pricing risk correctly.',
    category: 'business',
    tags: ['markets', 'us', 'central-banks'],
    authorId: 'a2',
    publishedAt: '2026-05-25T08:00:00Z',
    readingTime: 7,
    image:
      'https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=1600&h=900&fit=crop',
    imageAlt: 'Stock market data on a computer screen',
    excerpt:
      'Private credit grew from a niche into a $1.7 trillion asset class on the assumption that flexibility plus seniority offsets opacity. The first defaults are testing that assumption.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'Two private credit defaults in the past quarter have hit recovery rates materially below initial mark estimates.',
          'Recovery realizations of 38 and 41 cents on the dollar compare to original marks of 70 to 80 cents.',
          'Both names are in cyclical sectors with structural headwinds; neither was a surprise default to credit analysts.',
          'Larger private credit funds have begun marking down comparable positions, with industry-wide implied write-downs estimated at 4 to 6 percent of the affected segments.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'Private credit has been one of the dominant capital allocation stories of the past decade. Its growth depended on the assumption that yields adequately compensated for opacity and lower liquidity.',
          'Even small write-downs across the asset class compound into large dollar amounts. The institutional investors most exposed are pensions and insurers, which have multi-year duration tolerance but face quarterly mark pressure.',
          'The wider question is whether the asset class is delivering the risk-adjusted returns that justified the allocation.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Daniel\'s view',
        content: [
          'The recovery rates are the data point that matters. Default rates have been rising for two years and were largely shrugged off; the recoveries cannot be.',
          'The bigger funds are well-positioned to absorb the write-downs and continue raising. The mid-tier managers, particularly those who entered the asset class in the 2021-2022 vintage, are the stress point.',
          'For the institutional allocators, the question is whether the strategic case for private credit holds at lower assumed recovery rates. For most of them, the answer will still be yes, but the allocation premium narrows.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A private credit fund executive argued that two idiosyncratic defaults do not represent the asset class and that the senior-secured structure remains protective.',
          'A bank credit analyst countered that the asset class has not been tested in a sustained credit cycle and that the current data is consistent with the early stages of broader stress.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'European private credit has grown rapidly but from a smaller base; the comparable stress signals there are weaker.',
          'Asian institutional allocators are rethinking the pace at which they had been increasing exposure.',
          'Regulators in three jurisdictions have signaled increased scrutiny of valuation methodologies.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'Watch second-quarter NAV updates from the major closed-end fund vehicles, due in July.',
          'A handful of mid-tier managers face fundraising tests in the autumn that will be revealing.',
          'A regulatory move on valuation disclosure within six to nine months is plausible.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'Federal Reserve Financial Stability Report', url: 'https://example.com/fed-fsr' },
        ],
      },
    ],
    relatedArticleIds: ['8', '15', '3'],
  },
  {
    id: '17',
    slug: 'opinion-attention-economy',
    title: 'Opinion: The attention economy has reached its endpoint',
    subtitle:
      'A decade of platform optimization has compressed news consumption into a format that cannot sustain reported journalism. The fix has to be structural.',
    category: 'media',
    tags: ['platforms', 'us'],
    authorId: 'a5',
    publishedAt: '2026-05-24T10:00:00Z',
    readingTime: 6,
    image:
      'https://images.unsplash.com/photo-1542435503-956c469947f6?w=1600&h=900&fit=crop',
    imageAlt: 'Pen on top of a printed newspaper',
    excerpt:
      'You can build a credible business around two-minute reads. You cannot build the reported journalism that fills them.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'Average time spent on a news article on mobile is 47 seconds, down from 78 seconds five years ago.',
          'Scroll depth on news content has fallen to 41 percent of article length on the median piece.',
          'Subscription conversion rates are concentrated in a narrowing set of high-investment formats: longform, explainers, and audio.',
          'The economics of reported daily journalism, which sits between those formats, have deteriorated steadily.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'The attention compression matters not because readers should read more, but because the reporting that produces the inputs to news consumption requires a different cost structure than the consumption surface can support.',
          'The result is a structural mismatch: the formats that drive subscription do not require the volume of reporting that the news organization needs to maintain.',
          'Solving the mismatch requires either subsidy, consolidation, or a different relationship between newsrooms and the formats they produce.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Amara\'s view',
        content: [
          'The structural fix is reporting capacity owned in common, with the consumer-facing formats built on top of that capacity by separate teams.',
          'This is, ironically, the structure that the wire services and the largest newspapers built in the twentieth century. We are not inventing a new model; we are rediscovering it under pressure.',
          'The political economy is hard. The funders of a shared reporting layer have to accept slower returns and more diffuse credit than the current model offers.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A media executive argued the current model is delivering more journalism, not less, and that the attention compression is a feature for younger audiences.',
          'A platform researcher countered that the data on attention compression is partial and that aggregate news consumption, including audio and video, is up.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'European public broadcasters have absorbed some of the shared-capacity role, but their funding models are politically fragile.',
          'Nonprofit reporting in the United States has expanded but cannot fill the gap left by commercial newsrooms.',
          'In smaller markets, the shared-capacity layer has effectively collapsed already.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'Watch for cross-newsroom reporting consortia launching in the autumn.',
          'Philanthropic funding for shared infrastructure is being reorganized.',
          'A structural conversation about wire service economics is overdue.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'Reuters Institute Digital News Report', url: 'https://example.com/rdi' },
        ],
      },
    ],
    relatedArticleIds: ['10', '13', '5'],
  },
  {
    id: '18',
    slug: 'crypto-stablecoin-rules',
    title: 'The stablecoin rules nobody talks about will define the next financial cycle',
    subtitle:
      'Three jurisdictions finalized stablecoin frameworks in the past quarter. The interaction between them will determine whether dollar-denominated stablecoins remain dominant.',
    category: 'business',
    tags: ['us', 'eu', 'central-banks', 'markets'],
    authorId: 'a2',
    publishedAt: '2026-05-22T14:00:00Z',
    readingTime: 8,
    image:
      'https://images.unsplash.com/photo-1518544866330-95a2bec01f0a?w=1600&h=900&fit=crop',
    imageAlt: 'Abstract financial chart on a blue background',
    excerpt:
      'The reserve requirements look technical. They are not. They determine which currencies host the digital settlement layer the next decade is being built on.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'Three jurisdictions finalized stablecoin frameworks in the past quarter, with reserve, redemption, and disclosure requirements that diverge in important details.',
          'The US framework permits short-duration Treasury collateral with daily disclosure.',
          'The EU framework requires partial reserve diversification including non-USD assets.',
          'A third framework, in an Asian financial center, permits a wider set of reserve instruments but mandates real-time disclosure.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'Stablecoin volumes have grown to $4.2 trillion in monthly settlement, much of it not visible in traditional financial statistics.',
          'The reserve composition rules will, in practice, determine the currency mix of the digital settlement layer. The dollar\'s dominance there is not automatic.',
          'For sovereign debt markets, the rules also matter. Stablecoin reserves have become a meaningful incremental buyer of short-duration sovereign instruments.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Daniel\'s view',
        content: [
          'The frameworks look technical because they are written for compliance officers, but they are actually about which currency hosts the digital monetary layer that gets built on top of them.',
          'The US framework is structured to entrench dollar dominance. The European framework is structured to dilute it. The Asian framework is structured to compete on flexibility.',
          'How these regimes interact, particularly whether a stablecoin issued in one framework can be marketed in another, is the next year\'s central question.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A monetary policy researcher argued that stablecoin reserves are too small to matter for currency competition and that the frameworks are mostly about consumer protection.',
          'A digital asset industry executive countered that the rules will accelerate institutional adoption regardless of which currency they favor.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'China\'s digital yuan continues to develop along a separate, state-led path with limited cross-border interoperability so far.',
          'Several emerging market central banks are watching the rules closely as they consider their own frameworks.',
          'The BIS Innovation Hub is coordinating informally between jurisdictions but lacks rule-making authority.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'Implementing regulations across the three frameworks are due over the next twelve months.',
          'Cross-border marketing rules are the next major battle.',
          'Watch the major stablecoin issuers\' jurisdictional choices over the next six months.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'BIS Innovation Hub publications', url: 'https://example.com/bis' },
        ],
      },
    ],
    relatedArticleIds: ['8', '15', '16'],
  },
  {
    id: '19',
    slug: 'ai-copyright-settlement',
    title: 'The AI copyright settlement that will not satisfy anyone',
    subtitle:
      'A negotiated framework between three frontier labs and a coalition of publishers is days away from announcement. The terms favor neither side as much as their lawyers wanted.',
    category: 'technology',
    tags: ['ai', 'us', 'platforms'],
    authorId: 'a3',
    publishedAt: '2026-05-21T11:00:00Z',
    readingTime: 7,
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop',
    imageAlt: 'Books arranged on a shelf',
    excerpt:
      'The framework creates a licensing pool, attribution standards, and a dispute mechanism. The compensation numbers are smaller than publishers wanted and the precedent is broader than the labs wanted.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'A negotiated framework between three frontier labs and a coalition of publishers is in final review.',
          'The framework creates a centralized licensing pool, attribution standards for generated content drawing on copyrighted material, and a dispute mechanism.',
          'Compensation is structured as a percentage of model training compute spend rather than a per-use royalty.',
          'The structure is designed to bind future labs that join the framework, and to set precedent in pending litigation.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'The framework will, if it holds, set the de facto standard for AI training data compensation. The pending litigation will be evaluated against this baseline.',
          'The compute-spend-percentage structure is more predictable for the labs than per-use royalties would have been, but it accepts a precedent that any lab using large amounts of copyrighted training data owes compensation.',
          'For publishers, the framework establishes a recurring revenue line but at lower levels than the most optimistic projections.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Mei\'s view',
        content: [
          'The labs accepted a precedent they could have avoided in litigation, in exchange for predictability. That is a meaningful concession even if the numbers are modest.',
          'The publishers accepted lower numbers than their lawyers wanted, in exchange for getting a real revenue line now rather than uncertain damages later. That is also a meaningful concession.',
          'The structure is replicable across other content categories. Image rights, music rights, and code repositories are all candidates for similar frameworks within the next eighteen months.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A copyright lawyer involved in pending litigation argued the framework undercuts stronger claims that could have prevailed in court.',
          'An open-source AI advocate warned the framework, by raising the baseline cost of legitimate training data, makes the gap between well-funded labs and open-weight efforts wider.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'The European AI Act\'s training data transparency requirements interact with the framework in ways that have not been fully tested.',
          'Japan continues to operate under its 2018 copyright exception for machine learning, which weakens publisher leverage there.',
          'A handful of national copyright regimes may need legislative updates to accommodate the framework.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'Announcement expected within two weeks.',
          'Pending litigation outcomes will determine whether the framework holds or fragments.',
          'Watch for parallel frameworks in image and music within twelve months.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'Copyright Office AI report', url: 'https://example.com/copyright' },
        ],
      },
    ],
    relatedArticleIds: ['6', '12', '10'],
  },
  {
    id: '20',
    slug: 'africa-energy-leapfrog',
    title: 'The African energy leapfrog is real, and it does not look like the textbooks predicted',
    subtitle:
      'Distributed solar plus storage has reached cost parity with grid extension in most of sub-Saharan Africa. The financing models, not the technology, are the constraint.',
    category: 'climate',
    tags: ['africa', 'energy', 'climate'],
    authorId: 'a4',
    publishedAt: '2026-05-19T09:00:00Z',
    readingTime: 8,
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&h=900&fit=crop',
    imageAlt: 'Solar panels in a rural landscape',
    excerpt:
      'The energy transition in Africa is happening at the meter, not the megawatt. The numbers are bigger than the headline grid-extension narratives capture, and the implications for industrial policy are larger.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'Distributed solar plus storage now serves an estimated 240 million people across sub-Saharan Africa, up from roughly 90 million five years ago.',
          'Pay-as-you-go financing has scaled with mobile money infrastructure, with default rates running below 4 percent in mature markets.',
          'Grid extension projects continue at roughly the same pace as a decade ago, but their relative share of new energy access is falling rapidly.',
          'Component manufacturing in two African economies has reached meaningful scale, with the rest still imported.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'The shape of African energy development is not the centralized-grid model that bilateral and multilateral lenders financed for a generation. The distributed model is faster, cheaper, and more politically resilient.',
          'For climate, the distributed model leapfrogs the carbon-intensive grid that other developing regions built.',
          'The implications for industrial policy are large. The countries that build component manufacturing alongside the deployment capture much more of the value chain.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Rafael\'s view',
        content: [
          'I spent six weeks across three countries reporting this story. The numbers do not capture how comprehensively the model has changed expectations on the ground.',
          'The constraint is financing, specifically the cost of capital for deployment companies. Tariff and import policy in two large markets remains punitive.',
          'The countries that get the policy right over the next five years will be the ones that capture component manufacturing. The window is open but not for long.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'An African utility CEO argued the distributed model serves households well but cannot replace the grid for industrial demand, and that grid investment remains essential.',
          'A development finance specialist countered that grid extension has chronically underdelivered against committed financing and that the distributed model is, in practice, the actual energy access strategy.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'Chinese component manufacturers dominate the supply chain, which raises political questions in some markets.',
          'European development finance is increasingly oriented around the distributed model, partly catching up to its scale.',
          'India is studying African deployment patterns as it scales its own distributed solar programs.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'A major multilateral facility focused on local component manufacturing is in development.',
          'Tariff policy in two large markets is under review.',
          'The next wave of growth is in commercial and industrial customers, which require different financing structures.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'GOGLA market data', url: 'https://example.com/gogla' },
          { label: 'IEA Africa Energy Outlook', url: 'https://example.com/iea-africa' },
        ],
      },
    ],
    relatedArticleIds: ['9', '4', '15'],
  },
  {
    id: '21',
    slug: 'world-cup-soft-power',
    title: 'A football tournament that revealed three things about global soft power',
    subtitle:
      'The hosting bid that won was not the one analysts predicted. The diplomatic side deals that came with it are the story.',
    category: 'world',
    tags: ['middle-east', 'us', 'eu'],
    authorId: 'a1',
    publishedAt: '2026-05-17T15:00:00Z',
    readingTime: 6,
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&h=900&fit=crop',
    imageAlt: 'Empty football stadium during sunset',
    excerpt:
      'The vote was 17 to 14. The diplomatic coordination behind those numbers tells a more interesting story than the result itself.',
    sections: [
      {
        type: 'facts',
        heading: 'The Facts',
        content: [
          'A major football tournament hosting decision was made last week, with the winning bid taking the vote 17 to 14.',
          'The result was not predicted by most analysts, who expected the rival bid to win comfortably.',
          'Three of the swing votes appear to have shifted in the final week, following diplomatic engagement that included unrelated commercial and security deals.',
          'The winning bid involves infrastructure commitments of roughly $14 billion over six years.',
        ],
      },
      {
        type: 'why',
        heading: 'Why It Matters',
        content: [
          'The result is a clear demonstration of how soft power has been re-weaponized as a vehicle for broader diplomatic coordination.',
          'For the federations that switched their votes, the side deals create lasting commitments that extend well beyond the tournament itself.',
          'The losing bid included established Western backers, which underscores the relative decline of traditional diplomatic levers in sports governance.',
        ],
      },
      {
        type: 'analysis',
        heading: 'Iris\'s view',
        content: [
          'Sports hosting decisions have always involved deal-making. The change is the scale and the explicitness of the side deals.',
          'The pattern matches what we have seen in three other multilateral votes this year. A coordinated state actor uses bilateral commercial leverage to swing small numbers of votes in venues where small numbers matter.',
          'The lesson for Western foreign ministries is that traditional public diplomacy is not enough. The competition is happening on commercial terrain that ministries are not structured to operate on.',
        ],
      },
      {
        type: 'another-view',
        heading: 'Another view',
        content: [
          'A senior sports administrator argued the side-deal narrative overstates the role of diplomatic coordination and that the bid simply made a more compelling commercial offer.',
          'A diplomat in one of the losing capitals admitted the bid had been complacent and that the result reflects strategic underinvestment, not just one-off side deals.',
        ],
      },
      {
        type: 'global',
        heading: 'Global perspective',
        content: [
          'Several other major sports hosting decisions are due in the next eighteen months. The pattern is likely to repeat.',
          'The losing coalition is reportedly discussing more coordinated bid strategies, though political support is uneven.',
          'For multilateral institutions outside sports, the implications are the question.',
        ],
      },
      {
        type: 'whats-next',
        heading: 'What\'s next',
        content: [
          'Infrastructure commitments under the winning bid will be tracked closely.',
          'Watch for similar dynamics in upcoming federation elections.',
          'The losing capitals are reassessing their broader soft-power strategy.',
        ],
      },
      {
        type: 'sources',
        heading: 'Sources & further reading',
        content: [],
        sources: [
          { label: 'Play the Game research', url: 'https://example.com/playthegame' },
        ],
      },
    ],
    relatedArticleIds: ['11', '14', '7'],
  },
];
