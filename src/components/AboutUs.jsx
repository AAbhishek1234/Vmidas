import React from "react";
import { Truck, Boxes, ShieldCheck, Building2, Target, Eye, Quote } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-white pt-15">

      {/* ---------- WHO WE ARE ---------- */}
      <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold text-blue-800">Who We Are</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Vmidas is a modern warehousing, logistics, and fulfillment solutions provider
              serving brands across retail, FMCG, electronics, manufacturing, and e-commerce.
              With advanced infrastructure, real-time tracking systems, and skilled teams,
              we ensure your supply chain moves with precision, speed, and reliability.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Our goal is simple — reduce your operational costs, increase efficiency, and give
              your business a scalable storage & logistics backbone that supports long-term growth.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop"
              className="rounded-xl shadow-lg"
              alt="warehouse"
            />
          </div>
        </div>
      </section>

      {/* ---------- MISSION & VISION ---------- */}
      <section className="bg-blue-50 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          
          {/* Mission */}
          <div className="p-8 bg-white rounded-2xl shadow-md hover:-translate-y-2 transition-all">
            <div className="text-blue-700"><Target size={40} /></div>
            <h3 className="text-2xl font-bold text-blue-800 mt-4">Our Mission</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              To deliver fast, flexible, and reliable warehousing & logistics services that help
              businesses streamline supply chain operations with minimal cost and maximum efficiency.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 bg-white rounded-2xl shadow-md hover:-translate-y-2 transition-all">
            <div className="text-blue-700"><Eye size={40} /></div>
            <h3 className="text-2xl font-bold text-blue-800 mt-4">Our Vision</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              To become India’s most trusted warehousing partner, recognized for transparency,
              innovation, and a customer-centric approach.
            </p>
          </div>

        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 text-center">Why Choose Us</h2>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          A perfect blend of technology, security, and operational excellence.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
            <Truck size={40} className="text-blue-700" />
            <h4 className="mt-4 text-xl font-semibold text-blue-800">Reliable Logistics</h4>
            <p className="text-gray-600 mt-2">
              On-time, safe, and trackable transportation for all shipment sizes.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
            <Boxes size={40} className="text-blue-700" />
            <h4 className="mt-4 text-xl font-semibold text-blue-800">Scalable Storage</h4>
            <p className="text-gray-600 mt-2">
              Flexible storage options from small consignments to bulk loads.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
            <ShieldCheck size={40} className="text-blue-700" />
            <h4 className="mt-4 text-xl font-semibold text-blue-800">Advanced Security</h4>
            <p className="text-gray-600 mt-2">
              24/7 CCTV, access control, fire systems, and insured facilities.
            </p>
          </div>

        </div>
      </section>

      {/* ---------- OWNER MESSAGE ---------- */}
      <section className="bg-blue-50 py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <img
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1200&auto=format&fit=crop"
            alt="owner"
            className="rounded-xl shadow-lg"
          />

          <div>
            <div className="text-blue-700"><Quote size={40} /></div>

            <h3 className="text-3xl font-bold text-blue-800 mt-4">Message from Our Founder</h3>

            <p className="text-gray-700 mt-4 leading-relaxed">
              "At Vmidas, we believe every business—small or large—deserves a supply chain
              that is efficient, transparent, and dependable. Our team works with passion
              and precision to provide storage and logistics solutions that empower
              businesses to grow without limitations.”
            </p>

            <p className="text-blue-800 font-semibold text-lg mt-6">
              — Rajesh Kumar  
            </p>
            <p className="text-gray-500 text-sm">Founder & Managing Director, Vmidas</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUs;
