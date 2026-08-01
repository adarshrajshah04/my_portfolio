import React, { useRef } from 'react'



const Nav = () => {
  const listShow = useRef(null)
  
  function bar(){
    listShow.current.classList.toggle('active')
  
  }

  const headingRef  = useRef(null)

  window.onscroll=function(){
    let abc= document.documentElement
    
    let h=headingRef.current

    if(abc.scrollTop>250){
      h.classList.add('change')
    }else{
      h.classList.remove('change')
    }
    
    
  }

 

  return (
    <div ref={headingRef} className='nav_main'>
      <div className='nav_logo'>
        <h1>Portfolio</h1>
        <div className='nav_bar' onClick={bar}><i class="fa-solid fa-bars"></i></div>
      </div>

      <div ref={listShow} className='nav_list'>
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

      
    </div>
  )
}

export default Nav
