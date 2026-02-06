import PropTypes from "prop-types";
import { statsData } from "../../data/HomePageData";

const StatCard = ({ item }) => {
  const Icon = item.icon;
  return (
    /* lg:p-9 is a subtle increase from p-8. lg:min-h-[180px] instead of 200px */
    <div className="bg-white p-8 lg:p-9  shadow-md flex items-center gap-6  min-h-[100px] lg:min-h-[10px]  justify-start sm:justify-center w-[20rem] sm:w-[33rem] md:w-[21rem] lg:w-[14rem] lg:h-[8rem] xl:w-[21rem] xl:justify-start xl:min-h-[10rem]">
      
      {/* Icon scaled slightly to text-7xl only on lg */}
      <div className="text-6xl lg:text-[40px] text-primary flex-shrink-0 xl:text-6xl">
        <Icon />
      </div>
      
      <div>
        {/* Value text: text-3xl (30px) -> lg:text-4xl (36px) */}
        <div className="flex items-start text-3xl lg:text-xl  font-extrabold text-[#0B162C] leading-none xl:text-[2.5rem]">
          {item.value}
          
          {item.hasPlus && (
            <span className="text-primary text-xl lg:text-2xl font-bold ml-1 -mt-1">
              +
            </span>
          )}
        </div>
        {/* Label text: standard -> lg:text-[17px] (slightly above base) */}
        <p className="text-[#4A5568] font-medium mt-2 text-base lg:text-[17px] leading-tight">
          {item.label}
        </p>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    hasPlus: PropTypes.bool,
  }).isRequired,
};

const CounterComponent = () => {
  return (
    <section className="py-8 lg:py-10 bg-white shadow-2xl  ">
      {/* Kept at max-w-7xl but added a bit more side padding for desktop */}
      <div className="max-w-[1692px] mx-auto px-6 lg:px-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-9 ">
          {statsData.map((stat) => (
            <StatCard key={stat.id} item={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterComponent;