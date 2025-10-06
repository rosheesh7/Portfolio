import "./App.css";
import DarkVeil from "./background/DarkVeil.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";

const App = () => {
  return (
    <div className="portfolio-container">
      <Navbar />

      {/* Hero section with DarkVeil background */}
      <section className="hero-section" id="hero">
        <div className="background-layer">
          <DarkVeil />
        </div>
        <Hero />
      </section>

      {/* About section with its own background */}
      <section className="about-section" id="about">
        <About />
      </section>
    </div>
  );
};

export default App;
