# Seting up the Development Environment

- Install Node.js (Install LTS version)
- Install VS Code
- Install Vs code extensions (Prettier [Turn on format on Save], Eslint)

## Install React

- create React APP (OLD Not use)
- Use vite (Latest and new )
  - We use bun to create folder structure using vite. Its faster then npm, yarn etc.
  - bun, pnpm (17 time slower then bun), npm (29 times slower then bun), yarn (33 times slower then bun)
    eg.

```bash
bun create vite
```

- `bun -v` to check version of bun
- `npm i -g bun` => Install bun globally
- Now to create react project => `bun create vite`
- give project name -> react-inst
- cd react-inst
- bun install
- bun run dev

If problem in installing Latest react version

- `bun install react@rc`
- `bun i react-dom@rc`

---
