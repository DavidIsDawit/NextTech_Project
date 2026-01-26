import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CoverImage({ title, backgroundImage, breadcrumbs }) {
    return (
        <div
            className="relative h-[38rem] w-full bg-cover bg-center mb-12"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Specific Gradient Overlay: Dark Blue (#1A215E) -> Light Blue/Gray (#C6C7D7) -> White (#FFFFFF) */}
            <div className="absolute inset-0 bg-[#1e3873]/40 md:bg-gradient-to-r md:from-[#1A215E]/85 md:via-[#C6C7D7]/10 md:to-[#FFFFFF]/10" />
            <div className="relative z-[60] flex h-full flex-col items-start justify-center px-6 lg:px-40 pointer-events-none">
                <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl font-sans pointer-events-auto">
                    {title}
                </h1>

                {/* Breadcrumbs */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <div className="flex items-center gap-3 text-base font-medium text-white/90 font-sans pointer-events-auto">
                        {breadcrumbs.map((crumb, index) => (
                            <div key={index} className="flex items-center gap-3">
                                {crumb.path ? (
                                    <Link to={crumb.path} className="hover:text-white">
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span>{crumb.label}</span>
                                )}
                                {index < breadcrumbs.length - 1 && (
                                    <span className="text-white/60">/</span>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

CoverImage.propTypes = {
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    breadcrumbs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            path: PropTypes.string,
        })
    ),
};

export default CoverImage;
