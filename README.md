# Knowley Landing Page

A modern landing page built with [Next.js](https://nextjs.org), designed to showcase Knowley and collect user interest. This project uses the Next.js App Router, TypeScript, and modern React best practices.

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 2. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the landing page.

## Project Structure

- `app/` — Main application folder (Next.js App Router)
  - `page.tsx` — Main landing page layout and sections
  - `layout.tsx` — Root layout for the app
  - `globals.css` — Global styles
  - `HeroSection.tsx`, `FeaturesSection.tsx`, `IntegrationSection.tsx`, `BenefitsSection.tsx`, `TeamSection.tsx`, `CTASection.tsx`, `FooterSection.tsx` — Page sections/components
  - `api/` — API routes for forms (e.g., contact, waitlist)
  - `utils/` — Utility functions (e.g., animations, validation)
- `data/` — Static data (e.g., contact and waitlist JSON)
- `public/` — Static assets (images, icons, etc.)
- `next.config.ts` — Next.js configuration
- `tsconfig.json` — TypeScript configuration
- `package.json` — Project dependencies and scripts

## Features
- Responsive, accessible landing page
- Waitlist and contact forms (API routes)
- Modern UI with smooth animations
- Optimized for performance and SEO
- Optimized for mobile devices

---

Feel free to customize and extend this project for your own needs!

---

**License:**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
