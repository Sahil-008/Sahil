import { motion } from "framer-motion"

function Patent() {
return (
<motion.section
initial={{ opacity: 0, y: 100 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
className="max-w-6xl mx-auto px-10 mt-28 text-center"
>


  <h2 className="text-3xl font-bold mb-10">
    Patent
  </h2>

  <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
    <h3 className="text-xl font-semibold text-blue-400 mb-3">
      Wireless Earbuds with Kinetic Energy Harvesting
    </h3>

    <p className="text-gray-400 mb-4">
      Earbuds that charge using motion-based energy.
    </p>

    <p className="text-gray-500 text-sm">
      Status: Patent Filed
    </p>
  </div>

</motion.section>


)
}

export default Patent
