import React, { useContext } from 'react';
import style from '../components.module.css'
import { MyContext } from '../../Context/MyAppContext';

const Experience = () => {

  const {theme} = useContext(MyContext)

  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Awata Technologies Ltd',
      location: 'Abuja, FCT',
      period: 'July 2024 – Present',
      duties: [
        'Collaborated with brilliant engineers on small and enterprise level software products.',
        'Set up and managed payment gateway accounts (Paystack & Flutterwave) for clients.',
        'Mentored junior developers and interns.',
        'Delivered hands-on web development training sessions with real-world application.',
        'Worked with cross-functional teams to gather and analyze software requirements.',
        'Contributed to project documentation and internal development guidelines.',
        'Assisted in troubleshooting and configuring network systems as Switches, Routers and Firewalls for clients.',
      ],
    },
    {
      role: 'Diploma Software Engineer',
      company: 'Artificial Intelligence Technologies Ltd.',
      location: 'Abuja, FCT',
      period: 'Jan 2024 – Jul 2024',
      duties: [
        'Completed Full-Stack Development training (JavaScript, React.js, Node.js, PHP, MySQL).',
        'Participated in team-based coding challenges and group projects.',
        'Helped peers debug issues and understand core software development concepts.',
      ],
    },
  ];

  return (
    <section className={`container my-5 ${theme === 'light' ? 'bg-light text-dark' : 'bg-black text-white' }`}>
      <h2 className="mb-4 display-6 border-bottom pb-2">Work Experience</h2>

      {experiences.map(({ role, company, location, period, duties }, index) => (
        <article key={index} className="mb-4">
          <div className={` border rounded-3 shadow-sm p-4 ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-white' }`}>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h5 className="mb-1 fw-semibold">{role}</h5>
                <p className={`mb-0 ${theme === 'light' ? 'text-muted' : 'text-white' }`}>{company} — {location}</p>
              </div>
              <small className={`fst-italic ${theme === 'light' ? 'text-muted' : 'text-white' }`}>{period}</small>
            </div>

            <ul className={` mt-3 ps-3 d-block list-style-type-disc`}>
              {duties.map((duty, i) => (
                <li key={i} className={`${style.workBulletList} mb-1 ${theme === 'light' ? 'text-muted' : 'text-white' }`}>{duty}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Experience;
