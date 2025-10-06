import SplitText from "../Text/SplitText.jsx";
import RosisProfilePicture from "/images/rosis-git.jpg";
import TextType from "../Text/TypeText.jsx";
import { FaArrowRight, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./Hero.css";
const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-left">
          <div className="title-container">
            <SplitText
              text="Hi, I'm Rosis Sharma. "
              className="text-6xl text-white font-semibold text-center "
              delay={100}
              duration={0.1}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <TextType
              text={[
                "Front-End Developer",
                "React Developer",
                "JavaScript Enthusiast",
                "Video Editor",
                "Music Enthusiast",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-4xl text-offwhite font-semibold "
            />
          </div>
          <div className="buttons">
            <button className="btn-primary">
              View My Work <FaArrowRight />
            </button>
            <button className="btn-secondary">Get in Touch</button>
          </div>
          <div className="link-logos">
            <a
              href="https://www.linkedin.com/in/rosis-sharma-045a77325/"
              target="_blank"
            >
              <FaLinkedin color="white" size={36} />
            </a>
            <a href="https://github.com/rosheesh7" target="_blank">
              <FaGithub color="white" size={36} />
            </a>
            <a href="https://www.facebook.com/rosheesh7" target="_blank">
              <FaFacebook color="white" size={36} />
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="image-container">
            <img src={RosisProfilePicture} alt={"Rosis"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
