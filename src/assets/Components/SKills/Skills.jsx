import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <section className='skills_section'>
        <div className="skills_wrapper">
            <h3 className='skills_title'>Skills</h3>
            <div className='skills_'>
                <div className="skills_cont">
                    <h3>Professional Skills</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, ea porro vitae tempore maxime tenetur?</p>
                    <div className="html _progress">
                        <div className="bar"></div>
                    </div>
                    <div className="css _progress">
                        <div className="bar"></div>
                    </div>
                    <div className="react _progress">
                        <div className="bar"></div>
                    </div>
                    <div className="php _progress">
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}

export default Skills
