import PropTypes from "prop-types";
import { useState } from "react";
import BlogCard from "./NewsCard";
import Pagination from "../Pagination";

function BlogList({ posts }) {
    const [currentPage, setCurrentPage] = useState(1);

    // NEW: State to hold the sliced posts for the current page
    const [currentPosts, setCurrentPosts] = useState([]);

    const postsPerPage = 6;

    if (!posts || posts.length === 0) return null;

    return (
        <div className="flex flex-col gap-20">
            {/* Grid now uses currentPosts state updated by Pagination */}
            <div className="grid grid-cols-1 gap-x-6 xl:gap-x-6 2xl:gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:mx-16 xl:mx-20 2xl:mx-20">
                {currentPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>

            <Pagination
                items={posts}
                itemsPerPage={postsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                onDataUpdate={setCurrentPosts}
            />
        </div>
    );
}

BlogList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        })
    ),
};

export default BlogList;