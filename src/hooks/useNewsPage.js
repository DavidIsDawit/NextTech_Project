import { useState, useMemo } from "react";
import blogData from "../data/NewsPageData";

function useBlog() {
    const [searchQuery, setSearchQuery] = useState("");

    const posts = blogData.posts;

    // Filter posts by search query (title or tags)
    const filteredPosts = useMemo(() => {
        if (!searchQuery) return posts;
        const lowerQuery = searchQuery.toLowerCase();
        return posts.filter(
            (post) =>
                post.title.toLowerCase().includes(lowerQuery) ||
                (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)))
        );
    }, [searchQuery, posts]);

    // Derive categories with counts from ALL posts
    const categories = useMemo(() => {
        const categoryCounts = posts.reduce((acc, post) => {
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
        const allTags = posts.reduce((acc, post) => {
            if (post.tags) {
                post.tags.forEach((tag) => acc.add(tag));
            }
            return acc;
        }, new Set());
        return Array.from(allTags).sort();
    }, [posts]);

    // Get recent posts (sorted by date, take top 3)
    const recentPosts = useMemo(() => {
        return [...posts]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5);
    }, [posts]);

    return {
        posts,
        filteredPosts,
        categories,
        tags,
        recentPosts,
        searchQuery,
        setSearchQuery,
    };
}

export default useBlog;
