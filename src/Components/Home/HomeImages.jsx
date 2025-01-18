import React, { useState } from "react";

// Images Group
import H1 from "../../assets/H1.png";

// Images Group 2
import Bar01 from "../../assets/Bar01.png";
import Bar02 from "../../assets/Bar02.png";
import Bar03 from "../../assets/Bar03.png";
import Bar04 from "../../assets/Bar04.png";
import Bar05 from "../../assets/Bar05.png";

import ApplyForm from "../Layout/ApplyForm";

export const HomeImages = () => {

  const [apply, setApply] = useState(false); // For Apply Form

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="bg-img-blue relative flex-grow">
        {/* Main Section with Grid */}
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-100px)] lg:min-h-0">
            {/* Left Section */}
            <div className="flex flex-col justify-center items-center px-4 lg:px-8 py-16 lg:py-24 relative z-10">
              {/* Heading Section */}
              <div className="text-center space-y-2 font-grotesk">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl space-y-2">
                  <p className="leading-tight">
                    We Bring{" "}
                    <span className="text-blue-text italic font-PlexSerif">
                      solutions
                    </span>
                  </p>
                  <p className="leading-tight">to make life easier</p>
                  <p className="leading-tight">for our customers.</p>
                </div>
              </div>

              {/* Subtext Section */}
              <div className="text-gray-text mt-6 lg:mt-8 space-y-1 text-center">
                <p className="text-sm sm:text-base lg:text-lg">
                  We Have Considered Our Solutions To
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Support Every Stage of Your Growth.
                </p>
              </div>

              {/* Buttons Section */}
              <div className="mt-8 lg:mt-12 w-full max-w-md pr-5">
                <div className="text-center mb-6">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
                    ———— Apply Now ————
                  </div>
                </div>

                <div className="flex justify-center sm:flex-row gap-5 sm:px-1">
                  
                    <button
                      onClick={() => {setApply(true);}}
                      className="w-full text-center sm:flex-1 px-6 py-3 bg-btn-purple rounded-md text-white text-sm md:text-base hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    >
                      Consulting Firm
                    </button>

                    <button
                      onClick={() => {setApply(true);}}
                      className="w-full sm:flex-1 px-6 py-3 bg-btn-purple rounded-md text-white text-sm md:text-base hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    >
                      HR FreeLancer
                    </button>

                </div>
              </div>
            </div>

            {/* Right Section (Image Section) - Adjusted height and sizing */}
            <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[500px] xl:h-[600px] overflow-hidden">
              <img
                src={H1}
                alt="homeimg"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Centered H3 Image - Improved centering */}
      </div>

      {apply && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent z-30">
          <ApplyForm setApply={setApply} />
        </div>
      )}

      {/* Bar Section */}
      <div className="bg-img-blue py-6 overflow-x-auto">
        <div className="flex flex-row justify-start lg:justify-evenly min-w-max lg:min-w-0 px-4 lg:px-12 gap-8">
          {[Bar01, Bar02, Bar03, Bar04, Bar05, Bar01, Bar02].map(
            (bar, index) => (
              <div
                key={index}
                className="flex-shrink-0 transform transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={bar}
                  alt={`Bar${index}`}
                  className="h-8 sm:h-10 lg:h-12 w-auto transition duration-300 hover:brightness-0"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeImages;
