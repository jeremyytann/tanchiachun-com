import React from 'react'
import Navbar from '../Components/Navbars/Navbar'
import '../Utilities/Styles/Pages/AboutPage.css'
import aboutImg from '../Assets/About.jpg'

const AboutPage = () => {
    return (
        <div>
            <Navbar />

            <div className='about-container'>
                <div className='about-profile-container'>
                    <img src={aboutImg} alt="profileImage" className='about-profile-picture'/>
                </div>

                <div className='about-info-container'>
                    <div className='about-name-container'>
                        <span className='about-name-text'>
                            Jeremy Tan
                        </span>
                    </div>

                    <div className='about-description-container'>
                        <span className='about-description-text'>
                            I am a final year student at <strong>Beihang University</strong> in China pursuing a 
                            Bachelor of Computer Science and Technology and <strong>enjoy turning ideas into projects or products</strong>.
                        </span>
                    </div>

                    <div className='about-description-container'>
                        <span className='about-description-text'>
                            I am a <strong>software engineer</strong> interested in <strong>front-end development</strong> and 
                            have experience designing and developing software like landing pages and web applications
                            with <strong>React, Angular, Django, Firebase, and more</strong>.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage