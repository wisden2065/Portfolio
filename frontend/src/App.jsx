
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './root/Components/Header/Header'
import LandingPage from './root/LandingPage/LandingPage'
import Project from './root/Components/Projects/Project'
import Form from './root/Components/Form/Form'
import Footer from './root/Components/Footer/Footer'
import Services from './root/Components/Services/Services';
import Blog from './root/Components/Blog/Blog';
import Navbar from './root/Components/Navbar/Navbar';
import { MyContext } from './root/Context/MyAppContext';

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
