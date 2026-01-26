import PropTypes from "prop-types";
import {
    MdOutlinePerson,
    MdOutlineCalendarToday,
    MdOutlineFolderOpen,
} from "react-icons/md";

function BlogContent({ post }) {
    if (!post) return null;

    return (
        <article>
            <img
                src={post.image}
                alt={post.title}
                className="mb-8 w-full object-cover"
            />

            <div className="mb-6 flex flex-wrap items-center gap-6 text-[15px] 2xl:text-lg 2xl:gap-10 text-gray-500">
                <div className="flex items-center">
                    <MdOutlinePerson className="mr-1 text-sky-500" size={22} />
                    <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                    <MdOutlineCalendarToday className="mr-1 text-sky-500" size={22} />
                    <span>{post.fullDate || post.date}</span>
                </div>
                <div className="flex items-center">
                    <MdOutlineFolderOpen className="mr-1 text-sky-500" size={22} />
                    <span>{post.category}</span>
                </div>
            </div>

            <h1 className="mb-10 2xl:mb-14 text-2xl font-extrabold md:text-3xl lg:text-5xl 2xl:text-6xl pr-20 leading-tight ">
                {post.title}
            </h1>

            <div className="space-y-8 2xl:space-y-12 text-gray-600 text-lg 2xl:text-xl leading-relaxed">
                {(post.content || []).map((para, index) => (
                    <p key={index}>{para}</p>
                ))}

                {post.detailImages && (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 py-4">
                        {post.detailImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Detail ${index + 1}`}
                                className="rounded-lg object-cover w-full h-auto"
                            />
                        ))}
                    </div>
                )}

                {/* Bottom Content (Paragraphs under images) */}
                {(post.bottomContent || []).map((para, index) => (
                    <p key={`bottom-${index}`}>{para}</p>
                ))}
            </div>
        </article>
    );
}

BlogContent.propTypes = {
    post: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
        date: PropTypes.string,
        fullDate: PropTypes.string,
        category: PropTypes.string,
        content: PropTypes.arrayOf(PropTypes.string),
        detailImages: PropTypes.arrayOf(PropTypes.string),
        bottomContent: PropTypes.arrayOf(PropTypes.string),
    }),
};

export default BlogContent;
