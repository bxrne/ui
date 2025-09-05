import { fileURLToPath } from 'node:url';

export default function bxrneUI() {
  return {
    name: '@bxrne/ui',
    hooks: {
      'astro:config:setup': async ({ injectScript, addWatchFile }) => {
        const cssPath = fileURLToPath(new URL('./styles.css', import.meta.url));
        addWatchFile(cssPath);
        injectScript('page-ssr', `import "@bxrne/ui/styles.css";`);
      }
    }
  };
}
