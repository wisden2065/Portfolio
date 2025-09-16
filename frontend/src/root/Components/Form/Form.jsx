import React, { useContext, useState } from 'react';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { MyContext } from '../../Context/MyAppContext';

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import abjPic from '../../assets/Images/abj.jpeg'





const Form = () => {
  const {theme} = useContext(MyContext)
    // button loading state
const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: '',
  });

  const [error, setError] = useState('');

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    const pattern = /^[\w.%+-]+@(gmail\.com|yahoo\.com)$/;
    return pattern.test(email);
  };

// google form submision
  const handleSubmit = async (e) => {
          e.preventDefault();
          // Handle form submission logic here
          console.log('payload', formData);
          try {
              setIsLoading(true)
              const response = await fetch("https://script.google.com/macros/s/AKfycbyA3HhGr1LyBhv-OUVrPZ8wzjfTEQKxH7Sm14Qa9uEVEWLu0WLwkMQ7pybQMINEFcUM/exec", {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                body: new URLSearchParams({
                  Name: formData.Name,
                  Email: formData.Email,
                  Message: formData.Message,
                })
              });


              const text = await response.text();
              setIsLoading(false)
              console.log("Success:", text);
            if (text === "Form Submitted!") {
              toast.success(text, {
                            autoClose: 5000
                          });
              setFormData({
                Name: '',
                Email: '',
                Message:'',
              })

            } else {
              toast.error("Something went wrong", 
                          {
                    autoClose: 5000
                  });
              setFormData({
                Name: '',
                Email: '',
                Message:'',
              })
            }
          } catch (error) {
            console.error("Error:", error);
            toast.error("Error in Form Submission!")
          }
    };


  const sendMail = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.Email)) {
      setError('Please enter a valid Gmail or Yahoo email address.');
      return;
    }

    setError('');
    console.log('Form submitted:', formData);
    // TODO: Handle backend/API call here
    
  };

  return (
    <div className={`container py-5 `}>

      {/* toast message */}
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
            />
            

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className={`row contact-card shadow rounded overflow-hidden ${theme === 'light' ? 'bg-light text-dark ' : 'bg-black border rounded-3 text-white ' }`}>
            {/* Contact Info */}
            <div 
  className="col-md-5 contact-left text-white d-flex flex-column justify-content-center p-4 position-relative" 
  style={{ 
    background: `url(${abjPic})`, 
    backgroundPosition: 'center center', 
    aspectRatio: '1/1',
    backgroundSize: 'cover'
  }}
>
  {/* Overlay */}
  <div 
    style={{ 
      position: 'absolute', 
      inset: 0, 
      backgroundColor: 'rgba(0,0,0,0.6)' 
    }} 
  />

  {/* Content */}
              <div className="position-relative">
                <h2 className="mb-3">Let's Talk</h2>
                <p><i className="bi bi-geo-alt-fill me-2"></i>Abuja, Nigeria</p>
                <p><i className="bi bi-envelope-fill me-2"></i>hello@movingmachine.dev</p>
                <p><i className="bi bi-telephone-fill me-2"></i>+234 707 209 8818</p>
                <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                <h5>Follow me</h5>
                <div className="social-icons mt-2 d-flex gap-3">
                  <a href="https://github.com/wisden2065"><FontAwesomeIcon icon={faGithub} /></a>
                  <a href="https://www.linkedin.com/in/nnanyereugo-nnaji-537731210/"><FontAwesomeIcon icon={faLinkedin} /></a>
                  <a href="https://medium.com/@nnajiwisdom1998"><FontAwesomeIcon icon={faMedium} /></a>
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
                    name="Name"
                    id="name"
                    className={`form-control ${theme === 'light' ? 'bg-light text-dark ' : 'bg-black border rounded-3 text-white ' }`}
                    placeholder={`${theme != 'dark'?'Please enter your full name':''}`}
                    value={formData.Name}
                    onChange={handleChanges}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    className={`form-control ${error ? 'is-invalid' : ''} ${theme === 'light' ? 'bg-light text-dark ' : 'bg-black border rounded-3 text-white ' }`}
                    placeholder={`${theme != 'dark'?'Enter a valid email':''}`}
                    value={formData.Email}
                    onChange={handleChanges}
                    required
                  />
                  {error && <div className="invalid-feedback">{error}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="contact_text" className="form-label">Your Message</label>
                  <textarea
                    name="Message"
                    id="contact_text"
                    rows="4"
                    className={`form-control ${theme === 'light' ? 'bg-light text-dark ' : 'bg-black border rounded-3 text-white ' }`}
                    placeholder={`${theme != 'dark'?'What would you like to discuss..':''}`}
                    value={formData.Message}
                    onChange={handleChanges}
                    required
                  />
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary px-4">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
