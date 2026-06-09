interface Props {
  variant?: 'inline' | 'sidebar';
  label?: string;
}

export function AdPlaceholder({ variant = 'inline', label = 'Sponsored' }: Props) {
  const isInline = variant === 'inline';
  return (
    <aside
      role="complementary"
      aria-label="Advertisement placeholder"
      className={`my-8 flex flex-col items-center justify-center rounded-lg border border-dashed border-rule bg-white/30 px-4 py-6 text-center ${
        isInline ? 'min-h-[140px]' : 'min-h-[260px]'
      }`}
    >
      <p className="eyebrow mb-1 text-muted">{label}</p>
      <p className="font-serif text-sm text-muted">
        Your message here. {isInline ? '728 × 90' : '300 × 250'}
      </p>
    </aside>
  );
}
