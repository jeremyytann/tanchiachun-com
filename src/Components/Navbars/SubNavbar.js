import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Utilities/Styles/Components/Navbars/SubNavbar.css'

const SubNavbar = () => {
    const navigate = useNavigate();

    const linkPath = (path) => {
        navigate(`/${path}`);
    }

    return (
        <div className='subnavbar-container'>
            <div className='subnavbar-link-container'>
                <span onClick={() => linkPath('blog')} className='subnavbar-link'>BLOG</span>
                <span onClick={() => linkPath('resume')} className='subnavbar-link'>RESUME</span>
                <span onClick={() => linkPath('project')} className='subnavbar-link'>PROJECT</span>
                <span onClick={() => linkPath('contact')} className='subnavbar-link'>CONTACT</span>
                <span onClick={() => linkPath('about')} className='subnavbar-link'>ABOUT</span>
            </div>
        </div>
    )
}

export default SubNavbar