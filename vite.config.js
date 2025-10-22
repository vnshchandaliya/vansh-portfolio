import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/vansh-portfolio/', // 👈 must match your repo name
  plugins: [react(), tailwindcss()],
  server: {
    port: 2000
  },
   build: {
    outDir: 'build' // default is 'dist'
  }
})
