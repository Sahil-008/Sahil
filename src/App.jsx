import { FaGithub, FaLinkedin } from "react-icons/fa"
import Typing from "./components/Typing"
import profileImg from "./assets/profile.jpeg"
import { Routes, Route } from "react-router-dom"
import { Link } from "react-scroll"
import Achievements from "./components/Achievements"
import Projects from "./components/Projects"
import Stats from "./components/Stats"
import About from "./components/About"
import Patent from "./components/Patent"
import Certificates from "./components/Certificates"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Mail from "./components/Mail"
import ProjectDetails from "./components/ProjectDetails"

function App() {

return (
  <Routes>

    {/* HOME PAGE */}
    <Route path="/" element={
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-bold">Sahil Kumar</h1>

        <ul className="flex gap-8 text-gray-300">
          <li>
            <Link to="home" smooth duration={500} className="cursor-pointer hover:text-white">
              Home
            </Link>
          </li>

          <li>
            <Link to="about" smooth duration={500} className="cursor-pointer hover:text-white">
              About
            </Link>
          </li>

          <li>
            <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-white">
              Projects
            </Link>
          </li>

          <li>
            <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center justify-between px-12 md:px-20 max-w-6xl mx-auto gap-10 md:gap-16">

        <div className="flex flex-col gap-5 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight whitespace-nowrap">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Sahil Kumar
            </span>
          </h1>

          <p className="text-lg text-gray-400 h-8">
            <Typing />
          </p>

          <p className="text-gray-400">
            I build data-driven solutions and explore machine learning to solve real-world problems.
          </p>

          <div className="flex items-center gap-5 mt-4">
            <a
              href="https://github.com/Sahil-008"
              target="_blank"
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              GitHub Profile
            </a>

            <a
              href="/CV.pdf"
              download
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end w-full md:translate-x-4">
          <img
            src={profileImg}
            alt="Sahil Kumar"
            className="w-72 h-72 md:w-[380px] md:h-[380px] object-cover rounded-full border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.7)]"
          />
        </div>

      </section>

      {/* ABOUT */}
      <div id="about">
        <About />
      </div>

      {/* STATS */}
      <Stats />
      <Achievements />

      {/* PROJECTS */}
      <div id="projects">
        <Projects />
      </div>

      <Patent />
      <Skills />
      <Certificates />
      <Education />

      {/* CONTACT */}
      <section id="contact" className="min-h-screen max-w-6xl mx-auto px-6 mt-32 pb-10">

        <div className="text-center mb-12">
          <p className="text-blue-500 tracking-widest text-sm">GET IN TOUCH</p>
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          <div className="space-y-6 text-gray-300 mt-16">
            <div className="flex items-center gap-4">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-400">sahil.sk0818@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-400">+91 9779153217</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-400">India</p>
              </div>
            </div>

            <div className="flex gap-6 mt-6 text-2xl">
              <a href="https://www.linkedin.com/in/sahil-kumar-0818sk/" target="_blank">💼</a>
              <a href="https://github.com/Sahil-008" target="_blank">🐙</a>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl shadow-lg backdrop-blur-md">
            <Mail />
          </div>

        </div>

      </section>

    </div>
    } />

    {/* PROJECT PAGE */}
    <Route path="/project/:id" element={<ProjectDetails />} />

  </Routes>
)
}

export default App
