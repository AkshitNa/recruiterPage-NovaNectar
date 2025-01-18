export const Footer = () => {
  return (
    <div className="bg-custom-blue text-white pt-4 pb-2">
      {/* Header Section */}
      <div className="font-semibold text-2xl sm:text-3xl text-center mb-6 sm:mb-10 mt-6 sm:mt-8">
        FreeLance Recruitment
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 py-8">
        {/* Quick Links Section */}
        <div className="list-none">
          <p className="font-semibold text-lg mb-3">Quick Links</p>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>How it Works</li>
            <li>Services</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="list-none">
          <p className="font-semibold text-lg mb-3">Follow Us</p>
          <ul className="space-y-2">
            <li>
              <i className="bi bi-linkedin text-white"></i> LinkedIn
            </li>
            <li>
              <i className="bi bi-instagram text-white"></i> Instagram
            </li>
            <li>
              <i className="bi bi-twitter text-white"></i> Twitter
            </li>
            <li>
              <i className="bi bi-facebook text-white"></i> Facebook
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="list-none">
          <p className="font-semibold text-lg mb-3">Legal</p>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="list-none">
          <p className="font-semibold text-lg mb-3">Contact Us</p>
          <ul className="space-y-2">
            <li>
              <i className="bi bi-envelope-at text-white p-1"></i>
              @Freelancer
            </li>
            <li>
              <i className="bi bi-whatsapp text-white"></i> +91-9897xxxxxx
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <hr className="border-gray-700 my-4" />
      <p className="text-center text-sm sm:text-base">
        &copy; Akshit Nautiyal All Rights Reserved 2025
      </p>
    </div>
  );
};
