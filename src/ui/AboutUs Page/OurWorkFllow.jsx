import { workflowData } from "../../data/AboutUsPageData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Workflow = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1640px] mx-auto px-6 lg:px-2">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
            {workflowData.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a1128]">
            {workflowData.title}
          </h2>
        </div>

        {/* SWIPER SLIDER */}
        <div className="workflow-swiper-container">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            // Logic: 1.2 on mobile (to show next card), 2 on tablet, 4 on desktop
            breakpoints={{
              320: { slidesPerView: 1.2, centeredSlides: true },
              768: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 4, centeredSlides: false, spaceBetween: 30 }
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            className="pb-16"
          >
            {workflowData.steps.map((step) => (
              <SwiperSlide key={step.id} className="h-auto">
                <div 
                  className="group bg-white p-8 lg:p-10 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,174,239,0.15)] transition-all duration-500 flex flex-col items-center text-center h-full"
                >
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-[#F4FBFF] rounded-full flex items-center justify-center group-hover:bg-[#e6f7ff] transition-colors">
                      <img src={step.icon} alt={step.title} className="w-12 h-12 object-contain" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold text-gray-800 shadow-md transition-colors duration-300 bg-white group-hover:bg-primary group-hover:text-white">
                      {step.id}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#0a1128] mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed">{step.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* CUSTOM PAGINATION DOTS */}
          <div className="custom-pagination flex justify-center items-center gap-3 mt-4" />
        </div>

      </div>

    
    </section>
  );
};

export default Workflow;