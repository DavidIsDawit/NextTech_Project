import { useState, useMemo, useEffect } from "react";
import generalService from "../api/generalService";
import { normalizeArrayResponse } from "../utils/dataNormalization";

/**
 * SECTION: API FETCHERS
 */
export const getNews = async (params = {}) => {
    const response = await generalService.getAllNews(params);
    return normalizeArrayResponse(response.data, 'news');
};

export const getSingleNews = async (id) => {
    const response = await generalService.getSingleNews(id);
    const result = response.data;
    // Robustly find the news object
    let item = result?.news || result?.data?.news || result?.data || result;
    if (Array.isArray(item)) item = item[0];

    // Normalize and fix media
    const normalized = normalizeArrayResponse([item], 'news')[0];

    // Page specific mapping
    return {
        ...normalized,
        id: normalized.id,
        image: normalized.imageCover || normalized.image,
        detailImages: normalized.images || normalized.detailImages,
        content1: normalized.descriptionOne || normalized.description1,
        content2: normalized.descriptionTwo || normalized.description2,
        bottomContent1: normalized.discriptionThree || normalized.descriptionThree,
        bottomContent2: normalized.discriptionFour || normalized.descriptionFour,
        content: normalized.content || [],
    };
};

/**
 * useSingleNews hook for fetching a single post by ID.
 */
export function useSingleNews(id) {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;
        const fetchPost = async () => {
            try {
                setLoading(true);
                const result = await getSingleNews(id);
                setPost(result);
                setError(null);
            } catch (err) {
                console.error("Error fetching single news:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    return { post, loading, error };
}

/**
 * useBlog hook to handle news fetching, searching, and filtering.
 */
function useBlog() {
    const [searchQuery, setSearchQuery] = useState("");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                // Use the centralized getNews helper which handles basic normalization and media fixing
                const result = await getNews();

                // Secondary mapping specific to News Page requirements
                const mappedPosts = result.map((post, index) => {
                    const id = post.id || String(index);
                    return {
                        ...post,
                        // Ensure ID type consistency (NewsDetail uses parseInt comparison)
                        id: !isNaN(id) && /^\d+$/.test(String(id)) ? parseInt(id) : id,
                        image: post.imageCover || post.image,
                        // Support both images and detailImages for gallery/grid
                        detailImages: post.images || post.detailImages,
                        // NewsContent expects specific content fields for paragraphs
                        content1: post.descriptionOne || post.description1,
                        content2: post.descriptionTwo || post.description2,
                        // Mapping 3 and 4 to "bottomContent" fields
                        bottomContent1: post.discriptionThree || post.descriptionThree,
                        bottomContent2: post.discriptionFour || post.descriptionFour,
                        // General content array as fallback
                        content: post.content || [],
                    };
                });

                setPosts(mappedPosts);
                setError(null);
            } catch (err) {
                console.error("Error fetching news:", err);
                setError(err);
                setPosts([]); // Ensure posts is an array even on error
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    // Filter posts by search query (title, tags, or category)
    const filteredPosts = useMemo(() => {
        const safePosts = Array.isArray(posts) ? posts : [];
        if (!searchQuery) return safePosts;
        const lowerQuery = searchQuery.toLowerCase();
        return safePosts.filter(
            (post) =>
                (post.title && post.title.toLowerCase().includes(lowerQuery)) ||
                (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))) ||
                (post.category && post.category.toLowerCase().includes(lowerQuery))
        );
    }, [searchQuery, posts]);

    // Derive categories with counts from ALL posts
    const categories = useMemo(() => {
        const safePosts = Array.isArray(posts) ? posts : [];
        const categoryCounts = safePosts.reduce((acc, post) => {
            const cat = post.category || "Uncategorized";
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, {});

        return Object.entries(categoryCounts).map(([name, count]) => ({
            name,
            count,
        }));
    }, [posts]);

    // Derive unique tags from ALL posts
    const tags = useMemo(() => {
        const safePosts = Array.isArray(posts) ? posts : [];
        const allTags = safePosts.reduce((acc, post) => {
            if (post.tags) {
                post.tags.forEach((tag) => acc.add(tag));
            }
            return acc;
        }, new Set());
        return Array.from(allTags).sort();
    }, [posts]);

    // Get recent posts (sorted by date, take top 5)
    const recentPosts = useMemo(() => {
        const safePosts = Array.isArray(posts) ? posts : [];
        return [...safePosts]
            .sort((a, b) => new Date(b.rawDate || 0) - new Date(a.rawDate || 0))
            .slice(0, 5);
    }, [posts]);

    return {
        posts: Array.isArray(posts) ? posts : [],
        filteredPosts,
        categories,
        tags,
        recentPosts,
        searchQuery,
        setSearchQuery,
        loading,
        error
    };
}

export default useBlog;