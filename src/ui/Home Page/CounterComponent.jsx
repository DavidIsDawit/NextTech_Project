import PropTypes from "prop-types";
import { useCounters } from "../../hooks/useCounterHooks";
import { FaChartLine, FaBriefcase, FaAward } from 'react-icons/fa';
import { HiMiniUserGroup } from "react-icons/hi2";

const iconMap = {
  'HiMiniUserGroup': HiMiniUserGroup,
  'FaChartLine': FaChartLine,
  'FaBriefcase': FaBriefcase,
  'FaAward': FaAward,
};

const StatCard = ({ item }) => {
  const Icon = iconMap[item.icon] || HiMiniUserGroup;
  return (
    <div className="bg-white p-8 lg:p-9  shadow-md flex items-center gap-6  min-h-[100px] lg:min-h-[10px]  justify-start sm:justify-center w-[20rem] sm:w-[33rem] md:w-[21rem] lg:w-[14rem] lg:h-[8rem] xl:w-[21rem] xl:justify-start xl:min-h-[10rem]">

      <div className="text-6xl lg:text-[40px] text-primary flex-shrink-0 xl:text-6xl">
        <Icon />
      </div>

      <div>
        <div className="flex items-start text-3xl lg:text-xl  font-extrabold text-[#0B162C] leading-none xl:text-[2.5rem]">
          {item.value}

          {item.hasPlus && (
            <span className="text-primary text-xl lg:text-2xl font-bold ml-1 -mt-1">
              +
            </span>
          )}
        </div>
        <p className="text-[#4A5568] font-medium mt-2 text-base lg:text-[17px] leading-tight">
          {item.label}
        </p>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    hasPlus: PropTypes.bool,
  }).isRequired,
};

const CounterComponent = () => {
  const { data: statsData, loading, error } = useCounters();

  if (loading) return (
    <div className="flex justify-center py-10 text-primary font-bold bg-white">
      Loading Counters...
    </div>
  );

  return (
    <section className="py-8 lg:py-10 bg-white shadow-2xl">
      <div className="max-w-[1692px] mx-auto px-6 lg:px-10 ">

        {error && (
          <div className="text-center text-red-500 bg-red-50 p-4 rounded-lg max-w-xl mx-auto mb-4 font-semibold shadow-sm">
            Unauthorized: Please login to view counters from the backend.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-9 ">
          {Array.isArray(statsData) && statsData.length > 0 ? (
            statsData.map((stat, index) => {
              // Map backend fields to frontend-expected fields
              const mappedStat = {
                ...stat,
                id: stat._id || stat.id || index,
                label: stat.label || stat.name,
                value: String(stat.value),
                icon: stat.icon || (
                  stat.name === 'Clients' ? 'HiMiniUserGroup' :
                    stat.name === 'Experiences' ? 'FaChartLine' :
                      stat.name === 'Projects' ? 'FaBriefcase' :
                        stat.name === 'Awards' ? 'FaAward' : 'HiMiniUserGroup'
                ),
                hasPlus: stat.hasPlus !== undefined ? stat.hasPlus : true // Adding + by default or as per data
              };
              return <StatCard key={mappedStat.id} item={mappedStat} />;
            })
          ) : !error && (
            <div className="col-span-full text-center text-gray-400 py-10">
              No counter data found in the backend.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CounterComponent;