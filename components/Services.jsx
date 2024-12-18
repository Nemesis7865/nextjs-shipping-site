import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { useResponsiveness } from "./hooks/useResponsiveness";
import Counter from "./Counter";
import Footer from "./Footer";

// Import static images or use the public folder
import service1 from "@/asset/assets"
import service2 from "@/asset/assets"
import service3 from "@/asset/assets"
import service4 from "@/asset/assets"
import service5 from "@/asset/assets"
import service6 from "@/asset/assets"
import about from "@/asset/assets";

const Services = () => {
  const isMobile = useResponsiveness("mobile");
  const isTablet = useResponsiveness("tablet");
  const isDesktop = useResponsiveness("desktop");

  const counters = [
    { label: "Countries Worldwide", target: "150" },
    { label: "Years Experience", target: "15" },
    { label: "Community We Deliver To", target: "15" },
    { label: "Agents Strength", target: "2530" },
  ];

  const services = [
    { title: "Air Freight", description: "Efficient air freight solutions.", src: service1 },
    { title: "Ocean Freight", description: "Reliable sea freight options.", src: service2 },
    { title: "Road and Rail", description: "Flexible land transportation.", src: service3 },
    { title: "Warehousing", description: "Secure storage solutions.", src: service4 },
    { title: "Project Cargo", description: "Expert project cargo handling.", src: service5 },
    { title: "Customs Brokerage", description: "Seamless customs clearance.", src: service6 },
  ];

  return (
    <>
      {/* Image Section */}
      <div className="relative w-full h-auto">
        <Image
          src={about}
          alt="About Us"
          layout="responsive"
          width={1200}
          height={600}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-65 flex justify-center items-center">
          <h1 className="text-white font-bold text-3xl md:text-5xl">Services</h1>
        </div>
      </div>

      {/* What We Do */}
      <div className="my-9 md:my-14 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-start lg:space-x-16">
        <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
          <h3 className="font-bold text-lg text-yellow-400 py-4 md:py-6">What we do</h3>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-neutral-600">
            We connect people <br className="hidden lg:block" /> and their products
          </h1>
        </div>
        <div className="lg:w-1/2">
          <p className="font-bold text-sm text-neutral-700 py-4 lg:py-6">
            We have a precise customer-focused strategy that addresses our customers’ supply chain
            requirements seamlessly.
          </p>
          <p className="pb-6 font-bold opacity-60 text-sm lg:text-base">
            To achieve this, we partner with world-class organizations creating a unique global
            logistics network. By creating this network, we offer a complete suite of total
            outbound logistics and supply chain services.
          </p>
          <p className="font-bold opacity-60 text-sm lg:text-base mb-4">This strategy is based on three primary keystones:</p>
          <ul className="list-disc space-y-4 pl-5 text-neutral-700 text-sm lg:text-base">
            <li>
              Partnering with world-class organizations to provide a global competitive advantage
              for our clients in their chosen markets.
            </li>
            <li>
              Making use of an information-driven supply chain solution that integrates well with
              our customers' supply chain requirements.
            </li>
            <li>
              Understanding our clients’ businesses by becoming an extension of them and solving
              their supply chain challenges quickly.
            </li>
          </ul>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 md:gap-8 lg:gap-12 mt-10 px-4 md:px-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="max-w-md w-full h-auto">
            <Image
              src={service.src}
              alt={service.title}
              layout="responsive"
              width={400}
              height={300}
              className="object-cover"
            />
            <h1 className="font-bold text-2xl mt-4 text-neutral-500 lg:mt-7">{service.title}</h1>
            <p className="opacity-60 text-sm lg:mt-5">{service.description}</p>
            <Link href="/services">
              <a className="w-36 sm:w-40 h-10 sm:h-11 bg-amber-400 mt-6 rounded flex justify-center items-center">
                <span className="text-white font-bold text-sm">Learn more</span>
                <BiRightArrowAlt className="text-white ml-1" />
              </a>
            </Link>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Services;
