import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external:['@fortawesome/free-brands-svg-icons']  //keep this empty or only add libraries that should not be bundle
    }
  }
})
