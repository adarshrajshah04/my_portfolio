import React from 'react'

const Nav = () => {
  return (
    <div className='nav_main'>
      <div className='nav_logo'>
        <h1>Portfolio</h1>
      </div>

      <div className='nav_list'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </div>

      <div >
        <button className='nav_btn'>Lets's Talk  <i className="bi bi-arrow-up-right"></i></button>
      </div>

      <div className='nav_bar'><i class="fa-solid fa-bars"></i></div>
    </div>
  )
}

export default Nav
