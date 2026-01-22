import { workData } from "../../data/data";
import { HiChevronRight } from "react-icons/hi";

export default function WhyWeOffer() {
  return (
    <section className="py-16 md:py-24 lg:py-[120px] bg-white overflow-hidden">
      {/* Container widened to 1400px to accommodate the "zoomed" inner content */}
      <div className="max-w-6xl lg:max-w-[1550px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[100px] ">
          
          {/* LEFT CONTENT */}
          <div className="space-y-8 lg:space-y-[45px]">
            <div className="space-y-4 lg:space-y-7">
              {/* Subtitle: 14px -> 17px */}
              <span className="text-primary font-bold text-sm lg:text-[17px] tracking-wider uppercase">
                {workData.subtitle}
              </span>
              {/* Title: 48px -> 58px */}
              <h2 className="text-4xl md:text-5xl lg:text-[58px] font-bold text-[#0a1128] leading-[1.1] max-w-md lg:max-w-2xl">
                {workData.title}
              </h2>
              <div className="space-y-5 lg:space-y-7 max-w-lg lg:max-w-2xl">
                {/* Body Text: 14px -> 18px */}
                <p className="text-gray-400 text-sm lg:text-[18px] leading-relaxed lg:leading-[1.8]">
                  {workData.description1}
                </p>
                <p className="text-gray-400 text-sm lg:text-[18px] leading-relaxed lg:leading-[1.8]">
                  {workData.description2}
                </p>
              </div>
            </div>

            {/* Button: Scaled padding and font size */}
            <button className="flex items-center gap-2 bg-primary text-white px-5 py-4 lg:px-[38px] lg:py-[22px] rounded-full font-bold text-xs lg:text-[16px] uppercase tracking-widest hover:bg-[#0097a7] transition-all shadow-xl shadow-cyan-100">
              Read More 
              <HiChevronRight size={22} />
            </button>
          </div>

          {/* RIGHT STAGGERED CARDS */}
          <div className="flex flex-col gap-6 lg:gap-[32px] w-full">
            {workData.features.map((feature, index) => {
              // Precise stagger adjustments for the larger card widths
              const staggeredClass = index === 0 ? "lg:ml-0" : 
                                    index === 1 ? "lg:ml-[85px]" : 
                                    index === 2 ? "lg:ml-[-30px]" : "lg:ml-[60px]";
              
              const Icon = feature.icon;

              return (
                <div 
                  key={feature.id}
                  className={`bg-white p-6 md:p-8 lg:p-[40px] shadow-[-15px_15px_40px_rgba(0,0,0,0.03)] border-l-[5px] border-primary flex items-center gap-6 w-full lg:max-w-[520px] transition-transform hover:scale-105 ${staggeredClass}`}
                >
                  {/* Icon size: 24px -> 34px */}
                  <div className="text-primary text-2xl lg:text-[34px] flex-shrink-0">
                    <Icon />
                  </div>
                  {/* Card text: 16px -> 19px */}
                  <p className="text-[#0a1128] font-semibold text-sm md:text-base lg:text-[19px] leading-snug">
                    {feature.text}
                  </p>
                </div>
              );
            })}
            
            {/* Visual Pagination Dots */}
            {/* <div className="flex justify-center lg:justify-end gap-3 mt-8 lg:mr-28">
              <span className="w-2 h-2 lg:w-[12px] lg:h-[12px] rounded-full bg-slate-600"></span>
              <span className="w-2 h-2 lg:w-[12px] lg:h-[12px] rounded-full bg-[#00acc1]/30"></span>
              <span className="w-2 h-2 lg:w-[12px] lg:h-[12px] rounded-full bg-[#00acc1]/30"></span>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}