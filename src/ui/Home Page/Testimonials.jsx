import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { testimonialsData } from '../../data/HomePageData';

const Testimonials = () => {
  const { subtitle, title, items } = testimonialsData;
  const [currentPage, setCurrentPage] = useState(0);
  
  // Changed: Tracking window width to handle the 2-card tablet view
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Changed: Logic to show 1 card (mobile), 2 cards (md), or 3 cards (lg)
  let itemsPerPage = 1;
  if (windowWidth >= 1024) {
    itemsPerPage = 3; 
  } else if (windowWidth >= 768) {
    itemsPerPage = 2; 
  }

  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Auto-play logic
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentPage((prevPage) => 
          prevPage >= totalPages - 1 ? 0 : prevPage + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, totalPages]); 

  const currentItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-12 md:py-20 lg:py-[70px] px-4  overflow-hidden">
      <div className="max-w-7xl lg:max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-20 md:space-y-10 space-y-5">
          <span className="text-primary font-bold text-md md:text-sm lg:text-[22px] tracking-widest uppercase">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-[#0a1128] leading-tight">
            {title}
          </h2>
        </div>

        {/* Testimonials Container */}
        <div 
          className="w-full flex justify-center min-h-[250px] md:min-h-[100px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Changed: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 to show 2 cards on tablet */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[40px] w-full max-w-[450px] md:max-w-full">
          {currentItems.map((item) => (
  <div 
    key={item.id} 
    className="bg-white p-8 lg:p-[45px] rounded-[25px] lg:rounded-[35px] shadow-[0_15px_50px_rgba(0,0,0,0.05)] text-left border border-transparent hover:border-blue-50 transition-all duration-300 transform animate-fadeInUp flex flex-col h-full" // Added: flex flex-col h-full
  >
    {/* Profile Header */}
    <div className="flex items-center gap-5 mb-6 lg:mb-8">
      <div className="relative flex-shrink-0">
        <div 
          className="w-16 h-16 lg:w-[85px] lg:h-[85px] rounded-full flex items-center justify-center shadow-sm"
          style={{ 
            background: `conic-gradient(#00AEEF 0deg 180deg, #d1d5db 180deg 360deg)` 
          }}
        >
          <div className="w-[92%] h-[92%] rounded-full bg-white flex items-center justify-center">
            <div className="w-[88%] h-[88%] rounded-full overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-[#0a1128] text-lg lg:text-[22px] leading-tight">
          {item.name}
        </h4>
        <p className="text-[#00AEEF] text-sm lg:text-[16px] font-semibold mt-1">
          {item.role}
        </p>
      </div>
    </div>

    {/* Testimonial Text */}
    <p className="text-secondary text-[15px] lg:text-[18px] leading-relaxed italic mb-6">
      &quot;{item.text}&quot;
    </p>

    {/* Stars Section - Pushed to the bottom */}
    <div className="flex gap-1 mt-auto  border-t border-gray-50"> {/* Added: mt-auto and a subtle top border/padding */}
      {[...Array(item.stars)].map((_, i) => (
        <span key={i} className="text-[#FFA800] text-lg lg:text-[20px]">★</span>
      ))}
    </div>
  </div>
))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-8 lg:mt-10">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`
                transition-all duration-300 rounded-full
                ${currentPage === index 
                  ? 'md:w-2 md:h-2 h-3 w-3 bg-[#0a1128]' 
                  : 'md:w-2 md:h-2 h-3 w-3 bg-gray-300 '}
              `}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default Testimonials;