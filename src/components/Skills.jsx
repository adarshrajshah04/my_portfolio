import React from 'react'
import classes from "../assets/CSS/Skill.module.css"


const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: "🌐",
            skills: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "React.js",
                "Tailwind CSS",
                "Bootstrap",
            ],
        },
        {
            title: "Backend",
            icon: "⚙️",
            skills: [
                "Python",
                "Django",
                "Django REST Framework",
                "REST APIs",
            ],
        },
        {
            title: "Database",
            icon: "🗄️",
            skills: [
                "MySQL",
                "SQLite",
                "MongoDB",
            ],
        },
        {
            title: "Tools",
            icon: "🛠️",
            skills: [
                "Git",
                "GitHub",
                "VS Code",
                "Postman",
                "Vite",
            ],
        },
    ];
    const skills = [
        {
            title: "Frontend Development",
            percentage: 92,
        },
        {
            title: "Backend Development",
            percentage: 85,
        },
        {
            title: "Responsive Web Design",
            percentage: 90,
        },
        {
            title: "Database & SQL",
            percentage: 82,
        },
        {
            title: "REST API Integration",
            percentage: 84,
        },
        {
            title: "Version Control (Git)",
            percentage: 88,
        },
    ];
    return (
        <div className={classes.skill_main} id='Skills'>
            <h1 className={classes.skill_h1}>Skills & Tools</h1>

            <div className={classes.main}>

                <div className={classes.left}>

                    <h1 className={classes.left_h1}>Building scalable web applications with modern technologies.</h1>
                    <p className={classes.left_p}>I enjoy developing responsive and user-friendly web applications with a strong focus on clean code, performance, and maintainability. My expertise spans both frontend and backend development, allowing me to build complete, end-to-end solutions while continuously learning new technologies.</p>

                    <div className={classes.boxs}>
                        {skillCategories.map(({title,icon,skills})=>{
                            return(
                                <div className={classes.box}>
                                    <h1 className={classes.box_h1}>{icon}{title}</h1>
                                    {skills.map(a=><p className={classes.box_p}>{a}</p>)}
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={classes.right}>
                    <div className={classes.right_main}>
                        {skills.map(({ title, percentage }) => {
                            return (
                                <div className={classes.bar_main}>
                                    <div className={classes.bar_text}>
                                        <p className={classes.p_text}>{title}</p>
                                        <p className={classes.p_parcentage}>{percentage}%</p>
                                    </div>
                                    <div className={classes.bar}>
                                        <div className={classes.bar_pro} style={{ width:`${percentage}%`}}></div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Skills
