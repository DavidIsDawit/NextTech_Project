const SHARED_BANNER_IMAGE = "/BannerCoverImages/banner.jpg";

export const BANNER_CONFIGS = {
    "/aboutus": {
        title: "About Us",
        backgroundImage: SHARED_BANNER_IMAGE,
        breadcrumbs: [{ label: "Home", path: "/" }, { label: "About Us" }],
    },
    "/service": {
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
    if (BANNER_CONFIGS[pathname]) return BANNER_CONFIGS[pathname];

    if (pathname.startsWith("/blogs/")) {
        return {
            title: "News",
            backgroundImage: SHARED_BANNER_IMAGE,
            breadcrumbs: [
                { label: "Home", path: "/" },
                { label: "News", path: "/blogs" },
                { label: "News Detail" },
            ],
        };
    }

    if (pathname.startsWith("/service/")) {
        return {
            title: "Service Detail",
            backgroundImage: SHARED_BANNER_IMAGE,
            breadcrumbs: [
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Detail" },
            ],
        };
    }

    if (pathname.startsWith("/certificate/")) {
        return {
            title: "Certificate Detail",
            backgroundImage: SHARED_BANNER_IMAGE,
            breadcrumbs: [
                { label: "Home", path: "/" },
                { label: "Certificate", path: "/certificate" },
                { label: "Certificate Detail" },
            ],
        };
    }


    if (pathname.startsWith("/portfolio/")) {
        return {
            title: "portfolio Detail",
            backgroundImage: SHARED_BANNER_IMAGE,
            breadcrumbs: [
                { label: "Home", path: "/" },
                { label: "portfolio", path: "/portfolio" },
                { label: "Detail" },
            ],
        };
    }

    return null;
};
