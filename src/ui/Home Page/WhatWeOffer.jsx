import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { workData } from "../../data/HomePageData";
import { HiChevronRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Button from "../Button";


export default function WhyWeOffer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = workData.features.length;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerSlide = 5;
  const featureGroups = [];
  for (let i = 0; i < workData.features.length; i += itemsPerSlide) {
    featureGroups.push(workData.features.slice(i, i + itemsPerSlide));
  }

  return (
    <section className="py-16 md:py-24 lg:py-[120px] bg-white overflow-hidden">
      <style>
        {`
          .mobile-dots .swiper-pagination-bullet {
            background-color: #ADD8E6 !important;
            opacity: 1 !important;
            width: 8px !important;
            height: 8px !important;
            margin: 0 4px !important;
            display: inline-block;
            border-radius: 50%;
          }
          .mobile-dots .swiper-pagination-bullet-active {
            background-color: #0a1128 !important;
            width: 10px !important;
            height: 10px !important;
          }
        `}
      </style>

      <div className="max-w-[1710px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-[100px] ">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 lg:space-y-10">
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">
                {workData.subtitle}
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-[58px] font-bold text-secondary leading-tight">
                {workData.title}
              </h2>
              <p className="text-gray-400 text-base lg:text-[18px] leading-relaxed max-w-2xl">
                {workData.description1}
              </p>
              <p className="text-gray-400 text-base lg:text-[18px] leading-relaxed max-w-2xl">
                {workData.description2}
              </p>
            </div>
            <Button
              as={Link}
              to="/Service"
              variant="primary"
              size="xl"
              iconAfter={HiChevronRight}>
             Read More
           </Button>
          </div>

      {/* RIGHT SLIDER SECTION */}
<div className="w-full">
  {isMobile ? (
    /* MOBILE VIEW: Horizontal groups of 5 with dynamic dots */
    <div className="relative">
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={20}
        // This connects the dots to the scroll position
        pagination={{ 
          clickable: true, 
          el: '.mobile-dots',
          bulletActiveClass: 'swiper-pagination-bullet-active' 
        }}
        // Updates the activeIndex state when swiping
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {featureGroups.map((group, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col gap-3">
              {group.map((item) => (
                <FeatureCard key={item.id} feature={item} isMobile={true} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THE DOTS: These will now change color based on the scroll position */}
      <div className="mobile-dots flex justify-center gap-2 mt-8"></div>
    </div>
  ) : (
    /* DESKTOP VIEW: Vertical Individual Slider + Progress Line */
    <div className="flex items-center gap-8 w-full">
      <div className="flex-1 h-[600px]">
        <Swiper
          direction={"vertical"}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000 }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Autoplay]}
          className="h-full w-full"
        >
          {workData.features.map((feature, index) => (
            <SwiperSlide key={feature.id} className="py-2">
              <FeatureCard 
                feature={feature} 
                isMobile={false} 
                stagger={index % 2 !== 0}
                isActive={activeIndex === index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* THE PROGRESS LINE (DESKTOP ONLY) */}
      <div className="flex flex-col items-center gap-4 h-[400px]">
        <span className="text-xs font-bold text-primary">0{activeIndex + 1}</span>
        <div className="w-[4px] h-full bg-gray-100 relative rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-primary transition-all duration-500 ease-out"
            style={{ height: `${((activeIndex + 1) / totalSlides) * 100}%` }}
          />
        </div>
        <span className="text-xs font-bold text-gray-300">0{totalSlides}</span>
      </div>
    </div>
  )}
</div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, isMobile, stagger = false, isActive = false }) {
  const Icon = feature.icon;
  return (
    <div className={`
      bg-white p-5 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-l-[5px] border-primary flex items-center gap-6 transition-all duration-500
      ${!isMobile && stagger ? 'lg:ml-12' : ''}
      ${!isMobile && !isActive ? 'opacity-40 scale-95' : 'opacity-100 scale-100'}
    `}>
      <div className="text-primary text-2xl lg:text-[34px] flex-shrink-0">
        <Icon />
      </div>
      <p className="text-secondary font-bold text-md lg:text-[20px]">
        {feature.text}
      </p>
    </div>
  );
}

// ESLint Prop-Types Validation
FeatureCard.propTypes = {
  feature: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.elementType.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  isMobile: PropTypes.bool.isRequired,
  stagger: PropTypes.bool,
  isActive: PropTypes.bool,
};