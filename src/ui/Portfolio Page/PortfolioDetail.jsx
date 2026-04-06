import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { VscStarFull } from "react-icons/vsc"
import { usePortfolioDetail } from "../../hooks/usePortfolioHooks";
import NotFoundMessage from "../NotFoundMessage";

export default function PortfolioDetail() {
  const { id } = useParams()
  const { data: project, loading, error } = usePortfolioDetail(id);

  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  // Responsive items per view
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 1024) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    updateView()
    window.addEventListener("resize", updateView)
    return () => window.removeEventListener("resize", updateView)
  }, [])

  if (loading) {
    return <div className="flex justify-center py-40 font-bold text-primary">Loading Portfolio Details...</div>;
  }

  if (error || !project) {
    return (
      <div className="py-20">
        {error && (
          <div className="text-center text-red-500 mb-8 bg-red-50 p-4 rounded-lg max-w-xl mx-auto font-semibold">
            Error loading portfolio: {error.message}
          </div>
        )}
        <NotFoundMessage itemType="Portfolio" backPath="/portfolio" />
      </div>
    );
  }

  // Gallery items (using images array)
  const galleryItems = project.images || [];
  const totalSlides = Math.ceil(galleryItems.length / itemsPerView)
  const showDots = galleryItems.length > itemsPerView

  const gapRem = 1;
  const gapPercent = (gapRem / window.innerWidth) * 100;



  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 xs:px-5 sm:px-6 md:px-10 lg:ml-6 xl:ml-0 lg:px-16 xl:px-20 2xl:px-28 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">

        {/* Hero */}
        <div className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-10 xl:mb-16 2xl:mb-16">
          <img
            src={project.image}
            alt={project.title}
            className="w-full md:h-96 lg:h-[26rem] xl:h-[34rem] object-cover rounded-xl shadow-lg" />
        </div>

        {/* Title & Description Blocks */}
        <div className="mb-8 md:mb-12 lg:mb-10 xl:mb-10 2xl:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold mb-6 text-gray-900">
            {project.title}
          </h1>
          <div className="max-w-5xl space-y-8">
            {/* Block One */}
            {(project.descriptionOne || project.subtitleOne) && (
              <div className="space-y-3">
                {project.subtitleOne && <h3 className="text-xl font-bold text-gray-900">{project.subtitleOne}</h3>}
                {project.descriptionOne && <p className="text-gray-500 text-base md:text-lg lg:text-sm xl:text-lg 2xl:text-xl font-sans leading-relaxed whitespace-pre-line">{project.descriptionOne}</p>}
              </div>
            )}

            {/* Block Two */}
            {(project.subDescriptionTwo || project.subtitleTwo) && (
              <div className="space-y-3">
                {project.subtitleTwo && <h3 className="text-xl font-bold text-gray-900">{project.subtitleTwo}</h3>}
                {project.subDescriptionTwo && <p className="text-gray-500 text-base md:text-lg lg:text-sm xl:text-lg 2xl:text-xl font-sans leading-relaxed whitespace-pre-line">{project.subDescriptionTwo}</p>}
              </div>
            )}

            {/* Block Three */}
            {(project.subDescriptionThere || project.subtitleThere) && (
              <div className="space-y-3">
                {project.subtitleThere && <h3 className="text-xl font-bold text-gray-900">{project.subtitleThere}</h3>}
                {project.subDescriptionThere && <p className="text-gray-500 text-base md:text-lg lg:text-sm xl:text-lg 2xl:text-xl font-sans leading-relaxed whitespace-pre-line">{project.subDescriptionThere}</p>}
              </div>
            )}

            {/* Fallback to normalized description if specific fields are missing */}
            {(!project.descriptionOne && project.description?.length > 0) && project.description.map((para, index) => (
              <p
                key={index}
                className="text-gray-500 text-base md:text-lg lg:text-sm xl:text-lg 2xl:text-xl font-sans leading-relaxed whitespace-pre-line"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Project Info */}
        <div className="w-full h-px bg-gray-400/20 my-8 xs:my-10 sm:my-12 md:my-8 lg:my-8 xl:my-8 2xl:my-8"></div>

        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 xs:gap-7 sm:gap-8 md:gap-6 lg:gap-0 xl:gap-8 mb-10 xs:mb-12 sm:mb-14 md:mb-10 lg:mb-8 xl:mb-14 2xl:mb-14">
          {[
            { label: "Client:", value: project.client },
            { label: "Date:", value: project.monthYear || project.date },
            { label: "Sector:", value: project.sector },
            { label: "Category:", value: project.category },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 xs:gap-3 items-center text-base xs:text-base sm:text-lg md:text-base lg:text-sm xl:text-lg 2xl:text-lg">
              <span className="font-semibold text-gray-900">
                {item.label}
              </span>
              <span className="text-gray-600">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Gallery Slider (Images instead of Team) */}
        {galleryItems.length > 0 && (
          <div className="mb-12 xs:mb-14 sm:mb-16 md:mb-20 lg:mb-16 xl:mb-24">
            <div className="relative overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-700 ease-out gap-x-4 md:gap-x-4 xl:gap-x-6"
                style={{
                  transform: `translateX(-${currentIndex * (100 + gapPercent * itemsPerView)
                    }%)`,
                }}
              >
                {galleryItems.map((img, idx) => (
                  <div
                    key={idx}
                    className="flex-none"
                    style={{
                      width: `calc(${100 / itemsPerView}% - 1rem)`,
                    }}
                  >
                    <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm border border-gray-100">
                      <img
                        src={img}
                        alt={`Project gallery ${idx + 1}`}
                        className="w-full h-48 sm:h-56 md:h-60 lg:h-60 xl:h-72 object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {showDots && (
              <div className="flex justify-center gap-3 mt-16 lg:mt-10 xl:mt-12 2xl:mt-16">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`
                      w-2.5 lg:w-2.5 h-2.5 lg:h-2.5 xl:w-3 xl:h-3 rounded-full 
                      transition-all duration-300
                      ${currentIndex === idx
                        ? "bg-gray-600 scale-125 shadow-md"
                        : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                      }
                    `}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Requirements */}
        {project.requirements?.length > 0 && (
          <div className="mb-12 lg:mb-16 xl:mb-20 2xl:mb-24">
            <h2 className="text-3xl lg:text-2xl xl:text-3xl md:ml-4 font-bold mb-6 md:mb-8 xl:mb-8 text-gray-900">Project Requirement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-3 md:ml-0 gap-6">
              {project.requirements.map((req, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <VscStarFull className="w-4 h-4 text-cyan-500" />
                  <p className="text-gray-700 text-sm xs:text-base sm:text-lg md:text-base lg:text-sm xl:text-base 2xl:text-lg leading-relaxed">{req}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {project.results?.length > 0 && (
          <div className="mb-12 xs:mb-14 sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-3xl lg:text-2xl xl:text-3xl  font-bold mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-6 xl:mb-10 text-gray-900">
              Results
            </h2>
            <div className="space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8 text-gray-500 leading-relaxed text-base xs:text-base sm:text-lg  md:text-lg lg:text-sm xl:text-base 2xl:text-base whitespace-pre-line">
              {project.results.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}