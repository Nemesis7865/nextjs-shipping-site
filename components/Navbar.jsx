import React from 'react';
import { logo } from '../assets/images'; // Make sure to replace this with the correct path to your logo image
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav className="top-0 left-0 right-0 p-2 w-full z-50 bg-white text-black shadow-md">
        <div className="flex justify-center items-center">
          {/* Logo and Navigation Container */}
          <div className="flex justify-between items-center w-full max-w-7xl px-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-32" />
              <h1 className="font-semibold text-lg">Logistic Slogan</h1>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="block lg:hidden p-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)} // Toggle menu
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <div
              className={`lg:flex lg:items-center lg:space-x-4 ${
                isOpen ? 'block' : 'hidden'
              } transition duration-300 ease-in-out`}
            >
              <ul className="flex flex-col lg:flex-row lg:space-x-4">
                <li>
                  <Link href="/" passHref>
                    <a className="block px-2 py-2 hover:bg-gray-200 transition">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/aboutus" passHref>
                    <a className="block px-2 py-2 hover:bg-gray-200 transition">
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services" passHref>
                    <a className="block px-2 py-2 hover:bg-gray-200 transition">
                      Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/trackpackage" passHref>
                    <a className="block px-2 py-2 hover:bg-gray-200 transition">
                      Track Package
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/helpcenter" passHref>
                    <a className="block px-2 py-2 hover:bg-gray-200 transition">
                      Help Center
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contactus" passHref>
                    <a className="block px-2 py-2 hover:bg-gray-200 transition">
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;