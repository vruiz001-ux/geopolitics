'use client';

import { Twitter, Linkedin, Link2, Mail } from 'lucide-react';
import { useState } from 'react';

interface Props {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignored
    }
  };

  const items = [
    {
      label: 'Share on Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      label: 'Share on LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: 'Share by email',
      icon: Mail,
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className="flex items-center gap-1.5" aria-label="Share">
      {items.map(({ label, icon: Icon, href }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-rule p-2 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
        >
          <Icon size={14} aria-hidden />
        </a>
      ))}
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="rounded-full border border-rule p-2 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
      >
        <Link2 size={14} aria-hidden />
      </button>
      {copied && (
        <span className="ml-1 font-sans text-xs text-muted" role="status" aria-live="polite">
          Copied
        </span>
      )}
    </div>
  );
}
