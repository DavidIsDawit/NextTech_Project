// import PropTypes from "prop-types";
// import { useState } from "react";
// import BlogCard from "./NewsCard";
// import Pagination from "../Pagination";

// function BlogList({ posts }) {
//     const [currentPage, setCurrentPage] = useState(1);
//     const postsPerPage = 6;

//     if (!posts || posts.length === 0) return null;

//     // Calculate Slice
//     const indexOfLastPost = currentPage * postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
//     const totalPages = Math.ceil(posts.length / postsPerPage);

//     return (
//         <div className="flex flex-col gap-20">
//             <div className="grid grid-cols-1 gap-x-6  xl:gap-x-8 2xl:gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:mx-16 xl:mx-20 2xl:mx-32">
//                 {currentPosts.map((post) => (
//                     <BlogCard key={post.id} post={post} />
//                 ))}
//             </div>

//             <Pagination
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={setCurrentPage}
//             />
//         </div>
//     );
// }

// BlogList.propTypes = {
//     posts: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//         })
//     ),
// };

// export default BlogList;



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

            {/* Pagination handles all logic:
                1. items: passes all posts
                2. itemsPerPage: uses the constant 6
                3. onDataUpdate: fills the currentPosts state automatically
            */}
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