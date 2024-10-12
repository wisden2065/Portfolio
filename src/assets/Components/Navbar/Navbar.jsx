import React from 'react'
import './Navbar.css'
import menu_icon from '../../Images/menu_bar.png'
const Navbar = () => {
  return (
        <nav>
            <a href="">Wisdom</a>
            <ul>
                <li className='active'>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>    
            <img src={menu_icon} alt="" className='menu_icon' />   
        </nav>
  )
}

export default Navbar
