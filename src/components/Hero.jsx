import './Hero.css'

import character from '../assets/character.png'
import tree from '../assets/tree.png'
import lamp from '../assets/lamp.png'

function Hero() {
  return (
    <section className="hero">

      {/* =========================
          TOP GAME HUD
          ========================= */}

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


      {/* =========================
          CLOUDS
          ========================= */}

      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>


      {/* =========================
          HERO ENVIRONMENT
          ========================= */}

      <img
        src={lamp}
        alt="Pixel street lamp"
        className="hero-lamp"
      />

      <img
        src={character}
        alt="Pixel player character"
        className="hero-character"
      />

      <img
        src={tree}
        alt="Pixel tree"
        className="hero-tree"
      />


      {/* =========================
          MAIN TITLE
          ========================= */}

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


      {/* =========================
          GROUND
          ========================= */}

      <div className="hero-ground">

        <div className="ground-cyan"></div>
        <div className="ground-pink"></div>

      </div>

    </section>
  )
}

export default Hero