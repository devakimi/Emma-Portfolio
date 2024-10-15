import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', '@react-three/fiber', '@react-three/drei'],
    force: true
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  },
  server: {
    hmr: {
      overlay: false
    }
  }
})
