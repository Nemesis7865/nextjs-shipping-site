import React from "react";
import Image from "next/image"; // Use Next.js' Image component for optimization
import { FaHandshake, FaClock, FaBolt, FaShieldAlt } from "react-icons/fa";
import Counter from "../components/Counter"; // Assuming you have a Counter component

// Static imports for images
import about from "../public/asset/assets/about.jpg";
import abouta from "../public/asset/assets/abouta.jpg";
import aboutb from "../public/asset/assets/aboutb.jpg";
import aboutc from "../public/asset/assets/aboutc.jpg";
import Footer from "./Footer";

const About = () => {
  const counter = [
    { label: "Countries Worldwide", target: 150 },
    { label: "Years Experience", target: 15 },
    { label: "Communities We Deliver To", target: 15 },
    { label: "Agents Strenght", target: 2530 },
  ];

  return (
    <>
      {/* Image section */}
      <div className="About-us relative w-full h-auto">
        <Image
          src={about}
          alt="About Us"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-96 object-cover"
          layout="responsive"
        />
        <div className="absolute inset-0 bg-black opacity-65 flex justify-center items-center">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            About Us
          </h1>
        </div>
      </div>

      {/* About content section */}
      <div className="w-full h-auto flex flex-col justify-center lg:flex-row items-center lg:my-24 md:my-14 sm:my-9 px-6 md:px-12 lg:px-24">
        <div className="mb-8 lg:mb-0 lg:mr-32 text-center lg:text-left ">
          <h3 className="font-bold text-lg text-yellow-400 py-4 md:py-10">
            About Us
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-600">
            We connect people <br className="hidden lg:block" /> and their
            products
          </h1>
        </div>
        <div className="text-center lg:text-left">
          <p className="pb-6 font-bold text-neutral-700">
            We work with a variety of sectors, including fashion, leisure,
            health <br className="hidden md:block" />
            and beauty, home and garden, electrical, gifts, publishing, and{" "}
            <br className="hidden md:block" />
            entertainment.
          </p>
          <p className="opacity-60">
            We provide a portfolio of full logistic solutions which includes,
            but not limited to, <br className="hidden md:block" />
            International and Domestic express delivery, Freight Forwarding,
            Integrated <br className="hidden md:block" />
            Logistics Solutions, Information and Document Management Solutions,
            Warehousing, <br className="hidden md:block" />
            Packaging Services, Food Delivery, Agriculture Logistics, and
            E-commerce Solutions.
          </p>
        </div>
      </div>

      {/* About Image Section */}
      <div className="w-full h-auto flex flex-col lg:flex-row items-center lg:space-x-6 space-y-10 lg:space-y-0 justify-center mt-10 lg:mt-40 px-4">
        {/* Mission Section */}
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start max-w-sm">
          <Image
            src={abouta}
            alt="Mission"
            className="w-48 sm:w-64 md:w-80 lg:w-96"
            width={300}
            height={300}
          />
          <h2 className="font-bold text-xl sm:text-2xl text-neutral-600 pt-6 md:pt-8 lg:pt-11">
            Mission
          </h2>
          <p className="opacity-70 text-sm md:text-base pt-2">
            To continually design and provide best-in-class logistics{" "}
            <br className="hidden md:block" />
            solutions to deliver sustainable and rewarding value to{" "}
            <br className="hidden md:block" />
            all stakeholders.
          </p>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start max-w-sm">
          <Image
            src={aboutb}
            alt="Vision"
            className="w-48 sm:w-64 md:w-80 lg:w-96"
            width={300}
            height={300}
          />
          <h2 className="font-bold text-xl sm:text-2xl text-neutral-600 pt-6 md:pt-8 lg:pt-11">
            Vision
          </h2>
          <p className="opacity-70 text-sm md:text-base pt-2">
            To be the reference point of excellence in using{" "}
            <br className="hidden md:block" />
            technology-enabled logistics services supported by{" "}
            <br className="hidden md:block" />
            excellent customer service to enable commerce and{" "}
            <br className="hidden md:block" />
            improve lives across the world.
          </p>
        </div>

        {/* Team Section */}
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start max-w-sm">
          <Image
            src={aboutc}
            alt="The Team"
            className="w-48 sm:w-64 md:w-80 lg:w-96"
            width={300}
            height={300}
          />
          <h2 className="font-bold text-xl sm:text-2xl text-neutral-600 pt-6 md:pt-8 lg:pt-11">
            The Team
          </h2>
          <p className="opacity-70 text-sm md:text-base pt-2">
            Every member of the team possesses a wealth of{" "}
            <br className="hidden md:block" />
            expertise in logistics and shares a deep desire to satisfy{" "}
            <br className="hidden md:block" />
            our customers. Our professional and educational{" "}
            <br className="hidden md:block" />
            experience spans a wide range of world-renowned{" "}
            <br className="hidden md:block" />
            companies and educational institutions.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="my-20 bg-black w-full h-auto lg:h-[1000px] px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="flex flex-col items-center text-center px-4">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl pt-12 sm:pt-20">
            Our Core Value
          </h1>
          <p className="text-white py-6 sm:py-8 md:py-11 font-bold text-sm sm:text-base md:text-lg">
            Our values guide how we behave. It is reflected in how we work and
            in our relationships with others. Our brand values are
          </p>
        </div>

        {/* Values and counters */}
        <ul className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-20 lg:space-x-40">
         <Counter />
        </ul>
      </div>
      <div>
        <Footer />
      </div>

    </>
  );
};

export default About;
