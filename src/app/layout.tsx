import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getAllCategories } from '@/lib/data';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Geopolitics — Original reporting on the global order',
    template: '%s · Geopolitics',
  },
  description:
    'Original reporting on the people, institutions, and forces shaping the global order. Structured journalism for readers who want context, not noise.',
  openGraph: {
    type: 'website',
    siteName: 'Geopolitics',
    title: 'Geopolitics — Original reporting on the global order',
    description:
      'Original reporting on the people, institutions, and forces shaping the global order.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geopolitics',
    description:
      'Original reporting on the people, institutions, and forces shaping the global order.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const categories = getAllCategories();
  return (
    <html lang="en">
      <body>
        <Header categories={categories} />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
