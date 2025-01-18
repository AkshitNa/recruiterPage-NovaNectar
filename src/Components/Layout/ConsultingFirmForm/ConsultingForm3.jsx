import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ConsultingForm3 = ({ setIsThirdForm, setProgress }) => {
  const navigate = useNavigate(); //navigate

  const [formData, setFormData] = useState({
    EstablishedYear: "",
    RecruitmentType: "",
    IndustriesWorking: "",
    LocationPreference: "",
    CompanyWebsite: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBack = () => {
    setProgress(30);
    setIsThirdForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      EstablishedYear,
      RecruitmentType,
      IndustriesWorking,
      LocationPreference,
      CompanyWebsite,
    } = formData;

    // Validate the fields
    if (
      !EstablishedYear ||
      !RecruitmentType ||
      !IndustriesWorking ||
      !LocationPreference ||
      !CompanyWebsite
    ) {
      toast.error("Please fill out All The fields!");
    } else {
      toast.success("Form Submitted Successfully");
      setIsThirdForm(true);
      setProgress(100);
      console.log(formData);
      navigate("/apply");
      // Process form submission here
    }
  };

  return (
    <div className="flex flex-col my-5.5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        {/* Established Year*/}
        <div>
          <label htmlFor="EstablishedYear" className="font-medium">
            Established Year
          </label>
          <input
            type="number"
            name="EstablishedYear"
            id="EstablishedYear"
            className="p-2 my-1 border rounded-lg w-full"
            placeholder="2023"
            value={formData.EstablishedYear}
            onChange={handleChange}
          />
        </div>

        {/* Recruitment Type */}
        <div>
          <label htmlFor="RecruitmentType" className="font-medium">
            Recruitment Type
          </label>
          <input
            type="text"
            name="RecruitmentType"
            id="RecruitmentType"
            className="p-2 my-1 border rounded-lg w-full"
            placeholder="Fresher"
            value={formData.RecruitmentType}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Industries You Worked/Working For */}
      <label htmlFor="IndustriesWorking" className="font-medium">
        Industries You Worked/Working For
      </label>
      <input
        type="name"
        name="IndustriesWorking"
        id="IndustriesWorking"
        className="p-2 my-1 border rounded-lg w-full"
        placeholder="Nova Nectar"
        value={formData.IndustriesWorking}
        onChange={handleChange}
      />

      {/* Working Location Preference */}
      <label htmlFor="LocationPreference" className="font-medium">
        Working Location Preference
      </label>
      <input
        type="name"
        name="LocationPreference"
        id="LocationPreference"
        placeholder="Dehradun"
        className="p-2 my-1 border rounded-lg"
        value={formData.LocationPreference}
        onChange={handleChange}
      />

      {/* Company Website (If Any)*/}
      <label htmlFor="CompanyWebsite" className="font-medium">
        Company Website (If Any)
      </label>
      <input
        type="name"
        name="CompanyWebsite"
        id="CompanyWebsite"
        className="p-2 mb-5 border rounded-lg w-full"
        value={formData.CompanyWebsite}
        onChange={handleChange}
      />

      {/* Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
        <button
          type="button"
          onClick={handleBack}
          className="text-black px-5 py-2 border border-black rounded-lg w-full"
        >
          Go Back
        </button>
        <button
          type="submit"
          className="text-white px-5 py-2 border border-black rounded-lg w-full bg-blue-500"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ConsultingForm3;
