import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const UnderMentinance = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const launchDate = new Date("2026-01-31T00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-5xl font-bold text-primary">
        {value < 10 ? `0${value}` : value}
      </span>
      <span className="text-xs uppercase tracking-widest text-secondary font-semibold mt-1">
        {label}
      </span>
    </div>
  );

  TimeUnit.propTypes = {
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  };

  return (
    <div className="min-h-screen bg-[#f7fafc] flex flex-col items-center justify-center p-6 font-sans flex-grow">
      <div className="max-w-3xl w-full text-center space-y-8">
        
        {/* Main Illustration */}
        <div className="flex justify-center">
          <img 
            src="/maintenance.png" 
            alt="Website Under Maintenance" 
            className="w-full max-w-md h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Website Under Maintenance!
          </h1>
          <p className="text-lg text-secondary font-medium uppercase tracking-widest">
            We&apos;ll be back soon
          </p>
        </div>

        {/* Clean Countdown */}
        <div className="flex justify-center items-center gap-6 md:gap-12 py-6">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="text-3xl text-gray-300 mb-6">:</div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="text-3xl text-gray-300 mb-6">:</div>
          <TimeUnit value={timeLeft.minutes} label="Mins" />
          <div className="text-3xl text-gray-300 mb-6">:</div>
          <TimeUnit value={timeLeft.seconds} label="Secs" />
        </div>

       

      </div>
    </div>
  );
};

export default UnderMentinance;