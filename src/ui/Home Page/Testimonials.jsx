import { useState, useEffect } from 'react';
import { testimonialsData } from '../../data/HomePageData';

const Testimonials = () => {
  const { subtitle, title, items } = testimonialsData;
  const [currentPage, setCurrentPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let itemsPerPage = 1;
  if (windowWidth >= 1024) itemsPerPage = 3; 
  else if (windowWidth >= 768) itemsPerPage = 2; 

  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentPage((prevPage) => (prevPage >= totalPages - 1 ? 0 : prevPage + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, totalPages]); 

  const currentItems = items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#00AEEF] font-bold text-sm tracking-[0.2em] uppercase block mb-4">
            {subtitle}
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold text-[#1A2B49] leading-tight">
            {title}
          </h2>
        </div>

        {/* Testimonials Container */}
        <div className="flex justify-center" onMouseEnter={() => setIsPaused(true)}onMouseLeave={() => setIsPaused(false)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 sm:gap-5 w-full">
            {currentItems.map((item) => (
              <div 
                   key={item.id} 
                   className="bg-white p-8 md:p-10 rounded-[20px] shadow-[0px_20px_50px_rgba(176,190,210,0.3)] flex flex-col h-full border border-gray-50/50"
              >
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-shrink-0">
                    {/* Ring implementation based on Figma screenshot */}
                    <div className="w-[75px] h-[75px]  rounded-full p-[3px] border-2 border-[#00AEEF]">
                      <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A2B49] text-xl">
                      {item.name}
                    </h4>
                    <p className="text-[#00AEEF] text-sm font-semibold">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text - Removed italics per Figma */}
                <p className="text-[#64748B] text-base md:text-[17px] leading-relaxed mb-8">
                  {item.text}
                </p>

                {/* Stars Section */}
                <div className="flex gap-1 mt-auto">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-4 h-4 ${i < item.stars ? 'fill-[#FFA800]' : 'fill-gray-200'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  currentPage === index ? 'w-2 bg-[#00AEEF]' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;