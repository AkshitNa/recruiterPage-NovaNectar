import Refer from "../assets/ReferEarnBackground.png";

export const ReferEarn = () => {
  return (
    <div className="bg-blue-100">
      <div className="container mx-auto bg-blue-100">
        <div className="relative text-center">
          <img
            src={Refer}
            alt="Refer"
            className="mx-auto w-full max-h-80 object-cover mb-6"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-opacity-50 px-4 py-2">
            <p className="font-grotesk text-xl font-semibold md:text-2xl lg:text-4xl mb-4">
              FREELANCER RECRUITER
            </p>
            <p className="font-grotesk text-lg font-semibold md:text-xl lg:text-4xl">
              REFER & EARN
            </p>
          </div>
        </div>

        <div>
          <p className="text-center font-grotesk text-2xl text-gray-600 mb-2">
            Let's Get Started But First,
          </p>
          <p className="text-center font-grotesk text-2xl text-gray-600">
            We Need Your Information
          </p>
        </div>

        {/* Form Section */}
        <div className="mt-8 mx-auto w-full lg:w-1/2 px-4">
          <form className="flex flex-col gap-4">
            {/* Name Section */}
            <div className="grid grid-cols-1 gap-4">
              {/* First Name */}
              <div>
                <label htmlFor="firstname" className="font-medium text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="p-2 border rounded-lg w-full text-sm"
                  placeholder="Akshit"
                />
              </div>
              {/* Last Name */}
              <div>
                <label htmlFor="lastname" className="font-medium text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="p-2 border rounded-lg w-full text-sm"
                  placeholder="Nautiyal"
                />
              </div>
            </div>

            {/* Email */}
            <label htmlFor="email" className="font-medium text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-2 border rounded-lg w-full text-sm"
              placeholder="@gmail.com"
            />

            {/* Contact Number */}
            <label htmlFor="number" className="font-medium text-sm">
              Contact Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              className="p-2 border rounded-lg w-full text-sm"
              placeholder="(+91) 9897xxxxxxxx"
            />

            {/* Message */}
            <label htmlFor="message" className="font-medium text-sm">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter any text..."
              className="p-2 border rounded-lg w-full h-24 resize-none text-sm"
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
                className="text-white font-grotesk px-5 py-2 border border-black rounded-lg w-full bg-blue-600 text-sm"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
