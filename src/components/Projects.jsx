import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import ml from "../assets/ml.png"
import revStack from "../assets/revStack.png"
import churn from "../assets/churn.png"
import colltion from "../assets/colltion.png"

function Projects() {

const projects = [
{
id: "productivity",
title: "Predicting Productivity & Health",
image: ml,
description: "ML model predicting productivity using lifestyle patterns.",
problem: "Understanding how lifestyle affects productivity is difficult.",
approach: "Built ML models using lifestyle, stress, and activity data.",
features: ["Data preprocessing","Model training","Visualization dashboard"],
impact: "Achieved ~90% accuracy.",
tech: ["Python","ML","Scikit-learn"],
github: "https://github.com/Sahil-008/Predicting-Productivity-and-Health-"
},
{
id: "churn",
title: "ChurnSense",
image: churn,
description: "Analyzing customer churn trends and retention factors.",
problem: "Businesses struggle to identify churn customers.",
approach: "EDA + ML models to detect patterns.",
features: ["Customer segmentation","Prediction model","Visualization"],
impact: "Improved retention insights.",
tech: ["Python","Pandas","ML"],
github: "https://github.com/Sahil-008/ChurnSense-Understand-customer-churn-trends-with-clarity"
},
{
id: "revstack",
title: "RevStack",
image: revStack,
description: "C++ version control system using DAG.",
problem: "Git internals are complex to understand.",
approach: "Built DAG-based commit system.",
features: ["Branching","Commit tracking","History traversal"],
impact: "Shows strong DSA + system design.",
tech: ["C++","DAG","DSA"],
github: "https://github.com/Sahil-008/RevStack-Core-logic-engine-for-revision-tracking"
},
{
id: "gc",
title: "Efficient Garbage Collection",
image: colltion,
description: "Optimized memory management system.",
problem: "Memory leaks reduce performance.",
approach: "Designed efficient GC techniques.",
features: ["Memory tracking","Garbage detection","Optimization"],
impact: "Improved memory efficiency.",
tech: ["C++","OS","Memory"],
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
<h2 className="text-3xl font-bold mb-12">Projects</h2>

<div className="grid md:grid-cols-2 gap-8">
  {projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))}
</div>

</motion.section>
)
}

export default Projects
