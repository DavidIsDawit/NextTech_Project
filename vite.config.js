import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint2";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const BACKEND = env.VITE_BACKEND_URL || 'http://192.168.1.16:8000';

  return {
    plugins: [react(), eslint()],
    base: './',
    server: {
      host: true,
      proxy: {
        '/api':          { target: BACKEND, changeOrigin: true, secure: false },
        '/public':       { target: BACKEND, changeOrigin: true, secure: false },
        '/uploads':      { target: BACKEND, changeOrigin: true, secure: false },
        '/storage':      { target: BACKEND, changeOrigin: true, secure: false },
        '/img':          { target: BACKEND, changeOrigin: true, secure: false },
        '/images':       { target: BACKEND, changeOrigin: true, secure: false, rewrite: (path) => `/public${path}` },
        '/ImageGallery': { target: BACKEND, changeOrigin: true, secure: false, rewrite: (path) => `/public/images${path}` },
      },
    },
  };
});
