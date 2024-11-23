import React from 'react'
import './Projects.css'
import proj1 from '../../Images/proj1.jpg'
const Project = () => {
  return (
    <section className='projects_' id='work-section'>
       <h3 className='skills_title'>Projects</h3>
       <div className="projectWrapper">
            <div id='projectsCont'>
                <div className="proj">
                    <div className="overlay"></div>
                    <img src={proj1} alt="" />
                        <div className='btnCont'>
                        <a href="">See Project Live</a>
                        <a href="">View Source code</a>
                    </div>
                </div>
                <div className="proj">
                    <div className="overlay"></div>
                    <img src={proj1} alt="" />
                    <div className='btnCont'>
                        <a href="https://kongaui-clone-bq0jw5src-nnanyereugos-projects.vercel.app/">See Project Live</a>
                        <a href="https://github.com/wisden2065/kongaclone.git">View Source code</a>
                    </div>
                </div>
                <div className="proj">
                    <div className="overlay"></div>
                    <img src={proj1} alt="" />
                    <div className='btnCont'>
                        <a href="">See Project Live</a>
                        <a href="">View Source code</a>
                    </div>
                </div>
            </div>

       </div>
    </section>
  )
}

export default Project
