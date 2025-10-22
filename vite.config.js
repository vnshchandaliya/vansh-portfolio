import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/vansh-portfolio/', 
  plugins: [react(), tailwindcss()],
  server: {
    
    port: 2000, 
  },
    
})
