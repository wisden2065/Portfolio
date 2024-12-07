import React from 'react'
import './Projects.css'
import proj1 from '../../Images/proj1.jpg'
const Project = () => {
    let projects = [
        {
            "Project Title": "Munchino E-commerce",
            "Project Thumbnail": proj1,
            "Project Description": "This is a mini e-commerce store for food delivery",
            "Project Stack": ['HTML', 'CSS', 'JAvascript', 'PHP']
        },
        {
            "Project Title": "Konga Clone",
            "Project Thumbnail": proj1,
            "Project Description": "This is a mini clone for konga, a successful e-commerce store in Nigeria",
            "Project Stack": ['HTML', 'CSS', 'JAvascript', 'NodeJs', 'ExpressJs']
        }
    ]
  return (
    <section className='projects_' id='work-section'>
       <h3 className='skills_title'>Projects</h3>
       <div className="projectWrapper">
            <div id='projectsCont'>
              {projects.map(project=>{
                return  <div className="proj">
                            <div className="overlay">
                                <h4>{project['Project Title']}</h4>
                                <p>{project['Project Description']}</p>
                                <p>Built with: {project['Project Stack'].map(p=> p.split(" "))}</p>
                            </div>
                            <img src={proj1} alt="" />
                           
                        </div>
              })}
            </div>

       </div>
    </section>
  )
}

export default Project
