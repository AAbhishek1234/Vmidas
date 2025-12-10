import React from "react";
//import Navbar from "../components/Navbar";

const ContactUs = () => {
  return (
    <>
      {/* <Navbar /> */}

      <main className="space-y-16"> {/* Reduced overall section spacing */}

        {/* Module 2 - Consultation Section */}
        <section className="bg-linear-to-r from-indigo-50 to-white py-16 px-6 md:px-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center mt-8"> {/* Reduced mb */}
            Consult the services you <span className="text-indigo-600">need now!</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Left Section - Contact Info */}
            <div className="flex-1 space-y-4"> {/* Reduced space-y */}
              <p className="text-indigo-600 font-semibold text-lg">We are here to help</p>
              <h3 className="text-2xl md:text-3xl font-bold">
                GET IN <span className="text-indigo-600">TOUCH</span>
              </h3>
              <p>Vmidas supports its clients from multiple locations in India</p>

              {/* Contact Details */}
              <div className="space-y-2"> {/* Reduced spacing */}
                <div className="flex items-start gap-4 hover:bg-indigo-50 p-3 rounded-lg transition">
                  <i className="fas fa-envelope text-indigo-600 text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold">Mail us:</p>
                    <a href="mailto:info@vmidas.in" className="text-gray-700 hover:text-indigo-600">
                      info@vmidas.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover:bg-indigo-50 p-3 rounded-lg transition">
                  <i className="fas fa-phone text-indigo-600 text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold">Call us:</p>
                    <a href="tel:+9110204274048" className="text-gray-700 hover:text-indigo-600">
                      +91-0120-427-4048
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover:bg-indigo-50 p-3 rounded-lg transition">
                  <i className="fas fa-map-marker-alt text-indigo-600 text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold">Address:</p>
                    <span>
                      <b>Head Office</b> – 130-131, H-Block Part-1, Lajpat Nagar, New Delhi-110024, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="flex-1 relative">
              <img
                src="https://res.cloudinary.com/dwbl90daj/image/upload/v1757942373/view-full-warehouse-with-forklift_mehqi6.png"
                alt="Warehouse"
                className="rounded-xl shadow-xl w-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </section>

        {/* Module 3 - Contact Form */}
        <section className="bg-gray-50 py-16 px-6 md:px-16"> {/* Reduced py */}
          <div className="flex flex-col md:flex-row gap-8"> {/* Reduced gap between form and info */}

            {/* Form */}
            <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-bold mb-4"> {/* Reduced mb */}
                Fill out the <span className="text-indigo-600">form</span>
              </h2>
              <form className="space-y-3"> {/* Reduced spacing */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3"> {/* Reduced gap */}
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Services of Interest"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full"
                />
                <textarea
                  placeholder="Message"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full h-28 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors w-full md:w-auto"
                >
                  Submit
                </button>
              </form>

              <div className="mt-6"> {/* Reduced margin */}
                <p className="text-lg font-semibold">Opening Hours:</p>
                <p>Monday - Saturday: 10:00am to 07:00pm</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex-1 space-y-4"> {/* Reduced spacing */}
              <h3 className="text-2xl font-bold">We will contact you within 24 hours</h3>
              <p className="text-gray-700 leading-relaxed">
                One of our business solutions experts will contact you to discuss how we can support your business operations.
              </p>
            </div>
          </div>
        </section>

        {/* Module 4 - Map Section */}
        <section className="relative h-80 md:h-96 mb-2"> {/* Reduced height */}
          <iframe
            src="https://maps.google.com/maps?q=Lajpat%20Nagar,%20New%20Delhi&t=k&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full rounded-2xl shadow-2xl border-0"
            allowFullScreen
            loading="lazy"
            title="Google Map Location"
          ></iframe>
          {/* Overlay card for map info */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-xl shadow-lg border w-72 text-center">
            <h4 className="font-bold text-indigo-600">Our Head Office</h4>
            <p className="text-gray-700 text-sm mt-1">
              130-131, H-Block Part-1, Lajpat Nagar, New Delhi-110024, India
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUs;
