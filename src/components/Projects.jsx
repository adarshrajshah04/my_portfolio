import React from "react";
import classes from "../assets/CSS/Project.module.css";


import filter from "../assets/images/e-commerce.png";
import notes_app from '../assets/images/notes.png'

const Projects = () => {
  const projects = [
    {
      title: "product-filter-app",
      description:
        "Built a dynamic product filtering application using HTML, CSS, and JavaScript that fetches products from an API and enables real-time filtering by category, price, and rating.",
      tech: ["HTML5", "CSS3", "JavaScript (ES6)", "Fetch API", "DummyJSON API"],
      image: filter,
      github:
        "https://github.com/adarshrajshah04/product-filter-app#%EF%B8%8F-product-filter-app",
      live: "https://product-filter-application.netlify.app/",
    },
    {
      title: "notes-app",
      description:
        "Developed a responsive notes application using React and Tailwind CSS that allows users to create, delete, and manage notes with persistent storage using the browser's Local Storage.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "JavaScript (ES6)",
        "Local Storage",
        "Vite",
      ],
      image: notes_app,
      github:
        "https://github.com/adarshrajshah04/Notes_app",
      live: "https://adarshrajshah04.github.io/Notes_app/",
    },
  ];

  return (
    <div className={classes.main} id="Project">
      <h1 className={classes.main_h1}>Project</h1>
      <div>
        {projects.map(({ title, description, tech, image, github, live }) => {
          return (
            <div className={classes.prj_main}>
              <div className={classes.right}>
                <div>
                  <img className={classes.image} src={image} alt="" />
                </div>
                <div className={classes.btn_div}>
                  <a href={github} target="_blank">
                    {" "}
                    <button className={classes.git_btn}>
                      <i class="bi bi-github"></i> Github
                    </button>
                  </a>
                  <a href={live} target="_blank">
                    {" "}
                    <button className={classes.link_btn}>
                      <i class="bi bi-link-45deg"></i> Live Demo
                    </button>
                  </a>
                </div>
              </div>

              <div className={classes.left}>
                <h1 className={classes.title}>{title}</h1>
                <p className={classes.description}>{description}</p>
                {tech.map((a) => (
                  <button className={classes.btn}>{a}</button>
                ))}
              </div>
              <hr className={classes.hr} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
