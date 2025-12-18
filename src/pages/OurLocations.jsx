// // Plain JavaScript (JSX) Component
// import { motion } from "framer-motion";
// import { MapPin, Building2 } from "lucide-react";

// const locations = [
//   { zone: "East", state: "Assam", site: "SilcharHubTempBBD25_IXS", pincode: "788101", address: "Banskandi, Dist: Cachar Assam" },
//   { zone: "Central", state: "Maharashtra", site: "AmbadODH_NSK", pincode: "422009", address: "Ambad, Nashik" },
//   { zone: "West", state: "Maharashtra", site: "SantacruzHub_MUM", pincode: "400057", address: "Vile Parle, Mumbai" },
//   { zone: "East", state: "Bihar", site: "KankarbaghIPC_PAT", pincode: "800007", address: "Kankarbagh, Patna" },
//   { zone: "North", state: "Delhi", site: "MaidanGarhiIPC_DEL", pincode: "110074", address: "Chattarpur Road, New Delhi" },
// ];

// export default function OurLocations() {
//   return (
//     <section className="relative py-20 bg-linear-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
//       {/* decorative blur */}
//       <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
//       <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-14"
//         >
//           {/* <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700">
//             Nationwide Presence
//           </span> */}
//           <h2 className="text-xl md:text-5xl font-extrabold tracking-tight text-blue-600">
//             Our Presence
//           </h2>
//           <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
//             Trusted by clients across States — our strategically placed hubs ensure speed, reliability, and seamless operations.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {locations.map((loc, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.07 }}
//               className="group relative rounded-3xl bg-white p-6 shadow-md hover:shadow-2xl transition-all"
//             >
//               {/* gradient border effect */}
//               <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition" />

//               <div className="relative">
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="flex items-center gap-3">
//                     <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-white shadow">
//                       <MapPin size={22} />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900">{loc.state}</h3>
//                       <p className="text-sm text-gray-500">Zone: {loc.zone}</p>
//                     </div>
//                   </div>
//                   <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
//                     PIN {loc.pincode}
//                   </span>
//                 </div>

//                 <div className="space-y-2">
//                   <p className="text-sm text-gray-700">
//                     <span className="font-medium">Site Code:</span> {loc.site}
//                   </p>
//                   <p className="text-sm text-gray-600 leading-relaxed">
//                     {loc.address}
//                   </p>
//                 </div>

//                 <div className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-600">
//                   <Building2 size={16} />
//                   Operational Hub
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }














import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// 👉 Put ALL 42 locations here
const locations = [
  { zone: "East", state: "Assam", site: "SilcharHubTempBBD25_IXS", pincode: "788101", address: "Banskandi, Dist: Cachar, Assam" },
  { zone: "Central", state: "Maharashtra", site: "AmbadODH_NSK", pincode: "422009", address: "Ambad Police Station Road, Ambad, Nashik" },
  { zone: "East", state: "Assam", site: "ChangchariMDH_GAU", pincode: "781101", address: "Near Changsari Railway Station, Kamrup, Assam" },
  { zone: "West", state: "Maharashtra", site: "DhankawadiSplitHub_PUNE", pincode: "411019", address: "Shahu Nagar, Chinchwad, Pune" },
  { zone: "East", state: "Assam", site: "DikomMDH_DIB", pincode: "786010", address: "Lahowal, Near Block Tiniali, Dibrugarh" },
  { zone: "East", state: "Assam", site: "ETASHDoomDoomaODH_DMM", pincode: "786151", address: "Uchamati, Doomdooma, Assam" },
  { zone: "West", state: "Maharashtra", site: "HarsoolODH_IXU", pincode: "431008", address: "New Monda, Jadhavwadi, Harsool, Aurangabad" },
  { zone: "West", state: "Maharashtra", site: "KedgaonODH_KED", pincode: "412203", address: "Pune–Solapur Highway, Kedgaon, Daund" },
  { zone: "West", state: "Maharashtra", site: "NeralHub_MUM", pincode: "410101", address: "Laxmi Icon, Dhamote, Neral" },
  { zone: "West", state: "Maharashtra", site: "ThergaonHub_Pune", pincode: "411033", address: "Rajneegandha Society, Pimpri-Chinchwad, Pune" },

  { zone: "East", state: "Jharkhand", site: "CABTJamshedpurODHIXW", pincode: "831001", address: "Bhuiyadih, Nand Nagar, Jamshedpur" },
  { zone: "East", state: "Assam", site: "RanighatMDH_IXS", pincode: "788025", address: "Nizoynagar, Silchar, Cachar" },
  { zone: "East", state: "Mizoram", site: "RJSCLungleiODH_LGL", pincode: "796701", address: "Lunglawn, Lunglei, Mizoram" },
  { zone: "West", state: "Maharashtra", site: "Sewrihub_MUM", pincode: "400011", address: "SJ House, Sitaram Mills Compound, Lower Parel East, Mumbai" },
  { zone: "East", state: "Assam", site: "SipajharMDH_SPJ", pincode: "784145", address: "Near NH-15, Sipajhar, Assam" },
  { zone: "West", state: "Maharashtra", site: "TTSPLKhopolisplitODH_KPL", pincode: "402107", address: "Deccan Square, Pen, Raigad" },
  { zone: "East", state: "Assam", site: "LUMDINGHUB_LMG", pincode: "782447", address: "Uttar Lumding, Lumding" },

  { zone: "East", state: "Jharkhand", site: "ChitrapurHub_RMT", pincode: "825101", address: "Chitarpur–Rajrappa Road, Jharkhand" },
  { zone: "East", state: "Jharkhand", site: "RajdhanwarHub_RDW", pincode: "825412", address: "Rajdhanwar Road, Jharkhand" },
  { zone: "West", state: "Maharashtra", site: "SillodHub_IXU", pincode: "431112", address: "Sillod–Jalgaon Road, Aurangabad" },
  { zone: "West", state: "Maharashtra", site: "PirangutHub_PUNE", pincode: "412115", address: "Ghotewadi Phata, Pirangut" },
  { zone: "West", state: "Maharashtra", site: "SantacruzHub_MUM", pincode: "400057", address: "Vile Parle East, Mumbai" },
  { zone: "West", state: "Maharashtra", site: "SewriHub_MUM_PL_1", pincode: "400037", address: "Wadala Truck Terminal, Sion, Mumbai" },

  { zone: "East", state: "Assam", site: "RJSCDhekiajuliODH_TZR", pincode: "784110", address: "Teacher Colony, Dhekiajuli, Assam" },
  { zone: "East", state: "Mizoram", site: "CABTBanderdawaODH_NLP", pincode: "784160", address: "Gar-mur, Laluk, Lakhimpur, Assam" },
  { zone: "East", state: "Assam", site: "CHHAYGAONHUB_CGN", pincode: "781124", address: "Chhaygaon, Kamrup, Assam" },
  { zone: "East", state: "Assam", site: "LoadshareKabuganjODH_IXS", pincode: "788013", address: "Sonabarighat, Silchar" },
  { zone: "East", state: "Assam", site: "HOWRAGHATHUB_HGT", pincode: "782481", address: "Howraghat, Karbi Anglong" },
  { zone: "East", state: "Assam", site: "SilcharMedicalcollegeSpiltODH_IXS", pincode: "788006", address: "Nagatilla, Silchar" },
  { zone: "East", state: "Assam", site: "BokajanHub_SZR", pincode: "782480", address: "Bokajan, Karbi Anglong" },

  { zone: "West", state: "Maharashtra", site: "ElasticRunUranODH_MUM", pincode: "400702", address: "Dronagiri, Uran, Maharashtra" },
  { zone: "West", state: "Maharashtra", site: "IndiranagarHub_NSK", pincode: "422010", address: "Indira Nagar, Nashik" },
  { zone: "West", state: "Maharashtra", site: "SINNARHUB_NSK", pincode: "422103", address: "Dubere Naka, Sinnar" },

  { zone: "North", state: "Haryana", site: "GurgaonMilestoneHub_DEL", pincode: "122001", address: "Sector 17, Gurgaon" },
  { zone: "East", state: "Bihar", site: "KankarbaghIPC_PAT", pincode: "800007", address: "Kankarbagh, Patna" },
  { zone: "North", state: "Delhi", site: "MaidanGarhiIPC_DEL", pincode: "110074", address: "Chattarpur Road, New Delhi" },
   { zone: "North", state: "Delhi", site: "MotibaghHub_DEL_PL", pincode: "", address: "" },
  { zone: "East", state: "Bihar", site: "PhulwarisarifIPC_PAT", pincode: "801505", address: "Phulwarisharif, Patna" },
  { zone: "East", state: "Assam", site: "SixmileIPC_GAU", pincode: "781037", address: "Panjabari Road, Guwahati" },
  { zone: "North", state: "Haryana", site: "OldFaridabadHub_DEL", pincode: "121008", address: "Faridabad Bypass Road" },
  { zone: "North", state: "Uttar Pradesh", site: "MedicalRoadHubtemp_GOP", pincode: "273015", address: "Netaji Subhash Chandra Bose Chowk, Gorakhpur" }
];


const zones = ["All", "East", "West", "North", "Central"];

 function OurLocations() {
  const [activeZone, setActiveZone] = useState("All");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(9);

  const filteredLocations = locations.filter(loc => {
    const matchZone = activeZone === "All" || loc.zone === activeZone;
    const matchSearch = `${loc.state} ${loc.site} ${loc.pincode} ${loc.address}`
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchZone && matchSearch;
  });

  const visibleLocations = filteredLocations.slice(0, visible);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-700">Our Presence</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            42+ operational hubs across India ensuring fast and reliable service
          </p>
        </motion.div>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search by state, city, site code or PIN"
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setVisible(9);
            }}
            className="w-full md:w-96 rounded-xl border px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {zones.map(zone => (
            <button
              key={zone}
              onClick={() => {
                setActiveZone(zone);
                setVisible(9);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                activeZone === zone
                  ? "bg-blue-600 text-white shadow"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {zone}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleLocations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-6 shadow hover:shadow-xl transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{loc.state}</h3>
                  <p className="text-sm text-gray-500">Zone: {loc.zone}</p>
                </div>
              </div>

              <p className="text-sm text-gray-700"><b>Site:</b> {loc.site}</p>
              <p className="text-sm text-gray-600 mt-1"><b>Address:</b> {loc.address}</p>
              <p className="mt-3 text-sm font-semibold text-gray-800">PIN: {loc.pincode}</p>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {visible < filteredLocations.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisible(v => v + 6)}
              className="rounded-xl bg-blue-600 px-8 py-3 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              Load More Locations
            </button>
          </div>
        )}

        {/* Empty state */}
        {filteredLocations.length === 0 && (
          <p className="text-center text-gray-500 mt-12">No locations found</p>
        )}
      </div>
    </section>
  );
}
export default OurLocations