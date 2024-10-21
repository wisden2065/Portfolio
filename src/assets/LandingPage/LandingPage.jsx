import React from 'react'
import './LandingPage.css'
import profilePic from '../Images/MyPic.png'
import linkedinIcon from '../Images/linkedin-in-brands-solid.svg'
import githubIcon from '../Images/github-brands-solid.svg'
import mediumIcon from '../Images/medium-brands-solid.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
// import { faCat } from '@awesome.me/kit-KIT_CODE/icons/sharp/solid'
// import { faDog } from '@awesome.me/kit-KIT_CODE/icons/sharp-duotone/solid'

const LandingPage = () => {
  return (
    <>
        <section className="selfCont_wrapper">
            <div id='self_cont'>
                <div id="profileImgCont">
                    <img className='profileImg' src={profilePic} alt="" />
                </div>
                <div className="profileCont">
                    <div className='profile_'>
                        <h3>Hi,
                            <br />
                            I'm <span className='name'>Wisdom</span>
                            <br /> A Software Engineer
                        </h3>
                        <div className='a-cont'>
                            <a href="">Contact</a><a href="">Download CV <FontAwesomeIcon icon={faDownload} /></a>
                        </div>
                        <div className='contactSvg'>
                            {/* <FontAwesomeIcon icon={fas.faHouse}/> */}
                            {/* <Linkedin color={'green'} /> */}
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <FontAwesomeIcon icon={faGithub} />
                            <FontAwesomeIcon icon={faMedium} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='contactSvg'>
                <img  src={linkedinIcon} alt="" />
                <img  src={githubIcon} alt="" />
                <img  src={mediumIcon} alt="" />
            </div> */}
        
        </section>
       
    </>
  )
}

export default LandingPage
