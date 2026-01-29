import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { heroSlides } from '../../data/HomePageData.js'; 
import { IoIosArrowForward } from "react-icons/io";
import heroBg from "/HomePageImages/Home-Hero-Section-Cover-Image.png";
import { Link } from "react-router-dom";
import Button from "../Button.jsx";
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? heroSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === heroSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section
      className="relative w-full overflow-hidden pt-36 lg:pt-[250px] md:pt-[140px] pb-11 lg:pb-[130px] md:pb-[20px]
                 bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      
      <div className="max-w-6xl lg:max-w-[1400px] mx-auto px-6 lg:px-10 xl:max-w-[1650px]">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-16 lg:gap-24">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 space-y-8 lg:space-y-12 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-secondary leading-[1.1] lg:leading-[1.05]">
              Innovative Tech <br />
              <span className="text-primary">Solution</span>
            </h1>

            <p className="text-secondary text-lg md:text-xl lg:text-2xl max-w-xl lg:max-w-xl leading-relaxed font-light">
            Founded in 2010, NextTech is a private company dedicated to providing innovative technological  solutions in the world.
            </p>

            <div className="pt-4 lg:pt-6">
            <Button
                as={Link}
                to="/contacts"
                variant="primary"
                size="xl"
                iconAfter={IoIosArrowForward}>
              Get Started
            </Button>
            </div>

          </div>

          {/* RIGHT IMAGE SLIDER */}
          <div className="w-[90%] lg:w-[30%] relative mt-2 lg:mt-0 flex flex-col items-center lg:mr-2">
            
            <div className="relative z-10 w-full aspect-[5/5] md:aspect-[4/5] rounded-[19px] lg:rounded-[35px] overflow-hidden shadow-2xl">
              <img 
                key={currentIndex}
                src={heroSlides[currentIndex]} 
                alt={`Slide ${currentIndex}`} 
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>

            <div
              className="
                absolute 
                bottom-[0%] lg:bottom-[0%] 
                left-1/2 -translate-x-1/2 
                w-full lg:w-[120%] 
                bg-primary/60  
                py-4 px-6 lg:py-10 lg:px-14 
                rounded-[22px] lg:rounded-[30px] 
                flex items-center justify-between 
                z-20
              "
            >
              <div className="text-white">
                <p className="text-xs lg:text-2xl font-bold">We have</p>
                <p className="text-2xl lg:text-5x text-secondary font-bold">25k+</p>
                <p className="text-[10px] lg:text-xl font-bold">World Wide Customer</p>
              </div>

              <div className="flex -space-x-3 lg:-space-x-5 items-center">
                {heroSlides.map((slide, index) => (
                  <img 
                    key={index}
                    src={slide} 
                    className={`
                      w-12 h-12 lg:w-16 lg:h-16 
                      rounded-full border-2 object-cover 
                      ${index === 3 ? 'block md:hidden' : 'block'}
                    `} 
                    alt="avatar"
                  />
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-1 lg:left-1 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-14 lg:h-14 md:bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <FaArrowLeft size={20} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-1 lg:right-1 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-14 lg:h-14 md:bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <FaArrowRight size={20} />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
