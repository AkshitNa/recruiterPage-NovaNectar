import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Resume from "../../../assets/UploadResume.png";

const HrFreeLanceForm3 = ({ setIsThirdForm, setProgress }) => {

  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate(); //navigate

  const handleBack = () => {
    setProgress(30);
    setIsThirdForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedFile) {
      toast.error("Please upload a resume!");
      return;
    }

    // If the file is selected, proceed
    setProgress(100);
    toast.success("Form is successfully submitted!");
    // Add API call logic here to upload the file
    console.log("Uploaded File: ", selectedFile);
    navigate("/apply"); 
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log("Selected file:", file);
  };

  return (
    <div className="flex flex-col mb-5">
      <p className="text-center text-lg font-medium mb-4">Submit Resume</p>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center p-10 rounded-sm">
          <img
            src={Resume}
            alt="Resume"
            className="w-20 h-20 border border-gray-300 rounded-sm"
          />
          <div className="mt-2 text-sm font-medium text-blue-500">
            Add Resume
          </div>
        </div>

        <input
          type="file"
          id="resumeUpload"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="p-2 border rounded-lg w-full cursor-pointer"
        />
        {selectedFile && (
          <div className="text-gray-700 text-sm sm:text-sm">
            Selected File: <strong>{selectedFile.name}</strong>
          </div>
        )}

        {/* Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-5 mt-10">
          <button
            type="button"
            onClick={handleBack}
            className="text-black py-2 border border-black rounded-lg w-full"
          >
            Go Back
          </button>
          <button
            type="submit" // Prevent default form submission
            onClick={handleSubmit}
            className="text-white px-5 py-2 border border-black rounded-lg w-full bg-blue-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HrFreeLanceForm3;
