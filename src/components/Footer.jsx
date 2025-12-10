import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6 md:px-16">
      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About / Logo */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-300">Vmidas</h3>
          <p className="text-gray-300 text-sm">
            Supporting your business operations with expert solutions and multiple locations across India.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-indigo-500 transition">Home</a></li>
            <li><a href="/services" className="hover:text-indigo-500 transition">Services</a></li>
            <li><a href="/contact-us" className="hover:text-indigo-500 transition">Contact Us</a></li>
            <li><a href="/about-us" className="hover:text-indigo-500 transition">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="font-semibold text-white">Contact</h4>
          <p className="text-gray-300 text-sm">
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:info@vmidas.in" className="hover:text-indigo-500 transition">info@vmidas.in</a>
          </p>
          <p className="text-gray-300 text-sm">
            <span className="font-semibold">Phone:</span>{" "}
            <a href="tel:+91-0120-427-4048" className="hover:text-indigo-500 transition">+91-0120-427-4048</a>
          </p>
          <p className="text-gray-300 text-sm">
            <span className="font-semibold">Address:</span>{" "}
            EZ 511, SRS tower, sector 31, Faridabad
          </p>
        </div>

        {/* Social Icons */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white">Follow Us</h4>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-indigo-500 transition">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      {/* Centered Copyright */}
      <div className="border-t border-gray-700 pt-4 mt-8 text-center">
        <p className="text-gray-200 text-sm">
          &copy; {new Date().getFullYear()} Vmidas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
