import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-10 my-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-8 md:gap-16 lg:gap-8 text-center md:text-left lg:flex lg:justify-center lg:items-center">
          {/* About Us Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold text-yellow-500">ABOUT US</h3>
            <p className="mt-4 text-sm opacity-80">
              We provide a portfolio of full logistic solutions which includes, but is not limited to International and Domestic express delivery, Freight Forwarding, Integrated Logistics Solutions, Information and Document Management Solutions, Warehousing, Packaging Services, Food Delivery, Agriculture Logistics, and E-commerce Solutions.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold text-yellow-500">QUICK LINKS</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li>
                <Link href="/" 
                className="hover:text-yellow-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about"
                className="hover:text-yellow-500"
                >
                  AboutUs
                </Link>
              </li>
              <li>
                <Link href="/services" 
                className="hover:text-yellow-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/track-package"
                className="hover:text-yellow-500"
                >
                  Track package
                </Link>
              </li>
              <li>
                <Link href="/help-center"
                className="hover:text-yellow-500"
                >
                  Help Centr
                </Link>
              </li>
              <li>
                <Link href="/contact"
                className="hover:text-yellow-500"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold text-yellow-500">SERVICES</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Air freight
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Customs House Brokerage
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Ocean freight
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Project Cargo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Road and Rail
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Warehousing
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Center Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold text-yellow-500">HELP CENTER</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Damaged or missing parcel
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  I'm not in
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Missed a delivery?
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Parcel returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Problems or complaints
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Redelivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Tracking
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm opacity-80">
          © 2024 Courier Plus Express Delivery Service. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
