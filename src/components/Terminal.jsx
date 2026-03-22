import { useState } from "react"

function Terminal() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState([])

  const commands = {
    help: "Commands: about, skills, projects, patent, contact",
    about: "I'm Sahil Kumar, a Data Science student passionate about ML and problem solving.",
    skills: "Python, Machine Learning, C++, Data Structures, React",
    projects: "Predicting Productivity, ChurnSense, RevStack, Garbage Collection System",
    patent: "Wireless Earbuds with Kinetic Energy Harvesting that charge themselves.",
    contact: "GitHub: github.com/Sahil-008 | LinkedIn: linkedin.com/in/sahil-kumar-0818sk"
  }

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const command = input.toLowerCase()

      const response = commands[command] || "Command not found"

      setOutput([...output, `> ${input}`, response])
      setInput("")
    }
  }

  return (
    <div className="bg-black text-green-400 p-6 rounded-xl font-mono max-w-3xl mx-auto mt-20">

      <h2 className="text-white mb-4">Developer Terminal</h2>

      <div className="min-h-[150px]">
        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <input
        className="bg-black outline-none w-full mt-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleCommand}
        placeholder="Type a command..."
      />

    </div>
  )
}

export default Terminal