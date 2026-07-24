import PropTypes from 'prop-types';

export default function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-[#00A3E0] rounded-full animate-spin"></div>
      <p className="font-bold text-[#00A3E0] text-lg">{text}</p>
    </div>
  );
}

LoadingSpinner.propTypes = {
  text: PropTypes.string,
};
