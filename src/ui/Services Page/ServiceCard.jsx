import PropTypes from 'prop-types';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  return (
    <Link 
      to={`/service/${service.id}`} // The entire card is now a link
      className=" 
        group bg-white rounded-t-xl
        overflow-hidden 
        shadow-sm
      "
    >
      <div className="relative aspect-[4/3]  xs:aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/9] overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8">
        <h3 className="
          text-lg xs:text-xl sm:text-xl md:text-2xl
          font-bold text-gray-900 line-clamp-1 
          group-hover:text-[#00A3E0] transition-colors duration-300
        ">
          {service.title}
        </h3>

        <p className="
          text-sm xs:text-base sm:text-base md:text-lg lg:text-lg xl:text-xl 
          text-gray-600 mt-2 xs:mt-3 sm:mt-3 md:mt-4 
          line-clamp-2 md:line-clamp-3 break-words
        ">
          {service.subtitle}
        </p>

        {/* <a
          href={`/projects/${service.id}`}
          className="
            mt-4 xs:mt-5 sm:mt-6 
            text-sm xs:text-base sm:text-base md:text-lg 
            inline-flex items-center font-semibold gap-1.5 sm:gap-2 
            text-[#00A3E0] hover:text-[#0088c0] transition-colors
          "
        >
          Read More
          <IoIosArrowRoundForward size={22} className="group-hover:translate-x-1 transition-transform" />
        </a> */}
        <div
          className="
            mt-4 xs:mt-5 sm:mt-6 
            text-sm xs:text-base sm:text-base md:text-lg 
            inline-flex items-center font-semibold gap-1.5 sm:gap-2 
            text-[#00A3E0] transition-colors
          "
        >
          Read More
          <IoIosArrowRoundForward size={22} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    heroImage: PropTypes.string.isRequired,
  }).isRequired,
};