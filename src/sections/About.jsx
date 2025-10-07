import "./About.css";
const card_data = [
  {
    id: 1,
    title: "Education",
    description:
      "Bachelor of Science in Computer Science and Information Technology  [Bsc.CSIT]",
  },
  {
    id: 2,
    title: "Journey",
    description: `I specialize in building modern, sleek, and responsive user interfaces with React.js, and I’m also deeply interested in the evolving world of Artificial Intelligence and Machine Learning.`,
  },
  {
    id: 3,
    title: "Interests",
    description: `Music and sports keep me inspired — I play guitar, drums, ukulele,
        and enjoy football. Creativity fuels everything I do.`,
  },
];
const About = () => {
  return (
    <>
      <section className="about-container">
        <div className="about-title">
          <h1>About Me</h1>
          <span>
            I'm a passionate Front-end Developer specializing in React.js. I
            build visually appealing and responsive web applications with smooth
            user experiences. My work focuses on clean code, modern UI design,
            and creating interactive web interfaces that delight users.
          </span>
        </div>

        <div className="about-card-container">
          {card_data.map((card) => {
            return (
              <div className="about-card" key={card.id}>
                <h1>{card.title}</h1>
                <span>{card.description}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
