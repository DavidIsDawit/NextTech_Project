import PropTypes from 'prop-types';
import { recentProjects } from '../../data/data';
import { IoIosArrowForward } from "react-icons/io";

const RecentProjects = () => {
  const { subtitle, title, description, images } = recentProjects;

  return (
    /* Increased vertical padding for that spacious 'zoomed' feel */
    <section className="py-12 md:py-20 lg:py-[120px] px-6 md:px-12 bg-white ">
      {/* Container:
          - Mobile: Items centered via flex-col items-center
          - Large: Max-width bumped to 1400px for 110% zoom feel
      */}
      <div className="max-w-7xl lg:max-w-[1400px] mx-auto flex flex-col lg:flex-row  lg:items-start gap-10 lg:gap-24">
        
        {/* LEFT SIDE: CONTENT */}
        <div className="w-full lg:w-[45%] text-start lg:text-left flex flex-col items-start lg:items-start">
          {/* Subtitle: scaled 14px -> 17px */}
          <span className="text-primary font-bold text-xs md:text-sm lg:text-[17px] tracking-widest uppercase">
            {subtitle}
          </span>
          {/* Title: scaled 48px -> 56px */}
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-slate-900 mt-4 mb-6 lg:mb-10 leading-[1.1]">
            {title}
          </h2>
          
          <div className="max-w-2xl lg:max-w-none">
            {description.map((paragraph, index) => (
              /* Paragraph: scaled 16px -> 18px */
              <p key={index} className="text-gray-500 mb-6 text-sm md:text-base lg:text-[18px] leading-relaxed lg:leading-[1.8]">
                {paragraph}
              </p>
            ))}
          </div>

          <button className="mt-4 bg-primary hover:bg-sky-500 text-white font-bold py-4 lg:py-5 px-10 lg:px-14 rounded-full flex items-center gap-3 transition-all shadow-xl shadow-sky-200 uppercase text-xs lg:text-[15px] tracking-widest">
            READ MORE 
            <span className="text-xl"><IoIosArrowForward/></span>
          </button>
        </div>

        {/* RIGHT SIDE: IMAGE COLLAGE */}
        <div className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {/* Top Row: Height scaled for zoom */}
          <div className="rounded-[25px] lg:rounded-[50px] overflow-hidden shadow-md">
            <img 
              src={images.mainLeft} 
              alt="Working" 
              className="w-full h-[250px] md:h-[350px] lg:h-[420px] object-cover  hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div className="rounded-[25px] lg:rounded-[50px] overflow-hidden shadow-md">
            <img 
              src={images.mainRight} 
              alt="VR Technology" 
              className="w-full h-[250px] md:h-[350px] lg:h-[420px] object-cover object-top hover:scale-105 transition-transform duration-700" 
            />
          </div>
          
          {/* Bottom Row: Height scaled for zoom */}
          <div className="rounded-[20px] lg:rounded-[40px] overflow-hidden shadow-lg h-28 md:h-40 lg:h-[200px]">
            <img 
              src={images.bottomLeft} 
              alt="Laptop" 
              className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" 
            />
          </div>
          <div className="rounded-[20px] lg:rounded-[40px] overflow-hidden shadow-lg h-28 md:h-40 lg:h-[200px]">
            <img 
              src={images.bottomRight} 
              alt="Laptop" 
              className="w-full h-full object-cover o hover:scale-110 transition-transform duration-700" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

RecentProjects.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default RecentProjects;