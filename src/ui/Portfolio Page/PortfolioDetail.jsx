import { useParams } from "react-router-dom"
import { portfolioProjects } from "../../data/PortfolioPageData";
import { useState, useEffect } from "react"
import { VscStarFull } from "react-icons/vsc"

export default function PortfolioDetail() {
  const { id } = useParams()
  const project = portfolioProjects.find(p => p.id === Number(id))

  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  // Responsive items per view
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(3)      // xl & above → up to 4 members
      } else if (window.innerWidth >= 1024) {
        setItemsPerView(3)      // lg → 3
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2)      // sm → 2
      } else {
        setItemsPerView(1)      // default mobile → 1
      }
    }

    updateView()
    window.addEventListener("resize", updateView)
    return () => window.removeEventListener("resize", updateView)
  }, [])

  // Reset index when itemsPerView changes
  useEffect(() => {
    const maxIndex = Math.ceil(project?.teamMembers.length / itemsPerView) - 1
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex))
    }
  }, [itemsPerView, project?.teamMembers.length, currentIndex])

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Project not found
          </h1>
        </div>
      </div>
    )
  }

  const totalMembers = project.teamMembers.length
  const totalSlides = Math.ceil(totalMembers / itemsPerView)
  const showDots = totalMembers > itemsPerView

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">

        {/* Hero */}
        <div className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-16">
          <img
            src={project.image}
            alt={project.title}
            className="w-full md:h-96 lg:h-[34rem] object-cover rounded-xl shadow-lg"/>
        </div>

        {/* Title & Description */}
       <div className="mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl  font-bold mb-6 text-gray-900">
            {project.title}
          </h1>
          {/* <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {project.description}
          </p> */}
          <div className="max-w-5xl space-y-5">
  {project.description.map((para, index) => (
    <p
      key={index}
      className="text-gray-500 text-base md:text-lg 2xl:text-xl font-sans  leading-relaxed"
    >
      {para}
    </p>
  ))}
</div>

   </div>

        {/* Project Info */}
        <div className="w-full h-px bg-gray-400/20 my-8 xs:my-10 sm:my-12 md:my-8"></div>

        <div className="
          grid grid-cols-1 xs:grid-cols-1 
          sm:grid-cols-2 md:grid-cols-4 
          gap-6 xs:gap-7 sm:gap-8 md:gap-6 lg:gap-8 
          mb-10 xs:mb-12 sm:mb-14 md:mb-10 lg:mb-14
        ">
          {[
            { label: "Client:", value: project.client },    
            { label: "Date:", value: project.date },
            { label: "AV-System:", value: project.avSystem },
            { label: "Category:", value: project.category },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 xs:gap-3 items-center text-base xs:text-base sm:text-lg md:text-base lg:text-lg">
              <span className="font-semibold text-gray-900">
                {item.label}
              </span>
              <span className="text-gray-600">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Team Members - Clean responsive slider */}
        <div className="mb-12 xs:mb-14 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="relative overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-out gap-5"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {project.teamMembers.map(member => (
                <div
                  key={member.id}
                  className="
                    flex-shrink-0 
                    w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 
                  "
                >
                  <div className="
                    bg-white rounded-lg sm:rounded-xl overflow-hidden 
                  ">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt="Team member"
                      className="
                        w-full 
                        h-48 sm:h-56 md:h-60 lg:h-64 xl:h-72 
                        object-cover
                      "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cyan Dots Navigation */}
          {showDots && (
            <div className="flex justify-center gap-3 xs:gap-3.5 sm:gap-4 mt-10 xs:mt-12 sm:mt-14 md:mt-16">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`
                    w-2.5 xs:w-3 h-2.5 xs:h-3 rounded-full 
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

        {/* Requirements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Requirement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.requirements.map((req, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <VscStarFull className="w-4 h-4 text-cyan-500" />
                <p className="text-gray-700 leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-12 xs:mb-14 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="
            text-3xl xs:text-3xl sm:text-3xl md:text-4xl 
            font-bold mb-6 xs:mb-7 sm:mb-8 md:mb-10 
            text-gray-900 md:ml-3
          ">
            Results
          </h2>

          <div className="
            space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8 
            text-gray-500 leading-relaxed 
            text-base xs:text-base sm:text-lg md:text-lg 2xl:text-xl
          ">
            {project.results.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}