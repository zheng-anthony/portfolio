import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

const tailwindEntry = {
  name: 'portfolio-tailwind-entry',
  resolveId(id) {
    if (id === 'virtual:tailwind.css') return '\0virtual:tailwind.css'
  },
  load(id) {
    if (id === '\0virtual:tailwind.css') return '@import "tailwindcss";'
  },
}

export default defineConfig({
  plugins: [tailwindEntry, react(), tailwindcss()],
})
