# Agency Site — Angular Template

A production-ready Angular 17 website template for your digital agency.
Built with standalone components, SCSS and a single CONFIG file per client.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
ng serve

# Open browser
http://localhost:4200
```

---

## To Customize Per Client

Open this ONE file and change the values:

```
src/app/config/site.config.ts
```

That's it. The entire site updates automatically.

Key fields to change:
- `business.name` — Agency/client name
- `business.whatsapp` — WhatsApp number (numbers only, no +)
- `accent` — Brand color (any hex code)
- `services` — List of services offered
- `packages` — Pricing packages
- `testimonials` — Client testimonials
- `stats` — Key numbers

---

## To Add a Real Hero Photo

In `hero.component.html`, replace the placeholder div with:

```html
<img src="assets/hero-photo.png" alt="Our Team" class="hero__photo" />
```

Put the image in `src/assets/`.

---

## Project Structure

```
src/
  app/
    config/
      site.config.ts          ← ONLY FILE YOU CHANGE PER CLIENT
    components/
      nav/                    ← Sticky navigation with mobile menu
      hero/                   ← Gong-style hero with accent block
      problem/                ← Pain points section
      services/               ← Services grid
      how-it-works/           ← 4-step process
      packages/               ← Pricing cards
      testimonials/           ← Client reviews
      cta-banner/             ← Call to action strip
      contact/                ← Contact form → WhatsApp
      footer/                 ← Footer with socials
    app.component.ts          ← Root component
  styles.scss                 ← Global styles and CSS variables
```

---

## Build for Production

```bash
ng build --configuration production
```

Output goes to `dist/agency-site/`. Deploy to:
- **Netlify** — drag and drop the dist folder
- **Vercel** — connect GitHub repo
- **Firebase Hosting** — `firebase deploy`

---

## Tech Stack

- Angular 17 (Standalone Components)
- SCSS with CSS custom properties
- Angular FormsModule (ngModel)
- No external UI libraries — fully custom
