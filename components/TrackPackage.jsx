// pages/track-package.js
import Footer from "../components/Footer";

const TrackPackage = () => {
  return (
    <>
      <div className="Trackpackage flex flex-col items-center space-y-4 px-4 sm:px-8 lg:px-0 w-full mt-20">
        <label className="text-lg sm:text-xl font-semibold text-gray-800">
          ENTER THE CONSIGNMENT NO.
        </label>

        <div className="flex space-x-2 sm:space-x-4 w-full max-w-lg">
          <input
            type="text"
            placeholder="Enter Tracking Number"
            className="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
          />
          <button className="px-4 sm:px-6 py-2 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base">
            TRACK RESULT
          </button>
        </div>

        <hr className="w-full max-w-lg border-t border-gray-200" />

        <p className="text-sm text-gray-700">
          Ex: <span className="font-bold">12345</span>
        </p>
      </div>

      <Footer />
    </>
  );
};

export default TrackPackage;
