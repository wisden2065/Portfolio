import React, { useContext, useState } from 'react';
import Slider from 'react-slick';
import { MyContext } from '../../Context/MyAppContext';

import class2 from '../../assets/Images/teach.jpg';
import class3 from '../../assets/Images/teach2.jpeg';
import class4 from '../../assets/Images/field.jpg';
import class5 from '../../assets/Images/web-dev.jpeg';

import Testimonials from '../Testimonials';
import './About.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Experience from '../Experiences/Experiences';

const images = [class4, class5,class4, class3];

const fullText = `👋 Hi, I'm Wisdom Nnaji — a Software Engineer with a background in Crop Science Technology from the Federal University of Technology, Owerri (FUTO).

Growing up in North Central Nigeria shaped my curiosity and love for learning. After earning my first degree, I made a bold move to follow my passion for tech by completing a 6-month Diploma in Software Engineering — and I haven’t looked back since.

I currently work with Awata Technologies Ltd, where I build scalable web and mobile applications that solve real-world problems. My work goes beyond writing code — I care deeply about building meaningful, user-focused digital experiences that drive impact.

I’m also passionate about mentoring junior developers, sharing knowledge, and contributing to the growth of others in the tech community.

Outside of code, I'm an enthusiast of art, science, and technology — and I enjoy exploring the intersection where creativity meets logic.`;

const About = () => {
  const { theme } = useContext(MyContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedText = isExpanded ? fullText : fullText.slice(0, 450) + '...';

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    pauseOnHover: true
  };

  return (
    <section className={`${theme === 'light' ? 'bg-light text-dark' : 'bg-black text-white' }`}>
      <section
        id="about-section"
        className={`about__section py-5 ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-white'}`}
      >
        <div className="container-lg">
          <h2 className="text-center fw-bold mb-5 display-6">About Me</h2>

          <div className="row align-items-center g-5">
            {/* Image Slider */}
            <div className="col-lg-5">
              <Slider {...sliderSettings}>
                {images.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="img-fluid rounded-4 shadow"
                      style={{ maxHeight: '450px', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Text Block */}
            <div className="col-lg-7">
              <h4 className="mb-3 fw-semibold">From Crops to Code — A Journey Fueled by Passion</h4>
              <p className={`lh-lg ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-white'}`}>
                {displayedText}
                <span
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="ms-2 text-primary"
                  role="button"
                  style={{ fontWeight: 500, fontSize: 'clamp(0.9rem, 1.1vw, 1rem)' }}
                >
                  {isExpanded ? 'see less' : 'see more...'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Experience />
      <Testimonials />
    </section>
  );
};

export default About;
