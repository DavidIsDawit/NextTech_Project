import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdPerson, MdDateRange } from "react-icons/md";
import Button from "../Button";

function BlogCard({ post }) {
    if (!post) return null;

    return (
        <div
            className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-transform"
        >
            <div className="relative overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-120"
                />
            </div>

            <div className="flex w-full bg-white p-6 2xl:p-8">
                <div className="flex w-full flex-col items-start lg:w-2/3">
                    <div className="mb-4 flex flex-nowrap items-center gap-x-4 gap-y-2 text-[13px] 2xl:text-base">
                        <div className="flex items-center">
                            <MdPerson className="mr-1 text-lg text-sky-500" />
                            <span>{post.author}.</span>
                        </div>
                        <div className="flex items-center">
                            <MdDateRange className="mr-1 text-lg text-sky-500" />
                            <span>{post.date}</span>
                        </div>
                    </div>

                    <h1 className="line-clamp-2 mb-4 text-left font-bold leading-8 text-[#1a1a1a] transition-colors group-hover:text-sky-500 text-xl 2xl:text-xl">
                        {post.title}
                    </h1>

                    <Button
                        as={Link}
                        to={`/blogs/${post.id}`}
                        variant="text"
                    >
                        READ MORE
                    </Button>
                </div>

                <div className="hidden w-1/3 lg:block"></div>
            </div>
        </div>
    );
}

BlogCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string,
        image: PropTypes.string,
        date: PropTypes.string,
        author: PropTypes.string,
    }),
};

export default BlogCard;
