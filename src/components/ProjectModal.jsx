function ProjectModal({ selectedProject, setSelectedProject }) {
if (!selectedProject) return null

return ( <div
id="projects" className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">


  <div className="bg-[#0f172a] max-w-2xl w-full mx-4 p-6 rounded-2xl border border-gray-700 relative">

    <button
      onClick={() => setSelectedProject(null)}
      className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
    >
      ✕
    </button>

    <h2 className="text-2xl font-bold text-blue-400 mb-4">
      {selectedProject.title}
    </h2>

    <div className="mb-3">
      <h3 className="font-semibold text-white">Problem</h3>
      <p className="text-gray-400 text-sm">
        {selectedProject.problem}
      </p>
    </div>

    <div className="mb-3">
      <h3 className="font-semibold text-white">Approach</h3>
      <p className="text-gray-400 text-sm">
        {selectedProject.approach}
      </p>
    </div>

    <div className="mb-3">
      <h3 className="font-semibold text-white">Key Features</h3>
      <ul className="list-disc list-inside text-gray-400 text-sm">
        {selectedProject.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-white">Impact</h3>
      <p className="text-gray-400 text-sm">
        {selectedProject.impact}
      </p>
    </div>

  </div>
</div>


)
}

export default ProjectModal
