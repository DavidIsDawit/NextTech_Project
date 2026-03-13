import PropTypes from "prop-types";

function BlogTags({ tags }) {
    if (!tags) return null;

    return (
        <section className="bg-[#f8faff] p-8">
            <h3 className="mb-6 text-xl font-bold text-[#1a1a1a]">
                Tags
            </h3>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-white px-4 py-2 text-[14px] text-gray-700 border border-gray-200  rounded-md"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </section>
    );
}

BlogTags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
};

export default BlogTags;
