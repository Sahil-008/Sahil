import { useParams, useNavigate } from "react-router-dom"
import ml from "../assets/ml.png"
import revStack from "../assets/revStack.png"
import churn from "../assets/churn.png"
import colltion from "../assets/colltion.png"

function ProjectDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const projects = {
    productivity: {
      title: "Predicting Productivity & Health",
      image: ml,
      problem: "Understanding how lifestyle affects productivity is difficult.",
      approach: "Built ML models using lifestyle, stress, and activity data.",
      impact: "Achieved ~90% accuracy.",
      github: "https://github.com/Sahil-008/Predicting-Productivity-and-Health-"
    },
    churn: {
      title: "ChurnSense",
      image: churn,
      problem: "Businesses struggle to identify churn customers.",
      approach: "EDA + ML models to detect patterns.",
      impact: "Improved retention insights.",
      github: "https://github.com/Sahil-008/ChurnSense-Understand-customer-churn-trends-with-clarity"
    },
    revstack: {
      title: "RevStack",
      image: revStack,
      problem: "Git internals are complex to understand.",
      approach: "Built DAG-based commit system.",
      impact: "Strong DSA + system design.",
      github: "https://github.com/Sahil-008/RevStack-Core-logic-engine-for-revision-tracking"
    },
    gc: {
      title: "Efficient Garbage Collection",
      image: colltion,
      problem: "Memory leaks reduce performance.",
      approach: "Designed efficient GC techniques.",
      impact: "Improved memory efficiency.",
      github: "https://github.com/Sahil-008/Efficient_Garbage_Collage_In_Operating_System"
    }
  }

  const project = projects[id]

  if (!project) return <div>Project not found</div>

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 max-w-4xl mx-auto">

      <button onClick={() => navigate(-1)} className="mb-6 text-blue-400">
        ← Back
      </button>

      <img src={project.image} className="rounded-xl mb-6" />

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      <Section title="Problem" content={project.problem} />
      <Section title="Approach" content={project.approach} />
      <Section title="Impact" content={project.impact} />

      <a href={project.github} target="_blank" className="text-blue-400 mt-6 inline-block">
        View on GitHub →
      </a>

    </div>
  )
}

function Section({ title, content }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400">{content}</p>
    </div>
  )
}

export default ProjectDetails
