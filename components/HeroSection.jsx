import Image from "next/image";
import { useResponsiveness } from "./hooks/useResponsiveness";
import assets from "@/asset/assets"
import { FaHandshake, FaClock } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";

// Example paths for assets
const hero = "/asset/hero.jpg";
const backgroundImg = "/asset/backgroundImg.jpg";

const Herosection = () => {
  const isMobile = useResponsiveness("mobile");
  const isTablet = useResponsiveness("tablet");
  const isDesktop = useResponsiveness("desktop");

  return (
    <>
      {/* Hero Section Container */}
      <div className="bg-gray-100 relative w-full mt-4 h-auto flex flex-col items-center 
      md:items-start md:flex-row md:justify-between px-4 md:px-10 lg:px-24">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-4 md:space-y-6 mt-12 md:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Expecting A Delivery?
          </h1>
          <p className="text-sm sm:text-base lg:text-lg">
            Keep an eye on it. Track it with our easy-to-use and accurate
            tracking system
          </p>
        </div>

        {/* Track Button */}
        <button
          className="mt-6 md:mt-0 w-48 lg:w-52 h-16 md:h-14 bg-orange-400 hover:bg-orange-300
           text-black font-bold rounded transition duration-300 ease-in-out px-4"
          onClick={() => alert("Track your shipment")}
        >
          Track your shipment
        </button>
      </div>

      {/* Optional Second Div */}
      <div className="flex flex-col md:flex-row items-center md:items-start w-full h-auto md:pl-16 lg:pl-24 p-4 my-16">
        {/* Image Container */}
        <div className="w-full bg-slate-100 md:w-auto mb-4 md:mb-0 flex justify-center md:justify-start mt-8">
          <Image
            src={assets.hero}
            alt="hero"
            width={800}
            height={600}
            className="h-40 sm:h-60 md:h-80 lg:h-96 object-cover md:mb-14"
          />
        </div>

        {/* Text Container */}
        <div className="text-center md:text-left md:w-2/3 lg:w-1/2 space-y-4 mt-8 mx-12">
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-orange-400">
            What We Do
          </h4>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-500">
            Helping Clients Deliver Goods The Safe Way
          </h1>
          <p className="text-neutral-500 leading-relaxed">
            Our promise is a short-hand for what we aim to deliver time and time
            again. It summarizes our management philosophy and explains that we
            want to connect to a more prosperous future by building better
            relationships and ties across the world with all stakeholders – our
            customers, colleagues, partners, and society.
          </p>
          <p className="text-neutral-500 leading-relaxed">
            At Atlantic Delivery, we nurture clients’ businesses by learning and
            understanding their needs, hence partnering with them to achieve
            their goals.
          </p>
          <p className="text-neutral-500 leading-relaxed">
            We do not believe in the “one cap fits all” approach. Our team of
            supply chain professionals leverage our unparalleled distribution
            network with you from start to finish, designing and implementing
            your unique supply chain model.
          </p>
        </div>
      </div>

      {/* Image fixed div */}
      <div
        className={`relative ${
          isMobile
            ? "h-[600px]"
            : isTablet
            ? "h-[600px]"
            : "h-[800px] lg:h-[1000px]"
        } flex justify-center bg-cover bg-center bg-fixed mt-24`}
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
          <p className="text-xs sm:text-sm md:text-lg font-semibold pt-10 lg:pt-14">
            24/7 Active Support Team
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Need something shipped or got an enquiry?
          </h1>
          <button className="mt-6 px-4 py-2 sm:px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition duration-300 ease-in-out">
            Contact us
          </button>
        </div>
      </div>
    </>
  );
};

export default Herosection;
