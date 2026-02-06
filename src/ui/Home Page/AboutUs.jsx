import { aboutData } from "../../data/HomePageData";
import { HiChevronRight } from "react-icons/hi"; 
import aboutUsImage from "/AboutUsPageImages/aboutUsHeroImage.jpg";
import { Link } from "react-router-dom";
import Button from "../Button.jsx";

const AboutUs = () => {
  return (
    <section className="bg-[#FBFBFB] py-12 md:py-20 lg:py-28 xl:py-32">
      {/* Container: Gradually increases max-width. 
          2xl:max-w-screen-2xl (1536px) keeps it readable on massive monitors.
      */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:max-w-[1720px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 2xl:gap-32 items-start">
          
          {/* LEFT SIDE: IMAGE & HEADER */}
          <div className="w-full flex flex-col space-y-6 lg:space-y-10">
            <div className="space-y-3 md:space-y-5">
              <span className="text-primary font-bold text-xs sm:text-sm lg:text-base xl:text-sm uppercase tracking-wider">
                {aboutData.subtitle}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-[#0B162C] leading-tight">
                {aboutData.title}
              </h2>
            </div>
            
            {/* Image Wrapper: ensures image scales nicely but doesn't blow up too large */}
            <div className="relative group">
              <img 
                src={aboutUsImage}
                alt="Our Team" 
                className="min-w-[310px] sm:min-w-[550px] md:min-w-[650px]   max-h-[400px] md:max-h-[360px] lg:max-h-[600px] lg:min-w-[100px] xl:max-h-[600px] rounded-[10px]  object-cover transform transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="flex flex-col space-y-8 lg:space-y-12">
            <div className="space-y-6">
              <p className="text-[#8F939B] text-base md:text-lg xl:text-xl leading-relaxed lg:leading-[1.8]">
                {aboutData.description}
              </p>
              <p className="text-[#8F939B] text-base md:text-lg xl:text-xl leading-relaxed lg:leading-[1.8]">
                {aboutData.subDescription}
              </p>
            </div>

            {/* VISION/MISSION GRID: Adjusts columns for smaller screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-12">
              {aboutData.features.map((item) => (
                <div key={item.id} className="group">
                  <h4 className="text-xl md:text-2xl xl:text-3xl font-bold text-[#26262C] mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[#8F939B] text-sm md:text-base xl:text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* BUTTON: Larger touch targets for mobile, sleek for desktop */}
            <div className="pt-4">
              <Button
                as={Link}
                to="/aboutus"
                variant="primary"
                className="w-full sm:w-auto px-8 py-4 text-lg" // Added custom sizing helper
                size="xl"
                iconAfter={HiChevronRight}
              >
                Read More
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;