# Lime 77 Replica (Next.js + Tailwind)

This project rebuilds the provided exported HTML design inside a Next.js app.

## Stack

- Next.js (App Router)
- Tailwind CSS

## How the replica is implemented

- The source HTML snapshot (`Lime 77 _ Site Premium 497€ - Livré en 48h.html`) remains the source of truth.
- `lib/original-design.ts` extracts:
  - the final `<style>` block (compiled Tailwind + custom styles)
  - the full `<div id="root">...</div>` block
- `components/design-replica.tsx` injects both blocks to preserve pixel parity.

This approach keeps the code maintainable while ensuring exact visual fidelity.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000
