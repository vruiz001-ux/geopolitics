'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { categories } from '@/data/categories';

export function CategoryNav({ variant = 'default' }: { variant?: 'default' | 'compact' }) {
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
