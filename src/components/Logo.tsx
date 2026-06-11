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
      aria-label="GeoScope home"
      className="group inline-flex items-baseline font-serif font-bold leading-none tracking-tightest"
    >
      <span className={`${sizes[size]} text-ink`}>Geo</span>
      <span className={`${sizes[size]} text-accent transition-colors group-hover:text-ink`}>
        Scope
      </span>
    </Link>
  );
}
