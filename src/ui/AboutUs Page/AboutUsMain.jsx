import { aboutData } from "../../data/AboutUsPageData.js";
import aboutUsImage from "/AboutUsPageImages/aboutUsHeroImage.jpg";

const AboutUs = () => {
  return (
    <section className="bg-white pt-2 pb-20 lg:pt-[30px] lg:pb-32">
      <div className="max-w-7xl lg:max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-56 items-center">
          
          {/* LEFT SIDE: IMAGE SECTION */}
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden  transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src={aboutUsImage}
                alt="About Nextech" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT SECTION */}
          <div className="flex flex-col">
            <span className="text-[#00AEEF] font-bold text-sm tracking-[0.2em] uppercase mb-4 text-start lg:text-left">
              {aboutData.subtitle}
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-[54px] font-bold text-[#0a1128] leading-[1.1] mb-8 text-start lg:text-left">
              {aboutData.title}
            </h2>
            <p className="text-gray-500 text-base lg:text-[17px] leading-relaxed mb-12 text-start lg:text-left">
              {aboutData.description}
            </p>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {aboutData.features.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`flex flex-col items-start text-start md:items-center lg:flex-row lg:items-start lg:text-left gap-5 ${
                    index === 0 
                      ? "md:col-span-2 md:flex-col md:items-center md:text-center lg:flex-row lg:items-start lg:text-left lg:ml-16" 
                      : ""
                  }`}
                >
                  {/* Icon Image Container */}
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="flex flex-col ">
                    <h4 className="text-xl lg:text-[22px] font-bold text-[#0a1128] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-[15px] max-w-[320px]  lg:mx-0">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;