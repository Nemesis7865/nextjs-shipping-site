import React from "react";
import Image from "next/image";
import MapContainer from "./Maps";

const ContactUs = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="About-us relative w-full h-auto">
        <Image
          src="/assets/about.jpg" // Assuming the image is in the public folder
          alt="About Us"
          width={1920}
          height={500}
          className="object-cover w-full h-[500px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-65 flex justify-center items-center">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Contact
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full h-auto lg:px-48 mt-16 lg:mt-28 px-6 md:px-12 flex flex-col lg:flex-row lg:space-x-32 space-y-12 lg:space-y-0">
        {/* Text Section */}
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-neutral-600 my-8">
            Reach out
          </h1>
          <p className="font-bold text-sm sm:text-base opacity-40 leading-relaxed lg:text-sm">
            Your feedback is crucial to us as we work to be the reference point
            of excellence in using technology-enabled logistics services
            supported by excellent customer service.
          </p>
          <h3 className="font-bold text-neutral-600 pt-7 sm:pt-9 text-2xl lg:text-3xl">
            Email
          </h3>
          <span className="text-sm sm:text-base text-neutral-600">
            admin@sloganswift.com
          </span>
        </div>

        {/* Form Section */}
        <div className="w-full h-auto flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-col">
            <label className="font-bold text-sm sm:text-base">Name</label>
            <input
              type="text"
              className="h-10 border focus:ring-2 rounded px-3 text-sm sm:text-base"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-sm sm:text-base">Email</label>
            <input
              type="email"
              className="h-10 border focus:ring-2 rounded px-3 text-sm sm:text-base"
            />
          </div>
          <div className="flex flex-col">
            <label className="pb-6 font-bold text-sm sm:text-base">
              Comment or Message
            </label>
            <textarea
              className="w-full h-36 border rounded px-3 py-2 text-sm sm:text-base"
            ></textarea>
            <button className="w-full h-9 bg-yellow-500 my-4 text-white font-semibold hover:bg-yellow-600 transition">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-auto my-14 relative">
        <Image
          src="/assets/about.jpg" // Replace with actual image path
          alt="About"
          width={1920}
          height={600}
          className="object-cover w-full h-[600px] lg:h-[650px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-65 p-6 md:p-12 lg:p-16">
          <h1 className="text-white font-bold text-2xl md:text-3xl text-center mt-10 lg:mt-28">
            Our Branch
          </h1>

          {/* Branch Information */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {/* United States */}
            <div className="text-center lg:text-left">
              <h3 className="text-white font-bold opacity-75 text-lg lg:text-xl">
                United States
              </h3>
              <span className="text-zinc-400 text-sm md:text-base">
                409 W Orange Grove Ave – <br />
                451 W Grandview Ave
                <br />
                <br />
                admin@sloganswift.com
              </span>
            </div>

            {/* Singapore */}
            <div className="text-center lg:text-left">
              <h3 className="text-white font-bold opacity-75 text-lg lg:text-xl">
                Singapore
              </h3>
              <span className="text-zinc-400 text-sm md:text-base">
                30 Airline Rd, 0 <br />
                Singapore 81983
                <br />
                <br />
                admin@sloganswift.com
              </span>
            </div>
          </div>
        </div>

        {/* Map Component */}
        <div>
          <MapContainer />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-10 mt-16 lg:mt-28">
        {/* Footer Content */}
      </footer>
    </>
  );
};

export default ContactUs;
