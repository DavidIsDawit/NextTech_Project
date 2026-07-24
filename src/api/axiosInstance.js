import axios from 'axios';

// The backend server address
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://192.168.1.16:8000';

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
    baseURL: import.meta.env.DEV ? '/api' : `${BACKEND_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Global interceptor for Server Errors (5xx) or Network Errors
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Check if error is a 5xx server error or a network error (no response)
        const isServerError = error.response && error.response.status >= 500;
        const isNetworkError = !error.response && error.message === 'Network Error';

        if (isServerError || isNetworkError) {
            // Prevent infinite redirect loops if we're already on the error page
            if (window.location.pathname !== '/server-error') {
                window.location.href = '/server-error';
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;