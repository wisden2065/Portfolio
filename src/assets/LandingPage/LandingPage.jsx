import React from 'react'
import './LandingPage.css'
import profilePic from '../Images/MyPic.png'
import linkedinIcon from '../Images/linkedin-in-brands-solid.svg'
import githubIcon from '../Images/github-brands-solid.svg'
import mediumIcon from '../Images/medium-brands-solid.svg'

const LandingPage = () => {
  return (
    <>
        <div className="selfCont_wrapper">
            <div id='self_cont'>
                <div id="profileImgCont">
                    <img className='profileImg' src={profilePic} alt="" />
                </div>
                <div className="profileText">
                    <h3>Hi,
                        <br />
                        I'm <span className='name'>Wisdom</span>
                        <br /> A Web Engineer</h3>
                        <div className='btnCont'>
                            <a href="">
                                Contact
                            </a>
                            <a href="">
                                Download CV
                                {/* <i class="fa-solid fa-circle-down" style="color: #05f521;"></i> */}
                            </a>
                        </div>
                </div>
            </div>
        </div>
        <div className='contactSvg'>
            <img  src={linkedinIcon} alt="" />
            <img  src={githubIcon} alt="" />
            <img  src={mediumIcon} alt="" />
        </div>
        
    </>
  )
}

export default LandingPage
