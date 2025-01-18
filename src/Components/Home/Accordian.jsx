import { useState } from "react";

export const Accordion = ({ faq }) => {
  const { question, answer } = faq;
  const [show, setShow] = useState(false);

  return (
    <div className="my-1">
      {" "}
      {/* Add margin between items for spacing */}
      <h2 id="accordion-flush-heading-1">
        <button
          onClick={() => setShow(!show)}
          type="button"
          className="text-sm flex items-center justify-between w-full py-3 font-medium text-left my-2 bg-gray-100 px-2" // Smaller font and reduced padding
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
        >
          <span className="text-base my-1 font-grotesk text-black">{question}</span>{" "}
          {/* Adjusted question font size */}
          {!show && (
            <svg
              className="w-5 h-5 shrink-0 text-black" // Smaller icon
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
          {show && (
            <svg
              className="w-4 h-4 shrink-0 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
      </h2>
      {show && (
        <div
          id="accordion-flush-body-1"
          className="py-1"
          aria-labelledby="accordion-flush-heading-1"
        >
          <div className="py-1">
            <p className="text-sm mb-2 text-gray-800 font-opensans">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};
