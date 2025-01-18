import { useState } from "react";
import HrFreeLanceForm3 from "./HrFreeLanceForm3";
import { toast } from "react-toastify";

const HrFreeLanceForm2 = ({ setIsSecondForm, setProgress }) => {
  const [isThirdForm, setIsThirdForm] = useState(false);

  const [formData, setFormData] = useState({
    HigherQualification: "",
    skills: "",
    experience: "",
    details: "",
    spocName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBack = () => {
    setProgress(10);
    setIsSecondForm(false);
  };

  const handleContinue = (e) => {
    e.preventDefault();

    const { HigherQualification, skills, experience, details, spocName } =
      formData;

    // Validate the fields
    if (
      !HigherQualification ||
      !skills ||
      !experience ||
      !details ||
      !spocName
    ) {
      toast.error("Please fill out All The fields!");
    } else {
      toast.success("Moving Forward!");
      setIsThirdForm(true);
      setProgress(60);
      // Process form submission here
    }
  };

  return (
    <>
      {!isThirdForm ? (
        <div className="flex flex-col my-5.5">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="my-2">
              <label htmlFor="HigherQualification" className="font-medium">
                Higher Qualification
              </label>
              <input
                type="text"
                name="HigherQualification"
                id="HigherQualification"
                className="p-2 border rounded-lg w-full"
                placeholder="MCA"
                value={formData.HigherQualification}
                onChange={handleChange}
              />
            </div>

            <div className="my-2">
              {/* Skills */}
              <label htmlFor="skills" className="font-medium px-auto">
                Skills
              </label>
              <input
                type="text"
                name="skills"
                id="skills"
                className="p-2 border rounded-lg w-full mx-0.5"
                placeholder="Python, Java"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Experience */}
          <div className="my-2">
            <label htmlFor="experience" className="font-medium">
              Experience (If Any)
            </label>
            <input
              type="name"
              name="experience"
              id="experience"
              className="p-2 border rounded-lg w-full"
              placeholder="Full Stack Developer"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          {/* Other Details */}
          <div className="my-2">
            <label htmlFor="details" className="font-medium">
              Any Other Details
            </label>
            <input
              type="name"
              name="details"
              id="details"
              className="p-2 border rounded-lg w-full"
              placeholder="Write..."
              value={formData.details}
              onChange={handleChange}
            />
          </div>

          {/* SPOC Name */}
          <div className="my-2">
            <label htmlFor="spocName" className="font-medium">
              SPOC Name
            </label>
            <input
              type="text"
              name="spocName"
              id="spocName"
              className="p-2 border rounded-lg w-full"
              placeholder="Enter SPOC Name"
              value={formData.spocName}
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 mt-3">
            <button
              type="button"
              onClick={handleBack}
              className="text-black px-5 py-2 border border-black rounded-lg w-full"
            >
              Go Back
            </button>
            <button
              type="submit"
              onClick={handleContinue}
              className="text-white px-5 py-2 border border-black rounded-lg w-full bg-blue-500"
            >
              Continue
            </button>
          </div>
        </div>
      ) : (
        <HrFreeLanceForm3
          setIsThirdForm={setIsThirdForm}
          setProgress={setProgress}
        />
      )}
    </>
  );
};

export default HrFreeLanceForm2;
