import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  // VITE_BASE comes from .env locally and from the workflow env in CI.
  const env = loadEnv(mode, '.')

  return {
    base: env.VITE_BASE || '/',
    plugins: [react(), tailwindcss()],
  }
})
