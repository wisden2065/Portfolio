import React from 'react'
import './Navbar.css'
import menu_icon from '../../Images/menu_bar.png'
import { useState } from 'react'
const Navbar = () => {
  // add a state to toggle active btn
  const [active, setActive] = useState('');

  // click handler function
  // function setActive(e){
  //   // console.log(e.target);
    
  //   // if the button clicked doesn't have an active class of clicked, we add the active
  //   setClicked(c=> c = c =='active'? '': 'active')  
  // }
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
              <img src={menu_icon} alt="" className='menu_icon' />   
          </nav>
    )
}

export default Navbar
