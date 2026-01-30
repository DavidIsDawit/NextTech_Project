import { MdSearch } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBlog from "../../hooks/useNewsPage";

function BlogSearch({ value, onChange }) {
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef(null);
    const { posts } = useBlog();
    const navigate = useNavigate();

    // Filter posts based on search query
    const filteredResults = value && value.length >= 3
        ? posts.filter((post) => {
            const lowerQuery = value.toLowerCase();
            return (
                post.title.toLowerCase().includes(lowerQuery) ||
                (post.category && post.category.toLowerCase().includes(lowerQuery)) ||
                (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)))
            );
        }).slice(0, 5)
        : [];

    // Show results when typing 3+ characters
    useEffect(() => {
        setShowResults(value && value.length >= 3 && filteredResults.length > 0);
    }, [value, filteredResults.length]);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleResultClick = (post) => {
        navigate(`/news/${post.id}`);
        setShowResults(false);
        if (onChange) onChange(""); // Clear search
    };

    return (
        <div className="bg-[#f4f7fa] py-12 px-6">
            <div className="relative" ref={searchRef}>
                <div className="relative flex items-center bg-white p-1 border border-gray-100 shadow-sm">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={value || ""}
                        onChange={(e) => onChange && onChange(e.target.value)}
                        className="w-full bg-transparent px-4 py-3 text-sm focus:outline-none text-gray-600 placeholder-gray-400"
                    />
                    <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-[#00A3C4] text-white transition-colors hover:bg-[#008ba3]">
                        <MdSearch size={20} />
                    </button>
                </div>

                {/* Autocomplete Dropdown */}
                {showResults && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
                        {filteredResults.map((post) => (
                            <div
                                key={post.id}
                                onClick={() => handleResultClick(post)}
                                className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                            >
                                <h4 className="text-sm font-semibold text-gray-800 mb-1">
                                    {post.title}
                                </h4>
                                <p className="text-xs text-gray-500 line-clamp-1">
                                    {post.excerpt ||
                                        (Array.isArray(post.content) ? post.content.join(" ") : post.content)?.substring(0, 100)}
                                </p>
                                {post.tags && (
                                    <div className="flex gap-1 mt-2">
                                        {post.tags.slice(0, 3).map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default BlogSearch;

import PropTypes from "prop-types";

BlogSearch.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};