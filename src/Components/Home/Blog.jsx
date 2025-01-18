import Laptop from "../../assets/Laptop.png";

export const Blog = () => {
  return (
    <section className="bg-blue-100 pt-12 pb-12 px-5">
      {/* Blog Header */}
      <p className="text-center font-grotesk text-lg text-gray-800 mb-8">
        Blog
      </p>

      {/* Blog Grid */}
      <div className="grid gap-5 md:grid-cols-4 mx-4 md:mx-8 lg:mx-16">
        {/* Blog Card */}
        
        <figure className="max-h-[42rem] flex flex-col justify-start items-start p-5 bg-white rounded-xl border shadow-lg dark:border-gray-700 mx-2.5">
          {/* Header Section */}
          <figcaption className="flex items-center space-x-4 mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA="
              alt="user"
            />
            <div>
              <div className="font-grotesk text-lg text-gray-900">
                Akshit Nautiyal
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-opensans">
                  <i className="bi bi-star-fill text-yellow-500"></i> Jan 13,
                  2025
                </span>
                <span className="mx-2">
                  <i className="bi bi-dot"></i> 5 min read
                </span>
              </div>
            </div>
          </figcaption>

          {/* Image Section */}
          <img
            src={Laptop}
            alt="Laptop"
            className="w-full max-w-sm mx-auto rounded-lg object-contain mb-4"
          />

          {/* Content Section */}
          <blockquote className="text-gray-600 dark:text-gray-400">
            <h3 className="text-xl md:text-sm font-grotesk font-semibold text-gray-900 mb-3">
              Understanding Whitepapers: A Comprehensive Guide For Businesses!!
            </h3>
            <p className="text-sm font-opensans leading-relaxed text-gray-700">
              I love how easy it is to find exactly what I'm looking for and the
              convenience of being able to access it. Highly recommend it to
              all!
            </p>
          </blockquote>

            {/* Icons Section */}
            <div className="flex flex-row justify-between items-center w-full mt-10">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-heart text-red-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm"></span>
              </span>
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-eye-fill text-blue-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm">2K</span>
              </span>
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-chat-fill text-green-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm">300</span>
              </span>
            </div>
            <button className="flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white mt-1 sm:mt-0 text-xs sm:text-sm">
              <i className="bi bi-share-fill text-lg sm:text-xl"></i>
              <span className="ml-1"></span>
            </button>
          </div>
        </figure>

        <figure className="max-h-[42rem] flex flex-col justify-start items-start p-5 bg-white rounded-xl border shadow-lg dark:border-gray-700 mx-2.5">
          {/* Header Section */}
          <figcaption className="flex items-center space-x-4 mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA="
              alt="user"
            />
            <div>
              <div className="font-grotesk text-lg text-gray-900">
                Akshit Nautiyal
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-opensans">
                  <i className="bi bi-star-fill text-yellow-500"></i> Jan 13,
                  2025
                </span>
                <span className="mx-2">
                  <i className="bi bi-dot"></i> 5 min read
                </span>
              </div>
            </div>
          </figcaption>

          {/* Image Section */}
          <img
            src={Laptop}
            alt="Laptop"
            className="w-full max-w-sm mx-auto rounded-lg object-contain mb-4"
          />

          {/* Content Section */}
          <blockquote className="text-gray-600 dark:text-gray-400">
            <h3 className="text-xl md:text-sm font-grotesk font-semibold text-gray-900 mb-3">
              Understanding Whitepapers: A Comprehensive Guide For Businesses!!
            </h3>
            <p className="text-sm font-opensans leading-relaxed text-gray-700">
              I love how easy it is to find exactly what I'm looking for and the
              convenience of being able to access it. Highly recommend it to
              all!
            </p>
          </blockquote>

            {/* Icons Section */}
            <div className="flex flex-row justify-between items-center w-full mt-10">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-heart text-red-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm"></span>
              </span>
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-eye-fill text-blue-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm">2K</span>
              </span>
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-chat-fill text-green-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm">300</span>
              </span>
            </div>
            <button className="flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white mt-4 sm:mt-0 text-xs sm:text-sm">
              <i className="bi bi-share-fill text-lg sm:text-xl"></i>
              <span className="ml-1"></span>
            </button>
          </div>
        </figure>

        <figure className="max-h-[42rem] flex flex-col justify-start items-start p-5 bg-white rounded-xl border shadow-lg dark:border-gray-700 mx-2.5">
          {/* Header Section */}
          <figcaption className="flex items-center space-x-4 mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA="
              alt="user"
            />
            <div>
              <div className="font-grotesk text-lg text-gray-900">
                Akshit Nautiyal
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-opensans">
                  <i className="bi bi-star-fill text-yellow-500"></i> Jan 13,
                  2025
                </span>
                <span className="mx-2">
                  <i className="bi bi-dot"></i> 5 min read
                </span>
              </div>
            </div>
          </figcaption>

          {/* Image Section */}
          <img
            src={Laptop}
            alt="Laptop"
            className="w-full max-w-sm mx-auto rounded-lg object-contain mb-4"
          />

          {/* Content Section */}
          <blockquote className="text-gray-600 dark:text-gray-400">
            <h3 className="text-xl md:text-sm font-grotesk font-semibold text-gray-900 mb-3">
              Understanding Whitepapers: A Comprehensive Guide For Businesses!!
            </h3>
            <p className="text-sm font-opensans leading-relaxed text-gray-700">
              I love how easy it is to find exactly what I'm looking for and the
              convenience of being able to access it. Highly recommend it to
              all!
            </p>
          </blockquote>

            {/* Icons Section */}
            <div className="flex flex-row justify-between items-center w-full mt-10">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-heart text-red-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm"></span>
              </span>
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-eye-fill text-blue-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm">2K</span>
              </span>
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-chat-fill text-green-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm">300</span>
              </span>
            </div>
            <button className="flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white mt-4 sm:mt-0 text-xs sm:text-sm">
              <i className="bi bi-share-fill text-lg sm:text-xl"></i>
              <span className="ml-1"></span>
            </button>
          </div>
        </figure>

        <figure className="hidden sm:flex max-h-[42rem] flex-col justify-start items-start p-5 bg-white rounded-xl border shadow-lg dark:border-gray-700 mx-2.5">
          {/* Header Section */}
          <figcaption className="flex items-center space-x-4 mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA="
              alt="user"
            />
            <div>
              <div className="font-grotesk text-lg text-gray-900">
                Akshit Nautiyal
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-opensans">
                  <i className="bi bi-star-fill text-yellow-500"></i> Jan 13,
                  2025
                </span>
                <span className="mx-2">
                  <i className="bi bi-dot"></i> 5 min read
                </span>
              </div>
            </div>
          </figcaption>

          {/* Image Section */}
          <img
            src={Laptop}
            alt="Laptop"
            className="w-full max-w-sm mx-auto rounded-lg object-contain mb-4"
          />

          {/* Content Section */}
          <blockquote className="text-gray-600 dark:text-gray-400">
            <h3 className="text-xl md:text-sm font-grotesk font-semibold text-gray-900 mb-3">
              Understanding Whitepapers: A Comprehensive Guide For Businesses!!
            </h3>
            <p className="text-sm font-opensans leading-relaxed text-gray-700">
              I love how easy it is to find exactly what I'm looking for and the
              convenience of being able to access it. Highly recommend it to
              all!
            </p>
          </blockquote>

            {/* Icons Section */}
            <div className="flex flex-row justify-between items-center w-full mt-10">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-heart text-red-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm"></span>
              </span>
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-eye-fill text-blue-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm">2K</span>
              </span>
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-chat-fill text-green-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm">300</span>
              </span>
            </div>
            <button className="flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white mt-4 sm:mt-0 text-xs sm:text-sm">
              <i className="bi bi-share-fill text-lg sm:text-xl"></i>
              <span className="ml-1"></span>
            </button>
          </div>
        </figure>

        <figure className="hidden sm:flex max-h-[42rem] flex-col justify-start items-start p-5 bg-white rounded-xl border shadow-lg dark:border-gray-700 mx-2.5">
          {/* Header Section */}
          <figcaption className="flex items-center space-x-4 mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA="
              alt="user"
            />
            <div>
              <div className="font-grotesk text-lg text-gray-900">
                Akshit Nautiyal
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-opensans">
                  <i className="bi bi-star-fill text-yellow-500"></i> Jan 13,
                  2025
                </span>
                <span className="mx-2">
                  <i className="bi bi-dot"></i> 5 min read
                </span>
              </div>
            </div>
          </figcaption>

          {/* Image Section */}
          <img
            src={Laptop}
            alt="Laptop"
            className="w-full max-w-sm mx-auto rounded-lg object-contain mb-4"
          />

          {/* Content Section */}
          <blockquote className="text-gray-600 dark:text-gray-400">
            <h3 className="text-xl md:text-sm font-grotesk font-semibold text-gray-900 mb-3">
              Understanding Whitepapers: A Comprehensive Guide For Businesses!!
            </h3>
            <p className="text-sm font-opensans leading-relaxed text-gray-700">
              I love how easy it is to find exactly what I'm looking for and the
              convenience of being able to access it. Highly recommend it to
              all!
            </p>
          </blockquote>

            {/* Icons Section */}
            <div className="flex flex-row justify-between items-center w-full mt-10">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-heart text-red-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm"></span>
              </span>
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-eye-fill text-blue-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm">2K</span>
              </span>
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-chat-fill text-green-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm">300</span>
              </span>
            </div>
            <button className="flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white mt-4 sm:mt-0 text-xs sm:text-sm">
              <i className="bi bi-share-fill text-lg sm:text-xl"></i>
              <span className="ml-1"></span>
            </button>
          </div>
        </figure>

        <figure className="hidden sm:flex max-h-[42rem] flex-col justify-start items-start p-5 bg-white rounded-xl border shadow-lg dark:border-gray-700 mx-2.5">
          {/* Header Section */}
          <figcaption className="flex items-center space-x-4 mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA="
              alt="user"
            />
            <div>
              <div className="font-grotesk text-lg text-gray-900">
                Akshit Nautiyal
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-opensans">
                  <i className="bi bi-star-fill text-yellow-500"></i> Jan 13,
                  2025
                </span>
                <span className="mx-2">
                  <i className="bi bi-dot"></i> 5 min read
                </span>
              </div>
            </div>
          </figcaption>

          {/* Image Section */}
          <img
            src={Laptop}
            alt="Laptop"
            className="w-full max-w-sm mx-auto rounded-lg object-contain mb-4"
          />

          {/* Content Section */}
          <blockquote className="text-gray-600 dark:text-gray-400">
            <h3 className="text-xl md:text-sm font-grotesk font-semibold text-gray-900 mb-3">
              Understanding Whitepapers: A Comprehensive Guide For Businesses!!
            </h3>
            <p className="text-sm font-opensans leading-relaxed text-gray-700">
              I love how easy it is to find exactly what I'm looking for and the
              convenience of being able to access it. Highly recommend it to
              all!
            </p>
          </blockquote>

            {/* Icons Section */}
            <div className="flex flex-row justify-between items-center w-full mt-10">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-heart text-red-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm"></span>
              </span>
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-eye-fill text-blue-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm">2K</span>
              </span>
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-chat-fill text-green-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm">300</span>
              </span>
            </div>
            <button className="flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white mt-4 sm:mt-0 text-xs sm:text-sm">
              <i className="bi bi-share-fill text-lg sm:text-xl"></i>
              <span className="ml-1"></span>
            </button>
          </div>
        </figure>

        <figure className="hidden sm:flex max-h-[42rem] flex-col justify-start items-start p-5 bg-white rounded-xl border shadow-lg dark:border-gray-700 mx-2.5">
          {/* Header Section */}
          <figcaption className="flex items-center space-x-4 mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA="
              alt="user"
            />
            <div>
              <div className="font-grotesk text-lg text-gray-900">
                Akshit Nautiyal
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-opensans">
                  <i className="bi bi-star-fill text-yellow-500"></i> Jan 13,
                  2025
                </span>
                <span className="mx-2">
                  <i className="bi bi-dot"></i> 5 min read
                </span>
              </div>
            </div>
          </figcaption>

          {/* Image Section */}
          <img
            src={Laptop}
            alt="Laptop"
            className="w-full max-w-sm mx-auto rounded-lg object-contain mb-4"
          />

          {/* Content Section */}
          <blockquote className="text-gray-600 dark:text-gray-400">
            <h3 className="text-xl md:text-sm font-grotesk font-semibold text-gray-900 mb-3">
              Understanding Whitepapers: A Comprehensive Guide For Businesses!!
            </h3>
            <p className="text-sm font-opensans leading-relaxed text-gray-700">
              I love how easy it is to find exactly what I'm looking for and the
              convenience of being able to access it. Highly recommend it to
              all!
            </p>
          </blockquote>

            {/* Icons Section */}
            <div className="flex flex-row justify-between items-center w-full mt-10">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-heart text-red-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm"></span>
              </span>
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-eye-fill text-blue-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm">2K</span>
              </span>
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-chat-fill text-green-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm">300</span>
              </span>
            </div>
            <button className="flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white mt-4 sm:mt-0 text-xs sm:text-sm">
              <i className="bi bi-share-fill text-lg sm:text-xl"></i>
              <span className="ml-1"></span>
            </button>
          </div>
        </figure>

        <figure className="hidden sm:flex max-h-[42rem] flex-col justify-start items-start p-5 bg-white rounded-xl border shadow-lg dark:border-gray-700 mx-2.5">
          {/* Header Section */}
          <figcaption className="flex items-center space-x-4 mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA="
              alt="user"
            />
            <div>
              <div className="font-grotesk text-lg text-gray-900">
                Akshit Nautiyal
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-opensans">
                  <i className="bi bi-star-fill text-yellow-500"></i> Jan 13,
                  2025
                </span>
                <span className="mx-2">
                  <i className="bi bi-dot"></i> 5 min read
                </span>
              </div>
            </div>
          </figcaption>

          {/* Image Section */}
          <img
            src={Laptop}
            alt="Laptop"
            className="w-full max-w-sm mx-auto rounded-lg object-contain mb-4"
          />

          {/* Content Section */}
          <blockquote className="text-gray-600 dark:text-gray-400">
            <h3 className="text-xl md:text-sm font-grotesk font-semibold text-gray-900 mb-3">
              Understanding Whitepapers: A Comprehensive Guide For Businesses!!
            </h3>
            <p className="text-sm font-opensans leading-relaxed text-gray-700">
              I love how easy it is to find exactly what I'm looking for and the
              convenience of being able to access it. Highly recommend it to
              all!
            </p>
          </blockquote>

            {/* Icons Section */}
            <div className="flex flex-row justify-between items-center w-full mt-10">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-heart text-red-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm"></span>
              </span>
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-eye-fill text-blue-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm">2K</span>
              </span>
              <span className="flex items-center text-gray-500 text-xs sm:text-sm">
                <i className="bi bi-chat-fill text-green-500 text-lg sm:text-xl"></i>
                <span className="ml-1 text-xs sm:text-sm">300</span>
              </span>
            </div>
            <button className="flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white mt-4 sm:mt-0 text-xs sm:text-sm">
              <i className="bi bi-share-fill text-lg sm:text-xl"></i>
              <span className="ml-1"></span>
            </button>
          </div>
        </figure>


      </div>

      {/* Read More Button */}
<div className="flex justify-center mt-6">
  <button className="text-black w-2/3 sm:w-1/3 md:w-1/4 lg:w-1/6 px-6 py-3 border-2 border-black rounded-full bg-white hover:bg-gray-200">
    Read More
  </button>
</div>

    </section>
  );
};
