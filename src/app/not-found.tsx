import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] items-center justify-center py-20">
      <div className="text-center">
        <p className="eyebrow text-accent">404</p>
        <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          We can&apos;t find that page.
        </h1>
        <p className="mt-4 font-serif text-lg text-graphite">
          The story may have been moved or deleted. The newsroom is still open.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back to homepage
          </Link>
          <Link href="/search" className="btn-outline">
            Search instead
          </Link>
        </div>
      </div>
    </div>
  );
}
