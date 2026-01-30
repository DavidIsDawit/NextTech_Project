import { useState, useEffect } from "react"; // Added useState, useEffect
import { useParams, Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import Faq from "../Faq Page/Faq";
import services from "../../data/ServicesPageData";
import Button from "../Button.jsx";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  // --- Logic for Slider and Responsive Dots ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const updateView = () => {
      // Below md (768px), show 1 image (slider mode). Above, show 2 images (grid mode).
      if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const totalMembers = service.content.gallery.length;
  const totalSlides = Math.ceil(totalMembers / itemsPerView);
  // const showDots = totalMembers > itemsPerView;// Show dots only on mobile slider


  // Gap as percentage for translation calculation (Tailwind gap-x-4 = 1rem)
  const gapRem = 1; // 1rem gap
  const gapPercent = (gapRem / window.innerWidth) * 100;

  return (
    <section className="py-12 xs:py-16 md:py-20 lg:py-24 bg-white">
      <div className="font-sans mx-auto px-5 xs:px-6 sm:px-10 md:px-14 lg:px-8 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 xl:gap-0">
          
          {/* ================= LEFT CONTENT (Main) ================= */}
          <div className="lg:col-span-2 space-y-8 md:space-y-10 ml-0 xl:ml-8 ">
            
            {/* Hero Image */}
            <div className="w-full h-56 xs:h-72 sm:h-80 md:h-[28rem] lg:h-[30rem] xl:h-[32rem] 2xl:h-[33rem] rounded-lg overflow-hidden">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700"
              />
            </div>

            <h3 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold text-gray-900 line-clamp-1 group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>

            {/* Text Content */}
            <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
              {service.content.paragraphs.map((text, index) => (
                <p key={index} className="first-letter:text-gray-900">
                  {text}
                </p>
              ))}
            </div>
            {/* Updated Gallery Slider Container */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out gap-x-4 md:gap-x-4 xl:gap-x-5"
              style={{
                        transform: `translateX(-${
                          currentIndex * (100 + gapPercent * itemsPerView)
                        }%)`,
                      }}
              >
                {service.content.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="flex-none"
                          style={{
                            width: `calc(${100 / itemsPerView}% - 1rem)`, // subtract gap
                          }}
                  >
                    <img
                      src={img}
                      alt="Service detail"
                      className="w-full h-64 xs:h-72 md:h-80 object-cover md:rounded-xl"
                    />
                  </div>
                ))}
              </div>

              
            </div>
            {/* Dots show if we have more slides than 1 */}
              {totalSlides > 1 && (
                <div className="flex justify-center gap-3 mt-10">
                  {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`
                          w-2.5 xs:w-3 h-2.5 xs:h-3 rounded-full 
                          transition-all duration-300
                          ${currentIndex === idx 
                            ? "bg-gray-600 scale-125 shadow-md" 
                            : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                          }
                        `}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}

            {/* Second Text Block */}
            <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg ">
              {service.content.subparagraphs.map((text, index) => (
                <p key={`bottom-${index}`}>{text}</p>
              ))}
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="space-y-11 lg:top-10 py-20 md:py-0 h-fit flex flex-col mb-28 md:mb-0 ml-0 xl:ml-14">
            <div className="bg-white py-8 rounded-2xl p-6 sm:p-6 flex flex-col border border-gray-600 border-opacity-20 ">
              <h3 className="font-sans text-2xl xs:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-6">
                Services List
              </h3>
              <div className="flex flex-col space-y-3 h-[26rem] overflow-y-auto pr-2 custom-scrollbar">
                {services.map((item) => (
                  <Link
                    key={item.id}
                    to={`/service/${item.id}`}
                    className={`rounded-xl px-6 py-4 flex items-center justify-between border border-gray-600 border-opacity-20 transition-all duration-300 group ${
                      parseInt(id) === item.id 
                      ? "bg-[#101010] border-transparent" 
                      : "bg-white hover:bg-[#101010]"
                    }`}
                  >
                    <span className={`text-base lg:text-lg xl:text-lg 2xl:text-lg line-clamp-1  transition-colors ${
                      parseInt(id) === item.id ? "text-white" : "text-gray-800 group-hover:text-white"
                    }`}>
                      {item.title}
                    </span>
                    <IoIosArrowRoundForward className={`text-2xl transition-all duration-300 group-hover:translate-x-1 ${
                      parseInt(id) === item.id ? "text-white" : "text-gray-800 group-hover:text-white"
                    }`} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Need Help Form */}
            <div className="bg-white rounded-2xl p-6 xs:p-8 border border-gray-100 shadow-sm ring-1 ring-gray-900/5">
              <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-8">
                Need help?
              </h3>
              <form className="space-y-4">
                <input type="text" placeholder="Enter Name" className="w-full px-5 py-4 border border-gray-200 rounded-xl text-base focus:ring-2 focus:ring-primary outline-none transition" />
                <input type="email" placeholder="Enter Email" className="w-full px-5 py-4 border border-gray-200 rounded-xl text-base focus:ring-2 focus:ring-primary outline-none transition" />
                <textarea rows="4" placeholder="How can we help?" className="w-full px-5 py-4 border border-gray-200 rounded-xl text-base focus:ring-2 focus:ring-primary outline-none transition resize-none" />
                <div className="pt-4 lg:pt-6 flex justify-center ">
                  <Button as={Link} to="" variant="primary" size="lg" iconAfter={MdKeyboardArrowRight}>
                    SEND MESSAGE
                  </Button>
                </div>
              </form>
            </div>
          </aside>
        </div>
      </div>
      <div className="md:mt-10">
        <Faq />
      </div>
    </section>
  );
}