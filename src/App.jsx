import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'

const App = () => {
  return (
    <div>
     <Nav/>
     <Home/>
     <About/>
     <Skills/>
     <Experience/>
     <Projects/>
    </div>
  )
}

export default App
