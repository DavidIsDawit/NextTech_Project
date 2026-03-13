import axios from 'axios';

// The backend server address
export const BACKEND_URL = 'http://192.168.1.16:8000';

// Centralized path configuration (previously in vite.config.js)
export const API_CONFIG = {
    proxy: {
        '/api': {
            target: BACKEND_URL,
            changeOrigin: true,
            secure: false,
        },
        '/public': {
            target: BACKEND_URL,
            changeOrigin: true,
            secure: false,
        },
        '/uploads': {
            target: BACKEND_URL,
            changeOrigin: true,
            secure: false,
        },
        '/storage': {
            target: BACKEND_URL,
            changeOrigin: true,
            secure: false,
        },
        '/img': {
            target: BACKEND_URL,
            changeOrigin: true,
            secure: false,
        },
        '/images': {
            target: BACKEND_URL,
            changeOrigin: true,
            secure: false,
            rewrite: (path) => `/public${path}`,
        },
        '/ImageGallery': {
            target: BACKEND_URL,
            changeOrigin: true,
            secure: false,
            rewrite: (path) => `/public/images${path}`,
        },
    },
};

const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;