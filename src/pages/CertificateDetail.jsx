import { useParams, useNavigate } from "react-router-dom";
import certificateItems from "../data/CertificatePageData";
import CertificateHero from "../ui/Certificate Page/Cert_ImageSlider";
import CertificateContent from "../ui/Certificate Page/Cert_Title&desc";
import CertificateInfo from "../ui/Certificate Page/CertInfo";

export default function CertificateDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const certificate = certificateItems.find(c => c.id === Number(id));
  if (!certificate) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-start justify-center px-4 mt-36">
        <div className="text-center max-w-md">
          {/* Calm icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certificate Not Found
          </h1>

           <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldnt find the certificate youre looking for. It might have been removed or the link is incorrect.
          </p> 

          <button
            onClick={() => navigate("/certificates")}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
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