import { useState } from 'react';
import certificateItems from '../../data/certificate'; 
import CertificateGrid from './CertificateGrid';
import Pagination from "../Pagination";

const ITEMS_PER_PAGE = 6;

export default function CertificateUI() {
  const [setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);   
  const [currentItems, setCurrentItems] = useState([]);

  return (
    <div className="bg-gray-50/50  px-4 sm:px-6 lg:px-8">
      <div className=" mx-[1%] sm:mx-[6%]"> 
       <CertificateGrid 
          items={currentItems} 
          onItemClick={setSelectedImage}
        />
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