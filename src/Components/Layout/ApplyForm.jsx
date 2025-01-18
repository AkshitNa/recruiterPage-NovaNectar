import { useState } from "react";
import ConsultingFirm from "../../assets/ConsultingFirm.png";
import HRFreeLancer from "../../assets/HRFreeLancer.png";
import ConsultingForm1 from "./ConsultingFirmForm/ConsultingForm1";
import HrFreeLanceForm1 from "./HRFreeLance/HrFreeLanceForm1";

const ApplyForm = ({ setApply }) => {
  const [FormType, setForm] = useState(false);
  const [formController, setFormController] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleConsultingFirmImage = () => {
    setProgress(10);
    setForm(true);
    setFormController(true);
  };

  const handleHRFreeLanceImage = () => {
    setProgress(10);
    setForm(true);
    setFormController(false);
  };

  return (
    <section className="p-3">
      {/* Overlay Background */}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center p-4 mx-auto">
        {/* Central Container */}
        <div className="bg-blue-50 flex flex-col justify-around p-12 py-10 rounded-lg shadow-lg max-w-3xl w-full h-auto relative min-h-[600px] sm:p-7">
          {/* Progress Bar */}
          <div
            className={`relative ${
              !FormType ? "relative -top-12" : ""
            } w-full mx-2 sm:mx-4 bg-gray-300 rounded-full h-4`}
          >
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>

            <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between">
              {[0, 10, 30, 60, 100].map((value, index) => (
                <div
                  key={index}
                  className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full border-2 ${
                    progress >= value
                      ? "bg-green-500 border-green-700"
                      : "bg-white border-gray-400"
                  }`}
                  style={{
                    left: `${(value / 100) * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
              ))}
            </div>
          </div>

          {FormType ? (
            formController ? (
              <div className="w-full h-auto">
                <ConsultingForm1 setForm={setForm} setProgress={setProgress} />
              </div>
            ) : (
              <div className="w-full h-auto">
                <HrFreeLanceForm1 setForm={setForm} setProgress={setProgress} />
              </div>
            )
          ) : (
            <div>
              {/* Heading */}
              <div className="text-center text-xl font-semibold mb-6 sm:text-3xl">
                Apply as a
              </div>

              {/* Image Options */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                {/* Consulting Firm */}
                <div
                  className="border-2 border-blue-600 rounded-md text-center p-4 cursor-pointer hover:shadow-lg transition-shadow w-full sm:w-1/3"
                  onClick={handleConsultingFirmImage}
                >
                  <img
                    src={ConsultingFirm}
                    alt="Consulting Firm"
                    className="w-full h-24 object-contain mb-2"
                  />
                  <div className="text-sm sm:text-base">Consulting Firm</div>
                </div>

                {/* HR Freelancer */}
                <div
                  className="border-2 border-blue-600 rounded-md text-center p-4 cursor-pointer hover:shadow-lg transition-shadow w-full sm:w-1/3"
                  onClick={handleHRFreeLanceImage}
                >
                  <img
                    src={HRFreeLancer}
                    alt="HR Freelancer"
                    className="w-full h-24 object-contain mb-2"
                  />
                  <div className="text-sm sm:text-base">HR Freelancer</div>
                </div>
              </div>
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={() => setApply(false)}
            type="button"
            className="absolute -top-7 -right-6 text-gray-900 bg-transparent hover:bg-gray-100 sm:hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-2"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;
