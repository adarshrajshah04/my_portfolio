import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
     <Nav/>
     <Home/>
     <About/>
     <Skills/>
     <Experience/>
     <Projects/>
     <Contact/>
    </div>
  )
}

export default App
