'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Category } from '@/lib/types';

interface Props {
  categories: Category[];
  variant?: 'default' | 'compact';
}

export function CategoryNav({ categories, variant = 'default' }: Props) {
  const pathname = usePathname();
  return (
    <nav aria-label="Categories" className="w-full">
      <ul
        className={`flex items-center ${
          variant === 'compact' ? 'gap-5' : 'gap-6 lg:gap-8'
        } overflow-x-auto scrollbar-none whitespace-nowrap`}
      >
        {categories.map((cat) => {
          const href = `/category/${cat.slug}`;
          const active = pathname === href;
          return (
            <li key={cat.slug}>
              <Link
                href={href}
                className={`inline-flex items-center font-sans text-[0.78rem] uppercase tracking-[0.16em] font-semibold transition-colors ${
                  active ? 'text-accent' : 'text-ink hover:text-accent'
                }`}
              >
                {cat.shortName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
