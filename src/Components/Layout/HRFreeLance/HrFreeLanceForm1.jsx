import { useState } from "react";
import HrFreeLanceForm2 from "./HrFreeLanceForm2";
import { toast } from 'react-toastify';

const HrFreeLanceForm1 = ({ setForm, setProgress }) => {
  const [isSecondForm, setIsSecondForm] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    address: "",
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
    
    const { firstname, lastname, number, email, address } = formData;
    
    // Validate the fields
    if (!firstname || !lastname || !number || !email || !address) {
      toast.error('Please fill out All The fields!');
    } else {
      toast.success('Moving Forward!');
      setIsSecondForm(true);
      setProgress(30);
      // Process form submission here
    }
  };

  return (
    <div className="max-w-full lg:w-ful w-[600px] h-auto sm:p-6 mx-auto mt-5">
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
                  className="p-2 border rounded-lg w-full mt-2"
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
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Contact Number */}
            <label htmlFor="number" className="font-medium">
              Contact Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              className="p-2 border rounded-lg w-full"
              placeholder= {+91 }
              value={formData.number}
              onChange={handleChange}
            />

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

            {/* Message */}
            <label htmlFor="address" className="font-medium">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="p-1 border rounded-lg mb-5"
              placeholder="India"
              value={formData.address}
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
          <HrFreeLanceForm2
            setIsSecondForm={setIsSecondForm}
            setProgress={setProgress}
          />
        )}
      </form>
    </div>
  );
};

export default HrFreeLanceForm1;
