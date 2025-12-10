import React from "react";
import { CheckCircle2, Shield, Expand, PlugZap } from "lucide-react";

const Features = () => {
  const feats = [
    { 
      title: "Real-time Tracking", 
      desc: "Track SKUs and shipments with live status and alerts.",
      icon: <CheckCircle2 size={30} />
    },
    { 
      title: "Secure Facilities", 
      desc: "24/7 CCTV, controlled access and insurance options.",
      icon: <Shield size={30} />
    },
    { 
      title: "Scalable Space", 
      desc: "Flexible storage plans that grow with your business needs.",
      icon: <Expand size={30} />
    },
    { 
      title: "Custom Integrations", 
      desc: "ERP & e-commerce integration for seamless workflows.",
      icon: <PlugZap size={30} />
    },
  ];

  return (
    <section id="features" className="bg-blue-50 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">

        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center">
          Why Choose Vmidas
        </h2>
        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
          Modern systems, expert team, and scalable solutions built to reduce your logistics cost.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-7">
          {feats.map((f, idx) => (
            <div 
              key={idx}
              className="group bg-white p-7 rounded-2xl shadow-sm border 
                         hover:shadow-xl hover:border-blue-600 transition-all duration-300 
                         hover:-translate-y-2 relative overflow-hidden flex gap-5 items-start"
            >
              
              {/* Icon Circle */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full 
                              bg-blue-100 text-blue-700 group-hover:bg-blue-700 
                              group-hover:text-white transition-all duration-300">
                <div className="group-hover:scale-110 transition-all duration-300">
                  {f.icon}
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h4 className="font-semibold text-lg text-blue-800 group-hover:text-blue-700 transition">
                  {f.title}
                </h4>
                <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 
                              bg-blue-300 blur-2xl rounded-3xl transition-all duration-500">
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
