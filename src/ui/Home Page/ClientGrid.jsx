import PropTypes from "prop-types";
import { clientsData } from "../../data/HomePageData";

const LogoCard = ({ logo }) => (
  <div 
    className="
      /* Mobile: Fixed size, perfectly centered in their own space */
      w-[155px] h-[80px]   
      
      /* Tablet: Scaling up slightly */
      md:w-[180px] md:h-[110px] 
      
      /* Large Screen: Your 110% Zoom layout */
      lg:w-[295px] lg:h-[110px] lg:p-[18px] 
      
      bg-white shadow-xl lg:shadow-xl
      border border-gray-50 flex items-center justify-center"
  >
    <img 
      src={logo.src} 
      alt={logo.alt} 
      className="max-h-[65px] md:max-h-[75px] lg:max-h-[100px] w-auto max-w-[95%] object-contain" 
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
    <section className="py-2 md:py-0 lg:py-[30px] bg-white overflow-hidden">
      {/* Container centered with mx-auto */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12 lg:mb-[80px] space-y-3 lg:space-y-6">
          <span className="text-primary font-bold text-[15px] md:text-sm lg:text-[22px] tracking-widest uppercase">
            {subtitle}
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-[56px] font-bold text-[#0a1128] leading-tight">
            {title} <br className="hidden lg:block" />
            <span className="lg:mt-2 block">{blogTitle}</span>
          </h2>
        </div>

        {/* MOBILE & TABLET: Centered flex container */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:hidden w-full max-w-[400px] md:max-w-full">
          {logos.map((logo) => (
            <LogoCard key={logo.id} logo={logo} />
          ))}
        </div>

        {/* LARGE SCREENS: 4-5-4 Staggered Layout */}
        <div className="hidden lg:flex flex-col items-center gap-[30px] w-full">
          {/* Row 1: 4 Cards */}
          <div className="flex justify-center gap-[30px] w-full">
            {logos.slice(0, 4).map((logo) => (
              <LogoCard key={logo.id} logo={logo} />
            ))}
          </div>

          {/* Row 2: 5 Cards - Physically wider row */}
          <div className="flex justify-center gap-[30px] w-full lg:w-[115%]">
            {logos.slice(4, 9).map((logo) => (
              <LogoCard key={logo.id} logo={logo} />
            ))}
          </div>

          {/* Row 3: 4 Cards */}
          <div className="flex justify-center gap-[30px] w-full">
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