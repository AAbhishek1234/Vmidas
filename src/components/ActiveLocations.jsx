
// import React, { useRef, useEffect, useState } from "react";

// const locations = [
//   { state: "New Delhi", count: 3, top: 10.5, left: 29.3 },
//   { state: "Uttar Pradesh", count: 7, top: 26, left: 44 },
//   { state: "Haryana", count: 1, top: 20.8, left: 20 },
//   { state: "Bihar", count: 3, top: 32.1, left: 60 },
//   { state: "Assam", count: 10, top: 27, left: 83 },
//   { state: "Mizoram", count: 2, top: 39.5, left: 89.5 },
//   { state: "Maharashtra", count: 15, top: 64.2, left: 22 },
//   { state: "Goa", count: 1, top: 72, left: 18 },
// ];

// export default function MapLocations() {
//   const mapRef = useRef(null);
//   const [mapSize, setMapSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     const updateSize = () => {
//       if (mapRef.current) {
//         setMapSize({
//           width: mapRef.current.offsetWidth,
//           height: mapRef.current.offsetHeight,
//         });
//       }
//     };
//     updateSize();
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   return (
//     <section className="w-full mt-20 mb-32 overflow-x-hidden">
//       <div className="w-full flex flex-col lg:flex-row items-center justify-around bg-gradient-to-br from-blue-600 to-blue-900 py-16 px-4">
        
//         {/* MAP */}
//         <div
//           ref={mapRef}
//           className="relative w-[330px] sm:w-[380px] md:w-[430px] lg:w-[470px] overflow-visible"
//         >
//           <img
//             src="https://www.gstatic.com/growthlab/api/EIaBvOox7enkYv4L7hstZG7uK4S85s9yLfJKagVS.png"
//             className="w-full h-auto"
//             alt="India Map"
//           />

//           {/* ONE LABEL PER STATE */}
//           {locations.map((loc, index) => {
//             // Calculate position based on current map size
//             const top = (loc.top / 100) * mapSize.height;
//             const left = (loc.left / 100) * mapSize.width;
//             return (
//               <div
//                 key={index}
//                 className="absolute flex items-center gap-2"
//                 style={{
//                   top: top,
//                   left: left,
//                   transform: "translate(-50%, -50%)",
//                 }}
//               >
//                 {/* Dot */}
//                 <div className="w-3 h-3 bg-white rounded-full border-2 border-blue-300 shadow"></div>

//                 {/* Label */}
//                 <span className="text-white text-xs sm:text-sm font-semibold bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm whitespace-nowrap shadow">
//                   {loc.count} in {loc.state}
//                 </span>
//               </div>
//             );
//           })}
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="text-center text-white mt-10 lg:mt-0">
//           <p className="uppercase tracking-[3px] text-sm font-medium">Running At</p>
//           <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mt-2">42</h1>
//           <h2 className="text-3xl sm:text-4xl font-medium mt-2">Active Locations</h2>
//           <h2 className="text-3xl sm:text-4xl font-medium">Across India</h2>
//         </div>
//       </div>
//     </section>
//   );
// }




// import React, { useRef, useEffect, useState } from "react";

// const locations = [
//   { state: "New Delhi", count: 3, top: 10.5, left: 29.3 },
//   { state: "Uttar Pradesh", count: 7, top: 26, left: 44 },
//   { state: "Haryana", count: 1, top: 20.8, left: 20 },
//   { state: "Bihar", count: 3, top: 32.1, left: 60 },
//   { state: "Assam", count: 10, top: 27, left: 83 },
//   { state: "Mizoram", count: 2, top: 39.5, left: 89.5 },
//   { state: "Maharashtra", count: 15, top: 64.2, left: 22 },
//   { state: "Goa", count: 1, top: 72, left: 18 },
// ];

// export default function MapLocations() {
//   const mapRef = useRef(null);
//   const [mapSize, setMapSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     const updateSize = () => {
//       if (mapRef.current) {
//         setMapSize({
//           width: mapRef.current.offsetWidth,
//           height: mapRef.current.offsetHeight,
//         });
//       }
//     };
//     updateSize();
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   return (
//     <section className="w-full mt-20 mb-32 overflow-x-hidden">
//       <div className="w-full flex flex-col lg:flex-row items-center justify-around bg-gradient-to-br from-blue-600 to-blue-900 py-16 px-4">
//         {/* MAP */}
//         <div
//           ref={mapRef}
//           className="relative w-[330px] sm:w-[380px] md:w-[430px] lg:w-[470px] overflow-visible"
//         >
//           <img
//             src="https://www.gstatic.com/growthlab/api/EIaBvOox7enkYv4L7hstZG7uK4S85s9yLfJKagVS.png"
//             className="w-full h-auto"
//             alt="India Map"
//           />

//           {/* ONE LABEL PER STATE */}
//           {locations.map((loc, index) => {
//             const top = (loc.top / 100) * mapSize.height;
//             const left = (loc.left / 100) * mapSize.width;
//             return (
//               <div
//                 key={index}
//                 className="absolute flex items-center gap-2 animate-blink"
//                 style={{
//                   top: top,
//                   left: left,
//                   transform: "translate(-50%, -50%)",
//                 }}
//               >
//                 {/* PULSE EFFECT */}
//                 <span className="absolute w-6 h-6 rounded-full bg-blue-400 opacity-50 animate-pulseEffect"></span>

//                 {/* Dot */}
//                 <div className="relative w-3 h-3 bg-white rounded-full border-2 border-blue-300 shadow"></div>

//                 {/* Label */}
//                 <span className="text-white text-xs sm:text-sm font-semibold bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm whitespace-nowrap shadow">
//                   {loc.count} in {loc.state}
//                 </span>
//               </div>
//             );
//           })}
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="text-center text-white mt-10 lg:mt-0">
//           <p className="uppercase tracking-[3px] text-sm font-medium">Running At</p>
//           <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mt-2">42</h1>
//           <h2 className="text-3xl sm:text-4xl font-medium mt-2">Active Locations</h2>
//           <h2 className="text-3xl sm:text-4xl font-medium">Across India</h2>
//         </div>
//       </div>

//       {/* BLINK + PULSE ANIMATION */}
//       <style jsx>{`
//         @keyframes blink {
//           0%, 50%, 100% { opacity: 1; }
//           25%, 75% { opacity: 0; }
//         }
//         .animate-blink {
//           animation: blink 1s infinite;
//         }

//         @keyframes pulseEffect {
//           0% {
//             transform: scale(0.5);
//             opacity: 0.6;
//           }
//           50% {
//             transform: scale(1.5);
//             opacity: 0.3;
//           }
//           100% {
//             transform: scale(2);
//             opacity: 0;
//           }
//         }
//         .animate-pulseEffect {
//           animation: pulseEffect 1.5s infinite;
//         }
//       `}</style>
//     </section>
//   );
// }





import React, { useRef, useEffect, useState } from "react";

const locations = [
  { state: "New Delhi", count: 3, top: 10.5, left: 29.3 },
  { state: "Uttar Pradesh", count: 7, top: 26, left: 44 },
  { state: "Haryana", count: 1, top: 20.8, left: 20 },
  { state: "Bihar", count: 3, top: 32.1, left: 60 },
  { state: "Assam", count: 10, top: 27, left: 83 },
  { state: "Mizoram", count: 2, top: 39.5, left: 89.5 },
  { state: "Maharashtra", count: 15, top: 64.2, left: 22 },
  { state: "Goa", count: 1, top: 72, left: 18 },
];

export default function MapLocations() {
  const mapRef = useRef(null);
  const [mapSize, setMapSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (mapRef.current) {
        setMapSize({
          width: mapRef.current.offsetWidth,
          height: mapRef.current.offsetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="w-full mt-20 mb-32 overflow-x-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center justify-around bg-gradient-to-br from-blue-600 to-blue-900 py-16 px-4">
        {/* MAP */}
        <div
          ref={mapRef}
          className="relative w-[330px] sm:w-[380px] md:w-[430px] lg:w-[470px] overflow-visible"
        >
          <img
            src="https://www.gstatic.com/growthlab/api/EIaBvOox7enkYv4L7hstZG7uK4S85s9yLfJKagVS.png"
            className="w-full h-auto"
            alt="India Map"
          />

          {/* ONE LABEL PER STATE */}
          {locations.map((loc, index) => {
            const top = (loc.top / 100) * mapSize.height;
            const left = (loc.left / 100) * mapSize.width;
            return (
              <div
                key={index}
                className="absolute flex items-center gap-2"
                style={{
                  top: top,
                  left: left,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className="absolute w-6 h-6 rounded-full bg-blue-400 opacity-50 animate-pulseEffect"></span>

                <div className="relative w-3 h-3 bg-white rounded-full border-2 border-blue-300 shadow animate-glowPulse"></div>

                <span className="text-white text-xs sm:text-sm font-semibold bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm whitespace-nowrap shadow animate-labelGlow">
                  {loc.count} in {loc.state}
                </span>
              </div>
            );
          })}
        </div>

        <div className="text-center text-white mt-10 lg:mt-0">
          <p className="uppercase tracking-[3px] text-sm font-medium">Running At</p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mt-2">42</h1>
          <h2 className="text-3xl sm:text-4xl font-medium mt-2">Active Locations</h2>
          <h2 className="text-3xl sm:text-4xl font-medium">Across India</h2>
        </div>
      </div>

      <style jsx>{`
        /* Glow Pulse for dot */
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0px rgba(255,255,255,0.7); }
          50% { box-shadow: 0 0 12px rgba(255,255,255,0.9); }
        }
        .animate-glowPulse {
          animation: glowPulse 1.5s infinite;
        }

        /* Pulse Halo */
        @keyframes pulseEffect {
          0% { transform: scale(0.5); opacity: 0.6; }
          50% { transform: scale(1.5); opacity: 0.3; }
          100% { transform: scale(2); opacity: 0; }
        }
        .animate-pulseEffect {
          animation: pulseEffect 1.5s infinite;
        }

        /* Label glow effect */
        @keyframes labelGlow {
          0%, 100% { text-shadow: 0 0 2px rgba(255,255,255,0.5); }
          50% { text-shadow: 0 0 6px rgba(255,255,255,0.9); }
        }
        .animate-labelGlow {
          animation: labelGlow 1.5s infinite;
        }
      `}</style>
    </section>
  );
}
