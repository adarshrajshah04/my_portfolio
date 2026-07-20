import React from "react";
import adarsh from "../assets/images/adarsh.jpg";
import classes from "../assets/CSS/Home.module.css";

const Home = () => {
  return (
    <div className={classes.main}>
      <div className={classes.img_border}>
        <img src={adarsh} alt="" className={classes.image} />
      </div>

      <div className={classes.open_work}>
        <div className={classes.opne_dot}></div>
        <p className={classes.opne_work_text}> Open to Work</p>
      </div>

      <h1 className={classes.info}>
        I'm Adarshraj Shah, a{" "}
        <span className={classes.text_color}>Full Stack Python Developer</span>{" "}
        building modern, scalable web applications.
      </h1>
      <p className={classes.text_p}>
        I build scalable full-stack applications with Python, Django, React.js,
        and MySQL—creating fast, responsive, and user-centric digital
        experiences. Passionate about clean code, continuous learning, and
        solving real-world challenges through technology.
      </p>

      <div className={classes.btn1_div}>
        <button className={classes.btn1}>Viwe My Work</button>
        <button className={classes.btn2}>
          Let's Talk
          <i className={`bi bi-arrow-right ${classes.btn2_icon}`}></i>
        </button>
        <button className={classes.btn3}>
          <i class="bi bi-download"></i> My Resume
        </button>
      </div>

      <div className={classes.user_info_btn}>
        <div className={classes.user_m}>
          <a href="https://x.com/ADARSHRAJ5hah" target="_blank" className={classes.a_tag}>
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </div>

        <div className={classes.user_m}>
          <a href="linkedin.com/in/adarshraj-shah-a38518378"
            target="_blank"
          className={classes.a_tag} ></a>
          <i class="fa-brands fa-linkedin"></i>
        </div>

        <div className={classes.user_m}>
          <a href="https://github.com/adarshrajshah04" target="_blank" className={classes.a_tag}>
            <i class="bi bi-github"></i>
          </a>
        </div>
        <div>
          <a href=""></a>
        </div>
      </div>

    </div>
  );
};

export default Home;
