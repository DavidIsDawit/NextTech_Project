import { BACKEND_URL } from '../api/axiosInstance';

/**
 * Normalizes an image URL to be proxy-friendly or uses absolute backend URL.
 */
export const fixImageUrl = (url) => {
    if (!url || typeof url !== 'string' || url.startsWith('http') || url.startsWith('blob:') || url.startsWith('data:')) {
        return url;
    }

    // Normalize slashes
    let cleaned = url.replace(/\\/g, '/').replace(/\/+/g, '/');
    if (!cleaned.startsWith('/')) cleaned = '/' + cleaned;

    // Apply the rewrite rules that were previously in vite.config.js
    if (cleaned.startsWith('/images')) {
        return `${BACKEND_URL}/public${cleaned}`;
    }
    if (cleaned.startsWith('/ImageGallery')) {
        return `${BACKEND_URL}/public/images${cleaned}`;
    }

    // Default: Add backend URL to paths like /public, /uploads, /storage, /img
    const targetPaths = ['/public', '/uploads', '/storage', '/img', '/api'];
    if (targetPaths.some(p => cleaned.startsWith(p))) {
        return `${BACKEND_URL}${cleaned}`;
    }

    return cleaned;
};

/**
 * Recursively scans an object for media URLs and fixes them.
 */
export const fixObjectMedia = (obj) => {
    if (!obj || typeof obj !== 'object') {
        if (typeof obj === 'string' && (
            obj.match(/\.(jpg|jpeg|png|gif|svg|webp|avif)$/i) ||
            obj.includes('public/') ||
            obj.includes('uploads/') ||
            obj.includes('storage/')
        )) {
            return fixImageUrl(obj);
        }
        return obj;
    }
    const newObj = Array.isArray(obj) ? [...obj] : { ...obj };
    for (const key in newObj) {
        const val = newObj[key];
        const isMediaKey = ['image', 'icon', 'logo', 'cover', 'avatar', 'src', 'url', 'banner', 'hero', 'thumbnail', 'pic', 'photo', 'file'].some(k => key.toLowerCase().includes(k));
        if (typeof val === 'string' && (isMediaKey || val.match(/\.(jpg|jpeg|png|gif|svg|webp|avif)$/i))) {
            newObj[key] = fixImageUrl(val);
        } else if (Array.isArray(val)) {
            newObj[key] = val.map(item => fixObjectMedia(item));
        } else if (val && typeof val === 'object') {
            newObj[key] = fixObjectMedia(val);
        }
    }
    return newObj;
};

/**
 * Formats a date string or object into "Month YYYY" (e.g., November 2023)
 */
export const formatMonthYear = (dateInput) => {
    if (!dateInput) return "";
    try {
        const date = new Date(dateInput);
        if (isNaN(date.getTime())) return String(dateInput);

        const fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = fullMonths[date.getMonth()];
        const year = date.getFullYear();

        return `${month} ${year}`;
    } catch (e) {
        return String(dateInput);
    }
};

/**
 * Formats a date string or object into "DD MMM YYYY" (e.g., 05 Feb 2026)
 */
export const formatDate = (dateInput) => {
    if (!dateInput) return "";
    try {
        const date = new Date(dateInput);
        if (isNaN(date.getTime())) return String(dateInput);

        const day = String(date.getDate()).padStart(2, '0');
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    } catch (e) {
        return String(dateInput);
    }
};

/**
 * Normalizes common fields (IDs, Names, Labels, Dates, etc.)
 */
export const normalizeDataFields = (item) => {
    if (!item || typeof item !== 'object') return item;
    const normalized = { ...item };
    if (normalized._id) normalized.id = String(normalized._id);
    if (normalized.id) normalized.id = String(normalized.id);

    // Partners/Clients mapping
    if (normalized.partnerName) {
        normalized.name = normalized.partnerName;
        normalized.label = normalized.partnerName;
    }
    if (normalized.partnerImage) {
        normalized.image = normalized.partnerImage;
        normalized.src = normalized.partnerImage;
    }

    // Gallery mapping
    if (normalized.coverImage) {
        normalized.image = normalized.coverImage;
    }

    // Certificates mapping (New Schema Bi-directional)
    if (normalized.certificateName) normalized.title = normalized.certificateName;
    if (normalized.title) normalized.certificateName = normalized.title;
    if (normalized.CertificateName) {
        normalized.certificateName = normalized.CertificateName;
        normalized.title = normalized.CertificateName;
    }

    if (normalized.certificateImage) {
        normalized.image = normalized.certificateImage;
        normalized.src = normalized.certificateImage;
    }
    if (normalized.image) normalized.certificateImage = normalized.image;
    if (normalized.CertificateImage) {
        normalized.certificateImage = normalized.CertificateImage;
        normalized.image = normalized.CertificateImage;
    }

    if (normalized.certificateType) {
        normalized.type = normalized.certificateType;
        if (!normalized.description) normalized.description = normalized.certificateType;
    }
    if (normalized.description && !normalized.certificateType) normalized.certificateType = normalized.description;
    if (normalized.CertificateType) {
        normalized.certificateType = normalized.CertificateType;
        normalized.type = normalized.CertificateType;
        if (!normalized.description) normalized.description = normalized.CertificateType;
    }

    if (normalized.certificateFrom) {
        normalized.from = normalized.certificateFrom;
        normalized.client = normalized.certificateFrom;
    }
    if (normalized.from) normalized.certificateFrom = normalized.from;
    if (normalized.client && !normalized.certificateFrom) normalized.certificateFrom = normalized.client;
    if (normalized.CertificateFrom) {
        normalized.certificateFrom = normalized.CertificateFrom;
        normalized.from = normalized.CertificateFrom;
        normalized.client = normalized.CertificateFrom;
    }

    // Date normalization and formatting
    const rawDate = normalized.IssueDate || normalized.issueDate || normalized.createdDate || normalized.CreatedDate || normalized.cratedDate || normalized.CratedDate || normalized.date || normalized.updatedAt || normalized.createdAt || normalized.Date || normalized.happingDate;
    if (rawDate) {
        normalized.rawDate = rawDate; // Keep original for sorting
        const formatted = formatDate(rawDate);
        const monthYear = formatMonthYear(rawDate);
        normalized.date = formatted;
        normalized.monthYear = monthYear;
        normalized.issuedate = formatted;
        normalized.IssueDate = formatted;
        normalized.fullDate = formatted;
    }

    // Common attribute mapping
    if (normalized.image && !normalized.images) normalized.images = [normalized.image];
    if (normalized.images && !normalized.image) normalized.image = normalized.images[0];
    if (normalized.name && !normalized.label) normalized.label = normalized.name;
    if (normalized.title && !normalized.name) normalized.name = normalized.title;
    if (normalized.catagory) normalized.category = normalized.catagory;
    if (normalized.discription) normalized.description = normalized.discription;

    // Services mapping
    if (normalized.imageCover) {
        normalized.image = normalized.imageCover;
        normalized.heroImage = normalized.imageCover;
        normalized.coverImage = normalized.imageCover;
    }
    if (normalized.images && Array.isArray(normalized.images)) {
        normalized.gallery = normalized.images;
    }
    if (normalized.description && !normalized.subtitle) {
        normalized.subtitle = normalized.description;
    }

    // Services detail mapping
    if (normalized.description && !normalized.content) {
        normalized.content = {
            paragraphs: [normalized.description],
            subparagraphs: [],
            gallery: normalized.images || []
        };
        // Ensure both old and new names work
        normalized.images = normalized.images || [];
        normalized.gallery = normalized.images;

        // Ensure headLine is available as an array for the .map() in UI
        normalized.content.headLine = normalized.headLine
            ? (Array.isArray(normalized.headLine) ? normalized.headLine : [normalized.headLine])
            : [];
    }

    // Portfolio specific mappings
    if (normalized.thumbinal) {
        normalized.image = normalized.thumbinal;
        normalized.thumbnail = normalized.thumbinal;
    }

    // Map split description fields to description array
    if (normalized.descriptionOne && !normalized.description) {
        normalized.description = [
            normalized.descriptionOne,
            normalized.subDescriptionTwo,
            normalized.subDescriptionThere
        ].filter(Boolean);
    }

    // Map result fields
    if (normalized.resultOne && !normalized.results) {
        normalized.results = [
            normalized.resultOne,
            normalized.resultTwo,
            normalized.resultThere
        ].filter(Boolean);
    }

    // Map requirement field
    if (normalized.requirement && !normalized.requirements) {
        let reqs = normalized.requirement;
        // If it's an array with one element that has commas, split it
        if (Array.isArray(reqs) && reqs.length === 1 && typeof reqs[0] === 'string' && reqs[0].includes(',')) {
            reqs = reqs[0].split(',').map(s => s.trim());
        } else if (typeof reqs === 'string') {
            reqs = reqs.split(',').map(s => s.trim());
        } else if (!Array.isArray(reqs)) {
            reqs = [reqs];
        }
        normalized.requirements = reqs;
    }

    // Testimonial specific mappings
    if (normalized.testimony) {
        normalized.text = normalized.testimony;
        normalized.testimonial = normalized.testimony;
    }
    if (normalized.specality) {
        normalized.role = normalized.specality;
        normalized.position = normalized.specality;
    }
    if (normalized.rate) normalized.stars = normalized.rate;

    return normalized;
};

/**
 * Internal helper for normalizing responses.
 */
export const normalizeArrayResponse = (result, key) => {
    let rawArray = [];
    if (Array.isArray(result)) {
        rawArray = result;
    } else if (result && typeof result === 'object') {
        const potentialArray =
            result[key] ||
            (result.data && Array.isArray(result.data[key]) ? result.data[key] : null) ||
            result.data ||
            result.portfolios ||
            result.allPortfolios ||
            result.testimonials ||
            result.testimonies ||
            result.testimonial ||
            result.portfolio ||
            result.Portfolio ||
            result.allPortfolio ||
            result.news ||
            result.services ||
            result.certificates ||
            result.projects ||
            result.teams ||
            result.partners ||
            result.gallery ||
            [];
        rawArray = Array.isArray(potentialArray) ? potentialArray : [];
    }
    return rawArray.map(item => fixObjectMedia(normalizeDataFields(item)));
};
