import PropTypes from "prop-types";
import { clientsData } from "../../data/HomePageData";

const LogoCard = ({ logo }) => (
  <div 
    className="w-full max-w-[170px] h-[59px] sm:max-w-[200px] sm:h-[85px] md:max-w-[220px] md:h-[95px] lg:w-[360px] lg:h-[80px] xl:w-[480px] xl:h-[80px] 2xl:w-[600px] 2xl:h-[100px]
      
      bg-white rounded-[8px] md:rounded-[15px]
      shadow-[0px_15px_40px_rgba(176,190,210,0.25)] 
      flex items-center justify-center 
      p-1 "
  >
    <img 
      src={logo.src} 
      alt={logo.alt} 
      className="max-w-[100%] max-h-[100%]" 
    />
  </div>
);

LogoCard.propTypes = {
  logo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

const Clients = () => {
  const { subtitle, title, blogTitle, logos } = clientsData;

  return (
    <section className="py-10 md:py-24 lg:py-32 bg-[#FCFDFF] overflow-hidden">
      <div className=" mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-24">
          <span className="text-[#00AEEF] font-bold text-xs md:text-lg tracking-[0.2em] uppercase block mb-3">
            {subtitle}
          </span>
          <h2 className="text-2xl md:text-5xl lg:text-[52px] font-bold text-[#1A2B49] leading-tight max-w-3xl mx-auto">
            {title} <br className="hidden md:block" />
            <span className="font-semibold block mt-1">{blogTitle}</span>
          </h2>
        </div>

        {/* MOBILE VIEW: Exact 2-Column Grid as per your screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:hidden justify-items-center">
          {logos.map((logo) => (
            <LogoCard key={logo.id} logo={logo} />
          ))}
        </div>

        {/* DESKTOP VIEW: Exact 4-5-4 Staggered Layout */}
        <div className="hidden lg:flex flex-col items-center gap-8 lg:gap-10">
          {/* Row 1 (4 logos) */}
          <div className="flex justify-center gap-8 w-full">
            {logos.slice(0, 4).map((logo) => (
              <LogoCard key={logo.id} logo={logo} />
            ))}
          </div>

          {/* Row 2 (5 logos) - Physically wider to create stagger */}
          <div className="flex justify-center gap-8 w-full">
            {logos.slice(4, 9).map((logo) => (
              <LogoCard key={logo.id} logo={logo} />
            ))}
          </div>

          {/* Row 3 (4 logos) */}
          <div className="flex justify-center gap-8 w-full">
            {logos.slice(9, 13).map((logo) => (
              <LogoCard key={logo.id} logo={logo} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;