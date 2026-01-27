// import { useState } from "react"
// import PortfolioCard from "./PortfolioCard"
// import Pagination from "../Pagination";
// import { portfolioProjects } from "../../data/PortfolioPageData";


// export default function PortfolioSection() {
//   const projectCategories = [
//     "All", 
//     ...new Set(portfolioProjects.map((item) => item.category))
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All")
//   const [currentPage, setCurrentPage] = useState(1)
  
//   // New state to hold the items for the current page
//   const [currentItems, setCurrentItems] = useState([]); 

//   const ITEMS_PER_PAGE = 6

//   // FILTER FIRST
//   const filteredItems =
//     selectedCategory === "All"
//       ? portfolioProjects
//       : portfolioProjects.filter(
//           (item) => item.category === selectedCategory
//         )

//   // PAGINATION CALCULATIONS
//   const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE)

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page)
//     }
//   }

//   // CATEGORY SORTING (Keeps selected one first)
//   const sortedCategories = [
//     selectedCategory,
//     ...projectCategories.filter(cat => cat !== selectedCategory)
//   ]

//   // DOT LOGIC
//   const categoryIndex = projectCategories.indexOf(selectedCategory)
//   const activeDotIndex = Math.floor(categoryIndex / 3)
//   const totalDots = Math.ceil(projectCategories.length / 3)

//   return (
//     <div className="px-5 xs:px-5 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-28 py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24">
//       {/* Header */}
//       <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-10">
//         <p className="text-cyan-500 font-medium text-base xs:text-lg sm:text-lg md:text-xl mb-4 xs:mb-5 sm:mb-6">
//           Work with us
//         </p>
//         <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-12 xs:mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-24">
//           Our portfolio
//         </h2>

//         {/* Active dot logic */}
//         <div className="flex justify-center gap-2 sm:gap-3">
//           {Array.from({ length: totalDots }).map((_, index) => (
//             <span
//               key={index}
//               className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
//                 activeDotIndex === index
                  // ? "bg-gray-600 scale-125"
                  // : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Category Tabs */}
//       <div className="mb-10 xs:mb-12 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-10 2xl:mb-12 sm:px-28 md:px-36 lg:px-48 xl:px-52 2xl:px-56 flex justify-center">
//         <div className="w-full flex overflow-x-auto gap-2 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-5 xl:gap-6 2xl:gap-3 pb-3 sm:pb-4 md:pb-5 lg:pb-6 scrollbar-hide snap-x snap-mandatory">
//           {sortedCategories.map((category) => (
//             <button
//               key={category}
//               onClick={() => {
//                 setSelectedCategory(category)
//                 setCurrentPage(1)
//               }}
              // className={`flex-none px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 xl:px-6 2xl:px-7 py-2.5 xs:py-3 sm:py-3.5 md:py-4 lg:py-4.5 xl:py-3 text-sm xs:text-base sm:text-base md:text-lg font-semibold whitespace-nowrap rounded-full transition-all duration-500 ease-in-out snap-center ${
              //     selectedCategory === category
              //       ? "text-cyan-500 bg-transparent "
              //       : "bg-gray-100 md:bg-transparent text-gray-700 hover:bg-gray-200 hover:text-gray-900"
//                 }
//               `}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Portfolio Grid - Using currentItems from state */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14 md:mb-24">
//         {currentItems.map((item, index) => (
//           <PortfolioCard key={`${item.id}-${index}`} item={item} />
//         ))}
//       </div>

//       {/* Pagination - Handles the ITEMS_PER_PAGE logic */}
//       <div className="flex justify-center items-center gap-2 xs:gap-3 sm:gap-4">
//         <Pagination
//           items={filteredItems}
//           itemsPerPage={ITEMS_PER_PAGE}
//           currentPage={currentPage}
//           onPageChange={handlePageChange}
//           onDataUpdate={setCurrentItems}
//         />
//       </div>
//     </div>
//   )
// }



// import { useState, useRef, useEffect } from "react"
// import PortfolioCard from "./PortfolioCard"
// import Pagination from "../Pagination";
// import { portfolioProjects } from "../../data/PortfolioPageData";

// export default function PortfolioSection() {
//   const scrollRef = useRef(null); 
  
//   const projectCategories = [
//     "All", 
//     ...new Set(portfolioProjects.map((item) => item.category))
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All")
//   const [currentPage, setCurrentPage] = useState(1)
//   const [currentItems, setCurrentItems] = useState([]); 

//   const ITEMS_PER_PAGE = 6

//   // 1. FIXED MOUSE WHEEL SCROLL
//   useEffect(() => {
//     const el = scrollRef.current;
//     if (!el) return;

//     const onWheel = (e) => {
//       if (e.deltaY === 0) return;
      
//       // Stop the main page from scrolling down while we scroll the categories side-to-side
//       e.preventDefault();
      
//       el.scrollBy({
//         left: e.deltaY * 2, // Multiply by 2 for faster, smoother scrolling
//         behavior: "auto"    // "auto" feels more responsive for mouse wheels than "smooth"
//       });
//     };

//     el.addEventListener("wheel", onWheel, { passive: false });
//     return () => el.removeEventListener("wheel", onWheel);
//   }, []);

//   // 2. FIXED AUTO-SCROLL (GROUPS OF 3)
//   useEffect(() => {
//     const index = projectCategories.indexOf(selectedCategory);
//     const container = scrollRef.current;
    
//     if (container) {
//       const buttons = container.querySelectorAll("button");
//       if (buttons[index]) {
//         // Calculate position: If it's the 4th item (index 3), 
//         // it scrolls to show the next set
//         const containerWidth = container.offsetWidth;
//         const itemLeft = buttons[index].offsetLeft;
        
//         // This ensures the active item is brought into view
//         container.scrollTo({
//           left: itemLeft - (containerWidth / 4), // Center it slightly
//           behavior: "smooth"
//         });
//       }
//     }
//   }, [selectedCategory]);

//   const filteredItems =
//     selectedCategory === "All"
//       ? portfolioProjects
//       : portfolioProjects.filter((item) => item.category === selectedCategory);

//   const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) setCurrentPage(page);
//   };

//   const categoryIndex = projectCategories.indexOf(selectedCategory)
//   const activeDotIndex = Math.floor(categoryIndex / 3)
//   const totalDots = Math.ceil(projectCategories.length / 3)

//   return (
//     <div className="font-sans px-5 xs:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-28 py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24">
//       <div className="text-center mb-8 xs:mb-10 sm:mb-12">
//         <p className="text-cyan-500 font-semibold text-base xs:text-lg mb-4 uppercase tracking-widest">
//           Work with us
//         </p>
//         <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">
//           Our portfolio
//         </h2>

//         <div className="flex justify-center gap-2 mb-10">
//           {Array.from({ length: totalDots }).map((_, index) => (
//             <span
//               key={index}
//               className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
//                 activeDotIndex === index ? "bg-cyan-500 w-8" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* 3. UPDATED CSS CLASSES FOR BETTER SCROLLING */}
//       <div className="mb-12 flex justify-center w-full">
//         <div 
//           ref={scrollRef}
//           className="w-full max-w-4xl flex overflow-x-auto gap-4 pb-4 
//                      cursor-grab active:cursor-grabbing
//                      no-scrollbar select-none"
//           style={{ 
//             scrollbarWidth: 'none', 
//             msOverflowStyle: 'none',
//             WebkitOverflowScrolling: 'touch' // Makes mobile scroll feel "normal"
//           }}
//         >
//           {projectCategories.map((category) => (
//             <button
//               key={category}
//               onClick={() => {
//                 setSelectedCategory(category)
//                 setCurrentPage(1)
//               }}
                  //           className={`flex-none px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 xl:px-6 2xl:px-7 py-2.5 xs:py-3 sm:py-3.5 md:py-4 lg:py-4.5 xl:py-3 text-sm xs:text-base sm:text-base md:text-lg font-semibold whitespace-nowrap rounded-full transition-all duration-500 ease-in-out snap-center ${
                  // selectedCategory === category
                  //   ? "text-cyan-500 bg-transparent "
                  //   : "bg-gray-100 md:bg-transparent text-gray-700 hover:bg-gray-200 hover:text-gray-900"
//                 }
//               `}
//             >
//               {category}
//             </button>

            
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 mb-14 md:mb-24">
//         {currentItems.map((item, index) => (
//           <PortfolioCard key={`${item.id}-${index}`} item={item} />
//         ))}
//       </div>

//       <div className="flex justify-center items-center">
//         <Pagination
//           items={filteredItems}
//           itemsPerPage={ITEMS_PER_PAGE}
//           currentPage={currentPage}
//           onPageChange={handlePageChange}
//           onDataUpdate={setCurrentItems}
//         />
//       </div>
//     </div>
//   )
// }



import { useState, useRef, useEffect } from "react"
import PortfolioCard from "./PortfolioCard"
import Pagination from "../Pagination";
import { portfolioProjects } from "../../data/PortfolioPageData";

export default function PortfolioSection() {
  const scrollRef = useRef(null); 
  
  const projectCategories = [
    "All", 
    ...new Set(portfolioProjects.map((item) => item.category))
  ];

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [currentItems, setCurrentItems] = useState([]); 

  const ITEMS_PER_PAGE = 6

  // 1. MOUSE WHEEL SCROLL
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollBy({
        left: e.deltaY * 2,
        behavior: "auto"
      });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // 2. SMART AUTO-SCROLL (Forward and Backward)
  useEffect(() => {
    const index = projectCategories.indexOf(selectedCategory);
    const container = scrollRef.current;
    
    if (container) {
      const buttons = container.querySelectorAll("button");
      const activeButton = buttons[index];

      if (activeButton) {
        const containerWidth = container.offsetWidth;
        const buttonLeft = activeButton.offsetLeft;
        const buttonWidth = activeButton.offsetWidth;

        // Calculate the center position
        // This moves the scrollbar so the active item is centered
        const targetScroll = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
        
        container.scrollTo({
          left: targetScroll,
          behavior: "smooth"
        });
      }
    }
  }, [selectedCategory]);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((item) => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const categoryIndex = projectCategories.indexOf(selectedCategory)
  const activeDotIndex = Math.floor(categoryIndex / 3)
  const totalDots = Math.ceil(projectCategories.length / 3)

  return (
    <div className="font-sans px-5 xs:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-28 py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="text-center mb-8 xs:mb-10 sm:mb-12">
        <p className="text-cyan-500 font-semibold text-base xs:text-lg mb-4 uppercase tracking-widest">
          Work with us
        </p>
        <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">
          Our portfolio
        </h2>

        <div className="flex justify-center gap-2 mt-24">
          {Array.from({ length: totalDots }).map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                activeDotIndex === index ? "bg-gray-600 scale-125"
                  : "bg-cyan-100"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mb-12 flex justify-center w-full">
        <div 
          ref={scrollRef}
          className="w-full max-w-4xl flex overflow-x-auto gap-4 pb-4 
                     cursor-grab active:cursor-grabbing
                     no-scrollbar select-none"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentPage(1)
              }}
              className={`flex-none px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 xl:px-6 2xl:px-7 py-2.5 xs:py-3 sm:py-3.5 md:py-4 lg:py-4.5 xl:py-3 text-sm xs:text-base sm:text-base md:text-lg font-semibold whitespace-nowrap rounded-full transition-all duration-500 ease-in-out snap-center ${
                  selectedCategory === category
                    ? "text-cyan-500 bg-transparent "
                    : "bg-gray-100 md:bg-transparent text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 mb-14 md:mb-24">
        {currentItems.map((item, index) => (
          <PortfolioCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>

      <div className="flex justify-center items-center">
        <Pagination
          items={filteredItems}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onDataUpdate={setCurrentItems}
        />
      </div>
    </div>
  )
}