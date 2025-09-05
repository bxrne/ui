# @bxrne/ui

Utilitarian UI for Astro + Tailwind. Mono-first typography, visible borders, minimal components.

## Usage

- Add preset and plugin to Tailwind config
- Add Astro integration to inject global styles

```js
// tailwind.config.cjs
module.exports = {
  content: ['./src/**/*.{astro,ts,tsx,js,jsx,mdx}'],
  presets: [require('@bxrne/ui/preset')],
  plugins: [require('@bxrne/ui')]
};
```

```ts
// astro.config.mjs
import { defineConfig } from 'astro/config';
import bxrneUI from '@bxrne/ui/astro';

export default defineConfig({
  integrations: [bxrneUI()]
});
```
