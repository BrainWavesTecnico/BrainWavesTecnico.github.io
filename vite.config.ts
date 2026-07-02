// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export for GitHub Pages (`bun run build:pages`): prerenders every route to
// static HTML and skips the nitro/Cloudflare server bundle, which GitHub Pages can't run.
const isGithubPagesBuild = process.env.GITHUB_PAGES_BUILD === "true";
const githubPagesBase = process.env.GITHUB_PAGES_BASE ?? "/BrainWavesTecnico/";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isGithubPagesBuild
      ? {
          prerender: {
            enabled: true,
            crawlLinks: true,
            // crawlLinks follows every <a href>, including links to built binary assets
            // (e.g. the CV PDF download link). Prerendering re-fetches those as text and
            // overwrites the already-correct binary file with a UTF-8-mangled copy, so
            // skip crawling anything that looks like a file (has an extension) rather than a route.
            filter: (page: { path: string }) => !/\.[a-z0-9]+$/i.test(page.path.split(/[?#]/)[0]),
          },
        }
      : {}),
  },
  ...(isGithubPagesBuild
    ? { nitro: false, vite: { base: githubPagesBase, preview: { host: "127.0.0.1" } } }
    : {}),
});
