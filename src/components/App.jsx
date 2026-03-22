const particlesInit = async (main) => {
  await loadFull(main)
}
function Hero() {
  <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 60,
      },
      color: {
        value: "#3b82f6",
      },
      links: {
        enable: true,
        color: "#3b82f6",
        distance: 150,
      },
      move: {
        enable: true,
        speed: 1,
      },
      size: {
        value: 3,
      },
    },
  }}
/>
className="absolute -z-10"
  return (
    <div>
      <h1>Sahil Kumar</h1>
      <p>Aspiring Software Engineer</p>
    </div>
  )
}

export default Hero