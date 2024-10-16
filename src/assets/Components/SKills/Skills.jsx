import React from 'react'
import './Skills.css'
import html_icon from '../../../assets/Icons/html_icon.png'
import css_icon from '../../../assets/Icons/css_icon.jpeg'
import react_icon from '../../../assets/Icons/react_icon.png'
import php_icon from '../../../assets/Icons/php_icon.png'
const Skills = () => {
  return (
    <section className='skills_section'>
        <div className="skills_wrapper">
            <h3 className='skills_title'>Skills</h3>
            <div className='skills_'>
                <div className="skills_cont">
                    {/* <div class="flex"> */}
                        <h3>Professional Skills</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, ea porro vitae tempore maxime tenetur?</p>
                    {/* </div> */}
                    <div className="html _progress">
                        <div className='img_txt'>
                            <img src={html_icon} alt="" />
                            <h4>HTML</h4>
                        </div> 
                        <span>90%</span>
                        <div className="bar __html"></div>
                    </div>
                    <div className="css _progress">
                        <div className='img_txt'>
                            <img src={css_icon} alt="" />
                            <h4>CSS</h4>
                        </div> 
                        <span>75%</span>
                        <div className="bar __css"></div>
                    </div>
                    <div className="react _progress">
                        <div className='img_txt'>
                            <img src={react_icon} alt="" />
                            <h4>REACT JS</h4>
                        </div> 
                        <span>30%</span>
                        <div className="bar __react"></div>
                    </div>
                    <div className="php _progress">
                        <div className='img_txt'>
                            <img src={php_icon} alt="" />
                            <h4>PHP</h4>
                        </div> 
                        <span>40%</span>
                        <div className="bar __php"></div>
                    </div>
                </div>
                <div id='empty'>

                </div>
            </div>
        </div>
       
    </section>
  )
}

export default Skills
