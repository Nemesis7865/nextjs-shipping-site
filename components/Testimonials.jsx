import React from "react";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import Link from "next/link"; // Import Link for navigation in Next.js

const Testimonials = () => {
  return (
    <>
      <div className="Testimonial mt-[850px] lg:mt-0 md:mt-64">
        <div className="w-full my-11">
          {/* Text layout */}
          <div className="text-center px-4">
            <h3 className="text-yellow-500 text-2xl md:text-3xl font-bold py-4 md:py-6 lg:mt-40 xl:mt-16 ">
              Testimonials
            </h3>
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-700 opacity-90">
              Hear what our clients are saying
            </h1>
          </div>

          {/* Client Text Div */}
          <div className="w-full h-auto">
            <ul className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-16 p-4 text-black mx-4 md:mx-16 lg:mx-32 my-10 md:my-20">
              <li className="flex-1 md:w-1/3">
                <p>
                  Professional, friendly, and reliable; nothing is too much
                  trouble for Atlantic Delivery. Whether it is getting urgent
                  parts out to waiting engineers or cost-effective overnight
                  product shipment, they make it simple. I wouldn't use anyone
                  else.
                  <div className="my-4 text-lg text-yellow-500">
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <p className="text-black text-sm">
                      Peter Donovan{" "}
                      <span className="opacity-50 text-xs">SK Sales</span>
                    </p>
                  </div>
                </p>
              </li>

              <li className="flex-1 md:w-1/3">
                <p>
                  We had a very urgent requirement for some products to get
                  to Ireland in a week at a specific time. Thank you to the team
                  who delivered the goods 2 hours before they were expected.
                  Would definitely recommend Atlantic Delivery.
                  <div className="my-4 text-lg text-yellow-500">
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <p className="text-black text-sm">
                      Ashley{" "}
                      <span className="opacity-50 text-xs">
                        Orange Manufacturing
                      </span>
                    </p>
                  </div>
                </p>
              </li>

              <li className="flex-1 md:w-1/3">
                <p>
                  I have received an email from a very satisfied customer
                  complimenting our choice of courier and wanted to pass this on
                  as I know how hard your staff work. I would also like to take
                  the opportunity to thank Atlantic Delivery for being such a
                  helpful and kind company, offering the best courier service I
                  have ever known.
                  <div className="my-4 text-lg text-yellow-500">
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <p className="text-black text-sm">
                      Akex{" "}
                      <span className="opacity-50 text-xs">Aromaglowcraft</span>
                    </p>
                  </div>
                </p>
              </li>
            </ul>
          </div>

          {/* Client Text Div 2 */}
          <div className="w-full h-auto">
            <ul className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-16 p-4 text-black mx-4 md:mx-16 lg:mx-32 my-10 md:my-20">
              <li className="flex-1 md:w-1/3">
                <p>
                  I wanted to say how much I appreciated the work your staff did
                  for me this week. The staff were able to get my parcels to my
                  customers on time! I know in this day and age that automated
                  systems are not designed for human intervention and that these
                  systems make the personal touch difficult. Never the less on
                  both occasion you were able to sort out possible problems for
                  me in time and this avoided my having to disappoint my
                  customers and possibly lose money. So thank you once again.
                  <div className="my-4 text-lg text-yellow-500">
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <p className="text-black text-sm">
                      Elizabeth Clark{" "}
                      <span className="opacity-50 text-xs">
                        Wetcher Compass
                      </span>
                    </p>
                  </div>
                </p>
              </li>

              <li className="flex-1 md:w-1/3">
                <p>
                  A storage provider does not only store and distribute goods
                  but also acts in partnership with your business. We are just
                  entering into our fourth year with Atlantic Delivery as our
                  3PL provider as our brand is represented with the respect our
                  valued customers deserve. Courier Plus Express Delivery
                  Service have a wealth of experience and with their
                  personalised support we are confident our business will
                  continue to grow.
                  <div className="my-4 text-lg text-yellow-500">
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <p className="text-black text-sm">
                      Jacquie Drinkwater{" "}
                      <span className="opacity-50 text-xs">Anotech</span>
                    </p>
                  </div>
                </p>
              </li>

              <li className="flex-1 md:w-1/3">
                <p>
                  We were having quite a challenge finding a vendor who could
                  fulfill our PPE needs quickly. Fortunately Atlantic Delivery
                  was suggested. Courier Plus Express Delivery Service has been
                  able to fulfill our orders quickly and accurately. We also
                  appreciate the flexibility they have. It’s a great feeling to
                  know that we have our PPE vendor identified. We are able to
                  feel confident knowing we have the ability to be responsive to
                  our community’s PPE needs. Thank you Courier Plus Express
                  Delivery Service!
                  <div className="my-4 text-lg text-yellow-500">
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <MdOutlineStarBorderPurple500 className="inline" />
                    <p className="text-black text-sm">
                      Lisa Bonie{" "}
                      <span className="opacity-50 text-xs">
                        Northern Nevada Center for Independent Living
                      </span>
                    </p>
                  </div>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="bg-neutral-900 text-white py-10 mt-40 lg:mt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-8 md:gap-16 lg:gap-8 text-center md:text-left lg:flex lg:justify-center lg:items-center">
            
            {/* About Us Section */}
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold text-yellow-500">ABOUT US</h3>
              <p className="mt-4 text-sm opacity-80">
                We provide a portfolio of full logistic solutions which includes, but is not limited to International and Domestic express delivery, Freight Forwarding, Integrated Logistics Solutions, Information and Document Management Solutions, Warehousing, Packaging Services, Food Delivery, Agriculture Logistics and E-commerce Solutions.
              </p>
            </div>
            
            {/* Quick Links Section */}
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold text-yellow-500">QUICK LINKS</h3>
              <ul className="mt-4 space-y-2 text-sm opacity-80">
                <li><Link href="#" className="hover:text-yellow-500">Home</Link></li>
                <li><Link href="#" className="hover:text-yellow-500">About us</Link></li>
                <li><Link href="#" className="hover:text-yellow-500">Services</Link></li>
                <li><Link href="#" className="hover:text-yellow-500">Track package</Link></li>
                <li><Link href="#" className="hover:text-yellow-500">Help Centre</Link></li>
                <li><Link href="#" className="hover:text-yellow-500">Contact us</Link></li>
              </ul>
            </div>
            
            {/* Services Section */}
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold text-yellow-500">SERVICES</h3>
              <ul className="mt-4 space-y-2 text-sm opacity-80">
                <li><Link href="#" className="hover:text-yellow-500">Air freight</Link></li>
                <li><Link href="#" className="hover:text-yellow-500">Customs House Brokerage</Link></li>
                <li><Link href="#" className="hover:text-yellow-500">Ocean freight</Link></li>
                <li><Link href="#" className="hover:text-yellow-500">Project Cargo</Link></li>
                <li><Link href="#" className="hover:text-yellow-500">Road and Rail</Link></li>
                <li><Link href="#" className="hover:text-yellow-500">Warehousing</Link></li>
              </ul>
            </div>
            
            {/* Help Center Section */}
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold text-yellow-500">HELP CENTER</h3>
              <ul className="mt-4 space-y-2 text-sm opacity-80">
                <li><Link href="#" className="hover:text-yellow-500">Damaged or missing parcel</Link></li>
                <li><Link href="#" className="hover:text-yellow-500">I'm not in</Link></li>
                <li><Link href="#" className="hover:text-yellow-500">Missed a delivery?</Link></li>
                <li><Link href="#" className="hover:text-yellow-500">Parcel returns</Link></li>
                <li><Link href="#" className="hover:text-yellow-500">Problems or complaints</Link></li>
                <li><Link href="#" className="hover:text-yellow-500">Redelivery</Link></li>
                <li><Link href="#" className="hover:text-yellow-500">Tracking</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Footer Bottom Section */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm opacity-80">
            © 2024 Courier Plus Express Delivery Service. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Testimonials;
