## Project overview

Personal site for Jim Toy: resume, microblog ("notes"), and long-form
writing ("blog"). Rebuilt from Jekyll/Ruby to Astro (Node/npm only,
no Ruby toolchain) to fix a heavy local dev setup and a dated,
unstyled look. Deployed to GitHub Pages via GitHub Actions
(`.github/workflows/deploy.yml`), building from `master`.

Work is tracked as GitHub issues under the "v1 MVP" milestone
(`mvp` label) plus a `backlog` label for post-MVP ideas — that's the
source of truth for what's done vs. planned, not this file. As of
this writing, MVP issues #1-#9 are implemented (layout/design system,
blog, notes, resume, home page, RSS, SEO meta tags, deploy pipeline,
legacy Jekyll cutover); check the tracker for current state.

Design identity: an "ops console / uptime ledger" look grounded in
Jim's real career (30 years building enterprise systems, including a
literal failover system called "Blackout"). The signature element is
a live-ticking "career uptime" counter in the header, computed from
his 1995 career start date. Dark navy/brass theme is the default;
a light aged-paper theme is available via a header toggle. See
`src/styles/global.css` for the token system and
`src/layouts/BaseLayout.astro` for the shared shell.

Content lives in `src/content/{blog,notes}` (Markdown, schema in
`src/content.config.ts`) and `src/data/resume.ts` (typed data, not a
collection, since it's a single structured document). The resume
page's Work Experience/Skills content reflects a deliberate
"generic for now" placeholder pass — Jim plans to fill in his actual
recent JPMorgan Chase accomplishments later rather than have Claude
invent specifics.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
