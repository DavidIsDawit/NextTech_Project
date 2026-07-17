import { useState } from 'react';
import { useCertificates } from '../../hooks/useCertificateHooks';
import CertificateGrid from './CertificateGrid';
import Pagination from "../Pagination";

const ITEMS_PER_PAGE = 6;

export default function CertificateUI() {
  const { data: certificateItems, loading, error } = useCertificates();
  const [setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  if (loading) return <div className="flex justify-center py-20 font-bold text-primary">Loading certificates...</div>;

  return (
    <div className="bg-gray-50/50  px-4 sm:px-6 lg:px-8 py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24">
      {error && (
        <div className="text-center text-red-500 mb-8 bg-red-50 p-4 rounded-lg max-w-xl mx-auto font-semibold">
          {error?.response?.data?.message || error?.message || String(error)}
        </div>
      )}
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