import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // ✅ ถ้า NODE_ENV=github → ใช้ base ของ repo
    // ✅ ถ้า NODE_ENV=custom → ใช้ root path
    base: mode === 'github' ? '/mangoplayx/' : '/',
  }
})
