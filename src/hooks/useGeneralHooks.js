// import { useState, useEffect, useCallback } from 'react';
// import axiosInstance from '../api/axiosInstance';
// import generalService from '../api/generalService';

// /**
//  * Normalizes an image URL to be proxy-friendly.
//  */
// export const fixImageUrl = (url) => {
//     if (!url || typeof url !== 'string' || url.startsWith('http') || url.startsWith('blob:') || url.startsWith('data:')) {
//         return url;
//     }
//     // Normalize slashes and ensure it starts with a / for the Vite proxy to catch it
//     let cleaned = url.replace(/\\/g, '/').replace(/\/+/g, '/');
//     return cleaned.startsWith('/') ? cleaned : `/${cleaned}`;
// };

// /**
//  * Recursively scans an object for media URLs and fixes them.
//  */
// export const fixObjectMedia = (obj) => {
//     if (!obj || typeof obj !== 'object') {
//         if (typeof obj === 'string' && (
//             obj.match(/\.(jpg|jpeg|png|gif|svg|webp|avif)$/i) ||
//             obj.includes('public/') ||
//             obj.includes('uploads/') ||
//             obj.includes('storage/')
//         )) {
//             return fixImageUrl(obj);
//         }
//         return obj;
//     }
//     const newObj = Array.isArray(obj) ? [...obj] : { ...obj };
//     for (const key in newObj) {
//         const val = newObj[key];
//         const isMediaKey = ['image', 'icon', 'logo', 'cover', 'avatar', 'src', 'url', 'banner', 'hero', 'thumbnail', 'pic', 'photo', 'file'].some(k => key.toLowerCase().includes(k));
//         if (typeof val === 'string' && (isMediaKey || val.match(/\.(jpg|jpeg|png|gif|svg|webp|avif)$/i))) {
//             newObj[key] = fixImageUrl(val);
//         } else if (Array.isArray(val)) {
//             newObj[key] = val.map(item => fixObjectMedia(item));
//         } else if (val && typeof val === 'object') {
//             newObj[key] = fixObjectMedia(val);
//         }
//     }
//     return newObj;
// };

// /**
//  * Formats a date string or object into "DD MMM YYYY" (e.g., 05 Feb 2026)
//  */
// export const formatDate = (dateInput) => {
//     if (!dateInput) return "";
//     try {
//         const date = new Date(dateInput);
//         if (isNaN(date.getTime())) return String(dateInput);

//         const day = String(date.getDate()).padStart(2, '0');
//         const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//         const month = months[date.getMonth()];
//         const year = date.getFullYear();

//         return `${day} ${month} ${year}`;
//     } catch (e) {
//         return String(dateInput);
//     }
// };

// /**
//  * Normalizes common fields.
//  */
// export const normalizeDataFields = (item) => {
//     if (!item || typeof item !== 'object') return item;
//     const normalized = { ...item };
//     if (normalized._id) normalized.id = String(normalized._id);
//     if (normalized.id) normalized.id = String(normalized.id);

//     // Partners/Clients mapping
//     if (normalized.partnerName) {
//         normalized.name = normalized.partnerName;
//         normalized.label = normalized.partnerName;
//     }
//     if (normalized.partnerImage) {
//         normalized.image = normalized.partnerImage;
//         normalized.src = normalized.partnerImage;
//     }

//     // Gallery mapping
//     if (normalized.coverImage) {
//         normalized.image = normalized.coverImage;
//     }

//     // Certificates mapping
//     if (normalized.certificateName || normalized.CertificateName) {
//         const name = normalized.certificateName || normalized.CertificateName;
//         normalized.title = name;
//         normalized.name = name;
//         normalized.label = name;
//     }

//     // Ensure we have an image field that fixObjectMedia will catch
//     if (normalized.certificateImage || normalized.CertificateImage) {
//         const img = normalized.certificateImage || normalized.CertificateImage;
//         normalized.image = img;
//         normalized.src = img;
//     }

//     if (normalized.certificateType || normalized.CertificateType) {
//         const type = normalized.certificateType || normalized.CertificateType;
//         normalized.type = type;
//         normalized.category = type;
//         // User's JSON shows certificateType contains the description text
//         if (!normalized.description) {
//             normalized.description = type;
//         }
//     }

//     if (normalized.certificateFrom || normalized.CertificateFrom) {
//         const from = normalized.certificateFrom || normalized.CertificateFrom;
//         normalized.from = from;
//         normalized.client = from;
//     }

//     // Date normalization and formatting
//     const rawDate = normalized.IssueDate || normalized.issueDate || normalized.createdDate || normalized.CreatedDate || normalized.date || normalized.updatedAt || normalized.createdAt;
//     if (rawDate) {
//         normalized.rawDate = rawDate; // Keep original for sorting
//         const formatted = formatDate(rawDate);
//         normalized.date = formatted;
//         normalized.issuedate = formatted;
//         normalized.IssueDate = formatted;
//         normalized.fullDate = formatted;
//     }


//     // Post-processing to ensure arrays and common fields
//     if (normalized.image && !normalized.images) {
//         normalized.images = [normalized.image];
//     }
//     if (normalized.images && !normalized.image) {
//         normalized.image = normalized.images[0];
//     }

//     if (normalized.name && !normalized.label) normalized.label = normalized.name;
//     if (normalized.title && !normalized.name) normalized.name = normalized.title;
//     if (normalized.catagory) normalized.category = normalized.catagory;
//     if (normalized.discription) normalized.description = normalized.discription;
//     return normalized;
// };

// // --- Helper for normalizing and verifying array responses ---
// const normalizeArray = (result, key) => {
//     let rawArray = [];
//     if (Array.isArray(result)) {
//         rawArray = result;
//     } else if (result && typeof result === 'object') {
//         const potentialArray =
//             result[key] ||
//             (result.data && Array.isArray(result.data[key]) ? result.data[key] : null) ||
//             result.data ||
//             result.news ||
//             result.services ||
//             result.certificates ||
//             result.projects ||
//             result.teams ||
//             result.partners ||
//             result.gallery ||
//             [];
//         rawArray = Array.isArray(potentialArray) ? potentialArray : [];
//     }

//     // Apply data fixes and media fixes to all items
//     return rawArray.map(item => fixObjectMedia(normalizeDataFields(item)));
// };

// // --- Standalone Async Fetch Functions ---

// export const getNews = async (params = {}) => {
//     const response = await generalService.getAllNews(params);
//     return normalizeArray(response.data, 'news');
// };

// export const getFAQs = async (params = {}) => {
//     const response = await generalService.getAllFAQs(params);
//     return normalizeArray(response.data, 'faqs');
// };

// export const getGallery = async (params = {}) => {
//     const response = await generalService.getAllGallery(params);
//     return normalizeArray(response.data, 'gallery');
// };

// export const getPartners = async (params = {}) => {
//     const response = await generalService.getAllPartners(params);
//     return normalizeArray(response.data, 'partners');
// };

// export const getServices = async (params = {}) => {
//     const response = await generalService.getAllServices(params);
//     return normalizeArray(response.data, 'services');
// };

// export const getPortfolio = async (params = {}) => {
//     const response = await generalService.getAllPortfolio(params);
//     return normalizeArray(response.data, 'portfolio');
// };

// export const getTeams = async (params = {}) => {
//     const response = await generalService.getAllTeams(params);
//     return normalizeArray(response.data, 'teams');
// };

// export const getTestimonials = async (params = {}) => {
//     const response = await generalService.getAllTestimonials(params);
//     return normalizeArray(response.data, 'testimonials');
// };

// export const fetchAllCertificates = async ({ page = 1, sort = "recent" } = {}) => {
//     const response = await axiosInstance.get("/getAllCertificates", {
//         params: { page, sort },
//     });
//     return normalizeArray(response.data, 'certificates');
// };

// export const getCounters = async ({ page = 1, sort = "recent" } = {}) => {
//     const response = await generalService.getAllCounters({ page, sort });
//     return normalizeArray(response.data, 'counters');
// };

// export const getCertificateById = async (id) => {
//     const response = await generalService.getSingleCertificate(id);
//     const result = response.data;

//     // Robustly find the certificate object
//     let item = result?.certificate ||
//         result?.certificates ||
//         result?.data?.certificate ||
//         result?.data?.certificates ||
//         result?.data ||
//         result;

//     // If it's an array, take the first item
//     if (Array.isArray(item)) {
//         item = item[0];
//     }

//     return fixObjectMedia(normalizeDataFields(item));
// };


// // --- Custom Hooks ---

// export const useNews = (params) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const loadData = useCallback(async () => {
//         try {
//             setLoading(true);
//             const result = await getNews(params);
//             setData(Array.isArray(result) ? result : []);
//         } catch (err) {
//             setError(err);
//             setData([]);
//         } finally {
//             setLoading(false);
//         }
//     }, [params]);

//     useEffect(() => {
//         loadData();
//     }, [loadData]);

//     return { data, loading, error, refresh: loadData };
// };

// export const useFAQs = (params) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const loadData = useCallback(async () => {
//         try {
//             setLoading(true);
//             const result = await getFAQs(params);
//             setData(Array.isArray(result) ? result : []);
//         } catch (err) {
//             setError(err);
//             setData([]);
//         } finally {
//             setLoading(false);
//         }
//     }, [params]);

//     useEffect(() => {
//         loadData();
//     }, [loadData]);

//     return { data, loading, error, refresh: loadData };
// };

// export const useGallery = (params) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const loadData = useCallback(async () => {
//         try {
//             setLoading(true);
//             const result = await getGallery(params);
//             setData(Array.isArray(result) ? result : []);
//         } catch (err) {
//             setError(err);
//             setData([]);
//         } finally {
//             setLoading(false);
//         }
//     }, [params]);

//     useEffect(() => {
//         loadData();
//     }, [loadData]);

//     return { data, loading, error, refresh: loadData };
// };

// export const usePartners = (params) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const loadData = useCallback(async () => {
//         try {
//             setLoading(true);
//             const result = await getPartners(params);
//             setData(Array.isArray(result) ? result : []);
//         } catch (err) {
//             setError(err);
//             setData([]);
//         } finally {
//             setLoading(false);
//         }
//     }, [params]);

//     useEffect(() => {
//         loadData();
//     }, [loadData]);

//     return { data, loading, error, refresh: loadData };
// };

// export const useServices = (params) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const loadData = useCallback(async () => {
//         try {
//             setLoading(true);
//             const result = await getServices(params);
//             setData(Array.isArray(result) ? result : []);
//         } catch (err) {
//             setError(err);
//             setData([]);
//         } finally {
//             setLoading(false);
//         }
//     }, [params]);

//     useEffect(() => {
//         loadData();
//     }, [loadData]);

//     return { data, loading, error, refresh: loadData };
// };

// export const usePortfolio = (params) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const loadData = useCallback(async () => {
//         try {
//             setLoading(true);
//             const result = await getPortfolio(params);
//             setData(Array.isArray(result) ? result : []);
//         } catch (err) {
//             setError(err);
//             setData([]);
//         } finally {
//             setLoading(false);
//         }
//     }, [params]);

//     useEffect(() => {
//         loadData();
//     }, [loadData]);

//     return { data, loading, error, refresh: loadData };
// };

// export const useTeams = (params) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const loadData = useCallback(async () => {
//         try {
//             setLoading(true);
//             const result = await getTeams(params);
//             setData(Array.isArray(result) ? result : []);
//         } catch (err) {
//             setError(err);
//             setData([]);
//         } finally {
//             setLoading(false);
//         }
//     }, [params]);

//     useEffect(() => {
//         loadData();
//     }, [loadData]);

//     return { data, loading, error, refresh: loadData };
// };

// export const useTestimonials = (params) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const loadData = useCallback(async () => {
//         try {
//             setLoading(true);
//             const result = await getTestimonials(params);
//             setData(Array.isArray(result) ? result : []);
//         } catch (err) {
//             setError(err);
//             setData([]);
//         } finally {
//             setLoading(false);
//         }
//     }, [params]);

//     useEffect(() => {
//         loadData();
//     }, [loadData]);

//     return { data, loading, error, refresh: loadData };
// };

// export const useCertificates = (params) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const loadData = useCallback(async () => {
//         try {
//             setLoading(true);
//             const result = await fetchAllCertificates(params);
//             setData(Array.isArray(result) ? result : []);
//         } catch (err) {
//             setError(err);
//             setData([]);
//         } finally {
//             setLoading(false);
//         }
//     }, [params]);

//     useEffect(() => {
//         loadData();
//     }, [loadData]);

//     return { data, loading, error, refresh: loadData };
// };

// export const useCertificate = (id) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const loadData = useCallback(async () => {
//         if (!id || id === 'undefined') return;
//         try {
//             setLoading(true);
//             const result = await getCertificateById(id);
//             setData(result);
//         } catch (err) {
//             setError(err);
//         } finally {
//             setLoading(false);
//         }
//     }, [id]);

//     useEffect(() => {
//         loadData();
//     }, [loadData]);

//     return { data, loading, error, refresh: loadData };
// };

// export const useCounters = (params) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const loadData = useCallback(async () => {
//         try {
//             setLoading(true);
//             const result = await getCounters(params);
//             setData(Array.isArray(result) ? result : []);
//         } catch (err) {
//             setError(err);
//             setData([]);
//         } finally {
//             setLoading(false);
//         }
//     }, [params]);

//     useEffect(() => {
//         loadData();
//     }, [loadData]);

//     return { data, loading, error, refresh: loadData };
// };
