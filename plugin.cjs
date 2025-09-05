const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  ({ addBase, addComponents, addUtilities, addVariant, theme }) => {
    addBase({
      ':root': { colorScheme: 'dark' },
      '[data-theme="light"]': { colorScheme: 'light' }
    });

    addVariant('hocus', ['&:hover', '&:focus-visible']);

    addUtilities({
      '.u-panel': {
        backgroundColor: 'var(--bg-elev)',
        border: '1px solid var(--border)',
        borderRadius: theme('borderRadius.sm'),
        boxShadow: theme('boxShadow.ui')
      },
      '.u-sep': {
        height: '1px',
        backgroundColor: 'var(--border)'
      },
      '.u-ring': {
        outline: '2px solid var(--ring)',
        outlineOffset: '2px'
      },
      '.u-border': {
        border: '1px solid var(--border)'
      },
      '.u-border-2': {
        border: '2px solid var(--border)'
      }
    });

    addComponents({
      '.btn': {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        border: '1px solid var(--border)',
        borderRadius: theme('borderRadius.sm'),
        padding: '.5rem .75rem',
        fontWeight: '600',
        fontFamily: 'var(--font-mono)',
        backgroundColor: 'transparent',
        color: 'var(--fg)'
      },
      '.btn-primary': {
        backgroundColor: 'var(--accent)',
        borderColor: 'color-mix(in oklab, var(--accent), black 15%)',
        color: '#fff'
      },
      '.btn:hocus': {
        transform: 'translateY(-1px)'
      },
      '.badge': {
        display: 'inline-flex',
        alignItems: 'center',
        border: '1px solid var(--border)',
        borderRadius: theme('borderRadius.xs'),
        padding: '.125rem .375rem',
        fontSize: '.75rem',
        fontFamily: 'var(--font-mono)',
        color: 'var(--muted)'
      },
      '.input': {
        display: 'inline-flex',
        alignItems: 'center',
        width: '100%',
        border: '1px solid var(--border)',
        borderRadius: theme('borderRadius.sm'),
        padding: '.5rem .625rem',
        backgroundColor: 'var(--bg-elev)',
        color: 'var(--fg)',
        fontFamily: 'var(--font-mono)'
      },
      '.card': {
        backgroundColor: 'var(--bg-elev)',
        border: '1px solid var(--border)',
        borderRadius: theme('borderRadius.sm'),
        boxShadow: theme('boxShadow.ui'),
        padding: theme('spacing.4')
      },
      '.kbd': {
        fontFamily: 'var(--font-mono)',
        fontSize: '.75rem',
        border: '1px solid var(--border)',
        borderRadius: theme('borderRadius.xs'),
        backgroundColor: 'color-mix(in oklab, var(--bg), white 4%)',
        padding: '.125rem .375rem'
      }
    });
  },
  { theme: {} }
);
