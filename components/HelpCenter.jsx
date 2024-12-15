import React from "react";
import Image from "next/image";
import { about } from "../assets/images";
import AnimateBoxes from "../animate/AnimateBoxes";

const HelpCenter = () => {
  return (
    <>
      {/* About Us Section */}
      <div className="About-us relative">
        <Image
          src={about}
          alt="About Us"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-72 object-cover"
          layout="fill" // Next.js optimizes the image using layout
          objectFit="cover" // Ensures image adapts to container size
          priority // Loads this image with high priority
        />
        <div className="absolute inset-0 bg-black opacity-65 flex justify-center items-center flex-col">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            HELP CENTER
          </h1>
          <p className="text-white lg:pt-9 font-bold text-2xl text-center">
            Your one-stop location to find out more about your parcel delivery or collection
          </p>
        </div>
      </div>

      {/* Help Center Details */}
      <div className="w-full h-auto lg:pl-48 pt-20 lg:mb-14">
        <h3 className="text-xl font-bold text-neutral-600 py-8">
          What can we help you with?
        </h3>
        <p className="opacity-40 font-bold text-sm">
          If you need a little additional help or advice about your parcel delivery or collection,{" "}
          <br className="hidden lg:block" /> click through the below sections to find out the answer to any parcel
          query.
        </p>
      </div>

      {/* Animated Boxes Section */}
      <div>
        <AnimateBoxes />
      </div>
    </>
  );
};

export default HelpCenter;
