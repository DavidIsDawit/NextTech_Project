import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // optional icon library

export default function UpArrow() {
  const [visible, setVisible] = useState(false);

  // Show button only when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 
        2xl:h-14 2xl:w-14 xl:h-12 xl:w-12 lg:h-11 lg:w-11 md:h-10 md:w-10 sm:h-9 sm:w-9 h-12 w-12 flex items-center justify-center 
        bg-primary  hover:bg-primaryHover text-white rounded-full
        shadow-lg transition-all duration-300
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 " />
    </button>
  );
}
