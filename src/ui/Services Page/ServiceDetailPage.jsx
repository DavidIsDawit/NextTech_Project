import { useParams } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import Faq from "../Faq/Faq";
import services from "../../data/ServicesPageData";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="py-20 text-center text-gray-600 font-medium">
        Service not found
      </div>
    );
  }

  return (
    <section className="py-12 xs:py-16 md:py-20 lg:py-24 bg-white">
      {/* CONTAINER: 
          Uses responsive padding to breathe on small screens 
          and max-width for ultra-wide screens (2xl).
      */}
      <div className="font-sans mx-auto px-5 xs:px-6 sm:px-10 md:px-14 lg:px-8 xl:px-20  2xl:px-20"> 
        
        {/* MAIN GRID: 1 col on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 xl:gap-0">

          {/* ================= LEFT CONTENT (Main) ================= */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12 ml-0 xl:ml-8 ">

            {/* Hero Image: Height scales from 256px up to 512px */}
            <div className="w-full h-64 xs:h-72 sm:h-80 md:h-[28rem] lg:h-[30rem] xl:h-[32rem] 2xl:h-[33rem] rounded-lg overflow-hidden">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700"
              />
            </div>

            {/* Text Content: Text size grows with screen size */}
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm xs:text-base md:text-lg">
              {service.content.paragraphs.map((text, index) => (
                <p key={index} className="first-letter:text-gray-900">
                  {text}
                </p>
              ))}
            </div>

            {/* Gallery Images: Stacks on mobile (xs/sm), 2-cols on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 lg:gap-8">
              {service.content.gallery.map((img, index) => (
                <div key={index} className="overflow-hidden md:rounded-xl shadow-lg">
                   <img
                    src={img}
                    alt="Service detail"
                    className="w-full h-64 xs:h-72 md:h-80 object-cover hover:scale-110 transition-duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Second Text Block */}
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm xs:text-base md:text-lg">
              {service.content.subparagraphs.map((text, index) => (
                <p key={`bottom-${index}`}>{text}</p>
              ))}
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="space-y-8  lg:top-10 h-fit flex flex-col  mb-28 md:mb-0 ml-0 xl:ml-14">

            {/* Services List */}
            <div className="bg-white py-8 rounded-2xl p-6 sm:p-5  flex flex-col border border-gray-600 border-opacity-20 shadow-lg ring-1 ring-gray-900/5">
              <h3 className="font-sans text-2xl xs:text-3xl 2xl:text-3xl font-bold text-gray-900 mb-6">
                Services List
              </h3>

              <div className="flex flex-col space-y-3">
                {service.sidebar.servicesList.map((item, index) => (
                  <div
                    key={index}
                    className="hover:bg-[#101010] rounded-xl px-6 py-4 flex items-center justify-between border border-gray-600 border-opacity-20 transition-all duration-300 cursor-pointer group"
                  >
                      <span className="text-sm xs:text-base  lg:text-lg  xl:text-lg  2xl:text-lg text-gray-800 group-hover:text-white transition-colors">
                      {item}
                    </span>
                    <IoIosArrowRoundForward className="text-2xl text-gray-800 group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* Need Help Form */}
            <div className="bg-white rounded-2xl p-6 xs:p-8 border border-gray-100 shadow-sm ring-1 ring-gray-900/5">
              <h3 className="text-2xl xs:text-3xl font-bold text-gray-900 mb-8">
                Need help?
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl text-base focus:ring-2 focus:ring-[#00A3E0] outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl text-base focus:ring-2 focus:ring-[#00A3E0] outline-none transition"
                />
                <textarea
                  rows="4"
                  placeholder="How can we help?"
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl text-base focus:ring-2 focus:ring-[#00A3E0] outline-none transition resize-none"
                />

                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 px-8 py-4 text-white font-bold text-xs xs:text-sm tracking-widest uppercase bg-[#00A3E0] rounded-full shadow-lg shadow-blue-200 hover:bg-[#0092c9] active:scale-95 transition-all duration-300"
                >
                  <span>SEND MESSAGE</span>
                  <MdKeyboardArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>

          </aside>
        </div>
        
      </div>
<div className="mt-16 md:mt-24">
        <Faq />
      </div>
      
    </section>
  );
}