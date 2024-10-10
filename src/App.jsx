
import React from 'react'
import './App.css'
import Header from './assets/Components/Header/Header'
import LandingPage from './assets/LandingPage/LandingPage'
import About from './assets/Components/About/About'
import Skills from './assets/Components/SKills/Skills'
import Project from './assets/Components/Projects/Project'
import Form from './assets/Components/Form/Form'
import Footer from './assets/Components/Footer/Footer'
const App = () => {
  return (
    <>
      {/* <div id='header__cont'> */}
        <Header />
      {/* </div> */}
      <LandingPage />
        <About />
        <Skills />
        <Project />
        <Form/>
        <Footer />
    </>
  )
}

export default App
