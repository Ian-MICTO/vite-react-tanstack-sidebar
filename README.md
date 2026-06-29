# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, has main screen with "Hello "__root"!" and "Hello "/_authenticated"!" texts.

The following steps done for this setup:
- Create new vite react project
- Install packages via pnpm
- Configure `vite.config.ts`, `tsconfig.app.json`, and `tsconfig.json`
  -add paths, compilerOptions, and resolve alias
- [Tailwindcss](https://tailwindcss.com/docs/installation/using-vite) installation and configuration
- Create [shadcn project theme](https://ui.shadcn.com/create) or preset
- Install shadcn ui project code
- Install core dependencies and devDependencies:
  -tanstack suite, axios, etc.
- Configure `vite.config.ts`
  -setup tanstack router plugin
- Create `routes/` directory and `__root.tsx`
  -create _authenticated and _guest subdirectories and files.
- Run `pnpm run dev` to generate `routeTree.gen.ts`