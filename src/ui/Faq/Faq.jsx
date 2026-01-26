import { useState } from "react";
import faqData, { faqImage } from "../../data/FaqPageData";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 xs:py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="font-sans mx-auto px-5 xs:px-6 sm:px-10 lg:px-12 xl:pl-32 xl:pr-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xs:gap-14 lg:gap-20 items-start">
          
          {/* ================= LEFT SIDE: Header & Image ================= */}
          <div className="flex flex-col lg:sticky lg:top-10">
            <p className="text-xs  xs:text-sm font-semibold text-[#00A3E0] uppercase tracking-[0.2em] mb-3 xs:mb-4">
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl xs:text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              What People Want <br className="xs:block" /> to Know
            </h2>

            {/* Illustration: Hidden on very small screens or resized to save space */}
            <div className="mt-8 xs:mt-12 lg:mt-20 flex justify-center lg:justify-start">
              <img
                src={faqImage}
                alt="FAQ Illustration"
               className="w-full mx-auto object-contain"
              />
            </div>
          </div>

         {/* Right Side - Accordion */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg  overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full px-6 py-5  flex items-center rounded-lg justify-between text-left transition-all duration-300 ${
                    openIndex === index
                      ? "bg-gray-900 text-white"
                      : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                  }`}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-xl p-1  font-bold pr-4">
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <IoChevronUp className="text-2xl flex-shrink-0" />
                  ) : (
                    <IoChevronDown className="text-2xl flex-shrink-0 text-gray-600" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 py-8 bg-white text-gray-600 text-base leading-relaxed border-t border-gray-100">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}