import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F6F1E7',
        ink: '#1A1916',
        graphite: '#2E2C27',
        muted: '#6B655A',
        rule: '#E2DAC8',
        accent: '#C2410C',
        accentSoft: '#FEF3E8',
        forest: '#1F3B2B',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
        page: '1280px',
        wide: '1440px',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
