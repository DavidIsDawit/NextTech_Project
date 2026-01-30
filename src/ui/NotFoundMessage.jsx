import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function NotFoundMessage({ itemType = "Item", backPath }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center px-4 mt-20 mb-20">
            
      <div className="text-center max-w-md">
        {/* Calm icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-primary">
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {itemType} Not Found
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Sorry, we could not find the {itemType.toLowerCase()} you are looking for. It might have been removed or the link is incorrect.
        </p>

        <button
          onClick={() => navigate(backPath || "/")}
          className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primaryHover transition"
        >
          Back to {itemType}s
        </button>
      </div>
    </div>
  );
}

NotFoundMessage.propTypes = {
  itemType: PropTypes.string,
  backPath: PropTypes.string,
};