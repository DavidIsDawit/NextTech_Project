// src/components/certificate/CertificateHero.jsx
import PropTypes from 'prop-types';
export default function CertificateContent({ title, description }) {   
    return (
    <div className=" lg:w-full flex flex-col justify-between ">
            {/* Title */}
            <div className="w-full">
                  <h1 className="text-3xl md:text-4xl lg:text-5x1  2xl:text-6xl font-sans font-bold text-gray-900 mb-5">
              {title}
            </h1>
            {/* Description */}
            <div className="text-base md:text-sm lg:text-lg 2xl:text-xl w-full text-gray-600  leading-relaxed mb-10 whitespace-pre-line">
              {description
  .split(/ {2,}/)
  .map((text, i) => (
    <p key={i} className="mb-6">
      {text}
    </p>
  ))}</div></div></div>
  );
}
CertificateContent.propTypes = {  
    title: PropTypes.string,
    description: PropTypes.string,
  index: PropTypes.number.isRequired,
};