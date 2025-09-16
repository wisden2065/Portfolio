import React, { useContext } from 'react';
import ref1 from '../assets/Images/ref.jpg'
import ref2 from '../assets/Images/ref2.jpg'
import { MyContext } from '../Context/MyAppContext';

import styles from "./components.module.css"


const testimonials = [
  {
    name: 'Frank I.',
    role: 'Director, Awata Tech.',
    image: `./${ref1}`,
    message:
      '“Wisdom helped us launch our web platform from scratch — his attention to detail and ability to simplify complex ideas made the whole process smooth and enjoyable.”'
  },
  {
    name: 'Cynthia A.',
    role: 'Frontend Developer',
    image: `./${ref2}`,
    message:
      '“As a beginner, I struggled with React. Wisdom’s mentorship helped me build my first fullstack project. I feel more confident than ever!”'
  },
  {
    name: 'Kelah Tims.',
    role: 'Product Manager, VegaIT',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    message:
      '“Working with Wisdom felt like a partnership. He’s reliable, technically sound, and genuinely invested in delivering value.”'
  }
];

const Testimonials = () => {
  const {theme} = useContext(MyContext)

  return (
    <section id="testimonials" className={`py-5 bg-light ${theme === 'light' ? 'bg-light text-dark' : 'bg-black text-white' } `}>
      <div className={`container ${theme === 'light' ? 'bg-light text-dark ' : 'bg-black text-white ' }}`}>
        <h2 className="text-center fw-bold mb-5 display-6">What People Say</h2>

        <div className="row justify-content-center g-4">
          {testimonials.map((person, i) => (
            <div key={i} className={` col-md-6 col-lg-4`}>
              <div className={`card shadow-sm rounded-4 p-4 h-100 testimonial-card ${theme === 'light' ? 'bg-light text-dark ' : 'bg-black border rounded-3 text-white ' }}`}>
                <img
                  src={person.image}
                  alt={person.name}
                  className="rounded-circle mx-auto mb-3"
                  width="80"
                  height="80"
                  style={{ objectFit: 'cover' }}
                />
                <div className={`mb-0 ${styles.testimonialsCard}`}>
                  <p className={` fst-italic ${theme === 'light' ? 'text-muted ' : 'text-white ' }}`}>{person.message}</p>
                  <div>
                    <h5 className={`fw-semibold mb-0 text-center ${theme === 'light' ? 'text-muted ' : 'text-white ' }`}>{person.name}</h5>
                    <small className={ ` d-block text-center ${theme === 'light' ? 'text-muted ' : 'text-white ' }`}>{person.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
