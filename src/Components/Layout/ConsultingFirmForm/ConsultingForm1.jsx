import { useState } from "react";
import ConsultingForm2 from "./ConsultingForm2";
import { toast } from 'react-toastify';


const ConsultingForm1 = ({ setForm, setProgress }) => {
  const [isSecondForm, setIsSecondForm] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    panNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBack = () => {
    setForm(false);
    setProgress(0);
  };

  const handleContinue = (e) => {

      e.preventDefault();
        
        const { firstname, lastname, email, number, panNumber } = formData;
        
        // Validate the fields
        if (!firstname || !lastname || !number || !email || !panNumber) {
          toast.error('Please fill out All The fields!');
        } else {
          toast.success('Moving Forward!');
          setIsSecondForm(true);
          setProgress(30);
          // Process form submission here
        }
   
  };

  return (
    <div className="max-w-full lg:w-full w-[600px] h-auto py-1 sm:p-6 mx-auto mt-5">
      <form className="flex flex-col gap-3">
        {!isSecondForm ? (
          <>
            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* First Name */}
              <div>
                <label htmlFor="firstname" className="font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="p-1 border rounded-lg w-full mt-2"
                  placeholder="Akshit"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </div>
              {/* Last Name */}
              <div>
                <label htmlFor="lastname" className="font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="p-2 border rounded-lg w-full mt-2"
                  placeholder="Nautiyal"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-2 border rounded-lg w-full"
              placeholder="@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />

            {/* Contact Number */}
            <label htmlFor="number" className="font-medium">
              Contact Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              className="p-2 border rounded-lg w-full"
              placeholder={+91}
              value={formData.number}
              onChange={handleChange}
            />

            {/* Pan Number */}
            <label htmlFor="panNumber" className="font-medium">
              Pan Number
            </label>
            <input
              name="panNumber"
              id="panNumber"
              className="border rounded-lg w-full py-1.5"
              value={formData.panNumber}
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
                onClick={handleContinue}
                className="text-white px-5 py-2 border border-black rounded-lg w-full bg-blue-500"
              >
                Continue
              </button>
            </div>
          </>
        ) : (
          <ConsultingForm2
            setIsSecondForm={setIsSecondForm}
            setProgress={setProgress}
          />
        )}
      </form>
    </div>
  );
};

export default ConsultingForm1;
