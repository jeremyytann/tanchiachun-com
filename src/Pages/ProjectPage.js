import { GitHub, OpenInNewRounded } from '@mui/icons-material'
import React from 'react'
import Navbar from '../Components/Navbars/Navbar'
import '../Utilities/Styles/Pages/ProjectPage.css'
import jshopImg from '../Assets/JShop.png'
import letStudyImg from '../Assets/LetStudy.png'

const ProjectPage = () => {
    return (
        <div>
            <Navbar />
            
            <div className='project-body-container'>
                <div className='project-title-container'>
                    <span className='project-title-text'>
                        PROJECT
                    </span>
                </div>

                <div className='project-item-container'>
                    <div className='project-image-container'>
                        
                    </div>

                    <div className='project-info-container'>
                        <span className='project-item-title-text'>
                            Personal Website
                        </span>

                        <span className='project-item-description-text'>
                            My first personal portfolio website I designed and developed using React and Firebase.
                        </span>

                        <div className='project-item-stack-container'>
                            <div className='project-item-stack'>
                                React
                            </div>

                            <div className='project-item-stack'>
                                Firebase
                            </div>

                            <div className='project-item-stack'>
                                GitHub Actions
                            </div>
                        </div>

                        <div className='project-item-link-container'>
                            <div className='project-item-link-stack'>
                                <GitHub className='project-item-link-logo' />

                                <span className='project-item-link-text'>
                                    GitHub
                                </span>
                            </div>
                            
                            <div className='project-item-link-stack'>
                                <OpenInNewRounded className='project-item-link-logo' />

                                <span className='project-item-link-text'>
                                    Link
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='project-item-container'>
                    <div className='project-info-container'>
                        <span className='project-item-title-text'>
                            LetStudy
                        </span>

                        <span className='project-item-description-text'>
                        LetStudy is an online study platform that provides users to chat and study with each other, ask questions and share notes.
                        </span>

                        <div className='project-item-stack-container'>
                            <div className='project-item-stack'>
                                React
                            </div>

                            <div className='project-item-stack'>
                                Django
                            </div>

                            <div className='project-item-stack'>
                                Amazon EC2
                            </div>
                        </div>

                        <div className='project-item-link-container'>
                            <div className='project-item-link-stack'>
                                <GitHub className='project-item-link-logo' />

                                <span className='project-item-link-text'>
                                    GitHub
                                </span>
                            </div>
                            
                            <div className='project-item-link-stack'>
                                <OpenInNewRounded className='project-item-link-logo' />

                                <span className='project-item-link-text'>
                                    Link
                                </span>
                            </div>
                        </div>
                    </div>

                    <img src={letStudyImg} alt='jshop' className='project-image-container' />
                </div>

                <div className='project-item-container'>
                    <img src={jshopImg} alt='jshop' className='project-image-container' />

                    <div className='project-info-container'>
                        <span className='project-item-title-text'>
                            JShop
                        </span>

                        <span className='project-item-description-text'>
                        JShop is an online shopping platform that provides users to buy, sell and review products online, with a user-friendly interface.
                        </span>

                        <div className='project-item-stack-container'>
                            <div className='project-item-stack'>
                                Ruby on Rails
                            </div>

                            <div className='project-item-stack'>
                                Bootstrap
                            </div>

                            <div className='project-item-stack'>
                                Heroku
                            </div>
                        </div>

                        <div className='project-item-link-container'>
                            <div className='project-item-link-stack'>
                                <GitHub className='project-item-link-logo' />

                                <span className='project-item-link-text'>
                                    GitHub
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage