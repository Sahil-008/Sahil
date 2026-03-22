import { motion } from "framer-motion"
import CountUp from "react-countup";

function Stats() {
return (
<motion.section
initial={{ opacity: 0, y: 80 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
className="max-w-6xl mx-auto px-10 mt-28 text-center"
>
  <h2 className="text-3xl font-bold text-center mb-10">
        Achievements
      </h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <h3 className="text-4xl font-bold text-blue-400">1</h3>
      <p className="text-gray-400 mt-2">Patent</p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <h3 className="text-4xl font-bold text-blue-400">2</h3>
      <p className="text-gray-400 mt-2">Hackathons</p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <h3 className="text-4xl font-bold text-blue-400">10+</h3>
      <p className="text-gray-400 mt-2">Certificates</p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <h3 className="text-4xl font-bold text-blue-400">6</h3>
      <p className="text-gray-400 mt-2">Projects</p>
    </div>

  </div>
</motion.section>


)
}

export default Stats
