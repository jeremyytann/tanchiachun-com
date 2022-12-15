import React from 'react'
import Navbar from '../Components/Navbars/Navbar'
import '../Utilities/Styles/Pages/ExperiencePage.css'

const ExperiencePage = () => {
    return (
        <div>
            <Navbar />

            <div className='exp-body-container'>
                <div className='exp-title-container'>
                    <span className='exp-title-text'>
                        SKILL
                    </span>
                </div>

                <div className='exp-skill-container'>
                    <span className='exp-skill-title-text'>
                        Languages
                    </span>

                    <span className='exp-skill-description-text'>
                        C/C++, Java, HTML/CSS, JavaScript, Python, Ruby, Dart, Kotlin
                    </span>

                    <span className='exp-skill-title-text'>
                        Clouds
                    </span>

                    <span className='exp-skill-description-text'>
                        AWS, Google Cloud, Google Firebase, Heroku
                    </span>

                    <span className='exp-skill-title-text'>
                        Databases
                    </span>

                    <span className='exp-skill-description-text'>
                        MongoDB, PostgreSQL
                    </span>

                    <span className='exp-skill-title-text'>
                        Frameworks
                    </span>

                    <span className='exp-skill-description-text'>
                        Angular, Django, Django REST, Express, Flutter, Ionic, Node.js, React, Ruby on Rails
                    </span>

                    <span className='exp-skill-title-text'>
                        Tools
                    </span>

                    <span className='exp-skill-description-text'>
                        Bitrix24, Figma, GitHub, Nginx, Postman
                    </span>
                </div>
            </div>

            <div className='exp-work-body-container'>
                <div className='exp-title-container'>
                    <span className='exp-title-text'>
                        EXPERIENCE
                    </span>
                </div>

                <div className='exp-work-container'>
                    <span className='exp-work-title-text'>
                        Full Stack Developer
                    </span>

                    <span className='exp-work-subtitle-text'>
                        FusionETA - Internship
                    </span>

                    <span className='exp-work-period-text'>
                        August 2022 - Present
                    </span>

                    <div className='exp-work-desc-container'>
                        <span className='exp-work-description-text'>
                            - Developed and maintained code for in-house and client websites and 
                            applications using HTML, CSS, React, and Angular.
                        </span>

                        <span className='exp-work-description-text'>
                            - Designed and implemented CI/CD system for web 
                            applications using GitHub Actions and Google Firebase.
                        </span>

                        <span className='exp-work-description-text'>
                            - Work with a variety of tools, languages, and frameworks such as 
                            Bitrix24, JavaScript, Node.js, Express, Google Cloud, etc.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperiencePage