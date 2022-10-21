import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbars/Navbar'
import '../Utilities/Styles/Pages/HomePage.css'

const HomePage = () => {
    const navigate = useNavigate();
    
    const linkPath = () => {
        navigate('/project');
    }

    return (
        <div>
            <Navbar />

            <div className='home-body-container'>
                <div>
                    <span className='title-text'>
                        Hi, my name is
                    </span>
                </div>

                <div className='title-name-container'>
                    <span className='title-name-text'>
                        Jeremy Tan.
                    </span>
                </div>

                <div className='title-slogan-container'>
                    <span className='title-slogan-text'>
                        Enjoy turning ideas into projects.
                    </span>
                </div>

                <div className='description-container'>
                    <span className='description-text'>
                        I am a final year student at <strong>Beihang University</strong> in China pursuing a 
                        Bachelor of Computer Science and Technology. Currently, I work in <strong>FusionETA</strong> as an intern.
                    </span>
                </div>

                <div className='button-container'>
                    <button className='home-project-button' onClick={() => linkPath()}>
                        Projects
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage