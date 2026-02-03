import { useState } from 'react';
import galleryItems from '../../data/GalleryPageData'; 
import GalleryGrid from './GallaryGrid';
import Pagination from "../Pagination";
const ITEMS_PER_PAGE = 6;

export default function GalleryUI() {
  const [setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  const [currentItems, setCurrentItems] = useState([]); 
  return (
    <div className="bg-gray-50/50 px-4 sm:px-6 lg:px-8 py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-[2%] sm-[4%] md:mx-[5.5%]"> 
       
        {/* Grid now uses the state managed by Pagination */}
        <GalleryGrid 
          items={currentItems} 
          onItemClick={setSelectedImage}
        />
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