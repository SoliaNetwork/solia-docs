# Solia Documentation

[![Vercel Deploy](https://vercel.com/button)](https://vercel.com/new/git/external)

Official documentation for **Solia** — non-custodial escrow and settlement infrastructure.

## 🌐 Live Site
[docs.solia.network](https://docs.solia.network)

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Tech Stack
```
Next.js 14 (App Router)  •  Tailwind CSS  •  TypeScript  •  Vercel
```

## 📁 Structure

```
solia-docs/
├── app/                 # Pages (App Router)
│   ├── page.tsx         # Homepage  
│   ├── intro/
│   ├── escrow/
│   ├── api/
│   └── architecture/
├── components/          # UI Components
│   ├── Navbar.tsx
│   └── CodeBlock.tsx
├── docs/                # Static Markdown
│   ├── intro.md
│   ├── escrow.md
│   ├── api.md
│   └── architecture.md
├── public/              # Static assets
└── ...config files
```

## 🚀 Deploy to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Add Solia docs"
git push origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your solia-docs repo
   - Deploy → **Done**

3. **Custom Domain**
   ```
   Settings → Domains → Add docs.solia.network
   ```

## 📖 Content Sources

Static `.md` files in `/docs/` contain raw reference content:
- [Intro](/docs/intro.md)
- [Escrow Concepts](/docs/escrow.md)  
- [API](/docs/api.md)
- [Architecture](/docs/architecture.md)

Live site `/app/` pages render polished interactive versions.

## 🎨 Design System

- **Dark theme** (default)
- **Tailwind CSS** + custom gradients
- **Responsive** mobile-first
- **Smooth animations** + hover states

## 🔮 Next Steps

```
[ ] Add developer guides
[ ] API playground
[ ] Live examples
[ ] Changelog
[ ] SDK docs
```

## 🤝 Contribute

1. Fork → Clone → PR
2. Follow existing code style
3. Update relevant pages
4. Test locally (`npm run dev`)

**Made with ❤️ for the permissionless economy**

---

[![Star History](https://api.star-history.com/svg?repos=solianetwork/solia-docs&type=Date)](https://github.com/solianetwork/solia-docs)
