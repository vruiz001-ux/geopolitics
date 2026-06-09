import Link from 'next/link';

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };
  return (
    <Link
      href="/"
      aria-label="Geopolitics home"
      className="group inline-flex items-baseline gap-1 font-serif font-bold leading-none tracking-tightest text-ink"
    >
      <span className={`${sizes[size]}`}>Geo</span>
      <span className={`${sizes[size]} text-accent transition-colors group-hover:text-ink`}>
        ·
      </span>
      <span className={`${sizes[size]}`}>politics</span>
    </Link>
  );
}
