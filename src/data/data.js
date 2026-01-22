
export const heroSlides = [
    "/Home-Hero-Section-Cover-Image.jpg",
    "/cricleImage2.jpg",
    "/cricleImage1.jpg",
    "/cricleImage3.jpg"

  ];

import { FaChartLine, FaBriefcase, FaAward } from 'react-icons/fa';
import { HiMiniUserGroup } from "react-icons/hi2";
export const statsData = [
  { id: 1, icon: HiMiniUserGroup, value: "315", label: "Best Client", hasPlus: true },
  { id: 2, icon: FaChartLine,     value: "12 Years of", label: "Experience", hasPlus: false },
  { id: 3, icon: FaBriefcase,     value: "205", label: "Projects", hasPlus: true },
  { id: 4, icon: FaAward,         value: "51", label: "Awards", hasPlus: true },
  
];

export const aboutData = {
  subtitle: "01 - ABOUT US",
  title: "Technology, Science, Artificial Intelligence with Passion",
  description: "NextTech is a private company established in 2010. We specialize in Providing Better Services for Supply And Installation Works of Electro-Mechanical and related Equipment In Ethiopia.",
  subDescription: "Our Company is well experienced in this sector and has multiple professionals from different fields. Our company's constant endeavor has been to extend our expertise in",
  
  features: [
    { id: 1, title: "Vision", desc: "To maintain the highest levels of quality services so that we can provide the best engineering services in the country." },
    { id: 2, title: "Mission", desc: "To exceed the expectation of the customers & provide them with the best engineering services & the most reliable support system." },
    { 
      id: 3, 
      title: "Goal", 
      desc: "To deliver innovative and efficient engineering solutions by leveraging our experience, expertise, and commitment to continuous improvement." 
    },
    
    { id: 4, title: "Target", desc: "To gradually expand our scope & become a renowned solution providers." },
    
  ]
};

import { FaCheckCircle } from 'react-icons/fa';

export const workData = {
  subtitle: "02 - SOME OF OUR WORK",
  title: "Technology with Passion",
  description1: "NextTech is a private company established in 2010. We specialize in Providing Better Services for Supply And Installation Works of",
  description2: "Electro-Mechanical and related Equipment In the world. NextTech is a private company established in 2010.",
  features: [
    { id: 1, icon: FaCheckCircle, text: "Supply design, Installation, test & commissioning work" },
    { id: 2, icon: FaCheckCircle, text: "Telecom & Communication systems" },
    { id: 3, icon: FaCheckCircle, text: "Electromechanical work" },
    { id: 4, icon: FaCheckCircle, text: "Audio Visual Solutions" },


  ]
};

export const recentProjects = {
  subtitle: "04 - RECENT PROJECTS",
  title: "Technology with Passion",
  description: [
    "Founded in 2010, NextTech delivers advanced engineering solutions driven by innovation and technical excellence.",
    "Our expertise spans supply and installation works, executed with precision, quality assurance, and a passion for modern technology."
  ],
  
  images: {
    mainLeft: "/working.jpg",
    mainRight: "/VR Technology.jpg",
    bottomLeft: "/construction.jpg",
    bottomRight: "/technology.jpeg"
  }
};

export const testimonialsData = {
  subtitle: "05 - OUR TESTIMONIALS",
  title: "What’s Our Clients About Us",
  items: [
    {
      id: 1,
      name: "Ethiopian Shipping Lines ",
      role: "Company",
      image: "/esl.png",
      text: "We commend GA Soft for their excellent performance in executing the project, showcasing quality service and effective health and safety management. We are satisfied with their work in Supply, Installation, Testing, and Commissioning, and we recommend the company for similar projects.",
      stars: 5
    },
    {
      id: 2,
      name: "Ethiopian Civil Service University",
      role: "Company",
      image: "/ecsu.jpeg",
      text: "They acted in accordance with their duties in due time, so we are delighted to recommend their service and endeavor whoever want to use all their professional abilities.",
      stars: 5
    },
    {
      id: 3,
      name: "G.A. Engineering Group ",
      role: "Company",
      image: "/Ga logo.png",
      text: "Next Tech delivered reliable, high-quality solutions tailored to our needs. Their technical expertise, responsiveness, and commitment to excellence made them a valuable partner in our digital transformation.",
      stars: 5
    }
   
  ]
};

export const ctaData = {
  title: "Do You Want to Get In Touch ?",
  buttonText: "CONATCT US",
  image: "/FooterImg.png" // Replace with your actual path
};

export const clientsData = {
  subtitle: "03 - OUR CLIENTS",
  title: "Our Latest News & Articles",
  blogTitle: "From The Blog",
  logos: [
    // Row 1 (4 items)
    { id: 1, src: "/ovid.png", alt: "Ovid" },
    { id: 2, src: "/ethiopian.png", alt: "Ethiopian" },
    { id: 3, src: "/tele.png", alt: "Ethio Telecom" },
    { id: 4, src: "/ethiopian.png", alt: "Ethiopian" },
    // Row 2 (5 items)
    { id: 5, src: "/esl.png", alt: "Ethio Telecom" },
    { id: 6, src: "/BaltonCp.png", alt: "Ovid" },
    { id: 7, src: "/Amiran.png", alt: "Ethiopian" },
    { id: 8, src: "/LeadCom.jpeg", alt: "Ovid" },
    { id: 9, src: "/DireDewaUniversity.jpeg", alt: "Ethio Telecom" },
    // Row 3 (4 items)
    { id: 10, src: "/Rama.jpeg", alt: "Ethiopian" },
    { id: 11, src: "/Etv.png", alt: "Ovid" },
    { id: 12, src: "/YYM.jpg", alt: "Ethio Telecom" },
    { id: 13, src: "/FANA.png", alt: "Ethiopian" },
  ]
};

export const footerData = {
  logo: "/NextTechLogo.png",
  description: {
    address: "Addis Ababa, Bole, Mexico",
    country: "Ethiopia",
    phone: "+2519999999",
    email: "nexttech@gmail.com"
  },
  socials: [
    { id: 1, icon: "FaFacebookF", link: "#" },
    { id: 2, icon: "FaTwitter", link: "#" },
    { id: 3, icon: "FaBehance", link: "#" },
    { id: 4, icon: "FaInstagram", link: "#" },
    { id: 5, icon: "FaGlobe", link: "#" }
  ],
  categories: [
    { id: 1, name: "Engineering Solutions", link: "#" },
    { id: 2, name: "Technology Services", link: "#" },
    { id: 3, name: "ERP Systems", link: "#" },
    { id: 4, name: "Service 4", link: "#" },
    { id: 5, name: "Service 5", link: "#" }
  ],
  quickLinks: [
    { id: 1, name: "Home", link: "#" },
    { id: 2, name: "About Us", link: "#" },
    { id: 3, name: "Service", link: "#" },
    { id: 4, name: "Project", link: "#" },
    { id: 5, name: "News", link: "#" }
  ],
  newsletter: {
    title: "Subscribe now",
    subtitle: "Get early access to new features and exclusive service"
  }
};