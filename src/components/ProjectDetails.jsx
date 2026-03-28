import { useParams, useNavigate } from "react-router-dom"
import ml from "../assets/ml.png"
import revStack from "../assets/revStack.png"
import churn from "../assets/churn.png"
import colltion from "../assets/colltion.png"
import { useEffect } from "react"

function ProjectDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = {
    productivity: {
      title: "Predicting Productivity & Health",
      image: ml,
      description:
        "ML model predicting productivity using lifestyle patterns.",

      problem:
        "Understanding how lifestyle habits and social media usage impact productivity and health is challenging due to unstructured data and lack of clear predictive systems. Organizations and individuals need a data-driven way to classify productivity based on behavioral patterns.",

      approach: `Built a complete end-to-end ML pipeline for productivity prediction
Performed data cleaning, outlier handling, and preprocessing on raw datasets
Conducted EDA and visualization to identify key behavioral patterns
Applied feature engineering and label creation to transform raw data into model-ready format
Trained and evaluated multiple models:
- Logistic Regression
- Random Forest
- SVM
- XGBoost
- LightGBM
Compared models using structured evaluation pipeline and stored results for analysis`,

      features: [
        "Data preprocessing",
        "Model training",
        "Visualization dashboard"
      ],

      impact: "Achieved ~90% accuracy.",

      tech: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "XGBoost",
        "LightGBM",
        "Matplotlib/Seaborn"
      ],

      results: `Evaluated models using Accuracy, Precision, Recall, F1-score, ROC-AUC
Identified best-performing model through systematic comparison
Stored results in structured format (model_metrics.csv) for reproducibility
Built a fully reproducible ML workflow from raw data → final evaluation`,

      challenges: `Handling noisy and inconsistent data → solved using cleaning + outlier detection
Feature engineering & label creation → required careful transformation logic
Model selection → compared multiple algorithms to avoid bias
Balancing evaluation metrics → ensured performance across precision/recall, not just accuracy`,

      github:
        "https://github.com/Sahil-008/Predicting-Productivity-and-Health-"
    },

    churn: {
      title: "ChurnSense",
      image: churn,
      description:
        "Analyzing customer churn trends and retention factors.",

      problem:
        "Customer churn (when users stop using a service) leads to significant revenue loss for businesses. Identifying customers likely to churn is difficult due to complex patterns in demographic, service usage, and behavioral data.",

      approach: `Performed data preprocessing and cleaning to handle missing values and inconsistencies
Conducted EDA and visualization to identify key churn patterns
Applied feature engineering on demographic and service-related data
Built and trained classification models to predict churn
Handled imbalanced data using specialized techniques
Evaluated models using multiple performance metrics for robust comparison.`,

      features: [
        "Customer segmentation",
        "Prediction model",
        "Visualization"
      ],

      impact: "Improved retention insights.",

      tech: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "Imbalanced-learn",
        "Jupyter Notebook"
      ],

      results: `Successfully built a churn prediction system using real-world customer data
Evaluated models using Accuracy, Precision, Recall, and F1-score
Generated insights to identify high-risk customers for churn
Enabled data-driven decision-making for customer retention strategies`,

      challenges: `Imbalanced dataset → handled using imbalanced-learn techniques
Feature selection complexity → improved using EDA insights
Model evaluation trade-offs → balanced precision vs recall
Real-world data noise → cleaned through preprocessing pipeline`,

      github:
        "https://github.com/Sahil-008/ChurnSense-Understand-customer-churn-trends-with-clarity"
    },

    gc: {
      title: "Efficient Garbage Collection",
      image: colltion,
      description:
        "Optimized memory management system.",
      problem:
        "Memory leaks and inefficient memory utilization in low-level systems degrade performance and can lead to crashes. Manual memory management in languages like C/C++ makes it difficult to track unused memory and reclaim it effectively.",
      approach: [
        "Designed a custom garbage collection mechanism inspired by mark-and-sweep",
        "Implemented memory tracking to identify allocated and reachable objects",
        "Built a garbage detection system to isolate unused memory blocks",
        "Optimized memory reuse using efficient allocation strategies",
        "Simulated heap management to test allocation and deallocation cycles"
      ],
      features: [
        "Memory tracking",
        "Garbage detection",
        "Optimization"
      ],
      impact: "Improved memory efficiency.",
      tech: ["C++", "Operating Systems Concepts", "Memory Management"],
      Results: `Reduced memory wastage by ~80–90% in test simulations
Improved memory reuse through optimized allocation
Achieved stable execution across multiple allocation/deallocation cycles`,
      Challenges: `Tracking active memory references → solved using structured memory mapping
Avoiding memory corruption → ensured safe allocation boundaries
Performance overhead of GC → minimized unnecessary scans and optimized logic`,
      github: "https://github.com/Sahil-008/Efficient_Garbage_Collage_In_Operating_System"
    },


    revstack: {
      title: "RevStack",
      image: revStack,
      description: "C++ version control system using DAG.",

      problem:
        "Tracking changes, managing versions, and reverting states efficiently is a core challenge in systems like version control tools.",

      approach: [
        "Built a Mini Git-like revision engine in C++",
        "Implemented commit system",
        "Undo/redo mechanism",
        "Branching system",
        "Revert functionality",
        "Working directory using hash map"
      ],

      features: [
        "Branching",
        "Commit tracking",
        "History traversal"
      ],

      impact: "Shows strong DSA + system design.",

      tech: ["C++", "Data Structures", "System Design"],

      results: [
        "O(1) undo/redo using stacks",
        "Efficient commit tracking",
        "Multiple branches supported",
        "Reliable version recovery"
      ],

      challenges: `Maintaining consistency across branches
Efficient undo/redo logic
Mapping commits quickly
State synchronization after revert`,

      github:
        "https://github.com/Sahil-008/RevStack-Core-logic-engine-for-revision-tracking"
    }
  }

  const project = projects[id]
  if (!project) return <div className="text-white">Project not found</div>

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 max-w-4xl mx-auto">

      <button onClick={() => navigate(-1)} className="mb-6 text-blue-400">
        ← Back
      </button>

      <img src={project.image} className="rounded-xl mb-6" />

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      <Section title="Problem" content={project.problem} />
      <Section title="Approach" content={project.approach} />
      <Section title="Features" content={project.features} />
      <Section title="Impact" content={project.impact} />
      <Section title="Results" content={project.results} />
      <Section title="Challenges" content={project.challenges} />

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t, i) => (
          <span key={i} className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-xs">
            {t}
          </span>
        ))}
      </div>

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

      {Array.isArray(content) ? (
        <ul className="text-gray-400 list-disc pl-5 space-y-1">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 whitespace-pre-line">
          {content}
        </p>
      )}
    </div>
  )
}

export default ProjectDetails
