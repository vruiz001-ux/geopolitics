import Link from 'next/link';
import type { ArticleSection } from '@/lib/types';
import { ExternalLink } from 'lucide-react';

const ACCENTS: Record<string, { label: string; color: string; bg: string }> = {
  facts: { label: '01', color: 'text-accent', bg: 'bg-accentSoft' },
  why: { label: '02', color: 'text-forest', bg: 'bg-forest/10' },
  analysis: { label: '03', color: 'text-ink', bg: 'bg-rule/60' },
  'another-view': { label: '04', color: 'text-graphite', bg: 'bg-paper' },
  global: { label: '05', color: 'text-accent', bg: 'bg-accentSoft' },
  'whats-next': { label: '06', color: 'text-forest', bg: 'bg-forest/10' },
  sources: { label: '07', color: 'text-muted', bg: 'bg-rule/40' },
};

interface Props {
  section: ArticleSection;
  index: number;
  id: string;
}

export function StructuredArticleSection({ section, index, id }: Props) {
  const accent = ACCENTS[section.type] ?? ACCENTS.analysis;

  return (
    <section id={id} className="scroll-mt-28 pt-10">
      <header className="mb-5 flex items-center gap-3">
        <span
          className={`inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full px-2 font-sans text-[0.7rem] font-semibold tracking-wider ${accent.bg} ${accent.color}`}
          aria-hidden
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="font-sans text-xs uppercase tracking-[0.18em] font-bold text-ink">
          {section.heading}
        </h2>
        <span className="ml-2 hidden h-px flex-1 bg-rule sm:block" aria-hidden />
      </header>
      <div className="prose-article">
        {section.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        {section.sources && section.sources.length > 0 && (
          <ul className="mt-2 space-y-2 font-sans text-sm">
            {section.sources.map((s) => (
              <li key={s.url}>
                <Link
                  href={s.url}
                  className="inline-flex items-center gap-1.5 text-ink link-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                  <ExternalLink size={12} aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
