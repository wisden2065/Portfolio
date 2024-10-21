import React from 'react'
import './Navbar.css'
import menu_icon from '../../Images/menu_bar.png'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  // add a state to toggle active btn
  const [active, setActive] = useState('');

    return (
          <nav>
              <a href="">Wisdom</a>
              <ul>
                  <li className={active === 'About'? 'active': ''}  onClick={()=>{setActive('About')}}>About</li>
                  <li className={active === ''? 'active': ''}   onClick={()=>{setActive()}}>Home</li>
                  <li className={active === 'Skills'? 'active': ''}  onClick={()=>{setActive('Skills')}}>Skills</li>
                  <li className={active === 'Work'? 'active': ''}  onClick={()=>{setActive('Work')}}>Work</li>
                  <li className={active === 'Contact'? 'active': ''}  onClick={()=>{setActive('Contact')}}>Contact</li>
              </ul>   
              <FontAwesomeIcon className='menu_icon' icon={faBars} /> 
          </nav>
    )
}

export default Navbar
