import React, { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaDirections } from "react-icons/fa";
import { MdDangerous } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import Footer from "../Footer";


const AnimateBoxes = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const renderBox = (icon, title, items, delay) => (
    <div
      className={`w-full max-w-sm bg-white p-6 rounded-lg shadow-md transform transition-all duration-1000 ease-in-out ${delay} ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="icon">{icon}</div>
      <h2 className="font-bold text-2xl text-neutral-600 py-4">{title}</h2>
      {items.map((item, index) => (
        <div key={index} className="flex items-center my-2">
          <FaCircleDot className="text-xs" aria-hidden="true" />
          <p className="text-sm px-2 text-neutral-600">{item}</p>
        </div>
      ))}
      <button
        aria-label={`See all details for ${title}`}
        className="mt-5 w-full bg-neutral-700 text-white py-2 rounded-md flex items-center justify-center gap-1"
      >
        See all
        <FaArrowRightLong />
      </button>
    </div>
  );

  return (
    <div className="flex items-center justify-center lg:h-screen bg-transparent overflow-hidden relative px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderBox(
          <FaSearchLocation className="text-4xl text-neutral-600" aria-hidden="true" />,
          "Tracking",
          [
            "Where is my parcel?",
            "What is my tracking ID?",
            "Why is there no tracking against my parcel?",
            "My tracking hasn't updated, what should I do?",
          ],
          "delay-0"
        )}
        {renderBox(
          <RiContactsFill className="text-4xl text-neutral-600" aria-hidden="true" />,
          "I'm not in",
          [
            "I'm not in, what will happen to my parcel?",
            "Can you leave my parcel in a safe place?",
            "Can you leave my parcel with a neighbour?",
            "Can I call the agent directly?",
          ],
          "delay-200"
        )}
        {renderBox(
          <FaBox className="text-4xl text-neutral-600" aria-hidden="true" />,
          "Missed delivery",
          [
            "Can I call the agent directly?",
            "Can your agent call back?",
            "My parcel has been delivered to the wrong address",
            "I don’t have a calling card",
          ],
          "delay-400"
        )}
        {renderBox(
          <FaDirections className="text-4xl text-neutral-600" aria-hidden="true" />,
          "Redelivery",
          [
            "How do I rearrange my parcel delivery?",
            "Tracking shows a missed delivery attempt but I was in",
            "Can the driver come back?",
            "My parcel was delivered to the wrong address",
          ],
          "delay-600"
        )}
        {renderBox(
          <MdDangerous className="text-4xl text-neutral-600" aria-hidden="true" />,
          "Damaged or missing parcel",
          [
            "My parcel arrived damaged",
            "My parcel was returned to sender due to damage",
            "My parcel is missing",
            "Part of my order is missing",
          ],
          "delay-800"
        )}
        {renderBox(
          <FaPlay className="text-4xl text-neutral-600" aria-hidden="true" />,
          "Returns",
          [
            "How do I return my parcel?",
            "Is there a cost to return a parcel?",
            "How will I know when my item has been returned?",
            "Can I track my return?",
          ],
          "delay-1000"
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AnimateBoxes;
