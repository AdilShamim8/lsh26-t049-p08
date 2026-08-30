# Third-Party Material and AI Disclosure

List material frameworks, libraries, starters, templates, UI kits, fonts, icons and assets used in this repository.

| Name | Version or source URL | Licence | Used for |
|---|---|---|---|
| Next.js | https://github.com/vercel/next.js (v16) | MIT | App framework (App Router) |
| React | https://github.com/facebook/react (v19) | MIT | UI runtime |
| TypeScript | https://github.com/microsoft/TypeScript (v5) | Apache-2.0 | Type-safe implementation language |
| Tailwind CSS | https://github.com/tailwindlabs/tailwindcss (v4) | MIT | Styling |
| shadcn/ui | https://github.com/shadcn-ui/ui (New York style, component sources in `src/components/ui`) | MIT | Prebuilt UI components (select, dialog, table, card, etc.) |
| Radix UI primitives | https://github.com/radix-ui/primitives | MIT | Headless behaviour behind shadcn/ui components |
| lucide-react | https://github.com/lucide-icons/lucide (ISC) | ISC | Icons |
| Geist / Geist Mono fonts | https://vercel.com/font (via `next/font/google`) | SIL Open Font License 1.1 | Typography |
| tw-animate-css | https://github.com/Wombosvideo/tw-animate-css | MIT | Animation utilities used by shadcn/ui |

All other source files in `src/lib/p08`, `src/components/p08`, `src/app` and `scripts` are
original work created during the event window.

## AI tools

Disclosed in `evaluation-manifest.json` → `ai_tools_used`: Super Z (GLM, Z.ai) coding
assistant, used to accelerate implementation and documentation. Output was verified via
the 105-assertion suite (`scripts/verify-p08.ts`, also runnable in the app’s Verify & Data
tab) and manual re-derivation of boundary students from `CLARIFICATIONS.md`.

## Original-work statement

Everything not declared in this file or `EVENT.md` was created by the registered team during the event window.
