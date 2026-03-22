import { motion } from "framer-motion"
import { FaPython, FaReact, FaGitAlt } from "react-icons/fa"
import { SiCplusplus, SiJupyter, SiPandas, SiPostman } from "react-icons/si"

function Skills() {

  const techSkills = [
    { icon: <FaPython />, name: "Python" },
    { icon: <SiPandas />, name: "Data Analysis" },
    { icon: <SiJupyter />, name: "Jupyter" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: "📊", name: "Machine Learning" },
    { icon: "🧠", name: "Algorithms" },
    { icon: "🧩", name: "Data Structures" },
  ]

  const softSkills = [
    { icon: "🗣️", name: "Communication" },
    { icon: "🤝", name: "Teamwork" },
    { icon: "⚡", name: "Problem Solving" },
    { icon: "⏳", name: "Time Management" },
    { icon: "🔄", name: "Adaptability" },
  ]

  const tools = [
    { icon: <FaGitAlt />, name: "Git" },
    { icon: "💻", name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: "🐧", name: "Linux" },
  ]

  const renderSkills = (title, data) => (
    <div className="mb-16">
      <h3 className="text-xl font-semibold mb-6 text-blue-400">
        {title}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {data.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 
            flex flex-col items-center gap-3 
            hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] 
            transition duration-300"
          >
            <div className="text-3xl text-blue-400">
              {skill.icon}
            </div>

            <p className="text-gray-300 text-sm">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="max-w-6xl mx-auto px-10 mt-32">

      <h2 className="text-3xl font-bold mb-12 text-center">
        Skills
      </h2>

      {renderSkills("Technical Skills", techSkills)}
      {renderSkills("Soft Skills", softSkills)}
      {renderSkills("Tools & Platforms", tools)}

    </section>
  )
}

export default Skills