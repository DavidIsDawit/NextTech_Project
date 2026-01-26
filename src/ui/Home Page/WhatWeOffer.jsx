import { useState } from "react";
import { workData } from "../../data/HomePageData";
import { HiChevronRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function WhyWeOffer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = workData.features.length;

  return (
    <section className="py-16 md:py-24 lg:py-[120px] bg-white overflow-hidden">
      <div className="max-w-6xl lg:max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[100px] items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-8 lg:space-y-[80px]">
            <div className="space-y-4 lg:space-y-12">
              <span className="text-primary font-bold text-sm lg:text-[17px] tracking-wider uppercase">
                {workData.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[58px] font-bold text-secondary leading-[1.1] max-w-md lg:max-w-2xl">
                {workData.title}
              </h2>
              <div className="space-y-5 lg:space-y-7 max-w-lg lg:max-w-2xl">
                <p className="text-gray-400 text-sm lg:text-[18px] leading-relaxed lg:leading-[1.8]">
                  {workData.description1}
                </p>
                <p className="text-gray-400 text-sm lg:text-[18px] leading-relaxed lg:leading-[1.8]">
                  {workData.description2}
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-primary text-white px-5 py-4 lg:px-[38px] lg:py-[18px] rounded-full font-bold text-xs lg:text-[16px] uppercase tracking-widest hover:bg-[#0097a7] transition-all shadow-xl shadow-cyan-100">
              Read More 
              <HiChevronRight size={22} />
            </button>
          </div>

          {/* RIGHT SLIDER SECTION */}
          <div className="flex items-center gap-8 w-full">
            
            {/* 1. THE VERTICAL SLIDER */}
            <div className="flex-1 overflow-hidden">
              <Swiper
                direction={"vertical"}
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 3000 }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                modules={[Autoplay]}
                className="h-[500px] lg:h-[600px]"
              >
                {workData.features.map((feature, index) => {
                  const Icon = feature.icon;
                  // Alternate stagger
                  const stagger = index % 2 === 0 ? "lg:ml-0" : "lg:ml-[40px]";
                  
                  return (
                    <SwiperSlide key={feature.id} className="py-2">
                      <div className={`bg-white p-6 lg:p-[40px] shadow-[-15px_15px_40px_rgba(0,0,0,0.04)] border-l-[5px] border-primary flex items-center gap-6 transition-all duration-500 ${stagger} ${activeIndex === index ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
                        <div className="text-primary text-2xl lg:text-[34px] flex-shrink-0">
                          <Icon />
                        </div>
                        <p className="text-[#0a1128] font-semibold text-sm lg:text-[19px]">
                          {feature.text}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            {/* 2. THE VISUAL INDICATOR (Vertical Progress Bar) */}
            <div className="hidden md:flex flex-col items-center gap-4 h-[400px]">
              <span className="text-xs font-bold text-primary">0{activeIndex + 1}</span>
              
              {/* The Track */}
              <div className="w-[4px] h-full bg-gray-100 relative rounded-full overflow-hidden">
                {/* The Moving Filler */}
                <div 
                  className="absolute top-0 left-0 w-full bg-primary transition-all duration-500 ease-out"
                  style={{ height: `${((activeIndex + 1) / totalSlides) * 100}%` }}
                />
              </div>
              
              <span className="text-xs font-bold text-gray-300">0{totalSlides}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}