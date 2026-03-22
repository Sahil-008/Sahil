import { useEffect, useRef } from "react"
import Typed from "typed.js"

function Typing() {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "B.Tech CSE Student",
        "Machine Learning Enthusiast",
        "Data Science Learner",
        "Problem Solver"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1200,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <span className="text-blue-400" ref={el}></span>
  )
}

export default Typing