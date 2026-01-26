import { useEffect } from "react"; // Added this
import PropTypes from "prop-types";
import { BiSolidArrowToLeft, BiArrowToRight } from "react-icons/bi";

// Added "items", "itemsPerPage", and "onDataUpdate" to props
function Pagination({ items, itemsPerPage, currentPage, onPageChange, onDataUpdate }) {
  
  // ────────────────────────────────────────────────
  // ITEMS_PER_PAGE LOGIC (Only added this)
  // ────────────────────────────────────────────────
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const slicedData = items.slice(start, end);
    onDataUpdate(slicedData);
  }, [currentPage, items, itemsPerPage, onDataUpdate]);



  // ────────────────────────────────────────────────
//   const safeItems = Array.isArray(items) ? items : [];
// const totalPages = Math.ceil(safeItems.length / itemsPerPage);

// useEffect(() => {
//   if (!Array.isArray(items)) return;

//   const start = (currentPage - 1) * itemsPerPage;
//   const end = start + itemsPerPage;
//   onDataUpdate(items.slice(start, end));
// }, [currentPage, items, itemsPerPage, onDataUpdate]);

  // ────────────────────────────────────────────────

  if (totalPages <= 1) return null;

  const pages = [1];

  let left, right;

  if (currentPage <= 3) {
    // 1 2 3 4 …
    left = 2;
    right = Math.min(totalPages - 1, 3);
  } else if (currentPage >= totalPages - 2) {
    // … 18 19 20   (or 17 18 19 20 if total is small)
    left = Math.max(2, totalPages - 2);
    right = totalPages - 1;
  } else {
    // Middle: … current current+1 …
    // But for page 4 & 5 we force the desired shift
    if (currentPage === 4) {
      left = 4;
      right = 5;
    } else if (currentPage === 5) {
      left = 5;
      right = 6;
    } else {
      left = currentPage;
      right = currentPage + 1;
    }
  }

  // Ellipsis after page 1
  if (left > 2) {
    pages.push("...");
  }

  // Add middle pages
  for (let i = left; i <= right && i < totalPages; i++) {
    pages.push(i);
  }

  // Ellipsis before last page
  if (right < totalPages - 1) {
    pages.push("...");
  }

  // Last page
  if (right < totalPages) {
    pages.push(totalPages);
  }

  // ────────────────────────────────────────────────
  // Styling – unchanged
  // ────────────────────────────────────────────────

  const baseBtn =
    "flex items-center justify-center w-12 h-12 rounded-md font-medium transition-all shadow-[0_4px_10px_rgba(0,0,0,0.08),0_10px_20px_-6px_rgba(0,0,0,0.12),0_-2px_6px_rgba(0,0,0,0.04)]";

  const ellipsisStyle =
    "flex items-center justify-center font-medium text-gray-500 h-9 text-xs " +
    "xs:min-w-[2.5rem] xs:h-10 xs:text-sm " +
    "sm:min-w-[2.75rem] sm:h-11 sm:text-sm " +
    "md:min-w-[3rem] md:h-12 md:text-base " +
    "lg:min-w-[3.25rem] lg:h-12 lg:text-base " +
    "xl:min-w-14 xl:h-12 xl:text-base " +
    "2xl:min-w-14 2xl:h-12 2xl:text-base";

  const gapClasses = "gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2 2xl:gap-3";
  const iconSize = "text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl";

  return (
    <div className={`flex items-center justify-center ${gapClasses} py-6 xs:py-7 sm:py-8 md:py-9 lg:py-10`}>
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${baseBtn} bg-white text-gray-800 hover:bg-[#00A3E0] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed`}
      >
        <BiSolidArrowToLeft className={iconSize} />
      </button>

      {/* Pages */}
      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={`ellipsis-${idx}`} className={ellipsisStyle}>…</span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`${baseBtn} ${
              currentPage === page
                ? "bg-[#00A3E0] text-white font-semibold"
                : "bg-white text-gray-800 hover:bg-[#52cffc] hover:text-white"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${baseBtn} bg-white text-gray-800 hover:bg-[#00A3E0] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed`}
      >
        <BiArrowToRight className={iconSize} />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  items: PropTypes.array.isRequired, // Added
  itemsPerPage: PropTypes.number.isRequired, // Added
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onDataUpdate: PropTypes.func.isRequired, // Added
};

export default Pagination;