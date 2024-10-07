import React from 'react'
import './Navbar.css'
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
        </nav>
  )
}

export default Navbar
