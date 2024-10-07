
import React from 'react'
import './App.css'
import Header from './assets/Components/Header/Header'
import LandingPage from './assets/LandingPage/LandingPage'
import About from './assets/Components/About/About'
import Skills from './assets/Components/SKills/Skills'
const App = () => {
  return (
    <>
      <div id='header__cont'>
        <Header />
      </div>
      <LandingPage />
      <About />
      <Skills />
    </>
  )
}

export default App
