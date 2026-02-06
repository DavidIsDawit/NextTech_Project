
import { useState } from "react";
// import services from "../data/"; 
import services from "../../data/ServicesPageData";
import ServiceCard from "./ServiceCard";
import Pagination from "../Pagination";

const ITEMS_PER_PAGE = 6;

export default function ServicesPage() { 
  const [currentPage, setCurrentPage] = useState(1);
  const [currentServices, setCurrentServices] = useState([]); 

  const handlePageChange = (page) => {
    setCurrentPage(page);
    
  };

  return (
    <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:pl-[7rem] 2xl:pr-[5rem]">
        {/* Header */}
        <div className="text-center mb-10 xs:mb-12 sm:mb-14 md:mb-16 lg:mb-24 xl:mb-24">
          <p className="text-primary font-semibold uppercase tracking-widest text-xs xs:text-sm sm:text-base md:text-lg mb-2 xs:mb-3">
            What We Do
          </p>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-extrabold leading-tight">
            <span className="gap-0.5 xs:gap-1 lg:gap-2 flex flex-col">
              Services That Help
              <br />
              You Grow
            </span>
          </h2>
        </div>

        {/* Services Grid - Now uses currentServices from state */}
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:px-3 gap-5 xs:gap-6 sm:gap-7 md:gap-8 lg:gap-4 lg:gap-y-9 xl:gap-y-12 xl:gap-6 ">
          {currentServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-10 xs:mt-12 sm:mt-14 md:mt-16 lg:mt-20">
          <Pagination
            items={services}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onDataUpdate={setCurrentServices} 
          />
        </div>
      </div>
    </section>
  );
}