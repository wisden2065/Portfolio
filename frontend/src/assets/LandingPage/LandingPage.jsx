import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { MyContext } from '../Context/MyAppContext';

import profilePic from '../Images/MyPic.png';
import web from '../Images/fullstack.png';
import mobile from '../Images/mobile.webp';
import training from '../Images/training.png';

import Skills from '../Components/SKills/Skills';
import About from '../Components/About/About';

import LandingBg from '../Images/codingBg.jpg'
import FAQ from '../Components/FAQ/FAQ';

const skillBadges = [
  { label: 'Web Development', icon: web },
  { label: 'Mobile Apps', icon: mobile },
  { label: 'Mentorship & Training', icon: training }
];

const socialLinks = [
  { icon: faLinkedinIn, href: 'https://linkedin.com/in/your-profile' },
  { icon: faGithub, href: 'https://github.com/your-profile' },
  { icon: faMedium, href: 'https://medium.com/@your-profile' }
];

const LandingPage = () => {
  const { theme } = useContext(MyContext);

  return (
    <>
      <section
        id="home-section"
        className={`py-5 px-3 px-md-5 ${theme === 'light' ? 'bg-light text-dark' : 'bg-black text-white'}`}
        style={{
          // backgroundImage: `url(${LandingBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
         
          zIndex:0
          // backgroundPosition: 'center center',
          // minHeight: '100vh',
        }}
      >
        <div className="container-lg" >
          <div className="row align-items-center g-5">

            {/* Profile Image */}
            <div className="col-md-5 text-center">
              <img
                src={profilePic}
                alt="Wisdom Nnaji"
                className="img-fluid rounded-circle shadow-lg"
                style={{ width: '260px', height: '260px', objectFit: 'cover'}}
              />
            </div>

            {/* Text Content */}
            <div className="col-md-7">
              <h1 className="display-5 fw-bold mb-3">
                Hi, I'm <span className="text-primary">Wisdom Nnaji</span>
              </h1>
              <p className="lead mb-4">
                A Software Engineer based in Abuja. I design & build fullstack applications with precision, performance and purpose.
              </p>

              {/* Skill Highlights */}
              <div className="d-flex flex-wrap gap-3 mb-4">
                {skillBadges.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill border"
                    style={{ fontSize: '0.9rem', background: 'rgba(255,255,255,0.05)' }}
                  >
                    <img src={item.icon} alt={item.label} style={{ width: 24, height: 24 }} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="d-flex gap-3 flex-wrap mb-4">
                <a href="#contact-section" className="btn btn-outline-info btn-sm">
                  Let's Talk
                </a>
                <a href="/cv.pdf" className="btn btn-outline-success btn-sm" download>
                  Download CV <FontAwesomeIcon icon={faDownload} className="ms-2 text-info" />
                </a>
              </div>

              {/* Social Icons */}
              <div className="d-flex gap-4 fs-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-muted hover:text-primary"
                  >
                    <FontAwesomeIcon className={`${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-white' }`} icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <About />
      <FAQ />
    </>
  );
};

export default LandingPage;
