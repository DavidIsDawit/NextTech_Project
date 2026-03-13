import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint2";

export default defineConfig({
  plugins: [react(), eslint()],
  base: './',
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://192.168.1.16:8000',
        changeOrigin: true,
        secure: false,
      },
      '/public': {
        target: 'http://192.168.1.16:8000',
        changeOrigin: true,
        secure: false,
      },
      '/uploads': {
        target: 'http://192.168.1.16:8000',
        changeOrigin: true,
        secure: false,
      },
      '/storage': {
        target: 'http://192.168.1.16:8000',
        changeOrigin: true,
        secure: false,
      },
      '/img': {
        target: 'http://192.168.1.16:8000',
        changeOrigin: true,
        secure: false,
      },
      '/images': {
        target: 'http://192.168.1.16:8000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => `/public${path}`,
      },
      '/ImageGallery': {
        target: 'http://192.168.1.16:8000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => `/public/images${path}`,
      },
    },
  },
});
