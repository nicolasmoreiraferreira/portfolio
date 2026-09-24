import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// O `base` precisa bater com o nome do repositório no GitHub Pages.
// Rode `VITE_BASE=/ npm run build` para publicar em um domínio próprio.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/portfolio/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2022',
  },
})
