import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from https://<user>.github.io/portfolio/ on GitHub Pages.
// Use '/' instead when moving to a custom domain or a <user>.github.io repo.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
