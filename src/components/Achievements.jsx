import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <section className="max-w-6xl mx-auto px-10 mt-20 text-center">

    

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* LeetCode */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-2xl border border-gray-800 
          hover:border-yellow-400 hover:shadow-yellow-400/20 transition duration-300 text-left"
        >
          <div className="flex items-center gap-4 mb-3">
            <SiLeetcode className="text-yellow-400 text-3xl" />
            <h3 className="text-xl font-semibold">LeetCode</h3>
          </div>

          <p className="text-gray-400 text-sm">
            Solved 300+ problems covering DSA, algorithms, and system design concepts.
          </p>

          <a
            href="https://leetcode.com/u/user3872XW/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 px-5 py-2 bg-yellow-500 text-black rounded-lg text-sm font-medium 
            hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-400/40 transition"
          >
            View Profile
          </a>
        </motion.div>

        {/* GeeksforGeeks */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-2xl border border-gray-800 
          hover:border-green-400 hover:shadow-green-400/20 transition duration-300 text-left"
        >
          <div className="flex items-center gap-4 mb-3">
            <SiGeeksforgeeks className="text-green-400 text-3xl" />
            <h3 className="text-xl font-semibold">GeeksforGeeks</h3>
          </div>

          <p className="text-gray-400 text-sm">
            Strong problem-solving skills with consistent practice in data structures and algorithms.
          </p>

          <a
            href="https://www.geeksforgeeks.org/profile/sahilsrqec"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 px-5 py-2 bg-green-500 text-black rounded-lg text-sm font-medium 
            hover:bg-green-400 hover:shadow-lg hover:shadow-green-400/40 transition"
          >
            View Profile
          </a>
        </motion.div>

        {/* HackerRank 🔥 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-2xl border border-gray-800 
          hover:border-emerald-400 hover:shadow-emerald-400/20 transition duration-300 text-left"
        >
          <div className="flex items-center gap-4 mb-3">
            <SiHackerrank className="text-emerald-400 text-3xl" />
            <h3 className="text-xl font-semibold">HackerRank</h3>
          </div>

          <p className="text-gray-400 text-sm">
            ⭐ 5★ in C++ |⭐ 4★ in Python  | Active competitive programmer with strong coding skills.
          </p>

          <a
            href="https://www.hackerrank.com/profile/sahil_sk0818"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 px-5 py-2 bg-emerald-500 text-black rounded-lg text-sm font-medium 
            hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-400/40 transition"
          >
            View Profile
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;