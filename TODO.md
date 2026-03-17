# Solia Docs Implementation TODO

## Plan Summary
- Next.js docs site at repo **root** (app/, components/, package.json, etc.) for live deployment to docs.solia.network.
- `docs/` folder **only** for static .md files (intro.md, escrow.md, api.md, architecture.md).
- Premium: Tailwind CSS dark theme, responsive Navbar, CodeBlock component.
- Pages: home, intro, escrow, api, architecture.

Status: [ ] Not started

## Steps (to be checked off as completed)

### Step 1: Core Config Files
- [ ] package.json (Next.js 14+, Tailwind, TypeScript)
- [ ] next.config.js
- [ ] tailwind.config.ts
- [ ] tsconfig.json

### Step 2: App Layout & Components
- [ ] app/layout.tsx (root layout + Navbar)
- [ ] app/globals.css (Tailwind + dark theme)
- [ ] components/Navbar.tsx
- [ ] components/CodeBlock.tsx

### Step 3: Main Pages
- [ ] app/page.tsx (Homepage - full polished content)
- [ ] app/intro/page.tsx
- [ ] app/escrow/page.tsx
- [ ] app/api/page.tsx
- [ ] app/architecture/page.tsx

### Step 4: Static Docs Folder
- [ ] docs/intro.md
- [ ] docs/escrow.md  
- [ ] docs/api.md
- [ ] docs/architecture.md

### Step 5: Final Files & README
- [ ] public/ (favicon, etc.)
- [ ] Update README.md (full instructions)

### Step 6: Setup & Test
- [ ] `npm install && npm run dev`
- [ ] Deploy instructions ready

**Next action:** Implement Step 1 (configs).

---
*Updated after each completed step.*
