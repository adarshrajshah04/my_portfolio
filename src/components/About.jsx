import React from 'react'
import classes from "../assets/CSS/About.module.css"

const About = () => {
    const my_info = [
        {
            number: "10+",
            title: "Projects Built",
        },
        {
            number: "1",
            title: "Internships",
        },
        {
            number: "15+",
            title: "Technologies",
        },
        {
            number: "2026",
            title: "Graduation",
        },
    ];

    return (
        <div className={classes.main}>

            <h1>About Me</h1>

            <p className={classes.line_one}>Learning every day, building meaningful projects, and growing as a Full Stack Developer.</p>

           <div className={classes.line_two_div}>
             <p className={classes.line_two}>I'm a B.Sc. Information Technology student and aspiring Full Stack Developer with experience in React.js, Python, Django, MySQL, JavaScript, HTML, CSS, and Tailwind CSS. I enjoy building responsive web applications, solving real-world problems through code, and continuously learning new technologies. My goal is to become a skilled Software Engineer who creates impactful digital experiences</p>
           </div>

            <div className={classes.boxs}>
                {my_info.map(({number,title})=>{
                    return (
                        <div className={classes.box}>
                            <h1 className={classes.box_h1}>{number}</h1>
                            <p className={classes.box_p}>{title}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default About
