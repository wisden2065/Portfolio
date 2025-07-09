
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/Components/Header/Header'
import LandingPage from './assets/LandingPage/LandingPage'
import Skills from './assets/Components/SKills/Skills'
import Project from './assets/Components/Projects/Project'
import Form from './assets/Components/Form/Form'
import Footer from './assets/Components/Footer/Footer'
import Services from './assets/Components/Services/Services';
import Blog from './assets/Components/Blog/Blog';
import Navbar from './assets/Components/Navbar/Navbar';
import { MyContext } from './assets/Context/MyAppContext';

const App = () => {
  const {theme} = useContext(MyContext)
  return (
    <div className={theme==='light'?'bg-light':'bg-black'}>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={ <Blog />} />
        <Route path='/work' element={<Project />} />
        <Route path='/contact' element={<Form/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
