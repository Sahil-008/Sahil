import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import ml from "../assets/ml.png";
import revStack from "../assets/revStack.png";
import churn from "../assets/churn.png";
import colltion from "../assets/colltion.png";

function Projects() {
const [selectedProject, setSelectedProject] = useState(null)

const projects = [
{
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
Logistic Regression
Random Forest
SVM
XGBoost
LightGBM
Compared models using structured evaluation pipeline and stored results for analysis`,
features: [
"Data preprocessing",
"Model training",
"Visualization dashboard"
],
impact: "Achieved ~90% accuracy.",
tech: ["Python", "Pandas, NumPy", "Scikit-learn", "XGBoost", "LightGBM", "Matplotlib/Seaborn"],
Results: `Evaluated models using Accuracy, Precision, Recall, F1-score, ROC-AUC
Identified best-performing model through systematic comparison
Stored results in structured format (model_metrics.csv) for reproducibility
Built a fully reproducible ML workflow from raw data → final evaluation`,
github: "https://github.com/Sahil-008/Predicting-Productivity-and-Health-",
Challenges: `Handling noisy and inconsistent data → solved using cleaning + outlier detection
Feature engineering & label creation → required careful transformation logic
Model selection → compared multiple algorithms to avoid bias
Balancing evaluation metrics → ensured performance across precision/recall, not just accuracy`
},
{
title: "ChurnSense",
image : churn,
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
tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Imbalanced-learn", "Jupyter Notebook"],
Results: `Successfully built a churn prediction system using real-world customer data
Evaluated models using Accuracy, Precision, Recall, and F1-score
Generated insights to identify high-risk customers for churn
Enabled data-driven decision-making for customer retention strategies`,
Challenges: `Imbalanced dataset → handled using imbalanced-learn techniques
Feature selection complexity → improved using EDA insights
Model evaluation trade-offs → balanced precision vs recall
Real-world data noise → cleaned through preprocessing pipeline`,
github: "https://github.com/Sahil-008/ChurnSense-Understand-customer-churn-trends-with-clarity"
},
{
title: "RevStack",
image: revStack,
description:
"C++ version control system using DAG.",
problem:
"Tracking changes, managing versions, and reverting states efficiently is a core challenge in systems like version control tools. Naive approaches lead to redundant data storage, lack of rollback capability, and inefficient state management.",
approach:[
"Built a Mini Git-like revision engine in C++ to manage file versions and history",
"Implemented commit system to store snapshots of file states",
"Used stack-based undo/redo mechanism for efficient state transitions",
"Designed branching system to handle multiple development paths",
"Implemented revert functionality to restore previous commit states",
"Maintained a working directory (hash map) for real-time file updates"
],
features: [
"Branching",
"Commit tracking",
"History traversal"
],
impact: "Shows strong DSA + system design.",
tech: ["C++", "Data Structures (Stacks, Hash Maps, Linked Structures)", "System Design"],
Results:[
"Enabled instant undo/redo operations (O(1)) using stacks",
"Efficient commit tracking and retrieval using hash-based mapping",
"Supported multiple branches with consistent state management",
"Achieved reliable version recovery without redundant data duplication"
],
Challenges: `Maintaining consistency across branches → solved using branch-linked commit tracking
Efficient undo/redo logic → implemented dual stack system
Mapping commits quickly → used hash map for O(1) lookup
State synchronization after revert → rebuilt working directory from commit snapshots`,
github: "https://github.com/Sahil-008/RevStack-Core-logic-engine-for-revision-tracking"
},
{
title: "Efficient Garbage Collection",
image: colltion,
description:
"Optimized memory management system.",
problem:
"Memory leaks and inefficient memory utilization in low-level systems degrade performance and can lead to crashes. Manual memory management in languages like C/C++ makes it difficult to track unused memory and reclaim it effectively.",
approach:[
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
}
]

return (
<motion.section
initial={{ opacity: 0, y: 80 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
className="max-w-6xl mx-auto px-10 mt-28 text-center"
>
<h2 className="text-3xl font-bold mb-12">
Projects
</h2>

<div className="grid md:grid-cols-2 gap-8">
{projects.map((project, i) => (
<ProjectCard
key={i}
project={project}
setSelectedProject={setSelectedProject}
/>
))}
</div>

<ProjectModal
selectedProject={selectedProject}
setSelectedProject={setSelectedProject}
/>
</motion.section>
)
}

export default Projects
