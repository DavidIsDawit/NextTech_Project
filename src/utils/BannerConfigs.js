import blogData from "../data/NewsPageData";
import services from "../data/ServicesPageData";
import certificateItems from "../data/CertificatePageData";
import { portfolioProjects } from "../data/PortfolioPageData";

const SHARED_BANNER_IMAGE = "/BannerCoverImages/banner.jpg";

export const BANNER_CONFIGS = {
    "/aboutus": {
        title: "About Us",
        backgroundImage: SHARED_BANNER_IMAGE,
        breadcrumbs: [{ label: "Home", path: "/" }, { label: "About Us" }],
    },
    "/Service": {
        title: "Our Services",
        backgroundImage: SHARED_BANNER_IMAGE,
        breadcrumbs: [{ label: "Home", path: "/" }, { label: "Services" }],
    },
    "/gallery": {
        title: "Gallery",
        backgroundImage: SHARED_BANNER_IMAGE,
        breadcrumbs: [{ label: "Home", path: "/" }, { label: "Gallery" }],
    },
    "/portfolio": {
        title: "Our Portfolio",
        backgroundImage: SHARED_BANNER_IMAGE,
        breadcrumbs: [{ label: "Home", path: "/" }, { label: "Portfolio" }],
    },
    "/certificates": {
        title: "Certificates",
        backgroundImage: SHARED_BANNER_IMAGE,
        breadcrumbs: [{ label: "Home", path: "/" }, { label: "Certificates" }],
    },
    "/news": {
        title: "News",
        backgroundImage: SHARED_BANNER_IMAGE,
        breadcrumbs: [{ label: "Home", path: "/" }, { label: "News" }],
    },
    "/contacts": {
        title: "Contact Us",
        backgroundImage: SHARED_BANNER_IMAGE,
        breadcrumbs: [{ label: "Home", path: "/" }, { label: "Contact Us" }],
    },
};

export const getBannerConfig = (pathname) => {
    // Exact match (case-sensitive check first for performance if standard, but here we might want to be robust)
    if (BANNER_CONFIGS[pathname]) return BANNER_CONFIGS[pathname];

    // Case-insensitive fallback for main routes
    const normalPath = pathname.toLowerCase();
    const configKey = Object.keys(BANNER_CONFIGS).find(key => key.toLowerCase() === normalPath);
    if (configKey) return BANNER_CONFIGS[configKey];

    if (normalPath.startsWith("/news/")) {
        const id = Number(pathname.split("/").pop());
        const post = blogData.posts.find(p => p.id === id);

        if (!post) return null;

        return {
            title: "News",
            backgroundImage: SHARED_BANNER_IMAGE,
            breadcrumbs: [
                { label: "Home", path: "/" },
                { label: "News", path: "/news" },
                { label: "News Detail" },
                { label: id },
            ],
        };
    }

    if (normalPath.startsWith("/service/")) {
        const id = Number(pathname.split("/").pop());
        const service = services.find(s => s.id === id);

        if (!service) return null;

        return {
            title: "Service Detail",
            backgroundImage: SHARED_BANNER_IMAGE,
            breadcrumbs: [
                { label: "Home", path: "/" },
                { label: "Services", path: "/Service" },
                { label: "Service Detail" },
                { label: id },
            ],
        };
    }

    if (normalPath.startsWith("/certificate/") || normalPath.startsWith("/certificates/")) {
        const id = Number(pathname.split("/").pop());
        const certificate = certificateItems.find(c => c.id === id);

        if (!certificate) return null;

        // App.jsx uses /certificate/:id
        return {
            title: "Certificate",
            backgroundImage: SHARED_BANNER_IMAGE,
            breadcrumbs: [
                { label: "Home", path: "/" },
                { label: "Certificates", path: "/certificates" },
                { label: "Certificate Detail" },
                { label: id },
            ],
        };
    }

    if (normalPath.startsWith("/portfolio/")) {
        const id = Number(pathname.split("/").pop());
        const project = portfolioProjects.find(p => p.id === id);

        if (!project) return null;

        return {
            title: "Our Portfolio",
            backgroundImage: SHARED_BANNER_IMAGE,
            breadcrumbs: [
                { label: "Home", path: "/" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "Portfolio Detail" },
                { label: id },
            ],
        };
    }

    if (normalPath.startsWith("/careers/")) {
        const id = pathname.split("/").pop();
        return {
            title: "Career Detail",
            backgroundImage: SHARED_BANNER_IMAGE,
            breadcrumbs: [
                { label: "Home", path: "/" },
                { label: "Careers", path: "/careers" },
                { label: "Career Detail" },
                { label: id },
            ],
        };
    }

    return null;
};
