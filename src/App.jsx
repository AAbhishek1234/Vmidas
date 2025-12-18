import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import OurLocations from "./pages/OurLocations";
import WhatsAppButton from './components/WhatsAppButton'
const App = () => (
  <BrowserRouter>
  <ScrollToTop/>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/contact-us" element={<ContactUs/>}/>
<Route path="/services" element={<Services/>}/>
    <Route path="/footer" element={<Footer/>}/>
    <Route path="/about-us" element={<AboutUs/>}/>
    <Route path ="/locations" element ={<OurLocations/>}/>
    </Routes>
        <WhatsAppButton/>
    <Footer/>
  </BrowserRouter>
);

export default App;







// src/components/WarehouseWebsite.jsx
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope, faPhone, faMapMarkerAlt, faWarehouse, faTruck, faCheckCircle, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

// /* =========================
//    Single-file Warehouse Website (React + Tailwind)
//    - Plain JS (no TypeScript)
//    - Components: Navbar, Hero, Services, Features, Testimonials, Contact, Footer
//    Usage: import WarehouseWebsite and render in your app.
//    ========================= */

// const Logo = () => (
//   <div className="flex items-center gap-3">
//     <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M3 11L12 6l9 5v7a1 1 0 0 1-1 1h-4v-6H8v6H4a1 1 0 0 1-1-1v-7z" stroke="#1e40af" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
//       <path d="M8 21V13h8v8" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//     <span className="text-xl font-bold text-blue-800">Vmidas</span>
//   </div>
// );

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <header className="w-full bg-white shadow-sm sticky top-0 z-40">
//       <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
//         <div className="flex items-center justify-between h-16">
//           <Logo />

//           <nav className="hidden md:flex items-center gap-8 text-blue-800 font-medium">
//             <a href="#home" className="hover:text-blue-600">Home</a>
//             <a href="#services" className="hover:text-blue-600">Services</a>
//             <a href="#features" className="hover:text-blue-600">Features</a>
//             <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
//             <a href="#contact" className="hover:text-blue-600">Contact</a>
//           </nav>

//           <div className="hidden md:flex items-center gap-4">
//             <a href="tel:+9110204274048" className="text-sm px-4 py-2 border border-blue-100 rounded-md text-blue-700 hover:bg-blue-50">+91-0120-427-4048</a>
//             <a href="#contact" className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-800">Get a Quote</a>
//           </div>

//           <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M4 6h16M4 12h16M4 18h16" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {open && (
//           <div className="md:hidden py-4 pb-8">
//             <nav className="flex flex-col gap-3 text-blue-800 font-medium">
//               <a href="#home" className="py-2 border-b">Home</a>
//               <a href="#services" className="py-2 border-b">Services</a>
//               <a href="#features" className="py-2 border-b">Features</a>
//               <a href="#testimonials" className="py-2 border-b">Testimonials</a>
//               <a href="#contact" className="py-2">Contact</a>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// const Hero = () => (
//   <section id="home" className="bg-white">
//     <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-10">
//       <div className="flex-1">
//         <h1 className="text-3xl md:text-4xl font-bold text-blue-800 leading-tight">Warehouse & Logistics Solutions that move your business forward</h1>
//         <p className="mt-4 text-gray-600 max-w-xl">Full-service warehousing, inventory management, order fulfilment and transportation services trusted by businesses across India. Scalable space, real-time tracking, and expert support.</p>

//         <div className="mt-6 flex flex-col sm:flex-row gap-4">
//           <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-800">Request a Quote</a>
//           <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-blue-100 text-blue-700 hover:bg-blue-50">Our Services</a>
//         </div>

//         <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md">
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded bg-blue-50 text-blue-700"><FontAwesomeIcon icon={faWarehouse} /></div>
//             <div>
//               <p className="text-sm text-gray-600">Secure Storage</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded bg-blue-50 text-blue-700"><FontAwesomeIcon icon={faTruck} /></div>
//             <div>
//               <p className="text-sm text-gray-600">Last-mile Delivery</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded bg-blue-50 text-blue-700"><FontAwesomeIcon icon={faCheckCircle} /></div>
//             <div>
//               <p className="text-sm text-gray-600">Inventory Accuracy</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded bg-blue-50 text-blue-700"><FontAwesomeIcon icon={faEnvelope} /></div>
//             <div>
//               <p className="text-sm text-gray-600">24/7 Support</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex-1">
//         <div className="rounded-xl shadow-xl overflow-hidden">
//           <img src="https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0f3c3b2f2a3a5b8b3f1f84a1aefb8f4e" alt="warehouse" className="w-full h-64 object-cover md:h-80" />
//         </div>
//       </div>
//     </div>
//   </section>
// );

// const Services = () => {
//   const items = [
//     { title: "Storage & Warehousing", text: "Temperature-controlled and dry storage, racked & bulk solutions." },
//     { title: "Order Fulfillment", text: "Pick-pack-ship, kitting and returns management." },
//     { title: "Transportation", text: "FTL / LTL solutions with tracking and schedule management." },
//     { title: "Inventory Management", text: "Real-time inventory, cycle counting & reporting." },
//   ];

//   return (
//     <section id="services" className="bg-white py-12 md:py-16">
//       <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
//         <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center">Our Services</h2>
//         <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">Comprehensive logistics & warehouse services designed for scalability, visibility and efficiency.</p>

//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {items.map((s, i) => (
//             <div key={i} className="p-6 border rounded-lg hover:shadow-lg transition bg-white">
//               <h3 className="font-semibold text-blue-800">{s.title}</h3>
//               <p className="text-gray-600 mt-2 text-sm">{s.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const Features = () => {
//   const feats = [
//     { title: "Real-time Tracking", desc: "Track SKUs and shipments with live status and alerts." },
//     { title: "Secure Facilities", desc: "24/7 CCTV, controlled access and insurance options." },
//     { title: "Scalable Space", desc: "Short-term and long-term storage plans to scale with you." },
//     { title: "Custom Integrations", desc: "ERP & e-commerce integrations for seamless operations." },
//   ];

//   return (
//     <section id="features" className="bg-blue-50 py-10 md:py-14">
//       <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
//         <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center">Why Choose Vmidas</h2>
//         <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">Modern systems, experienced team and flexible solutions to lower your logistics cost.</p>

//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//           {feats.map((f, idx) => (
//             <div key={idx} className="bg-white p-6 rounded-lg shadow-sm flex gap-4 items-start">
//               <div className="text-blue-700 text-2xl mt-1"><FontAwesomeIcon icon={faCheckCircle} /></div>
//               <div>
//                 <h4 className="font-semibold text-blue-800">{f.title}</h4>
//                 <p className="text-gray-600 mt-1 text-sm">{f.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const Testimonials = () => {
//   const data = [
//     { name: "Amit Sharma", company: "RetailCo", quote: "Vmidas transformed our fulfillment — faster turnarounds and fewer errors." },
//     { name: "Rina Patel", company: "FreshFoods", quote: "Their cold-storage service is exceptional. Great handling and tracking." },
//     { name: "Suresh Gupta", company: "ElectroMart", quote: "Reliable transport + knowledgeable account team. Highly recommend." },
//   ];

//   return (
//     <section id="testimonials" className="bg-white py-12 md:py-16">
//       <div className="max-w-5xl mx-auto px-6 md:px-0">
//         <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center">What clients say</h2>

//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {data.map((t, i) => (
//             <div key={i} className="p-6 border rounded-lg">
//               <div className="text-blue-700 text-2xl"><FontAwesomeIcon icon={faQuoteLeft} /></div>
//               <p className="mt-4 text-gray-700">"{t.quote}"</p>
//               <p className="mt-4 font-semibold text-blue-800">{t.name}</p>
//               <p className="text-sm text-gray-500">{t.company}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const Contact = () => {
//   return (
//     <section id="contact" className="bg-white py-12 md:py-16">
//       <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="md:col-span-1 space-y-4">
//             <h3 className="text-2xl font-bold text-blue-800">Get in touch</h3>
//             <p className="text-gray-600">Contact our sales team for a custom quote or arrange a site visit.</p>

//             <div className="space-y-3 mt-4">
//               <div className="flex items-start gap-3">
//                 <div className="text-blue-700 mt-1"><FontAwesomeIcon icon={faEnvelope} /></div>
//                 <div>
//                   <p className="text-sm text-gray-600">Email</p>
//                   <a href="mailto:info@vmidas.in" className="text-blue-700 font-medium">info@vmidas.in</a>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <div className="text-blue-700 mt-1"><FontAwesomeIcon icon={faPhone} /></div>
//                 <div>
//                   <p className="text-sm text-gray-600">Phone</p>
//                   <a href="tel:+9110204274048" className="text-blue-700 font-medium">+91-0120-427-4048</a>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <div className="text-blue-700 mt-1"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
//                 <div>
//                   <p className="text-sm text-gray-600">Address</p>
//                   <p className="text-gray-700 text-sm">Head Office — 130-131, H-Block Part-1, Lajpat Nagar, New Delhi-110024</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="md:col-span-2">
//             <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg">
//               <form className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   <input type="text" placeholder="Name" required className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full" />
//                   <input type="text" placeholder="Company" className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full" />
//                   <input type="email" placeholder="Email" required className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full" />
//                   <input type="tel" placeholder="Phone" className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full" />
//                 </div>
//                 <input type="text" placeholder="Services of Interest" className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full" />
//                 <textarea placeholder="Message" className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full h-28 resize-none"></textarea>
//                 <div className="flex items-center gap-4">
//                   <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800">Submit</button>
//                   <p className="text-sm text-gray-600">We will get back in 24 hours</p>
//                 </div>
//               </form>
//             </div>

//             <div className="mt-6 relative h-64 md:h-72 rounded-xl overflow-hidden shadow-xl">
//               <iframe
//                 title="Vmidas Map"
//                 src="https://maps.google.com/maps?q=Lajpat%20Nagar,%20New%20Delhi&t=k&z=15&ie=UTF8&iwloc=&output=embed"
//                 className="w-full h-full border-0"
//                 loading="lazy"
//                 allowFullScreen
//               ></iframe>
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-xl shadow border w-72 text-center">
//                 <h4 className="font-bold text-blue-700">Our Head Office</h4>
//                 <p className="text-sm text-gray-600 mt-1">130-131, H-Block Part-1, Lajpat Nagar, New Delhi-110024</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-200 py-8 px-6 md:px-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         <div className="space-y-4">
//           <h3 className="text-2xl font-bold text-indigo-500">Vmidas</h3>
//           <p className="text-gray-400 text-sm">Trusted warehouse & logistics partner across India.</p>
//         </div>

//         <div>
//           <h4 className="font-semibold text-white">Quick Links</h4>
//           <ul className="mt-3 space-y-2 text-gray-400 text-sm">
//             <li><a href="#home" className="hover:text-indigo-400">Home</a></li>
//             <li><a href="#services" className="hover:text-indigo-400">Services</a></li>
//             <li><a href="#features" className="hover:text-indigo-400">Features</a></li>
//             <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-semibold text-white">Contact</h4>
//           <p className="text-gray-400 text-sm mt-2"><span className="font-semibold">Email:</span> <a href="mailto:info@vmidas.in" className="hover:text-indigo-400">info@vmidas.in</a></p>
//           <p className="text-gray-400 text-sm mt-1"><span className="font-semibold">Phone:</span> <a href="tel:+9110204274048" className="hover:text-indigo-400">+91-0120-427-4048</a></p>
//           <p className="text-gray-400 text-sm mt-1">130-131, H-Block Part-1, Lajpat Nagar, New Delhi-110024</p>
//         </div>

//         <div>
//           <h4 className="font-semibold text-white">Follow Us</h4>
//           <div className="flex gap-4 text-lg mt-3">
//             <a href="#" className="hover:text-indigo-400"><FontAwesomeIcon icon={faFacebookF} /></a>
//             <a href="#" className="hover:text-indigo-400"><FontAwesomeIcon icon={faTwitter} /></a>
//             <a href="#" className="hover:text-indigo-400"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//             <a href="#" className="hover:text-indigo-400"><FontAwesomeIcon icon={faInstagram} /></a>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-gray-700 pt-4 mt-8 text-center">
//         <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Vmidas. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// const WarehouseWebsite = () => {
//   return (
//     <div className="min-h-screen bg-white text-gray-800">
//       <Navbar />
//       <Hero />
//       <Services />
//       <Features />
//       <Testimonials />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default WarehouseWebsite;
