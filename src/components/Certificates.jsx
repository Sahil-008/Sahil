import { useState } from "react";
import { motion } from "framer-motion";
import geg from "../assets/geg.png";
import google from "../assets/google.png";
import nptel from "../assets/nptel.png";
import oracle from "../assets/oracle.png";

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  // 🔥 YOUR REAL DATA
  const certificates = [
    {
      title: "Google Networking Certificate",
      date: "Sep 2024",
      desc: "Completed 'The Bits and Bytes of Computer Networking' by Google (Coursera).",
      img: google,
    },
    {
      title: "GeeksforGeeks Python",
      date: "2024",
      desc: "Learned Python fundamentals and problem solving using GFG platform.",
      img: geg,
    },
    {
      title: "NPTEL Certification",
      date: "2024",
      desc: "Completed NPTEL course with hands-on learning and strong conceptual understanding.",
      img: nptel,
    },
    {
      title: "Oracle Certification",
      date: "2024",
      desc: "Gained knowledge in database systems and Oracle technologies.",
      img: oracle,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mt-28">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-14">
        Certificates
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">

        {certificates.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5 }}
            className="bg-[#111827] p-6 rounded-2xl border border-gray-800 
            hover:border-blue-500 hover:shadow-blue-500/20 
            hover:shadow-lg transition duration-300 text-center"
          >

           

            {/* Title */}
            <h3 className="text-lg font-semibold mb-1">
              {item.title}
            </h3>

            {/* Date */}
            <p className="text-sm text-gray-400 mb-3">
              {item.date}
            </p>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-5">
              {item.desc}
            </p>

            {/* Certificate Image */}
            <img
              src={item.img}
              alt={item.title}
              onClick={() => setSelected(item.img)}
              className="w-full h-32 object-cover rounded-md border border-gray-700 cursor-pointer hover:scale-105 transition"
            />

          </motion.div>
        ))}

      </div>

      {/* 🔥 POPUP MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="certificate preview"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}

    </section>
  );
};

export default Certificates;