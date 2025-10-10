import "./Skills.css";

const Skills = () => {
  const card_data = [
    {
      id: 1,
      title: "Front End Development",
      list: [
        "React Js",
        "TailwindCSS",
        "JavaScript",
        "HTML",
        "CSS",
        "BootStrap",
      ],
    },
    {
      id: 2,
      title: "Tools & Version Control",
      list: ["Git & GitHub", "Ms-Excel", "Ms-Word", "Ms-Powerpoint", "Canva"],
    },
    {
      id: 3,
      title: "Media Skills",
      list: ["Videography", "Videoo Editing", "Photography", "Color Grading"],
    },
  ];
  return (
    <>
      <section className="skill-container">
        <div className="skill-title">
          <h1>Skills</h1>
          <span>
            A diverse set of tools and technologies I use to bring ideas to
            life.
          </span>
          <div className="skill-card-container">
            {card_data.map((card) => {
              return (
                <>
                  <div className="skill-card" key={card.id}>
                    <h2>{card.title}</h2>
                    {card.list.map((item) => {
                      return (
                        <>
                          <div className="skill-item">{item}</div>
                        </>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
