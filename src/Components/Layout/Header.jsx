import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ApplyForm from "./ApplyForm";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage navbar visibility
  const [apply, setApply] = useState(false); // For Apply Form
  const [isSticky, setIsSticky] = useState(false); // State to manage sticky navbar

  const toggleNav = () => setIsNavOpen(!isNavOpen); // Toggle navbar visibility

  const navigationLinks = [
    { to: "/", label: "Home" },
    { to: "/process", label: "Process" },
    { to: "/blog", label: "Blog" },
    { to: "/referAndEarn", label: "Refer & Earn" },
    { to: "/contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false); // Close navbar on link click
    }
  };

  const renderNavLinks = (isMobile = false) =>
    navigationLinks.map(({ to, label }) => (
      <div key={to} className="cursor-pointer hover:text-purple-600">
        <Link to={to} onClick={handleLinkClick}>
          {label}
        </Link>
      </div>
    ));

  // Handle sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true); // Make navbar sticky after scrolling 50px
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`relative flex flex-col sm:flex-row justify-between p-5 transition-all ${
        isSticky ? "sticky top-0 bg-white shadow-lg z-20" : ""
      }`}
    >
      {/* Logo / Title Section */}
      <div className="text-btn-purple text-2xl font-grotesk font-semibold mb-4 sm:mb-0">
        <Link to="/">Recruiter</Link>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden sm:flex sm:flex-row gap-6 text-gray-700 font-grotesk font-medium sm:items-center">
        {renderNavLinks()}
        <div>
          <button
            onClick={() => setApply(true)}
            className="text-white font-grotesk bg-btn-purple px-6 py-2 border-1 border-black rounded-md"
          >
            Apply Now
          </button>
        </div>
      </nav>

      {/* Mobile Navbar Toggle */}
      <div className="sm:hidden absolute top-6 right-1" onClick={toggleNav}>
        {isNavOpen ? (
          <svg
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
          >
            <line
              x1="5"
              y1="5"
              x2="25"
              y2="25"
              stroke="black"
              stroke-width="3"
            />
            <line
              x1="25"
              y1="5"
              x2="5"
              y2="25"
              stroke="black"
              stroke-width="3"
            />
          </svg>
        ) : (
          <svg
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
          >
            <rect x="5" y="5" width="20" height="3" rx="1.5" />
            <rect x="5" y="12" width="20" height="3" rx="1.5" />
            <rect x="5" y="19" width="20" height="3" rx="1.5" />
          </svg>
        )}
      </div>

      {/* Mobile Navigation Links */}
      {isNavOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-20 p-6">
          <nav className="flex flex-col gap-6 text-gray-700 font-grotesk font-medium">
            {renderNavLinks(true)}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => {
                  setIsNavOpen(false);
                  setApply(true);
                }}
                className="text-white font-grotesk bg-blue-500 px-6 py-2 border-1 border-black rounded-md"
              >
                Apply Now
              </button>
            </div>
          </nav>
        </div>
      )}

      {apply && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white z-30">
          <ApplyForm setApply={setApply} />
        </div>
      )}
    </div>
  );
};
