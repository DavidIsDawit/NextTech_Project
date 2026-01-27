// src/components/certificate/CertificateHero.jsx
import { useState } from "react";
import PropTypes from 'prop-types';

export default function CertificateHero({ images}) {
  const [currentIndex, setCurrentIndex] = useState(0);
   
  
    const IMAGES_PER_PAGE = 2;
      const [currentPage, setCurrentPage] = useState(0);
  
   
    const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
  
    const visibleImages = images.slice(
      currentPage * IMAGES_PER_PAGE,
      currentPage * IMAGES_PER_PAGE + IMAGES_PER_PAGE
    );
  
    return (
             
          
           <div className="w-full lg:w-full  pb-2 2xl:pb-12 ">
              <div className="relative lg:w-full  overflow-hidden  ">
               <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr]  md:grid-cols-[1.5fr_1fr] gap-6 h-[82vh] lg:h-[49vh] xl:h-[60vh] 2xl:h-[81vh]">
    {visibleImages.map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={`certificate image`}
        className="w-full h-full object-cover object-top"
      />
    ))}
  </div>
  
                </div>
                <div className="px-20 pt-10 2xl:pt-16 pb-20">
                   {totalPages > 1 && (
    <div className="flex justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrentPage(idx)}
          className={`w-1.5 h-1.5 2xl:w-2.5 2xl:h-2.5 rounded-full transition-all ${
            idx === currentPage
              ? "bg-black "
              : "bg-sky-200"
          }`}
        />
      ))}
    </div>
  )}
                </div>
                </div>
               
    );
}
CertificateHero.propTypes = {
  
    images: PropTypes.arrayOf(PropTypes.string),
    img_icon: PropTypes.string,
    description: PropTypes.string,
  index: PropTypes.number.isRequired,
};