
import { footerData } from '../data/FooterData';
import { 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, 
  FaFacebookF, FaTwitter, FaBehance, FaInstagram, FaGlobe 
} from 'react-icons/fa';

const Footer = () => {
  const { logo, description, socials, categories, quickLinks, newsletter } = footerData;

  // Map icon strings to actual components
  const iconMap = {
    FaFacebookF: <FaFacebookF />,
    FaTwitter: <FaTwitter />,
    FaBehance: <FaBehance />,
    FaInstagram: <FaInstagram />,
    FaGlobe: <FaGlobe />
  };

  return (
    <footer className="bg-secondary text-gray-400 py-12 lg:py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Info & Social Media below Email */}
          <div className="flex flex-col space-y-8">
            <div className="bg-white p-2 inline-block rounded w-fit">
              <img src={logo} alt="Nextech Logo" className="h-9 w-auto" />
            </div>

            <div className="space-y-5 text-[15px]">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-tertiary" />
                <p>{description.address}, <br /> {description.country}</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-tertiary" />
                <p>{description.phone}</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-tertiary" />
                <p>{description.email}</p>
              </div>

              {/* SOCIAL MEDIA ICONS PLACED HERE (Below Email) */}
              <div className="flex gap-5 pt-4">
                {socials.map((social) => (
                  <a 
                    key={social.id} 
                    href={social.link} 
                    className="text-tertiary hover:text-primary text-lg transition-all"
                  >
                    {iconMap[social.icon]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Service Categories */}
          <div className="lg:pl-10">
            <h4 className="text-white font-bold text-xl mb-8 uppercase tracking-tight">Our Service</h4>
            <ul className="space-y-5 text-[15px]">
              {categories.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="hover:text-primary transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-white font-bold text-xl mb-8 uppercase tracking-tight">Quick Link</h4>
            <ul className="space-y-5 text-[15px]">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.link} className="hover:text-primary transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xl uppercase tracking-tight">{newsletter.title}</h4>
            <p className="text-[15px] leading-relaxed text-tertiary">{newsletter.subtitle}</p>
            
            <div className="relative mt-6">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="w-full bg-secondary border-none rounded-lg py-5 px-5 text-sm text-white focus:ring-1 focus:ring-primary outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0A1128] p-3.5 rounded-lg text-white hover:bg-[#00AEEF] transition-all">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-600 mt-16 pt-4 text-center text-sm">
          <p>
            2026 © All rights reserved by <span className="text-primary font-semibold">Next-Tech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;