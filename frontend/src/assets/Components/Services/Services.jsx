import React, { useContext } from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobileAlt, faChalkboardTeacher, faChartLine, faCode, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import mockup1 from '../../Images/mockup1-desktop.png';
import mockup2 from '../../Images/mockup2-desktop.png';
import { MyContext } from '../../Context/MyAppContext';

const services = [
  {
    icon: faLaptopCode,
    title: 'Fullstack Web Development',
    description: 'Custom websites and web apps using modern stacks (React, Node.js, MongoDB, etc.) that scale beautifully.',
    color: 'primary'
  },
  {
    icon: faMobileAlt,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps using React Native for seamless user experiences across devices.',
    color: 'success'
  },
  {
    icon: faChalkboardTeacher,
    title: 'Training & Mentorship',
    description: 'Hands-on coding mentorship, workshops, and training programs for individuals and dev teams.',
    color: 'warning'
  },
  {
    icon: faChartLine,
    title: 'Business Solutions',
    description: 'Tech solutions tailored for startups & SMEs to automate workflows and boost customer experience.',
    color: 'danger'
  },
  {
    icon: faCode,
    title: 'Custom Software Development',
    description: 'From idea to deployment — bespoke software built for unique business needs.',
    color: 'info'
  },
  {
    icon: faCloudUploadAlt,
    title: 'Cloud & DevOps',
    description: 'Deploy, scale, and monitor apps using AWS, DigitalOcean, CI/CD pipelines, and best DevOps practices.',
    color: 'secondary'
  }
];

const projects = [
  {
    image: mockup1,
    title: 'Konga Clone – Smart E-Commerce Platform',
    description: 'A full-featured e-commerce platform inspired by Konga, enhanced with AI product recommendations, live chat, and secure auth.',
    stack: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
    link: '#'
  },
  {
    image: mockup2,
    title: 'Vaga Foods – Smart Food Ordering App',
    description: 'A location-aware food app recommending top restaurants based on user location, simplifying discovery and ordering.',
    stack: ['React', 'Node.js', 'MongoDB', 'Bootstrap', 'Geolocation API'],
    link: '#'
  }
];

const Services = () => {

  const {theme} = useContext(MyContext)
  return (
    <div className={`container py-5 ${theme === 'light' ? 'bg-light text-dark' : 'bg-black text-white' } `} >
      {/* Services Section */}
      <section className="mb-5">
        <div className="text-center mb-5">
          <h2 className={`fw-bold display-6 ${theme === 'light' ? 'text-muted ' : 'text-white ' }`}>My Services</h2>
          <p className={`${theme === 'light' ? 'text-muted ' : 'text-white ' }`}>I help individuals and businesses grow with clean, scalable tech solutions.</p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className={`card p-4 h-100 service-card ${theme === 'light' ? 'bg-light text-dark  border-0 shadow rounded-4' : 'bg-black border rounded-3 text-white ' }`}>
                <div className={`icon-box text-${service.color} mb-3 fs-2`}>
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h5 className={`fw-bold ${theme === 'light' ? 'text-muted ' : 'text-white ' }`}>{service.title}</h5>
                <p className={` ${theme === 'light' ? 'text-muted ' : 'text-white ' }`}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Featured Projects</h2>
        </div>
        {projects.map((project, i) => (
          <div className="row align-items-center mb-5" key={i}>
            <div className={`col-md-6 mb-4 mb-md-0 ${i % 2 !== 0 ? 'order-md-2' : ''}`}>
              <img src={project.image} alt="Project Mockup" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold">{project.title}</h3>
              <p className={`${theme === 'light' ? 'text-muted ' : 'text-white ' }`}>{project.description}</p>
              <div className="mb-3">
                {project.stack.map((tech, idx) => (
                  <span key={idx} className="badge bg-secondary me-2 mb-1">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="btn btn-outline-primary">View Live</a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
