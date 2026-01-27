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
      </div>
    </div>
  );
}