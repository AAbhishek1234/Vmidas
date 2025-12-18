// import React, { useState } from "react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

//         <div className="w-12">
//   <a href="/" className="flex items-center gap-2">
//   <img
//     src="./logo.png"
//     alt="Logo"
//     className="w-10 h-auto"
//   />
//   <span className="text-2xl font-bold text-blue-700">Vmidas</span>
// </a>
  
// </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-10 text-[17px] font-semibold text-blue-700">
//           <a className="hover:text-[#3a0fa0] transition-all duration-300" href="/">Home</a>
//           <a className="hover:text-[#3a0fa0] transition-all duration-300" href="/about">About Us</a>
//           <a className="hover:text-[#3a0fa0] transition-all duration-300" href="/services">Services</a>
//           <a className="hover:text-[#3a0fa0] transition-all duration-300" href="/contact-us">Contact</a>
//         </div>

    
//         {/* Mobile Button */}
//         <button
//           className="md:hidden flex flex-col gap-1"
//           onClick={() => setOpen(!open)}
//         >
//           <span className="w-7 h-[3px] bg-gray-800 rounded"></span>
//           <span className="w-7 h-[3px] bg-gray-800 rounded"></span>
//           <span className="w-7 h-[3px] bg-gray-800 rounded"></span>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-lg font-medium text-[#5317d4]">
//           <a className="hover:text-[#3a0fa0] transition-all" href="/">Home</a>
//           <a className="hover:text-[#3a0fa0] transition-all" href="/about">About Us</a>
//           <a className="hover:text-[#3a0fa0] transition-all" href="/services">Services</a>
//           <a className="hover:text-[#3a0fa0] transition-all" href="/contact-us">Contact</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo + Text */}
        <a href="/" className="flex items-center gap-2">
          <img src="./logo.png" alt="Logo" className="w-10" />
          <span className="text-2xl font-bold text-blue-700">Vmidas</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-[17px] font-semibold text-blue-700">
          <a href="/" className="hover:text-[#3a0fa0] transition">Home</a>
            <a href="/about-us" className="hover:text-[#3a0fa0] transition">AboutUs</a>
          
        <a href="/services" className="hover:text-[#3a0fa0] transition">Services</a>
         <a href="/locations" className="hover:text-[#3a0fa0] transition">Our Locations</a>
          <a href="/contact-us" className="hover:text-[#3a0fa0] transition">ContactUs</a>
        </div>

        {/* Contact Number + Quote Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+91 1294080230"
            className="px-4 py-2 border border-blue-600 text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            +91 1294080230
          </a>

          {/* <a
            href="/contact-us"
            className="px-5 py-2 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
          >
            Get a Quote
          </a> */}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-7 h-[3px] bg-gray-800 rounded"></span>
          <span className="w-7 h-[3px] bg-gray-800 rounded"></span>
          <span className="w-7 h-[3px] bg-gray-800 rounded"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-6 text-lg font-medium text-blue-700">

            <a href="/" className="hover:text-[#3a0fa0] transition">Home</a>
            <a href="/about-us" className="hover:text-[#3a0fa0] transition">AboutUs</a>
          <a href="/services" className="hover:text-[#3a0fa0] transition">Services</a>
          <a href="/contact-us" className="hover:text-[#3a0fa0] transition">ContactUs</a>
<a href="/locations" className="hover:text-[#3a0fa0] transition">Our Locations</a>
          {/* Mobile call + quote */}
          <a
            href="tel:+91-0120-427-4048"
            className="px-4 py-2 border border-blue-600 text-blue-700 rounded-lg font-semibold text-center"
          >
            +91-0120-427-4048
          </a>

          {/* <a
            href="/contact-us"
            className="px-5 py-2 bg-blue-700 text-white font-semibold text-center rounded-lg"
          >
            Get a Quote
          </a> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
