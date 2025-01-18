import FormImg2 from "../../assets/FormImg2.png";

export const Contact = () => {
  return (
    <div className="bg-purple-100 p-5 mx-2 pt-8">
      {/* Title Section */}
      <p className="text-center font-grotesk text-lg text-gray-600 mb-6">Contact</p>
      <p className="mb-2 font-opensans">
        <span className="font-medium font-grotesk">Email:</span>
        support@freelancerRecruitment.in
      </p>
      <p className="mb-5 font-opensans">
        <span className="font-medium font-grotesk">Phone:</span> +91-9897xxxxxx
      </p>

      {/* Responsive Container */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={FormImg2}
            alt="Form Image"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label htmlFor="firstname" className="font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="p-2 border rounded-lg w-full"
                  placeholder="Akshit"
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
                  className="p-2 border rounded-lg w-full"
                  placeholder="Nautiyal"
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
              placeholder="(+91) 9897xxxxxxxx"
            />

            {/* Message */}
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter any text..."
              className="p-2 border rounded-lg w-full h-24 resize-none"
            ></textarea>

            {/* Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-4">
              <button
                type="reset"
                className="text-black font-grotesk px-5 py-2 border border-black rounded-lg w-full text-sm"
              >
                Clean
              </button>
              <button
                type="submit"
                className="text-white font-grotesk px-5 py-2 border border-black rounded-lg w-full bg-btn-purple text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
