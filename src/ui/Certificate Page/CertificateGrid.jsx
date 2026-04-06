import PropTypes from 'prop-types';
import CertificateCard from './CertificateCard .jsx';

export default function CertificateGrid({ items, onItemClick }) {
  return (
    <div className="
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 
      gap-3 md:gap-4 lg:gap-8 pb-16
    ">
      {items.map((item, index) => (
        <CertificateCard
          key={item.id || index}
          item={item}
          index={index}
          onClick={() => onItemClick(item.images[0])}
        />
      ))}
    </div>
  );
}

CertificateGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemClick: PropTypes.func,
};
