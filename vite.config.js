import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const page = (name) => fileURLToPath(new URL(name, import.meta.url))

export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      input: { index: page('index.html'), notFound: page('404.html') },
    },
  },
})
