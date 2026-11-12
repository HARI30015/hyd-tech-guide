# hyd-tech-guide

## Hyderabad Tech Guide

A student-focused, source-linked directory for researching technology companies and early-career pathways in Hyderabad. Built with Astro as a static site so each company profile is available in the initial HTML and deploys to Cloudflare Pages.

### Run locally

Requirements: Node.js 22 and pnpm 11.

```sh
pnpm install
pnpm dev
```

Create the production site with `pnpm build`; Astro writes it to `dist/`.

### Cloudflare Pages

Connect the GitHub repository `HARI30015/hyd-tech-guide` to a Cloudflare Pages project. Set the build command to `pnpm build` and the build output directory to `dist`. The project pins Node in `.node-version` and pnpm in `package.json`.

### Content and accuracy

Starter company entries live in `src/data/companies.ts`. The `verifiedContext` field summarizes an official company careers source. Role and skill tags are explicitly unverified student research prompts, not employer requirements or promises of a Hyderabad vacancy. Interview-report lists start empty; do not add an unsourced report as a verified fact. Re-check official links and location-specific eligibility before relying on them.

The content was checked against the official company links on 12 Nov 2026. Company pages and open roles can change after that date.
