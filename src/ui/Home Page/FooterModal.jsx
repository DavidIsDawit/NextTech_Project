/* eslint-disable react/prop-types */
import { FaChevronRight, FaTimes } from 'react-icons/fa';

const FooterModal = ({ isOpen = false, onClose = () => {} }) => {
  if (!isOpen) return null;

  return (
    /* Change 'fixed inset-0' to 'absolute' and remove blur/bg-black */
    /* bottom-0 right-0 ensures it appears right over the newsletter section */
    <div className="absolute bottom-0 right-0 z-50 w-full min-w-[320px] animate-in slide-in-from-bottom-5 duration-300">
      
      <div className="relative w-full bg-white rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
        >
          <FaTimes size={18} />
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Need help?</h2>
        
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter Email" 
            className="w-full border border-gray-200 rounded-lg py-3 px-4 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
          />

          <input 
            type="text" 
            placeholder="Subject" 
            className="w-full border border-gray-200 rounded-lg py-3 px-4 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
          />

          <textarea 
            placeholder="Enter Message..." 
            rows="3"
            className="w-full border border-gray-200 rounded-lg py-3 px-4 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00AEEF] resize-none"
          />

          <button 
            type="submit"
            className="flex items-center justify-center gap-2 w-full bg-[#00AEEF] text-white font-bold py-3 rounded-lg shadow-lg hover:bg-[#0096ce] transition-all uppercase text-xs tracking-widest"
          >
            Send Message 
            <FaChevronRight size={10} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FooterModal;