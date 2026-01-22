import  { useState, useEffect } from 'react';
import { workflowData } from "../../data/AboutUsPageData";

const Workflow = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const itemsPerPage = 4;
  
  // Calculate how many groups we have (e.g., 8 items / 4 per page = 2 groups)
  const totalGroups = Math.ceil(workflowData.steps.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev === totalGroups - 1 ? 0 : prev + 1));
    }, 5000); // Switches every 5 seconds

    return () => clearInterval(interval);
  }, [totalGroups]);

  // Get only the 4 items for the current active group
  const visibleItems = workflowData.steps.slice(
    currentGroup * itemsPerPage,
    (currentGroup + 1) * itemsPerPage
  );

  return (
    <section className="md:py-1 bg-white mb-6 md:mb-2">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
            {workflowData.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a1128]">
            {workflowData.title}
          </h2>
        </div>

        {/* FIXED GRID FOR 4 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleItems.map((step) => (
            <div 
              key={step.id} 
              className="animate-fadeIn group bg-white p-10 rounded-2xl border border-gray-50 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,174,239,0.15)] transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-[#F4FBFF] rounded-full flex items-center justify-center group-hover:bg-[#e6f7ff] transition-colors">
                  <img src={step.icon} alt={step.title} className="w-12 h-12 object-contain" />
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold text-gray-800 shadow-md transition-colors duration-300 bg-white group-hover:bg-primary">
                  {step.id}
              </div>
              </div>

              <h3 className="text-xl font-bold text-[#0a1128] mb-4">{step.title}</h3>
              <p className="text-gray-400 text-[15px] leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        {/* PAGINATION DOTS */}
        <div className="flex justify-center items-center gap-3 mt-16">
          {[...Array(totalGroups)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentGroup(idx)}
              className={`transition-all duration-500 rounded-full 
                ${currentGroup === idx 
                  ? "w-2.5 h-2.5 bg-[#00AEEF]" 
                  : "w-2.5 h-2.5 bg-gray-200"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Workflow;