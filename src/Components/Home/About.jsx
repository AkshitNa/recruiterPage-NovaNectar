import Recruitment from "../../assets/RecruitmentProcess.png";

export const About = () => {
  return (
    <div className="px-4 pt-12 bg-gray-50 pb-5">
      {/* Section Title */}
      <p className="text-center text-lg font-grotesk text-gray-600 mb-6">ABOUT</p>

      {/* Responsive Flex/Grid Container */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={Recruitment}
            alt="Meeting"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 space-y-4">
          {/* Main Heading */}
          <h2 className="text-center font-grotesk lg:text-left text-xl font-semibold text-gray-800">
            Outsourcing and outstaffing solutions for sustainable business growth.
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 font-opensans text-sm leading-relaxed">
            We believe that great talent is the foundation of every successful
            business. That’s why we connect skilled recruiters with companies
            searching for top-tier candidates. Whether you’re a business looking
            to expand your team or a recruiter seeking flexible work
            opportunities, we’re here to make the process seamless and
            efficient.
          </p>

          {/* List */}
          <ul className="space-y-2">
            <li className="flex items-center text-gray-700 font-opensans">
              <span className="text-purple-500 mr-2">✔️</span>
              Aenean eu leo quam. Pellentesque ornare.
            </li>
            <li className="flex items-center text-gray-700 font-opensans">
              <span className="text-purple-500 mr-2">✔️</span>
              Nullam quis risus eget urna mollis ornare.
            </li>
            <li className="flex items-center text-gray-700 font-opensans">
              <span className="text-purple-500 mr-2">✔️</span>
              Donec id elit non mi porta gravida at eget.
            </li>
          </ul>

          {/* Call to Action Button */}
          <div className="text-center lg:text-left">
            <button className="bg-btn-purple text-white font-grotesk font-bold text-sm py-2 px-4 rounded-lg hover:btn-purple transition duration-300">
              Learn More!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
