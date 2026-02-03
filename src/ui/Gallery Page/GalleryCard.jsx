import PropTypes from 'prop-types';
import { useState } from "react";
import RightArrow from "/GalleryPageImage/RightArrow.png";
import LeftArrow from "/GalleryPageImage/LeftArrow.png";

export default function GalleryCard({ src, alt = "Gallery image", onClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = src.images;
  const hasMultipleImages = images.length > 1;  
  const prev = () => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));    
  };
  const next = () => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };
  
  return (
    <div 
      className="
        group relative overflow-hidden rounded-xl 
        shadow-lg hover:shadow-2xl transition-all duration-500 
        cursor-pointer bg-gray-100 h-[340px] sm:h-[325px]    lg:h-[325px] xl:h-[395px]  2xl:min-h-[500px] 
      "
      onClick={onClick}
    >
  
      <img
        src={images[currentIndex]}
        alt={alt} 
        className="
          w-full  h-full object-cover object-top
          transition-transform duration-700"
        loading="lazy"
      />      
       {/* Prev / Next buttons */}
       {hasMultipleImages && (
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#00A3E0] hover:bg-[#0097a7]  text-white pt-2 px-1  "
      > 
        <img src={LeftArrow }
             className="h-6 w-6 lg:h-5 lg:w-5 xl:w-7 xl:h-8 object-cover"
            alt=""/>       
      </button>
      )}
       {hasMultipleImages && (
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-[#0097a7] bg-[#00A3E0]   text-white pt-2 px-1    "
      >
         <img src={RightArrow }
              className=" h-6 w-6 lg:h-5 lg:w-5 xl:w-8 xl:h-8 object-cover "
              alt=""/>      
      </button>
      )}
       
      
      {/* Subtle hover overlay */}
      {/* THUMBNAIL OVERLAY */}
         {hasMultipleImages && (
        <div
          className="
            absolute bottom-0 left-0 right-0 z-10
            bg-black/60 
            px-3 pb-5 pt-3 
          "
        >
  <div className=" flex justify-start gap-2 overflow-x-auto flex-nowrap scrollbar-hide ">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`h-[10vh] w-[12vh] sm:h-[10vh] flex-shrink-0  rounded-sm overflow-hidden border
                  ${
                    index === currentIndex 
                      ? "border-blue-500"
                      : "border-white/30"
                  }`}
              >
                <img
                  src={img}
                  className="h-[10vh] w-[12vh] sm:h-[10vh]  object-cover"
                  alt=""
                />
              </button>
            ))}
          </div>
        </div>
         )}

    </div>
  );
}

GalleryCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};
