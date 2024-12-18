import React, { useEffect, useState } from "react";
import Image from "next/image"; // Use Next.js Image component for better optimization
import { useResponsiveness } from "./hooks/useResponsiveness";

// Images in the public folder for Next.js
const images = [
  {
    src: "/images/img1.jpg", // Adjust path if images are in the public folder
    title: "End to End Logistics Solution",
    text: "Our logistics solution offers services that ensure the safe monitoring and integrity of your products until delivery. With us you never have to worry about timely and safe deliveries.",
  },
  {
    src: "/images/img2.jpg",
    title: "Inventory Management",
    text: "Whether you are planning to build a comprehensive international supply chain or simply needing to manage a seasonal inventory upsurge, we can help. We provide bonded and highly specialized warehousing as part of an integrated clean room or temperature-controlled supply chain.",
  },
  {
    src: "/images/img3.jpg",
    title: "Flexible, Reliable, and Secure",
    text: "Customers value our expertise in international ocean freight forwarding across a global network that spans forty-six countries and regions. They value the ability to link with other services such as air freight forwarding, multimodal transport, cross-border services, or customs house brokerage.",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useResponsiveness("mobile");
  const isTablet = useResponsiveness("tablet");
  const isDesktop = useResponsiveness("desktop");

  let imageHeight = "h-[600px]";
  if (isMobile) imageHeight = "h-[400px]";
  else if (isTablet) imageHeight = "h-[600px]";
  else if (isDesktop) imageHeight = "h-[800px]";

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Auto slide change every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full max-w-8xl">
      {/* Image div */}
      <div className={`relative ${imageHeight} w-full rounded-lg overflow-hidden`}>
        <Image
          src={images[currentIndex].src}
          alt="Slide"
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500 ease-in-out"
        />

        {/* Single Text Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-6 p-6 text-center">
          {/* Dynamic Title */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg pt-6">
            {images[currentIndex].title}
          </h1>

          {/* Dynamic Description */}
          <p className="text-white text-base sm:text-sm md:text-xl lg:text-2xl max-w-2xl leading-relaxed drop-shadow-md pb-24">
            {images[currentIndex].text}
          </p>
        </div>

        {/* Right and Left Arrows */}
        <div className="relative h-auto w-auto">
          <button
            className="absolute left-0 bottom-8 ml-5 transform -translate-y-1/2 text-white p-2 rounded-full shadow-md hover:bg-red-600 border hover:scale-105 transition-all duration-300 ease-in-out hover:w-24 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-14 lg:h-20"
            onClick={prevSlide}
          >
            &#8592;
          </button>

          <button
            className="absolute right-0 bottom-8 mr-5 transform -translate-y-1/2 text-white p-2 rounded-full shadow-md hover:bg-red-600 border hover:scale-105 transition-all duration-300 ease-in-out hover:w-24 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-14 lg:h-20"
            onClick={nextSlide}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
