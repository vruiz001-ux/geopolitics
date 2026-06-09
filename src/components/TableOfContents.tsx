'use client';

import { useEffect, useState } from 'react';
import type { ArticleSection } from '@/lib/types';

interface Props {
  sections: { id: string; section: ArticleSection }[];
}

export function TableOfContents({ sections }: Props) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="Article sections" className="sticky top-28">
      <p className="eyebrow mb-3 text-muted">In this story</p>
      <ol className="space-y-1.5">
        {sections.map(({ id, section }, i) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`group flex items-start gap-3 rounded-md py-1.5 pl-2 pr-3 font-sans text-sm transition-colors ${
                active === id ? 'bg-rule/50 text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              <span className="mt-0.5 font-mono text-[0.7rem] text-muted">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-1 leading-snug">{section.heading}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
