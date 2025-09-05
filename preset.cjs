module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-mono)',
        mono: 'var(--font-mono)'
      },
      colors: {
        bg: 'var(--bg)',
        'bg-elev': 'var(--bg-elev)',
        fg: 'var(--fg)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: {
          DEFAULT: 'var(--accent)',
          2: 'var(--accent-2)',
          3: 'var(--accent-3)'
        }
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)'
      },
      boxShadow: {
        ui: 'var(--shadow-1)'
      },
      borderWidth: {
        DEFAULT: '1px',
        1: '1px',
        2: '2px'
      }
    }
  }
};