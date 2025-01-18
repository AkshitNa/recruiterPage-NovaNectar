import { useState } from "react";
import ConsultingForm3 from "./ConsultingForm3";
import { toast } from "react-toastify";

const ConsultingForm2 = ({ setIsSecondForm, setProgress }) => {
  const [isThirdForm, setIsThirdForm] = useState(false);

  const [formData, setFormData] = useState({
    Organization: "",
    OrganizationType: "",
    RegisteredAddress: "",
    GSTRegistration: "",
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

    const { Organization, OrganizationType, RegisteredAddress, GSTRegistration, spocName } =
      formData;

    // Validate the fields
    if (
      !Organization ||
      !OrganizationType ||
      !RegisteredAddress ||
      !GSTRegistration ||
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
            {/* Organization Name */}
            <div className="my-2">
              <label htmlFor="OrganizationName" className="font-medium">
                Organization Name
              </label>
              <input
                type="text"
                name="Organization"
                id="OrganizationName"
                className="p-2 border rounded-lg w-full"
                placeholder="Akshit"
                value={formData.Organization}
                onChange={handleChange}
              />
            </div>

            {/* Type of Organization */}
            <div className="my-2">
              <label htmlFor="OrganizationType" className="font-medium">
                Type of Organization
              </label>
              <input
                type="text"
                name="OrganizationType"
                id="OrganizationType"
                className="p-2 border rounded-lg w-full"
                placeholder="Type of Organization"
                value={formData.OrganizationType}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Registered Address */}
          <div className="my-2">
            <label htmlFor="RegisteredAddress" className="font-medium">
              Registered Address
            </label>
            <input
              type="text"
              name="RegisteredAddress"
              id="RegisteredAddress"
              className="p-2 border rounded-lg w-full"
              placeholder="Enter Registered Address"
              value={formData.RegisteredAddress}
              onChange={handleChange}
            />
          </div>

          {/* GST Registration */}
          <div className="my-1">
            <label htmlFor="GSTRegistration" className="font-medium">
              GST Registration
            </label>
            <input
              type="text"
              name="GSTRegistration"
              id="GSTRegistration"
              className="p-2 border rounded-lg w-full"
              placeholder="Enter GST Number"
              value={formData.GSTRegistration}
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
        <ConsultingForm3 setIsThirdForm={setIsThirdForm} setProgress={setProgress} />
      )}
    </>
  );
};

export default ConsultingForm2;
