# Kivonah Website Starter

A reusable **React + Vite** foundation for bespoke client websites. The sample brand, wording and abstract illustration are intentionally placeholders, **not** a finished client website. Rebuild each client's visual identity rather than reusing this look unchanged.

## Start a new client website

1. In GitHub, open this repository → **Settings** → **General** → enable **Template repository** (one-time setup).
2. Click **Use this template** → **Create a new repository**. Give it the client name.
3. Import that new repo into Vercel, choose the **Vite** framework preset, leave the build command as `npm run build` and output directory as `dist`.
4. Clone the client repo and run `npm install`, then `npm run dev`. Build-check with `npm run build`.
5. Update `src/site.js`, `src/style.css`, `public/favicon.svg`, and SEO tags in `index.html`. Replace ALL sample wording and imagery.
6. Visit `/device` for desktop (1440px), tablet (820px), and mobile (390px) previews. It is **not linked** from the public navigation. This route is not password-protected; if confidentiality matters, add authentication.

## What's included

- Responsive navigation, hero, services, contact CTA, footer and restrained micro-interactions.
- IntersectionObserver-based reveal animation with reduced-motion preference support.
- Device preview on `/device` using an iframe with fixed viewport sizes. Scroll horizontally on narrow screens. Test real devices before launch.
- SPA fallback for direct loading of `/device` on Vercel.
- Email-based contact CTA via `mailto:` as a safe no-backend starting point. **There is no submission backend.** For client forms, connect a verified provider or serverless endpoint, add spam controls, and confirm data reaches the client inbox before launch.
- Client branding config in `src/site.js` and editable stylesheet design tokens.

## Before launch

- [ ] Replace brand name, placeholder email, copy, illustration, logo/favicon and all temporary text.
- [ ] Set page title, description, social preview metadata and canonical URL in `index.html`.
- [ ] Check contrast, keyboard nav, real-device responsiveness, forms, analytics consent, and image alt text.
- [ ] Add privacy policy and legal details as required for the client and jurisdiction.
- [ ] If implementing third-party forms or integrations, use server-side secrets. Never expose service API keys with `VITE_` (those are compiled into browser assets).
- [ ] Run `npm run build` and test the Vercel preview deployment before publishing.

## Notes

No proprietary business or customer information is bundled. No automatic analytics, cookie trackers, Supabase, CMS, or external form backend is included. The Google Fonts import can be self-hosted later if appropriate for the client.
