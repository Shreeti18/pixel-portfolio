import './Hero.css'

function Hero() {
  return (
    <section className="hero">

      {/* Top HUD */}
      <div className="hero-topbar">

        {/* HP */}
        <div className="health">
          <span>HP:</span>

          <div className="health-bar">
            <div className="health-fill"></div>
          </div>
        </div>

        {/* Player */}
        <div className="player">
          PLAYER 01
        </div>

      </div>


      {/* Main Hero Content */}
      <div className="hero-content">

        <h1 className="hero-year">
          2026
        </h1>

        <h2 className="hero-title">
          PORTFOLIO
        </h2>

        <button className="hero-button">
          START
        </button>

      </div>


      {/* Ground */}
      <div className="hero-ground"></div>

    </section>
  )
}

export default Hero