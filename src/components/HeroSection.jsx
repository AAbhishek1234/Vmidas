import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
 import { faEnvelope, faPhone, faMapMarkerAlt, faWarehouse, faTruck, faCheckCircle, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <>
  
       <section id="home" className="bg-white">
     <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-19 md:py-20 flex flex-col-reverse md:flex-row items-center gap-10">
       <div className="flex-1">
         <h1 className="text-3xl md:text-4xl font-bold text-blue-800 leading-tight">Warehouse & Logistics Solutions that move your business forward</h1>
         <p className="mt-4 text-gray-600 max-w-xl">Full-service warehousing, inventory management, order fulfilment and transportation services trusted by businesses across India. Scalable space, real-time tracking, and expert support.</p>

         <div className="mt-6 flex flex-col sm:flex-row gap-4">
           <a href="/contact-us" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-800">Request a Call Back</a>
           {/* <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-blue-100 text-blue-700 hover:bg-blue-50">Our Services</a> */}
         </div>

         <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md">
           <div className="flex items-center gap-3">
             <div className="p-2 rounded bg-blue-50 text-blue-700"><FontAwesomeIcon icon={faWarehouse} /></div>
             <div>
               <p className="text-sm text-gray-600">Secure Storage</p>
             </div>
           </div>
           <div className="flex items-center gap-3">
             <div className="p-2 rounded bg-blue-50 text-blue-700"><FontAwesomeIcon icon={faTruck} /></div>
             <div>
               <p className="text-sm text-gray-600">Last-mile Delivery</p>
             </div>
           </div>
           <div className="flex items-center gap-3">
             <div className="p-2 rounded bg-blue-50 text-blue-700"><FontAwesomeIcon icon={faCheckCircle} /></div>
             <div>
               <p className="text-sm text-gray-600">Inventory Accuracy</p>
             </div>
           </div>
           <div className="flex items-center gap-3">
             <div className="p-2 rounded bg-blue-50 text-blue-700"><FontAwesomeIcon icon={faEnvelope} /></div>
             <div>
               <p className="text-sm text-gray-600">24/7 Support</p>
             </div>
           </div>
         </div>
       </div>

       {/* <div className="flex-1">
         <div className="rounded-xl shadow-xl overflow-hidden">
           <img
  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop" alt="warehouse" className="w-full h-64 object-cover md:h-80" />
         </div>
       </div> */}


       <div className="flex-1">
  <div className="rounded-xl shadow-xl overflow-hidden">
    <img
      src="/herosection1.avif"  
      alt="warehouse"
      className="w-full h-64 object-cover md:h-80"
    />
  </div>
</div>

     </div>
   </section>
    </>
  )
}

export default HeroSection



