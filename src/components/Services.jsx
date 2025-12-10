import React from "react";
import { Warehouse, Truck, PackageCheck, Boxes } from "lucide-react";

const Services = () => {
  const items = [
    { 
      title: "Storage & Warehousing", 
      text: "Temperature-controlled and dry storage, racked & bulk solutions.",
      icon: <Warehouse size={32} className="text-blue-700" />
    },
    { 
      title: "Order Fulfillment", 
      text: "Pick-pack-ship, kitting and returns management.",
      icon: <PackageCheck size={32} className="text-blue-700" />
    },
    { 
      title: "Transportation", 
      text: "FTL / LTL shipping with tracking and schedule management.",
      icon: <Truck size={32} className="text-blue-700" />
    },
    { 
      title: "Inventory Management", 
      text: "Real-time tracking, cycle counting & detailed reporting.",
      icon: <Boxes size={32} className="text-blue-700" />
    },
  ];

  return (
    <section id="services" className="bg-white py-18 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">

        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center">
          Our Services
        </h2>
        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
          End-to-end logistics and warehouse solutions designed for efficiency, accuracy, and seamless operations.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {items.map((s, i) => (
            <div 
              key={i}
              className="group p-7 border rounded-2xl bg-white shadow-sm hover:shadow-xl hover:border-blue-600 
                         transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >

              {/* Icon circle */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 
                              group-hover:bg-blue-100 transition-all duration-300 mb-4">
                <div className="group-hover:scale-110 group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
              </div>

              <h3 className="font-semibold text-lg text-blue-800 group-hover:text-blue-700 transition">
                {s.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {s.text}
              </p>

              {/* Blue glow effect */}
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

export default Services;
