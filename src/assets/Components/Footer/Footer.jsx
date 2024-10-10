import React from 'react'
import './Footer.css'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer >
      <div className='footer'>
        <h1>Wisdom</h1>
        <img src={faLinkedin} alt="" />
        <img src={faLinkedin} alt="" />
        <img src={faLinkedin} alt="" />
        <p>&copy; Nnanyereugo Wisdom. All Right Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
