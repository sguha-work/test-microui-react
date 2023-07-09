import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation';
import dns from 'dns';
// https://vitejs.dev/config/
dns.setDefaultResultOrder('verbatim')
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'header',
      remotes: {
        header: 'http://localhost:5001/assets/header.js',
      },
      shared: ['react']
    })
  ],
  preview: {
    host: 'localhost',
    port: 5000,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
