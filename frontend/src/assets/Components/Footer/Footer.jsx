import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const socialLinks = [
  { icon: faLinkedin, href: 'https://linkedin.com/in/your-profile' },
  { icon: faGithub, href: 'https://github.com/your-profile' },
  { icon: faTwitter, href: 'https://twitter.com/your-profile' }
];

const Footer = () => {
  return (
    <footer className="footer-wrapper py-4 bg-dark text-light">
      <div className="container text-center">
        <h4 className="fw-bold mb-3">Wisdom Nnaji</h4>
        <div className="d-flex justify-content-center gap-4 mb-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-5"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
        <p className="mb-0 small">&copy; {new Date().getFullYear()} Nnanyereugo Wisdom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

