import { Users, Clock, ShieldCheck } from "lucide-react"; // icons

const Abt = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-white-50">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-12">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-blue-800">Who We Are</h2>
          <p className="text-gray-700 mb-4 text-lg">
            We are a tech-driven logistics company committed to providing fast, reliable, and secure delivery solutions.
          </p>
          <p className="text-gray-600 mb-8 text-lg">
            Our mission is to make logistics seamless for businesses of all sizes.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <div className="flex flex-col items-center gap-2 bg-white p-6 rounded-lg shadow hover:shadow-lg transition w-40">
            <Users className="w-10 h-10 text-purple-600" />
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="text-gray-600 text-center">Clients Served</p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-white p-6 rounded-lg shadow hover:shadow-lg transition w-40">
            <Clock className="w-10 h-10 text-purple-600" />
            <h3 className="text-2xl font-bold">99%</h3>
            <p className="text-gray-600 text-center">On-Time Delivery</p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-white p-6 rounded-lg shadow hover:shadow-lg transition w-40">
            <ShieldCheck className="w-10 h-10 text-purple-600" />
            <h3 className="text-2xl font-bold">24/7</h3>
            <p className="text-gray-600 text-center">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abt;
