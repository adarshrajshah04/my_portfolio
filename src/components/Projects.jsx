import React from 'react'
import classes from '../assets/CSS/Project.module.css'
import filter from '../assets/images/e-commerce.png'


// ⭐ MediBot
// ⭐ Portfolio Website
// Notes App
// Car Rental System
// Business Agency Website
// Responsive Calculator

//     const projects = [
//   {
//     id: 1,
//     category: "React Project",
//     year: "2026",
//     title: "Personal Portfolio",
//     description:
//       "A modern responsive developer portfolio built using React.js and CSS Modules to showcase my projects, skills, experience, and education with smooth animations and reusable components.",
//     tech: [
//       "React.js",
//       "JavaScript",
//       "CSS Modules",
//       "Bootstrap Icons",
//       "Vite",
//     ],
//     image: "/images/portfolio.png",
//     github: "https://github.com/adarshrajshah04",
//     live: "https://your-portfolio-link.com",
//     featured: true,
//   },
// ];


const Projects = () => {
  const projects = [
    {

      title: "product-filter-app",
      description:
        "Built a dynamic product filtering application using HTML, CSS, and JavaScript that fetches products from an API and enables real-time filtering by category, price, and rating.",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6)",
        "Fetch API",
        "DummyJSON API",
      ],
      image:filter,
      github: "https://github.com/adarshrajshah04/product-filter-app#%EF%B8%8F-product-filter-app",
      live: "https://product-filter-application.netlify.app/",
    },
  ];

  return (
    <div className={classes.main}>
      <h1 className={classes.main_h1}>Project</h1>
      <div>
        {projects.map(({title,description,tech,image,github,live})=>{
          return(
            <div className={classes.prj_main}>

              <div className={classes.right}>
                <div>
                  <img className={classes.image} src={image} alt="" />
                </div>
                <div className={classes.btn_div}>
                  <a href={github} target='_blank'> <button className={classes.git_btn}><i class="bi bi-github"></i> Github</button></a>
                  <a href={live} target='_blank'> <button className={classes.link_btn}><i class="bi bi-link-45deg"></i> Live Demo</button></a>
                </div>
              </div>

              <div className={classes.left}>
                <h1 className={classes.title}>{title}</h1>
                <p className={classes.description}>{description}</p>
                {tech.map(a=><button className={classes.btn}>{a}</button>)}
              </div>
            </div>
          )
        })}
      </div>

      



    </div>
  )
}

export default Projects
