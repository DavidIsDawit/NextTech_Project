import { aboutData } from "../../data/HomePageData";
import { HiChevronRight } from "react-icons/hi"; 
import aboutUsImage from "/AboutUsPageImages/aboutUsHeroImage.jpg";

const AboutUs = () => {
  return (
    // Increased vertical padding to give that "larger" section feel
    <section className="bg-gray-50 pt-10 md:pt-10 lg:pt-20">
      {/* Increased max-width from 7xl (1280px) to [1380px] 
         This mimics the extra width a 110% zoom would occupy.
      */}
      <div className="max-w-7xl lg:max-w-[1700px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-28 items-center">
          
          {/* LEFT SIDE: IMAGE */}
          <div className="w-full">
            <div className="space-y-4 lg:space-y-7">
              <span className="text-primary font-bold text-sm lg:text-[17px]  uppercase ">
                {aboutData.subtitle}
              </span>
              {/* Bumped text-5xl to text-[54px] for a true 110% feel */}
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-secondary  pb-4 md:pb-6">
                {aboutData.title}
              </h2>
            </div>
            {/* Expanded the image max-width slightly */}
            <img 
              src={aboutUsImage}
              alt="Our Team" 
              className="md:max-w-md lg:max-w-[520px] w-full h-auto rounded-[20px] shadow-2xl object-cover"
            />
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-5 lg:space-y-7">
              {/* description text-base (16px) -> text-[18px] (approx 110% zoom) */}
              <p className="text-gray-400 text-sm lg:text-[18px] lg:leading-[1.8] leading-relaxed">
                {aboutData.description}
              </p>
              <p className="text-gray-400 text-sm lg:text-[18px] lg:leading-[1.8] leading-relaxed">
                {aboutData.subDescription}
              </p>
            </div>

            {/* VISION/MISSION GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:gap-y-12 gap-x-14 pt-4">
              {aboutData.features.map((item) => (
                <div key={item.id} className="space-y-3">
                  <h4 className="text-xl lg:text-[26px] font-bold text-secondary">{item.title}</h4>
                  {/* Scaled description from 13px to 16px */}
                  <p className="text-gray-400 text-[13px] lg:text-[16px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="pt-6 lg:pt-8">
              {/* Scaled padding and font size for a "bigger" button */}
              <button className="flex items-center gap-2 bg-primary text-white px-7 py-4 lg:px-7 lg:py-5 rounded-full font-bold text-xs lg:text-[16px] uppercase tracking-widest hover:bg-[#0097a7] transition-all shadow-xl shadow-cyan-200/50">
                Read More 
                <HiChevronRight size={22} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;