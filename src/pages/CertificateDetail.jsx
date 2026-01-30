import { useParams } from "react-router-dom";
import certificateItems from "../data/CertificatePageData";
import CertificateHero from "../ui/Certificate Page/Cert_ImageSlider";
import CertificateContent from "../ui/Certificate Page/Cert_Title&desc";
import CertificateInfo from "../ui/Certificate Page/CertInfo";
import NotFoundMessage from "../ui/NotFoundMessage";

export default function CertificateDetailPage() {
  const { id } = useParams();
  const certificate = certificateItems.find(c => c.id === Number(id));
  if (!certificate) {
    return <NotFoundMessage itemType="Certificate" backPath="/certificates" />;
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

