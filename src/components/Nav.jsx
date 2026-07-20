import React from 'react'


const Nav = () => {
  return (
    <div className='nav_main'>
      <div className='nav_logo'>
        <h1>Portfolio</h1>
      </div>

      <div className='nav_list'>
        <a href="#Home"><li>Home</li></a>
        <a href="#About"><li>About</li></a>
        <a href="#Skills"><li>Skills</li></a>
        <a href="#Experience"><li>Experience</li></a>
        <a href="#Project"><li>Projects</li></a>
        <a href="#contact"><li>Contact</li></a>
      </div>

      <div >
       <a href="#contact"> <button className='nav_btn'>Lets's Talk  <i className="bi bi-arrow-up-right"></i></button></a>
      </div>

      <div className='nav_bar'><i class="fa-solid fa-bars"></i></div>
    </div>
  )
}

export default Nav
