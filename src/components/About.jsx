function About() {
return ( <section id="about"
className="max-w-6xl mx-auto px-10 py-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT - TEXT */}
          <div className="space-y-4">

            <p className="text-gray-400 leading-relaxed">
              I'm Sahil Kumar, a B.Tech Computer Science student at Lovely Professional University.
              I am passionate about Data Science, Machine Learning, and solving real-world problems using data.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I enjoy building projects, participating in hackathons, and continuously learning new technologies
              to improve my skills and create impactful solutions.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My goal is to become a strong data analyst and work on meaningful problems that create real impact.
            </p>

          </div>

          {/* RIGHT - HIGHLIGHT CARDS */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition">
              <h3 className="text-blue-400 font-semibold">Student</h3>
              <p className="text-gray-400 text-sm mt-2">
                B.Tech CSE (2023–2027)
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition">
              <h3 className="text-purple-400 font-semibold">ML Enthusiast</h3>
              <p className="text-gray-400 text-sm mt-2">
                Exploring machine learning & AI
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition">
              <h3 className="text-green-400 font-semibold">Developer</h3>
              <p className="text-gray-400 text-sm mt-2">
                Building real-world projects
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition">
              <h3 className="text-yellow-400 font-semibold">Learner</h3>
              <p className="text-gray-400 text-sm mt-2">
                Always improving skills
              </p>
            </div>

          </div>

        </div>

      </section>
      )
    }

export default About
