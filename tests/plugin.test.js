import { describe, it, expect } from 'vitest';
import tailwind from 'tailwindcss';
import postcss from 'postcss';
import plugin from '../plugin.cjs';
import preset from '../preset.cjs';

async function generateCSS(classes) {
  const input = `@tailwind base;@tailwind components;@tailwind utilities;.test{ @apply ${classes} }`;
  const result = await postcss([
    tailwind({
      presets: [preset],
      content: [{ raw: input }],
      plugins: [plugin]
    })
  ]).process(input, { from: undefined });
  return result.css;
}

describe('@bxrne/ui plugin', () => {
  it('emits card styles', async () => {
    const css = await generateCSS('card');
    expect(css).toContain('border: 2px solid var(--border-strong)');
  });
  it('includes btn styles', async () => {
    const css = await generateCSS('btn btn-primary');
    expect(css).toContain('.btn-primary');
  });
});
