'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Menu, Search, X, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { CategoryNav } from './CategoryNav';
import { SearchOverlay } from './SearchOverlay';
import type { Category } from '@/lib/types';

export function Header({ categories }: { categories: Category[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
      if (e.key === 'Tab' && mobileRef.current) {
        const focusables = mobileRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <header
        className={`sticky top-0 z-40 w-full bg-paper transition-shadow ${
          scrolled ? 'shadow-[0_1px_0_rgba(0,0,0,0.06)]' : ''
        }`}
      >
        <div className="container-wide">
          <div
            className={`flex items-center justify-between gap-4 transition-all ${
              scrolled ? 'py-2.5' : 'py-4'
            }`}
          >
            <div className="flex items-center gap-4">
              <button
                aria-label="Open menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(true)}
                className="rounded-md p-2 text-ink hover:bg-rule/50 lg:hidden"
              >
                <Menu size={20} aria-hidden />
              </button>
              <Logo size={scrolled ? 'sm' : 'md'} />
            </div>
            <nav aria-label="Primary" className="hidden flex-1 justify-center lg:flex">
              <CategoryNav categories={categories} />
            </nav>
            <div className="flex items-center gap-1">
              <button
                aria-label="Open search"
                onClick={() => setSearchOpen(true)}
                className="rounded-md p-2 text-ink transition-colors hover:bg-rule/50"
              >
                <Search size={18} aria-hidden />
              </button>
              <Link
                href="/newsletters"
                className="hidden rounded-full border border-ink px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-wider text-ink transition-all hover:bg-ink hover:text-paper sm:inline-flex"
              >
                Subscribe
              </Link>
            </div>
          </div>
          {!scrolled && (
            <div className="hidden border-t border-rule pb-0 lg:block" aria-hidden />
          )}
        </div>
      </header>

      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          ref={mobileRef}
          className="fixed inset-0 z-50 flex flex-col bg-paper lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-rule px-4 py-4">
            <Logo size="sm" />
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="rounded-md p-2 text-ink hover:bg-rule/50"
            >
              <X size={20} aria-hidden />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <p className="eyebrow mb-3 text-muted">Sections</p>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 font-serif text-2xl font-semibold text-ink hover:text-accent"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 space-y-2 border-t border-rule pt-6">
              <p className="eyebrow mb-3 text-muted">More</p>
              <Link
                href="/newsletters"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-2 font-sans text-base text-ink hover:text-accent"
              >
                <Mail size={16} aria-hidden /> Newsletters
              </Link>
              <Link
                href="/search"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-2 font-sans text-base text-ink hover:text-accent"
              >
                <Search size={16} aria-hidden /> Search
              </Link>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="block py-2 font-sans text-base text-ink hover:text-accent"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      )}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
