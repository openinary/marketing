# CLAUDE.md

## Cloudflare Workers Deployment

This project is deployed to Cloudflare Workers via `@opennextjs/cloudflare`.

### Commands

```bash
pnpm deploy     # OpenNext build + deploy to Cloudflare
pnpm preview    # OpenNext build + run wrangler dev locally
```

### Known issues (resolved)

#### 1. `Dynamic require of "/.next/server/middleware-manifest.json" is not supported`

**Why it happens**: Next.js 16 loads `middleware-manifest.json` at runtime via a dynamic `require()` call inside `getMiddlewareManifest()`. Cloudflare Workers run in ES module mode, which does not support dynamic `require()` at runtime — only static `import` is allowed.

**Fix**: Set the env variable `NEXT_PRIVATE_MINIMAL_MODE=1` in `wrangler.jsonc` under `vars`. This flag tells Next.js to skip middleware manifest loading entirely. There is no downside here because this project does not use Next.js middleware.

#### 2. `ChunkLoadError: Failed to load chunk server/chunks/ssr/[root-of-the-server]__xxxxx._.js`

**Why it happens**: Next.js 16 uses Turbopack as the default bundler for production builds. Turbopack produces SSR chunks with a specific naming convention (`[root-of-the-server]__xxxxx._.js`) that `@opennextjs/cloudflare` does not inline into `handler.mjs` during its bundling step. Those chunks remain as separate files on disk, which the Worker cannot read at runtime — Cloudflare Workers have no filesystem.

**Fix**: Force Webpack for the production build. The `build` script in `package.json` uses `next build --webpack`. Do not change it back to `next build` alone without first verifying that OpenNext fully supports Turbopack production builds.

### Deployment file overview

- `wrangler.jsonc` — Worker config (bindings, compatibility flags, env vars)
- `open-next.config.ts` — OpenNext config (no R2 cache configured yet)
- `.open-next/` — build output directory (git-ignored)
- `.dev.vars` — local dev env variables for wrangler preview (git-ignored)
