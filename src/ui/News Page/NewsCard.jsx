import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdPerson, MdDateRange } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

function BlogCard({ post }) {
    if (!post) return null;

    return (
        <Link
            to={`/news/${post.id}`}
            className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-transform w-full cursor-pointer"
        >
            <div className="relative overflow-hidden aspect-[16/10] w-full">
                <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-120"
                />
            </div>

            <div className="flex w-full bg-white p-6 2xl:p-8">
                <div className="flex w-full flex-col items-start">
                    <div className="mb-4 flex flex-nowrap items-center gap-x-2 gap-y-2 text-xs 2xl:text-base">
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

                    <span
                        className="
                            mt-2
                            text-sm xs:text-base sm:text-base md:text-lg 
                            inline-flex items-center font-semibold gap-1.5 sm:gap-2 
                            text-[#00A3E0] transition-colors
                        "
                    >
                        Read More
                        <IoIosArrowRoundForward size={22} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </div>
        </Link>
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
