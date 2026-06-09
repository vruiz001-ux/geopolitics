import Link from 'next/link';
import { Mail, Twitter, Linkedin, Rss } from 'lucide-react';
import { Logo } from './Logo';
import { categories } from '@/data/categories';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-rule bg-paper">
      <div className="container-wide py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo size="md" />
            <p className="mt-4 max-w-xs font-serif text-sm leading-relaxed text-muted">
              Original reporting on the people, institutions, and forces shaping the global order.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="#"
                aria-label="Twitter"
                className="rounded-full p-2 text-muted transition-colors hover:bg-rule/60 hover:text-ink"
              >
                <Twitter size={16} aria-hidden />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-full p-2 text-muted transition-colors hover:bg-rule/60 hover:text-ink"
              >
                <Linkedin size={16} aria-hidden />
              </a>
              <a
                href="#"
                aria-label="RSS feed"
                className="rounded-full p-2 text-muted transition-colors hover:bg-rule/60 hover:text-ink"
              >
                <Rss size={16} aria-hidden />
              </a>
            </div>
          </div>
          <div>
            <h2 className="eyebrow mb-4 text-muted">Sections</h2>
            <ul className="space-y-2">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/category/${c.slug}`}
                    className="font-sans text-sm text-ink link-hover"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="eyebrow mb-4 text-muted">Geopolitics</h2>
            <ul className="space-y-2 font-sans text-sm text-ink">
              <li><Link href="/about" className="link-hover">About</Link></li>
              <li><Link href="/newsletters" className="link-hover">Newsletters</Link></li>
              <li><Link href="/search" className="link-hover">Search</Link></li>
              <li><Link href="#" className="link-hover">Contact</Link></li>
              <li><Link href="#" className="link-hover">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="eyebrow mb-4 text-muted">Newsletter</h2>
            <p className="mb-4 font-serif text-sm text-muted">
              The headlines that matter, in your inbox before your first coffee.
            </p>
            <Link
              href="/newsletters"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-sans text-xs font-medium uppercase tracking-wider text-paper transition-colors hover:bg-accent"
            >
              <Mail size={14} aria-hidden />
              Subscribe
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-rule pt-6 sm:flex-row sm:items-center">
          <p className="font-sans text-xs text-muted">
            © {new Date().getFullYear()} Geopolitics. All rights reserved.
          </p>
          <ul className="flex items-center gap-5 font-sans text-xs text-muted">
            <li><Link href="#" className="link-hover">Privacy</Link></li>
            <li><Link href="#" className="link-hover">Terms</Link></li>
            <li><Link href="#" className="link-hover">Ethics policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
