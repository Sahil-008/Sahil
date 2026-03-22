import { motion } from "framer-motion"

function Education() {
return (
<motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-10 mt-28 text-center"
      >

        <h2 className="text-3xl font-bold text-center mb-16">
          Education
        </h2>

        <div className="relative border-l border-gray-700 pl-10 space-y-12">

          {/* B.Tech */}
          <div>
            <div className="absolute -left-2 w-4 h-4 bg-blue-500 rounded-full"></div>

            <p className="text-gray-400 text-sm">
              2023 – 2027
            </p>

            <h3 className="text-xl font-semibold text-blue-400">
              B.Tech in Computer Science & Engineering
            </h3>

            <p className="text-gray-300">
              Lovely Professional University
            </p>
          </div>


          {/* 12th */}
          <div>
            <div className="absolute -left-2 w-4 h-4 bg-blue-500 rounded-full"></div>

            <p className="text-gray-400 text-sm">
              2023
            </p>

            <h3 className="text-xl font-semibold">
              Senior Secondary (12th Grade)
            </h3>

            <p className="text-gray-300">
              BSF Senior Secondary School, Jalandhar
            </p>

            <p className="text-gray-500">
              72%
            </p>
          </div>


          {/* 10th */}
          <div>
            <div className="absolute -left-2 w-4 h-4 bg-blue-500 rounded-full"></div>

            <p className="text-gray-400 text-sm">
              2021
            </p>

            <h3 className="text-xl font-semibold">
              Secondary School (10th Grade)
            </h3>

            <p className="text-gray-300">
              BSF Senior Secondary School, Jalandhar
            </p>

            <p className="text-gray-500">
              78%
            </p>
          </div>

        </div>

      </motion.section>)
}

export default Education
