import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark,
  faMoon,
  faSun
} from '@fortawesome/free-solid-svg-icons';
import { MyContext } from '../../Context/MyAppContext';
import './Navbar.css';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const { theme, setTheme } = useContext(MyContext);
  const [active, setActive] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    console.log('Current Theme:', theme);
  }, [theme]);

  return (
    <nav className={`navbar px-5  d-flex justify-content-between align-items-center `}>
      <a href="/" className="navbar-logo">MovingMachine {'</>'}</a>

      {/* Main Nav */}
      <ul className="navbar-links d-none d-md-flex">
        {navItems.map(({ name, path }) => (
          <NavLink key={name} to={path}>
            <li
              className={active === name ? 'active' : ''}
              onClick={() => setActive(name)}
            >
              {name}
            </li>
          </NavLink>
        ))}
      </ul>

      {/* Icons */}
      <div className="icon-container d-flex align-items-center gap-3">
        <span className='rounded-circle d-flex justify-content-center align-items-center' style={{backgroundColor:`${theme=='light'?'grey':'white'}`, height:'30px', width:'30px', cursor:'pointer'}}>
            <FontAwesomeIcon
            icon={theme === 'light' ? faMoon : faSun}
            className={`icon cursor-pointer ${theme} rounded-circle`}
            onClick={toggleTheme}
            
          />
        </span>
        
        <FontAwesomeIcon
          icon={isMenuOpen ? faXmark : faBars}
          className="icon menu-toggle cursor-pointer d-md-none"
          onClick={toggleMenu}
        />
      </div>

      {/* Dropdown (Mobile Only) */}
      {isMenuOpen && (
        <div className="mobile-menu d-md-none position-absolute end-0 top-100 mt-2 p-3 shadow rounded bg-white">
          <ul className="list-unstyled mb-0">
            {navItems.map(({ name, path }) => (
              <NavLink key={name} to={path}>
                <li
                  className={`py-2 px-3 ${active === name ? 'active' : ''}`}
                  onClick={() => {
                    setActive(name);
                    setIsMenuOpen(false);
                  }}
                >
                  {name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
