import React from "react";
import classes from "../assets/CSS/Experience.module.css";

const Experience = () => {
  const experience = [
   
    {
      duration: "2025",
      title: "Web Development Intern",
      company: "Prodigy InfoTech • Remote",
      description:
        "Developed responsive websites and interactive web applications using HTML, CSS, JavaScript, and React.js through project-based learning.",
    },
  ];

  const education = [
    {
      duration: "2023 – 2026",
      title: "Bachelor of Science in Information Technology",
      institute: "DTSS College of Commerce • Mumbai University",
      description:
        "Pursuing B.Sc. IT with coursework in web development, databases, programming, and software engineering.",
    },
    {
      duration: "2021 – 2023",
      title: "Higher Secondary Certificate (Commerce)",
      institute: "Durgadevi Saraf Junior College",
      description:
        "Completed higher secondary education while developing a strong interest in software development and technology.",
    },
  ];

  return (
    <section className={classes.experienceSection} id="Experience">
      <h1 className={classes.heading}>Experience</h1>

      {/* <p className={classes.subHeading}>
        The roles and milestones that shaped how I work today
      </p> */}

      <div className={classes.main}>
        {/* LEFT */}

        <div className={classes.left}>
          <div className={classes.titleBox}>
            <span>
              <i className="bi bi-briefcase"></i>
            </span>

            <h2>Work</h2>
          </div>

          <div className={classes.timeline}>
            {experience.map((item, index) => (
              <div className={classes.timelineItem} key={index}>
                <div className={classes.dot}></div>

                <div className={classes.content}>
                  <span className={classes.year}>{item.duration}</span>

                  <h3>{item.title}</h3>

                  <h4>{item.company}</h4>

                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div className={classes.right}>
          <div className={classes.titleBox}>
            <span>
              <i className="bi bi-mortarboard"></i>
            </span>

            <h2>Education</h2>
          </div>

          <div className={classes.timeline}>
            {education.map((item, index) => (
              <div className={classes.timelineItem} key={index}>
                <div className={classes.dot}></div>

                <div className={classes.content}>
                  <span className={classes.year}>{item.duration}</span>

                  <h3>{item.title}</h3>

                  <h4>{item.institute}</h4>

                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;