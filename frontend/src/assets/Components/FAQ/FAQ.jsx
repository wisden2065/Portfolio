import React, { useContext, useState } from 'react';
import styles from './FAQ.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { MyContext } from '../../Context/MyAppContext';

const faqList = [
    {
    question: 'Why do you call yourself "Moving Machine"?',
    answer:
        '"Moving Machine" was a nickname I earned during my undergraduate years while teaching fellow students. It symbolizes momentum, mastery, and a passion for constantly evolving in my field — always moving, always delivering.',
    },
  {
    question: 'What services do you offer?',
    answer:
      'I specialize in frontend and fullstack development, UI/UX design, and scalable web application architecture. I also provide consulting on digital transformation projects.',
  },
  {
    question: 'How do you work with clients?',
    answer:
      'I follow a collaborative and transparent process — discovery, design, development, testing, and deployment — with regular progress updates.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'React.js, Next.js, TailwindCSS, Node.js, Express, MongoDB, PostgreSQL, and deployment tools like Vercel and Docker.',
  },
  {
    question: 'How can I get a quote?',
    answer:
      'You can fill out the contact form or reach me directly via email. I’ll respond with a project scope and estimate within 24 hours.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const {theme} = useContext(MyContext)

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={` mb-4 ${styles.faqSection} ${theme === 'light' ? 'bg-light text-dark ' : 'bg-black border rounded-3 text-white ' }`}>
      <h2 className={`text-center ${theme === 'light' ? 'text-muted ' : 'text-white ' }`}>Frequently Asked Questions</h2>
      <div className={styles.faqContainer}>
        {faqList.map((faq, index) => (
          <div key={index} className={`${styles.faqItem} ${theme === 'light' ? 'bg-light text-dark ' : 'bg-black border rounded-3 text-white '}}`}>
            <div
              className={styles.faqQuestion}
              onClick={() => toggleIndex(index)}
            >
              <h4 className={`${theme === 'light' ? 'text-muted ' : 'text-white ' }`}>{faq.question}</h4>
              {activeIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
            {activeIndex === index && (
              <div className={styles.faqAnswer}>
                <p className={`${theme === 'light' ? 'text-muted ' : 'text-white ' }`}>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
