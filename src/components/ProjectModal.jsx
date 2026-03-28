function ProjectModal({ selectedProject, setSelectedProject }) {
  if (!selectedProject) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div className="bg-[#0f172a] max-w-2xl w-full mx-4 p-6 rounded-2xl border border-gray-700 relative max-h-[85vh] overflow-y-auto">

        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-blue-400 mb-4">
          {selectedProject.title}
        </h2>

        <Section title="Problem" content={selectedProject.problem} />
        <Section title="Approach" content={selectedProject.approach} />
        <Section title="Features" content={selectedProject.features} />
        <Section title="Impact" content={selectedProject.impact} />
        <Section title="Results" content={selectedProject.results} />
        <Section title="Challenges" content={selectedProject.challenges} />

        <div className="flex flex-wrap gap-2 mt-4">
          {selectedProject.tech?.map((t, i) => (
            <span key={i} className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-xs">
              {t}
            </span>
          ))}
        </div>

        <a
          href={selectedProject.github}
          target="_blank"
          className="text-blue-400 mt-6 inline-block"
        >
          View on GitHub →
        </a>

      </div>
    </div>
  )
}

function Section({ title, content }) {
  return (
    <div className="mb-4">
      <h3 className="font-semibold text-white">{title}</h3>

      {Array.isArray(content) ? (
        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
          {content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-sm">{content}</p>
      )}
    </div>
  )
}

export default ProjectModal
