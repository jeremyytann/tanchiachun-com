import { GitHub, OpenInNewRounded } from '@mui/icons-material'
import React from 'react'
import Navbar from '../Components/Navbars/Navbar'
import '../Utilities/Styles/Pages/ProjectPage.css'
import jshopImg from '../Assets/JShop.png'
import letStudyImg from '../Assets/LetStudy.png'
import personalWebsiteImg from '../Assets/PersonalWebsite.png'

const ProjectPage = () => {
    const linkProject = (project, type) => {
        if (project === 'personal') {
            if (type === 'github') {
                window.open('https://github.com/jeremyytann/tanchiachun-com', '_blank');
            } else if (type === 'link') {
                window.location.replace('/');
            }
        } else if (project === 'letStudy') {
            if (type === 'github') {
                window.open('https://github.com/jeremyytann/BUAA-SE-LetStudy', '_blank');
            }
        } else if (project === 'jShop') {
            if (type === 'github') {
                window.open('https://github.com/jeremyytann/BUAA-Ruby-JShop', '_blank');
            }
        }   
    }

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
                    <img src={personalWebsiteImg} alt='personalWebsite' className='project-image-container' />

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
                            <div onClick={() => linkProject('personal', 'github')} className='project-item-link-stack'>
                                <GitHub className='project-item-link-logo' />

                                <span className='project-item-link-text'>
                                    GitHub
                                </span>
                            </div>
                            
                            <div onClick={() => linkProject('personal', 'link')} className='project-item-link-stack'>
                                <OpenInNewRounded className='project-item-link-logo' />

                                <span className='project-item-link-text'>
                                    Link
                                </span>
                            </div>
                        </div>
                    </div>

                    <img src={personalWebsiteImg} alt='personalWebsite' className='project-image-container-tablet' />

                    <div className='project-item-link-container-tablet'>
                        <GitHub onClick={() => linkProject('personal', 'github')} className='project-item-link-logo' />
                        
                        <OpenInNewRounded onClick={() => linkProject('personal', 'link')} className='project-item-link-logo' />
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
                            <div onClick={() => linkProject('letStudy', 'github')} className='project-item-link-stack'>
                                <GitHub className='project-item-link-logo' />

                                <span className='project-item-link-text'>
                                    GitHub
                                </span>
                            </div>
                        </div>
                    </div>

                    <img src={letStudyImg} alt='letStudy' className='project-image-container' />
                    <img src={letStudyImg} alt='letStudy' className='project-image-container-tablet' />

                    <div className='project-item-link-container-tablet'>
                        <GitHub onClick={() => linkProject('letStudy', 'github')} className='project-item-link-logo' />
                        
                        <OpenInNewRounded onClick={() => linkProject('letStudy', 'link')} className='project-item-link-logo' />
                    </div>
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
                            <div onClick={() => linkProject('jShop', 'github')} className='project-item-link-stack'>
                                <GitHub className='project-item-link-logo' />

                                <span className='project-item-link-text'>
                                    GitHub
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <img src={jshopImg} alt='jshop' className='project-image-container-tablet' />

                    <div className='project-item-link-container-tablet'>
                        <GitHub onClick={() => linkProject('jShop', 'github')} className='project-item-link-logo' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage