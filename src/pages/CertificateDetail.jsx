// src/pages/CertificateDetailPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import certificateItems from "../data/certificate";
import CertificateHero from "../ui/Certificate Page/Cert_ImageSlider";
import CertificateContent from "../ui/Certificate Page/Cert_Title&desc";
import CertificateInfo from "../ui/Certificate Page/CertInfo";


export default function CertificateDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const certificate = certificateItems.find(c => c.id === Number(id));

  if (!certificate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Certificate Not Found</h1>
          <button
            onClick={() => navigate("/certificate")}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Certificates
          </button>
        </div>
      </div>
    );
  }

  return ( 
      
        <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 pb-8">
      <div className=" mx-[1%] sm:mx-[5.45%]"> 
          {/* Hero Slider */}
          <div className="w-full lg:w-full">
            <CertificateHero images={certificate.images} title={certificate.title} />
          </div>

          {/* Right Column */}
          <div className="flex flex-col lg:flex-row  justify-between gap-x-5 2xl:gap-x-10 ">
            <CertificateContent
              title={certificate.title}
              description={certificate.description}
            />
            
            <CertificateInfo
              client={certificate.client}
              project={certificate.project}
              category={certificate.category}
              issuedate={certificate.issuedate}
            />
          </div>
          </div>
        </div>
    
   
  );
}