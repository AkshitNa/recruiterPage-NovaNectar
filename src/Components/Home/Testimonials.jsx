export const Testimonials = () => {
  return (
    <section className="bg-purple-100 pt-12 pb-7">
      <p className="text-center font-grotesk text-2xl text-gray-600 mb-6">
        Testimonials
      </p>

      <p className="text-center font-grotesk font-semibold text-2xl mb-3 px-3">
        {" "}
        Don't take our words for it. See What{" "}
      </p>
      <p className="text-center font-grotesk font-semibold text-2xl mb-2 px-3">
        {" "}
        <span className="text-blue-500 font-grotesk font-bold">
          {" "}
          Customers{" "}
        </span>{" "}
        are saying about us.
      </p>

      <div className="grid rounded-lg md:grid-cols-4 mx-5 sm:text-left">
        <figure className="flex flex-col justify-start items-start p-8 bg-white rounded-2xl border-b border-gray-200 md:rounded-2xl md:border-r m-3 transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-gray-500/50 shadow-md">
          <div className="flex flex-row space-x-1">
            {[...Array(5)].map((x, index) => (
              <span key={index}>
                <i className="bi bi-star-fill text-yellow-300"></i>
              </span>
            ))}
          </div>

          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-800 lg:mb-8">
            <p className="my-4 font-light font-opensans">
              I love how easy it is to find exactly what I'm looking for and the
              convenience of being able to access it. Highly recommend it to
              all!
            </p>
          </blockquote>

          <figcaption className="flex justify-center items-center space-x-3 my-3">
            <img
              className="w-12 h-12 rounded-full"
              src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA="
              alt="user"
            />
            <div className="space-y-0.5 text-black text-left font-grotesk">
              <div className="font-medium">Akshit Nautiyal</div>
              <div className="text-gray-500"> Data Analyst </div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col justify-start items-start p-8 bg-white rounded-2xl border-b border-gray-200 md:rounded-2xl md:border-r m-3 transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-gray-500/50 shadow-md">
          <div className="flex flex-row space-x-1">
            {[...Array(5)].map((x, index) => (
              <span key={index}>
                <i className="bi bi-star-fill text-yellow-300"></i>
              </span>
            ))}
          </div>

          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-800 lg:mb-8">
            <p className="my-4 font-light font-opensans">
              I love how easy it is to find exactly what I'm looking for and the
              convenience of being able to access it. Highly recommend it to
              all!
            </p>
          </blockquote>

          <figcaption className="flex justify-center items-center space-x-3 my-3">
            <img
              className="w-12 h-12 rounded-full"
              src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA="
              alt="user"
            />
            <div className="space-y-0.5 text-black text-left font-grotesk">
              <div className="font-medium">Akshit Nautiyal</div>
              <div className="text-gray-500"> Data Analyst </div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col justify-start items-start p-8 bg-white rounded-2xl border-b border-gray-200 md:rounded-2xl md:border-r m-3 transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-gray-500/50 shadow-md">
          <div className="flex flex-row space-x-1">
            {[...Array(5)].map((x, index) => (
              <span key={index}>
                <i className="bi bi-star-fill text-yellow-300"></i>
              </span>
            ))}
          </div>

          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-800 lg:mb-8">
            <p className="my-4 font-light font-opensans">
              I love how easy it is to find exactly what I'm looking for and the
              convenience of being able to access it. Highly recommend it to
              all!
            </p>
          </blockquote>

          <figcaption className="flex justify-center items-center space-x-3 my-3">
            <img
              className="w-12 h-12 rounded-full"
              src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA="
              alt="user"
            />
            <div className="space-y-0.5 text-black text-left font-grotesk">
              <div className="font-medium">Akshit Nautiyal</div>
              <div className="text-gray-500"> Data Analyst </div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col justify-start items-start p-8 bg-white rounded-2xl border-b border-gray-200 md:rounded-2xl md:border-r m-3 transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-gray-500/50 shadow-md">
          <div className="flex flex-row space-x-1">
            {[...Array(5)].map((x, index) => (
              <span key={index}>
                <i className="bi bi-star-fill text-yellow-300"></i>
              </span>
            ))}
          </div>

          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-800 lg:mb-8">
            <p className="my-4 font-light font-opensans">
              I love how easy it is to find exactly what I'm looking for and the
              convenience of being able to access it. Highly recommend it to
              all!
            </p>
          </blockquote>

          <figcaption className="flex justify-center items-center space-x-3 my-3">
            <img
              className="w-12 h-12 rounded-full"
              src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA="
              alt="user"
            />
            <div className="space-y-0.5 text-black text-left font-grotesk">
              <div className="font-medium">Akshit Nautiyal</div>
              <div className="text-gray-500"> Data Analyst </div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col justify-start items-start p-8 bg-white rounded-2xl border-b border-gray-200 md:rounded-2xl md:border-r m-3 transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-gray-500/50 shadow-md">
          <div className="flex flex-row space-x-1">
            {[...Array(5)].map((x, index) => (
              <span key={index}>
                <i className="bi bi-star-fill text-yellow-300"></i>
              </span>
            ))}
          </div>

          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-800 lg:mb-8">
            <p className="my-4 font-light font-opensans">
              I love how easy it is to find exactly what I'm looking for and the
              convenience of being able to access it. Highly recommend it to
              all!
            </p>
          </blockquote>

          <figcaption className="flex justify-center items-center space-x-3 my-3">
            <img
              className="w-12 h-12 rounded-full"
              src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA="
              alt="user"
            />
            <div className="space-y-0.5 text-black text-left font-grotesk">
              <div className="font-medium">Akshit Nautiyal</div>
              <div className="text-gray-500"> Data Analyst </div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col justify-start items-start p-8 bg-white rounded-2xl border-b border-gray-200 md:rounded-2xl md:border-r m-3 transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-gray-500/50 shadow-md">
          <div className="flex flex-row space-x-1">
            {[...Array(5)].map((x, index) => (
              <span key={index}>
                <i className="bi bi-star-fill text-yellow-300"></i>
              </span>
            ))}
          </div>

          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-800 lg:mb-8">
            <p className="my-4 font-light font-opensans">
              I love how easy it is to find exactly what I'm looking for and the
              convenience of being able to access it. Highly recommend it to
              all!
            </p>
          </blockquote>

          <figcaption className="flex justify-center items-center space-x-3 my-3">
            <img
              className="w-12 h-12 rounded-full"
              src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA="
              alt="user"
            />
            <div className="space-y-0.5 text-black text-left font-grotesk">
              <div className="font-medium">Akshit Nautiyal</div>
              <div className="text-gray-500"> Data Analyst </div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col justify-start items-start p-8 bg-white rounded-2xl border-b border-gray-200 md:rounded-2xl md:border-r m-3 transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-gray-500/50 shadow-md">
          <div className="flex flex-row space-x-1">
            {[...Array(5)].map((x, index) => (
              <span key={index}>
                <i className="bi bi-star-fill text-yellow-300"></i>
              </span>
            ))}
          </div>

          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-800 lg:mb-8">
            <p className="my-4 font-light font-opensans">
              I love how easy it is to find exactly what I'm looking for and the
              convenience of being able to access it. Highly recommend it to
              all!
            </p>
          </blockquote>

          <figcaption className="flex justify-center items-center space-x-3 my-3">
            <img
              className="w-12 h-12 rounded-full"
              src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA="
              alt="user"
            />
            <div className="space-y-0.5 text-black text-left font-grotesk">
              <div className="font-medium">Akshit Nautiyal</div>
              <div className="text-gray-500"> Data Analyst </div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col justify-start items-start p-8 bg-white rounded-2xl border-b border-gray-200 md:rounded-2xl md:border-r m-3 transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-gray-500/50 shadow-md">
          <div className="flex flex-row space-x-1">
            {[...Array(5)].map((x, index) => (
              <span key={index}>
                <i className="bi bi-star-fill text-yellow-300"></i>
              </span>
            ))}
          </div>

          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-800 lg:mb-8">
            <p className="my-4 font-light font-opensans">
              I love how easy it is to find exactly what I'm looking for and the
              convenience of being able to access it. Highly recommend it to
              all!
            </p>
          </blockquote>

          <figcaption className="flex justify-center items-center space-x-3 my-3">
            <img
              className="w-12 h-12 rounded-full"
              src="https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=CnPwvagPlklsAjejUNkuKv_QXtaXPYFQ64AQYb-IAjA="
              alt="user"
            />
            <div className="space-y-0.5 text-black text-left font-grotesk">
              <div className="font-medium">Akshit Nautiyal</div>
              <div className="text-gray-500"> Data Analyst </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
