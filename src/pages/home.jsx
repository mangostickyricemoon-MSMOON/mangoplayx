// src/pages/Home.jsx
import GameCard from "../components/GameCard"
import FAQ from "../components/FAQ"
import logo from "../assets/logo.png"
import banner from "../assets/banner.png"
import play from "../assets/playx.png"
import luckymango from "../assets/luckymangogame.png"
import togetherwemoon from "../assets/togetherwemoon.png"
import comingsoon from "../assets/comingsoon.png"
import msmoonrich from "../assets/msmoonrich.png"
import darkinvader from "../assets/darkinvader.png" 
import tgIcon from "../assets/tg.png" 
import xIcon from "../assets/logox.png"
import hub from "../assets/hub.png"
import "../home.css"

export default function Home() {
  return (
    <div className="home-container">
      
      {/* Header */}
      <header className="site-header">
        {/* โลโก้ */}
        <div className="header-top">
          <img src={logo} alt="Logo" className="logo" />

          {/* Search + Hamburger */}
          <div className="header-right">
            {/* Search box */}
            <form className="search-box">
              <input type="text" placeholder="Search..." />
              <button type="submit" className="search-btn">🔍</button>
            </form>

            {/* Hamburger Menu */}
            <div className="hamburger-menu">
              <button
                className="hamburger-btn"
                onClick={() => {
                  const menu = document.querySelector(".dropdown-menu");
                  menu.classList.toggle("show");
                }}
              >
                ☰
              </button>
              <div className="dropdown-menu">
                <a href="#play">Play to Earn </a>
                <a href="#free">Free to Play</a>
                <a href="#faq">FAQ</a>
                <a href="https://www.msmoon.net">MSMoon</a>
                <a href="https://mangoplayx.msmoon.net">MangoPlayX</a>
                <a href="https://donate.msmoon.net">Donate</a>
              </div>
            </div>
          </div>
        </div>

      </header>

      
      {/* Hero Section */}
      <section className="hero">
        <img src={banner} alt="Banner" className="hero-banner" />
        <div className="hero-text">
          <h1>Mango PlayX</h1>
          <p>
            Welcome to Game Hub where fun meets rewards.
            Explore a world of free-to-play games made for pure enjoyment
            and dive into play-to-earn challenges that let you have fun and win real rewards.
            Play your way, enjoy every win, and keep the fun going!
          </p>
        </div>
      </section>

      {/* PlayX Section */}
      <section className="play">
        <img src={play} alt="PlayX" className="play-playx" />
      </section>

      {/* Play to Earn */}
      <section id="play" className="section">
        <h2>Play to Earn</h2>
        <div className="carousel-container">
          <button className="carousel-btn left" onClick={() => scrollRow("play-row", -300)}>‹</button>
          <div id="play-row" className="scroll-row">
            <GameCard
              title="Lucky Mango"
              desc="Pick a mango and try your luck!"
              image={luckymango}
              link="https://lucky-mango.msmoon.net/"
            />
            <GameCard
              title="Together We Moon"
              desc="comingsoon"
              image={togetherwemoon}
            />
            <GameCard
              title="Next P2E Game1"
              desc="comingsoon"
              image={comingsoon}
            />
          </div>
          <button className="carousel-btn right" onClick={() => scrollRow("play-row", 300)}>›</button>
        </div>
      </section>

      {/* Free to Play */}
      <section id="free" className="section">
        <h2>Free to Play</h2>
        <div className="carousel-container">
          <button className="carousel-btn left" onClick={() => scrollRow("free-row", -300)}>‹</button>
          <div id="free-row" className="scroll-row">
            <GameCard
              title="MSMOON'S RICH"
              desc="Eat as much mango sticky rice as you can!"
              image={msmoonrich}
              link="https://s-rich.msmoon.net/"
            />
            <GameCard
              title="Dark Invader"
              desc="comingsoon"
              image={darkinvader}
            />
            <GameCard
              title="Next Fre Game1"
              desc=" comingsoon"
              image={comingsoon}
            />
          </div>
          <button className="carousel-btn right" onClick={() => scrollRow("free-row", 300)}>›</button>
        </div>
      </section>

      {/* HUB Section */}
      <img src={hub} alt="hub" className="section-hub" />


      {/* FAQ Section */}
      <section id="faq" className="section-faq">
        <FAQ />
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-links">
          <a href="https://t.me/MSMOON_COIN_Community" target="_blank" rel="noopener noreferrer">
            <img src={tgIcon} alt="Telegram" className="social-icon" />
          </a>
          <a href="https://x.com/MsmoonWshido" target="_blank" rel="noopener noreferrer">
            <img src={xIcon} alt="X" className="social-icon" />
          </a>
        </div>
        <p>© 2025 Mango PlayX. Powered by MSMOON.</p>
      </footer>


    </div>
  )
}

    function scrollRow(id, offset) {
      const row = document.getElementById(id);
      if (row) {
        row.scrollBy({ left: offset, behavior: "smooth" });
      }
    }
