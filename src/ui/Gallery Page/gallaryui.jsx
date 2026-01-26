// // src/ui/gallaryui.jsx
// import { useState } from 'react';
// import galleryItems from '../../data/gallery'; // or wherever your data is
// import GalleryGrid from './GallaryGrid';
// import Pagination from "../Pagination";

// const ITEMS_PER_PAGE = 6;

// export default function GalleryUI() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1); 

//   const totalPages = Math.ceil(galleryItems.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentItems = galleryItems.slice(
//     startIndex,
//     startIndex + ITEMS_PER_PAGE
//   );
//   const visibleItems = galleryItems.slice(0, ITEMS_PER_PAGE);

//   return (
//     <div className="bg-gray-50/50  px-4 sm:px-6 lg:px-8">
//       <div className=" 
//   mx-[2%] sm-[4%] md:mx-[6%]
  
// "> 
       
//         {/* Grid */}
//         <GalleryGrid 
//           items={currentItems} 
//           onItemClick={setSelectedImage}
//         />
//          <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={setCurrentPage}
//         />
//         {/* Full-screen modal on click
//         {selectedImage && (
//           <div 
//             className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
//             onClick={() => setSelectedImage(null)}
//           >
//             <img
//               src={selectedImage}
//               alt="Full screen gallery"
//               className="max-w-full max-h-[90vh] object-center rounded-2xl shadow-2xl"
//             />
//             <button
//               className="absolute top-8 right-8 text-white text-5xl font-light hover:text-gray-300 transition"
//               onClick={() => setSelectedImage(null)}
//             >
//               ×
//             </button>
//           </div>
//         )} */}
//       </div>
//     </div>
//   );
// }


// src/ui/gallaryui.jsx
import { useState } from 'react';
import galleryItems from '../../data/gallery'; 
import GalleryGrid from './GallaryGrid';
import Pagination from "../Pagination";

const ITEMS_PER_PAGE = 6;

export default function GalleryUI() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  
  // NEW: This state will be updated by the Pagination component logic
  const [currentItems, setCurrentItems] = useState([]); 

  return (
    <div className="bg-gray-50/50 px-4 sm:px-6 lg:px-8">
      <div className="mx-[2%] sm-[4%] md:mx-[6%]"> 
       
        {/* Grid now uses the state managed by Pagination */}
        <GalleryGrid 
          items={currentItems} 
          onItemClick={setSelectedImage}
        />

        {/* Passing the full 'galleryItems' array and 'ITEMS_PER_PAGE'.
            The 'onDataUpdate' prop will fill the 'currentItems' state above.
        */}
         <Pagination
          items={galleryItems}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          onDataUpdate={setCurrentItems}
        />

        {/* Modal Logic (Commented out as per your original) */}
        {/* {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Full screen gallery"
              className="max-w-full max-h-[90vh] object-center rounded-2xl shadow-2xl"
            />
          </div>
        )} */}
      </div>
    </div>
  );
}