// // src/ui/certificateui.jsx
// import { useState } from 'react';
// import { useParams } from "react-router-dom";
// import certificateItems from '../../data/certificate'; 
// import CertificateGrid from './CertificateGrid';
// import Pagination from "../Pagination";

// const ITEMS_PER_PAGE = 6;

// export default function CertificateUI() {
//   const { id } = useParams();
//   const certificate = certificateItems[id];
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1); 

//   const totalPages = Math.ceil(certificateItems.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentItems = certificateItems.slice(
//     startIndex,
//     startIndex + ITEMS_PER_PAGE
//   );
 
//   return (
//     <div className="bg-gray-50/50  px-4 sm:px-6 lg:px-8">
//       <div className=" mx-[1%] sm:mx-[6%]"> 
       
//         {/* Grid */}
//         <CertificateGrid 
//           items={currentItems} 
//           onItemClick={setSelectedImage}
//         />
//          <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={setCurrentPage}
//         />
       
//       </div>
//     </div>
//   );
// }


// src/ui/certificateui.jsx
import { useState } from 'react';
import { useParams } from "react-router-dom";
import certificateItems from '../../data/certificate'; 
import CertificateGrid from './CertificateGrid';
import Pagination from "../Pagination";

const ITEMS_PER_PAGE = 6;

export default function CertificateUI() {
  const { id } = useParams();
  const certificate = certificateItems[id];
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  
  // NEW: State to hold the 6 items for the current page
  const [currentItems, setCurrentItems] = useState([]); 

  return (
    <div className="bg-gray-50/50  px-4 sm:px-6 lg:px-8">
      <div className=" mx-[1%] sm:mx-[6%]"> 
       
        {/* Grid uses the state updated by Pagination */}
        <CertificateGrid 
          items={currentItems} 
          onItemClick={setSelectedImage}
        />

        {/* Pagination handles the logic internally:
          1. items: The full data list
          2. itemsPerPage: The constant (6)
          3. onDataUpdate: Sets the currentItems state here
        */}
         <Pagination
          items={certificateItems}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          onDataUpdate={setCurrentItems}
        />
       
      </div>
    </div>
  );
}