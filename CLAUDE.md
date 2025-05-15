# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js landing page project called "knowley_landing_page" using React 19, TypeScript, and TailwindCSS. It uses the App Router architecture pattern from Next.js.

## Common Commands

### Development

```bash
# Start development server with hot reloading (using Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Architecture

The project follows Next.js App Router architecture:

- `/app` - Contains all routes and application components
  - `layout.tsx` - Root layout with metadata and font configuration
  - `page.tsx` - Main landing page component
  - `globals.css` - Global styles with TailwindCSS integration

The project uses:
- TypeScript for type safety
- Geist font (Sans and Mono variants)
- TailwindCSS v4 for styling
- Dark/light mode via CSS variables and media queries