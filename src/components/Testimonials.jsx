import React from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const data = [
    { 
      name: "Amit Sharma", 
      company: "RetailCo", 
      quote: "Vmidas transformed our fulfillment — faster turnarounds and consistently fewer errors." 
    },
    { 
      name: "Rina Patel", 
      company: "FreshFoods", 
      quote: "Their cold-storage management is outstanding. Excellent product handling and real-time tracking." 
    },
    { 
      name: "Suresh Gupta", 
      company: "ElectroMart", 
      quote: "Highly reliable transportation service with a supportive and professional account team." 
    },
  ];

  return (
    <section id="testimonials" className="bg-blue-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-0">

        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
          Trusted by businesses across retail, FMCG, electronics and more.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((t, i) => (
            <div 
              key={i}
              className="relative bg-white p-8 rounded-2xl shadow-md border border-gray-200
                         hover:shadow-xl hover:border-blue-600 transition-all duration-300
                         hover:-translate-y-2 overflow-hidden group"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-blue-700 text-white p-3 rounded-full shadow-lg 
                              group-hover:scale-110 transition-all duration-300">
                <Quote size={20} />
              </div>

              {/* Glow Background Animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.15] bg-blue-300 blur-2xl rounded-2xl transition-all duration-500"></div>

              <p className="mt-6 text-gray-700 leading-relaxed relative z-10">
                "{t.quote}"
              </p>

              <div className="mt-6 relative z-10">
                <p className="font-semibold text-blue-800">{t.name}</p>
                <p className="text-sm text-gray-500">{t.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
