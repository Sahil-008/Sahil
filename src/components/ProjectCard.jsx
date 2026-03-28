import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

function ProjectCard({ project }) {
  const navigate = useNavigate()

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      onClick={() => navigate(`/project/${project.id}`)}
      className="bg-[#0f172a] rounded-2xl shadow-lg overflow-hidden border border-gray-800 cursor-pointer"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-blue-400">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-xs"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Click to view full details →
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
