import { MdLocationOn, MdPhone, MdEmail, MdKeyboardArrowRight } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="font-sans py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
      <div className="px-4 sm:px-10 lg:px-12 xl:px-28">
        
        {/* Main Flex/Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-0 items-start mb-16 md:mb-24">
          
          {/* ================= LEFT SIDE: Get A Quote Form ================= */}
          <div className="order-1 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 sm:mb-10 tracking-tight">
              Get A Quote
            </h2>
            
            <form className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-5 py-4 border border-gray-300 bg-gray-50/30 rounded-lg text-lg sm:text-lg outline-none focus:ring-2 focus:ring-[#00A3E0] transition-all"
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-5 py-4 border border-gray-300 bg-gray-50/30 rounded-lg text-lg sm:text-lg outline-none focus:ring-2 focus:ring-[#00A3E0] transition-all"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="w-full px-5 py-4 border border-gray-300 bg-gray-50/30 rounded-lg text-lg sm:text-lg outline-none focus:ring-2 focus:ring-[#00A3E0] transition-all"
                />
                <input
                  type="text"
                  placeholder="Enter Phone"
                  className="w-full px-5 py-4 border border-gray-300 bg-gray-50/30 rounded-lg text-lg sm:text-lg outline-none focus:ring-2 focus:ring-[#00A3E0] transition-all"
                />
              </div>
              
              <textarea
                rows="6"
                placeholder="Enter Message..."
                className="w-full px-5 pt-4 border border-gray-300 bg-gray-50/30 rounded-lg text-lg sm:text-lg outline-none focus:ring-2 focus:ring-[#00A3E0] transition-all resize-none"
              />
              
              <button
                type="submit"
                className="group inline-flex items-center gap-2 bg-[#00A3E0] text-white px-8 sm:px-10 py-4 rounded-full font-bold text-sm sm:text-sm tracking-widest uppercase shadow-[0_10px_20px_-5px_rgba(0,163,224,0.4)] hover:shadow-[0_15px_25px_-5px_rgba(0,163,224,0.5)] active:scale-95 transition-all"
              >
                SEND MESSAGE <MdKeyboardArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* ================= RIGHT SIDE: Get In Touch Info ================= */}
          <div className="order-2 lg:px-24 lg:order-2 space-y-8 sm:space-y-11">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 ml-2 tracking-tight">
                Get In Touch
              </h2>
              <p className="text-gray-500 text-sm sm:text-lg leading-relaxed ">
                These are the phrases we stay via way of means of in the whole lot we do. Each brand we build, and we create.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 sm:space-y-5">
              {/* Location */}
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-cyan-50 flex items-center justify-center  text-[#00A3E0]">
                  <MdLocationOn size={28} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl  text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-500 text-base sm:text-lg leading-snug">
                    Bole, Welo-Sefer, st 4090, Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              {/* Call Now */}
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-cyan-50 flex items-center justify-center text-[#00A3E0]">
                  <MdPhone size={28} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl text-gray-900 mb-1">Call Now</h4>
                  <p className="text-gray-500 text-sm sm:text-lg">+251 911 109851 / +251 911 109851</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-cyan-50 flex items-center justify-center text-[#00A3E0]">
                  <MdEmail size={28} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-500 text-sm sm:text-lg">info@gaengineering.et</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4">
              {[FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-16 h-16 bg-cyan-50 flex items-center justify-center  text-[#00A3E0] hover:bg-[#00A3E0] hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        
      </div>
      {/* ================= MAP SECTION ================= */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-inner grayscale-[0.3]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.671151608!2d38.775336!3d9.002447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850020000001%3A0x671391629863a890!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </section>
  );
}