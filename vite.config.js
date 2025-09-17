import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/project/',  // Important: matches your Tomcat folder name
  plugins: [react()],
})
