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

## Getting started (Astro)
1) Install the package
- npm: `npm i @bxrne/ui`
- yarn: `yarn add @bxrne/ui`
- pnpm: `pnpm add @bxrne/ui`
- bun: `bun add @bxrne/ui`

2) Enable the integration and Tailwind preset/plugin
```ts
// astro.config.mjs
import { defineConfig } from 'astro/config';
import bxrneUI from '@bxrne/ui/astro';
export default defineConfig({ integrations: [bxrneUI()] });
```
```js
// tailwind.config.mjs
import preset from '@bxrne/ui/preset';
import uiPlugin from '@bxrne/ui';
export default {
  content: ['./src/**/*.{astro,ts,tsx,js,jsx,md,mdx}'],
  presets: [preset],
  plugins: [uiPlugin]
};
```

3) Use the primitives in your pages/layouts
```astro
---
---
<header class="navbar u-container">
  <nav class="flex gap-2">
    <a class="nav-link" href="/">home</a>
    <a class="nav-link" href="/blog">blog</a>
  </nav>
</header>
<main class="u-container space-y-8 py-10">
  <section class="card u-offset space-y-4">
    <h1 class="text-xl font-bold">Hello</h1>
    <p>Mono-first utilitarian UI.</p>
    <button class="btn btn-primary u-offset">Get started</button>
  </section>
  <ul class="card-list">
    <li><a class="card-item u-offset" href="#">Item A</a></li>
    <li><a class="card-item u-offset" href="#">Item B</a></li>
  </ul>
</main>
```

4) Theming
- Default is light. For dark: set `<html data-theme="dark">`.
- System-aware when `data-theme` is not set.

Optional theme toggle (inline script)
```html
<button id="theme-toggle" class="btn">theme</button>
<script>
  const ROOT = document.documentElement; const KEY='theme';
  const btn=document.getElementById('theme-toggle');
  const setTheme = v => { v? ROOT.setAttribute('data-theme', v) : ROOT.removeAttribute('data-theme'); localStorage.setItem(KEY, v||''); btn.textContent=v||'system'; };
  setTheme(localStorage.getItem(KEY)||'');
  btn?.addEventListener('click',()=>{ const cur=ROOT.getAttribute('data-theme'); setTheme(cur==='dark'?'light':(cur==='light'? '': 'dark')); });
</script>
```

## Theming
- Default light. Opt into dark: `<html data-theme="dark">`
- Follow system when `data-theme` is unset.

