/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        ink: '#2d2d31',     // soft charcoal (not pure black)
        paper: '#f8f7f3',   // warm off-white (not pure white)
        muted: '#67655f',   // secondary text
        faint: '#a6a49c',   // tertiary text / numbers
        line: '#e6e3da',    // hairlines
        line2: '#d2cfc4',   // stronger hairlines
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
