import "./Navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("");

  return (
    <>
      <nav>
        <div className="nav-container">
          <div
            className="logo-container"
            onClick={() => setActiveNavItem("home")}
          >
            <span>
              {" "}
              <a href="#hero">Rosis Sharma </a>
            </span>
          </div>
          <div className={`nav-items-container ${isMenuOpen ? "open" : ""}`}>
            <div className="nav-items">
              <ul>
                <li
                  className={`nav-item ${
                    activeNavItem === "about" ? "active" : ""
                  }`}
                  onClick={() => setActiveNavItem("about")}
                >
                  <a href="#about">About</a>
                </li>
                <li
                  className={`nav-item ${
                    activeNavItem === "skills" ? "active" : ""
                  }`}
                  onClick={() => setActiveNavItem("skills")}
                >
                  <a href="#skills">Skills</a>
                </li>
                <li
                  className={`nav-item ${
                    activeNavItem === "projects" ? "active" : ""
                  }`}
                  onClick={() => setActiveNavItem("projects")}
                >
                  <a href="#projects">Projects</a>
                </li>
                <li
                  className={`nav-item ${
                    activeNavItem === "contact" ? "active" : ""
                  }`}
                  onClick={() => setActiveNavItem("contact")}
                >
                  <a href="#contact">Contact</a>
                </li>
                <button
                  onClick={() => {
                    setActiveNavItem("resume");
                  }}
                >
                  Resume
                </button>
              </ul>
            </div>
          </div>
          <div
            className="hamburger"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <GiHamburgerMenu size={30} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
