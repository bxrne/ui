const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  ({ addBase, addComponents, addUtilities, addVariant, theme }) => {
    addBase({
      ':root': { colorScheme: 'light' },
      '@media (prefers-color-scheme: dark)': {
        ':root:not([data-theme])': { colorScheme: 'dark' }
      },
      '[data-theme="light"]': { colorScheme: 'light' },
      '[data-theme="dark"]': { colorScheme: 'dark' }
    });

    addVariant('hocus', ['&:hover', '&:focus-visible']);

    addUtilities({
      '.u-panel': {
        backgroundColor: 'var(--bg-elev)',
        border: '2px solid var(--border-strong)',
        borderRadius: '0',
        boxShadow: `var(--offset-x) var(--offset-y) 0 0 var(--offset-color)`
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
        border: '2px solid var(--border-strong)'
      },
      '.u-offset': {
        boxShadow: `var(--offset-x) var(--offset-y) 0 0 var(--offset-color)`
      }
    });

    addComponents({
      '.btn': {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        border: '2px solid var(--border-strong)',
        borderRadius: '0',
        padding: '.75rem 1rem',
        fontWeight: '700',
        letterSpacing: '0.02em',
        fontFamily: 'var(--font-mono)',
        backgroundColor: 'transparent',
        color: 'var(--fg)',
        boxShadow: `var(--offset-x) var(--offset-y) 0 0 var(--offset-color)`
      },
      '.btn-primary': {
        backgroundColor: 'var(--accent)',
        borderColor: 'var(--border-strong)',
        color: '#fff'
      },
      '.btn:hocus': {
        transform: 'translate(-2px, -2px)'
      },
      '.badge': {
        display: 'inline-flex',
        alignItems: 'center',
        border: '2px solid var(--border-strong)',
        borderRadius: '0',
        padding: '.125rem .5rem',
        fontSize: '.75rem',
        fontFamily: 'var(--font-mono)',
        color: 'var(--fg)'
      },
      '.input': {
        display: 'inline-flex',
        alignItems: 'center',
        width: '100%',
        border: '2px solid var(--border-strong)',
        borderRadius: '0',
        padding: '.625rem .75rem',
        backgroundColor: 'var(--bg-elev)',
        color: 'var(--fg)',
        fontFamily: 'var(--font-mono)'
      },
      '.card': {
        backgroundColor: 'var(--bg-elev)',
        border: '2px solid var(--border-strong)',
        borderRadius: '0',
        boxShadow: `var(--offset-x) var(--offset-y) 0 0 var(--offset-color)`,
        padding: theme('spacing.4')
      },
      '.kbd': {
        fontFamily: 'var(--font-mono)',
        fontSize: '.75rem',
        border: '2px solid var(--border-strong)',
        borderRadius: '0',
        backgroundColor: 'color-mix(in oklab, var(--bg), white 4%)',
        padding: '.125rem .375rem'
      }
    });
  },
  { theme: {} }
);
