import { motion } from "framer-motion"

function ProjectCard({ project, setSelectedProject }) {
return (
<motion.div
whileHover={{ scale: 1.03 }}
className="bg-[#0f172a] rounded-2xl shadow-lg overflow-hidden border border-gray-800"
> <img
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

    <div className="flex gap-3 mt-4">
      <a
        href={project.github}
        className="px-4 py-2 bg-blue-600 rounded-lg text-white text-sm hover:bg-blue-700"
      >
        View Code
      </a>

      <button
        onClick={() => setSelectedProject(project)}
        className="text-sm border border-gray-600 px-3 py-2 rounded hover:bg-gray-800 transition"
      >
        Details
      </button>
    </div>
  </div>
</motion.div>


)
}

export default ProjectCard
