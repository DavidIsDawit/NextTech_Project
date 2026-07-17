import { useParams } from "react-router-dom";
import { useCertificate } from "../../hooks/useCertificateHooks";
import CertificateHero from "./Cert_ImageSlider";
import CertificateContent from "./Cert_Title&desc";
import CertificateInfo from "./CertInfo";
import NotFoundMessage from "../NotFoundMessage";
import { formatDate } from "../../utils/dataNormalization";

export default function CertificateDetailPage() {
  const { id } = useParams();
  const { data: certificate, loading, error } = useCertificate(id);

  if (!id || id === 'undefined') {
    return <NotFoundMessage itemType="Certificate" backPath="/certificates" />;
  }

  if (loading) return (
    <div className="flex justify-center py-20 font-bold text-primary">
      Loading certificate details...
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center text-red-500 bg-red-50 p-6 rounded-lg max-w-xl mx-auto font-semibold shadow-md">
        Unauthorized: Please login to view certificate details from the backend.
      </div>
    </div>
  );

  if (!certificate) {
    return <NotFoundMessage itemType="Certificate" backPath="/certificates" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 pb-8 py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24">
      <div className=" mx-[1%] sm:mx-[5.45%]">
        {/* Hero Slider */}
        <div className="w-full lg:w-full">
          <CertificateHero
            images={certificate.images}
            certificateImage={certificate.certificateImage}
            title={certificate.certificateName || certificate.title}
          />
        </div>
        {/* Right Column */}
        <div className="flex flex-col lg:flex-row  justify-between gap-x-5 2xl:gap-x-10 ">
          <CertificateContent
            certificateName={certificate.certificateName}
            certificateType={certificate.certificateType}
          />
          <CertificateInfo
            certificateFrom={certificate.certificateFrom}
            project={certificate.project}
            catagory={certificate.catagory}
            IssueDate={formatDate(certificate.createdDate)}
          />
        </div>
      </div>
    </div>
  );
}
