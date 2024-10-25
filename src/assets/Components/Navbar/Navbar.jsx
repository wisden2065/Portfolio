import React from 'react'
import './Navbar.css'
import menu_icon from '../../Images/menu_bar.png'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; 


const Navbar = () => {
  // add a state to toggle active btn
  const [active, setActive] = useState('');
//   state to check if the icon is clicked or not
    const [iconClicked, setIconClicked] = useState(false)
//   state to check if dropdown is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    // let menu = document.querySelector('.drop-down-wrapper');
    // let icon = document.querySelector('.menu_icon');
    function toggleDropdown(){
        // menu.classList.toggle('active');
        // icon.setAttribute('data-icon', 'xMark');
        // console.log(icon.attributes['data-icon'].value);
        setIsMenuOpen(p=> p = !p)
        setIconClicked(!iconClicked)

    }

    return (
          <nav>
              <a href="">Wisdom</a>
              <ul>
                  <li className={active === 'About'? 'active': ''}  onClick={()=>{setActive('About')}}><a href='#about-section'>About</a></li>
                  <li className={active === ''|| active ==='Home'? 'active': ''}   onClick={()=>{setActive('Home')}}><a href='#home-section'>Home</a></li>
                  <li className={active === 'Skills'? 'active': ''}  onClick={()=>{setActive('Skills')}}><a href='#skills-section'>Skills</a></li>
                  <li className={active === 'Work'? 'active': ''}  onClick={()=>{setActive('Work')}}><a href='#work-section'>Work</a></li>
                  <li className={active === 'Contact'? 'active': ''}  onClick={()=>{setActive('Contact')}}><a href='#contact-section'>Contact</a></li>
              </ul>   
              <FontAwesomeIcon className='menu_icon' icon={isMenuOpen == true? faXmark : faBars} onClick={toggleDropdown} />
             {/* condtionally render dropdown if icon clicked is true */}
             {iconClicked === true?
                 <div className="drop-down-wrapper active">
                    <div className="drop-down">
                        <ul>
                            <li><a href="#about-section">About</a></li>
                            <li><a href="#home-section">Home</a></li>
                            <li><a href="#work-section">Work</a></li>
                            <li><a href="#skills-section">Skills</a></li>
                            <li><a href="#contact-section">Contact</a></li>
                        </ul>
                    </div>
               </div>
               :
               <div className="drop-down-wrapper">
               <div className="drop-down">
                   <ul>
                       <li><a href="#about-section">About</a></li>
                       <li><a href="#home-section">Home</a></li>
                       <li><a href="#work-section">Work</a></li>
                       <li><a href="#skills-section">Skills</a></li>
                       <li><a href="#contact-section">Contact</a></li>
                   </ul>
               </div>
             </div> 
            }
          </nav>
    )
}

export default Navbar
