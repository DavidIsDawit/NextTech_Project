// src/ui/GalleryGrid.jsx
import PropTypes from 'prop-types';
import CertificateCard from './CertificateCard ';

export default function CertificateGrid({ items, onItemClick }) {
  return (
    <div className="
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 
      gap-3 md:gap-4 lg:gap-8 pb-16
    ">
      {items.map((src, index) => (
        <CertificateCard
          key={index}
          item={src}
          index={index}
          onClick={()=> onItemClick(src)}
        />
      ))}
    </div>
  );
}

CertificateGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onItemClick: PropTypes.func,
};
