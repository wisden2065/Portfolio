import React, { useContext } from 'react';
import BlogHeader from './BlogHeader';
import BlogLayout from './BlogLayout';

import code from '../../assets/Images/codingBg.jpg'
import { MyContext } from '../../Context/MyAppContext';

const Blog = () => {
  const {theme} = useContext(MyContext)
  return (
    <>
      <BlogHeader />
      <section style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
        <div
          className=" text-center text-white"
          style={{
            backgroundImage: 'url("/assets/blog-hero.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexBasis:1
          }}
        >
          <div className="container" style={{ background: `url(${code})`, padding: '2rem', borderRadius: '0.5rem' }}>
            <h1 className="display-4 fw-bold">Insights, Stories & Code</h1>
            <p className="lead mt-3">
              Welcome to the My Blog — where I share tech guides, tutorials, and My Personal Lifestyle.
            </p>
          </div>
        </div>
        <div className="container py-5">
            <div className="d-flex justify-content-center">
              <div className="card text-center shadow-sm" style={{ maxWidth: '500px' }}>
                <div className={`card-body ${theme === 'light' ? 'bg-light text-dark ' : 'bg-black border rounded-3 text-white ' }`}>
                  <h5 className="card-title mb-3">No Blog Posts Yet</h5>
                  <p className={`card-text ${theme === 'light' ? 'text-muted ' : 'text-white ' }`}>
                    Stay tuned — exciting articles, tips, and project updates will be published here soon.
                  </p>
                  <span role="img" aria-label="writing hand" style={{ fontSize: '2rem' }}>
                    ✍️
                  </span>
                </div>
              </div>
            </div>
          </div>
      </section>

      
    </>
  );
};

export default Blog;
