import React, { useContext, useState } from 'react';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { MyContext } from '../../Context/MyAppContext';

const Form = () => {
  const {theme} = useContext(MyContext)
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    contact_text: '',
  });

  const [error, setError] = useState('');

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setContactDetails((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    const pattern = /^[\w.%+-]+@(gmail\.com|yahoo\.com)$/;
    return pattern.test(email);
  };

  const sendMail = (e) => {
    e.preventDefault();

    if (!validateEmail(contactDetails.email)) {
      setError('Please enter a valid Gmail or Yahoo email address.');
      return;
    }

    setError('');
    console.log('Form submitted:', contactDetails);
    // TODO: Handle backend/API call here
  };

  return (
    <div className={`container py-5 `}>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className={`row contact-card shadow rounded overflow-hidden ${theme === 'light' ? 'bg-light text-dark ' : 'bg-black border rounded-3 text-white ' }`}>
            {/* Contact Info */}
            <div className="col-md-5 contact-left text-white d-flex flex-column justify-content-center p-4" style={{ backgroundColor: '#222' }}>
              <div>
                <h2 className="mb-3">Let's Talk</h2>
                <p><i className="bi bi-geo-alt-fill me-2"></i>Abuja, Nigeria</p>
                <p><i className="bi bi-envelope-fill me-2"></i>hello@nnanyereugo.dev</p>
                <p><i className="bi bi-telephone-fill me-2"></i>+234 707 209 8818</p>
                <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                <h5>Follow me</h5>
                <div className="social-icons mt-2 d-flex gap-3">
                  <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                  <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#"><FontAwesomeIcon icon={faMedium} /></a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-7 p-5">
              <h3 className="mb-4">Send a Message</h3>
              <form onSubmit={sendMail} noValidate>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`form-control ${theme === 'light' ? 'bg-light text-dark ' : 'bg-black border rounded-3 text-white ' }`}
                    placeholder={`${theme != 'dark'?'Please enter your full name':''}`}
                    value={contactDetails.name}
                    onChange={handleChanges}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`form-control ${error ? 'is-invalid' : ''} ${theme === 'light' ? 'bg-light text-dark ' : 'bg-black border rounded-3 text-white ' }`}
                    placeholder={`${theme != 'dark'?'Enter a valid email':''}`}
                    value={contactDetails.email}
                    onChange={handleChanges}
                    required
                  />
                  {error && <div className="invalid-feedback">{error}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="contact_text" className="form-label">Your Message</label>
                  <textarea
                    name="contact_text"
                    id="contact_text"
                    rows="4"
                    className={`form-control ${theme === 'light' ? 'bg-light text-dark ' : 'bg-black border rounded-3 text-white ' }`}
                    placeholder={`${theme != 'dark'?'What would you like to discuss..':''}`}
                    value={contactDetails.contact_text}
                    onChange={handleChanges}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary px-4">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
