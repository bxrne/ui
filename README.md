# @bxrne/ui

A UI for strong interfaces following a utilitarian format inspired by the US Graphics Company's aesthetic. Built for Astro + Tailwind. Mono-first typography, visible borders, minimal components. Defaults to light theme, auto-adjusts to system, and supports explicit `[data-theme]` overrides.

## Install

```bash
pnpm add @bxrne/ui
```

## Usage

- Add preset and plugin to Tailwind config
- Add Astro integration to inject global styles

```js
// tailwind.config.mjs
import preset from '@bxrne/ui/preset';
import uiPlugin from '@bxrne/ui';

export default {
  content: ['./src/**/*.{astro,ts,tsx,js,jsx,mdx}'],
  presets: [preset],
  plugins: [uiPlugin]
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

## Theming
- Default light. Opt into dark: `<html data-theme="dark">`
- Follow system when `data-theme` is unset.

