import { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGlobe, FaBars, FaPhone } from 'react-icons/fa';
import { HiOutlineMailOpen } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";
import { MdLocationOn } from 'react-icons/md';
import NextTechLogo from "/NavBarImages/NextTechLogo.png";
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/aboutus' },
    { name: 'Service', href: '/service' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'News', href: '/news' },
    { name: 'Contacts', href: '/contacts' }
  ];

  return (

    <div className={`w-full z-50 transition-all duration-300 

      ${isHomePage ? 'pb-36 lg:pb-[260px] md:pb-[140px]' : 'pb-36 lg:pb-24 md:pb-[140px]'}
      ${(!isHomePage)
        ? 'lg:fixed lg:top-0 lg:left-0 lg:pt-0 lg:px-0'
        : (isSticky ? 'fixed top-0 left-0 pt-0 px-0' : 'relative lg:pt-8 lg:px-12')
      }`}>

      <nav className={`w-full transition-all duration-300 shadow-xl 
        ${(isSticky || !isHomePage)
          ? 'lg:max-w-full lg:rounded-none'
          : 'lg:max-w-[1700px] lg:mx-auto lg:rounded-[35px] overflow-hidden'
        }`}>

        {/* --- TOP BAR (Only visible on Home page) --- */}
        {(!isSticky && isHomePage) && (
          <div className="bg-secondary text-white py-4 px-8 md:px-12 lg:flex justify-between items-center text-[16px] hidden">
            <div className="lg:flex items-center gap-8">
              <div className="flex items-center gap-3">
                <span className="font-light">location: Addis Ababa, bole, Ethiopia</span>
              </div>
              <div className="flex items-center gap-3 text-primary font-semibold pl-8 border-l border-gray-700">
                <a href="mailto:info@nexttech.com">info@nexttech.com</a>
              </div>
            </div>

            <div className="flex items-center gap-6 text-white ml-auto lg:ml-0">
              <FaFacebookF className="cursor-pointer hover:text-primary text-lg" />
              <FaInstagram className="cursor-pointer hover:text-primary text-lg" />
              <FaTwitter className="cursor-pointer   hover:text-primary text-lg" />
              <FaGlobe className="cursor-pointer     hover:text-primary text-lg" />
            </div>
          </div>
        )}

        {/* --- MAIN NAVBAR --- */}
        <div className={`bg-white px-4 lg:px-12 transition-all duration-300 flex justify-between items-center 
          ${(isSticky || !isHomePage) ? 'lg:py-3 py-4' : 'lg:py-2 py-4'}`}>

          <div className="flex items-center gap-4">
            <img src={NextTechLogo} alt="NextTech Logo" className="lg:h-20 lg:w-44 object-contain w-[200px] h-[55px]" />
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-[16px] font-bold transition-colors hover:text-[#00acee] ${isActive ? 'text-primary' : 'text-gray-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <button onClick={() => setIsOpen(true)} className="lg:hidden p-3 text-secondary">
            <FaBars size={32} />
          </button>
        </div>
      </nav>

      {/* --- MOBILE SIDEBAR (EXACTLY AS YOUR ORIGINAL) --- */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col overflow-y-auto">
          <div className="p-8 flex justify-between items-center">
            <img src={NextTechLogo} alt="NextTech Logo" className="w-[200px] h-[50px]" />
            <button
              onClick={() => setIsOpen(false)}
              className="bg-primary p-3 text-white rounded-lg flex items-center justify-center w-14 h-14"
            >
              <LiaTimesSolid size={24} />
            </button>
          </div>

          <div className="flex flex-col p-10 gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `uppercase font-black text-lg  pb-2 transition-all ${isActive ? 'text-primary ' : 'text-secondary '
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-auto bg-[#eafcff] p-12 space-y-8">

            <h3 className="text-[#0a1128] text-3xl mb-4 text-center font-normal">Contact Info</h3>
            <div className="flex gap-5 items-start">
              <div className="min-w-[48px] h-[48px] border-2 border-primary rounded-lg flex items-center justify-center text-primary bg-white">
                <MdLocationOn size={26} />
              </div>
              <p className="text-base text-gray-700 font-medium">Bole, Welo-Sefer, st 4090, Addis Ababa, Ethiopia</p>
            </div>

            <div className="flex gap-5 items-center">
              <div className="min-w-[48px] h-[48px] border-2 border-primary rounded-lg flex items-center justify-center text-primary bg-white">
                <FaPhone size={22} />
              </div>
              <p className="text-lg text-gray-700 font-medium">+251 911 109851</p>
            </div>

            <div className="flex gap-5 items-center">
              <div className="min-w-[48px] h-[48px] border-2 border-primary rounded-lg flex items-center justify-center text-primary bg-white">
                <HiOutlineMailOpen size={22} />
              </div>
              <p className="text-lg text-gray-700 font-medium">info@gaenginering.et</p>
            </div>

            <div className="flex justify-center pt-4">
              <button className="w-52 bg-primary text-white py-4 rounded-full font-bold text-lg shadow-lg hover:brightness-110 transition-all">
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;