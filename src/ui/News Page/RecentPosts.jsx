import PropTypes from "prop-types";
import { MdOutlineCalendarToday } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function RecentPosts({ posts }) {
    const navigate = useNavigate();

    if (!posts) return null;

    const handlePostClick = (postId) => {
        navigate(`/blogs/${postId}`);
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [day, month, year] = dateStr.split(" ");
        const months = {
            Jan: "January", Feb: "February", Mar: "March", Apr: "April",
            May: "May", Jun: "June", Jul: "July", Aug: "August",
            Sep: "September", Oct: "October", Nov: "November", Dec: "December"
        };
        return `${months[month] || month} ${day}, ${year}`;
    };

    return (
        <section className="bg-[#f8faff] p-8">
            <h3 className="mb-6 text-xl font-bold text-[#1a1a1a]">
                Recent Posts
            </h3>
            <div className="space-y-6">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="flex gap-4 group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                        onClick={() => handlePostClick(post.id)}
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="h-20 w-20 rounded-md object-cover"
                        />
                        <div className="flex flex-col justify-center gap-3">
                            <h4 className="line-clamp-2 text-lg font-bold leading-snug text-[#1a1a1a] transition-colors duration-300 group-hover:text-[#00a6e3]">
                                {post.title}
                            </h4>
                            <div className="flex items-center text-sm font-medium text-[#00A3C4]">
                                <MdOutlineCalendarToday className="mr-2" size={16} />
                                <span>{formatDate(post.date)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

RecentPosts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string,
            image: PropTypes.string,
            date: PropTypes.string,
        })
    ),
};

export default RecentPosts;
