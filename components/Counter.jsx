import React, { useEffect, useState } from 'react';

const Counter = ({ targetNumber, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(targetNumber, 10);
    if (start === end) return;

    // Timer to increment the count
    const timer = setInterval(() => {
      start += Math.ceil(end / 100); // Increment by a fraction of the target number
      if (start >= end) { // Use >= to ensure it reaches the target
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20); // Adjust the interval speed

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <div className="flex flex-col items-center">
      <div className="
        w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 
        xl:w-32 xl:h-32 2xl:w-36 2xl:h-36
        rounded-full border-2 border-yellow-300 
        flex items-center justify-center 
        font-bold text-yellow-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
      ">
        {count}
      </div>
      <p className="text-white text-center mt-2 text-xs sm:text-sm md:text-base lg:text-lg">
        {label}
      </p>
    </div>
  );
};

export default Counter;
