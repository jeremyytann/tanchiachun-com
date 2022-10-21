import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Utilities/Styles/Components/Navbars/SubNavbar.css'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

const SubNavbar = () => {
    const navigate = useNavigate();

    const linkPath = (path) => {
        if (path === 'blog') {
            window.open('https://jeremyytann.github.io/', '_blank');
        } else {
            navigate(`/${path}`);
        }
    }

    return (
        <div className='subnavbar-container'>
            <div className='subnavbar-link-container'>
                <span onClick={() => linkPath('experience')} className='subnavbar-link'>EXPERIENCE</span>
                <span onClick={() => linkPath('project')} className='subnavbar-link'>PROJECT</span>
                <span onClick={() => linkPath('contact')} className='subnavbar-link'>CONTACT</span>
                <span onClick={() => linkPath('about')} className='subnavbar-link'>ABOUT</span>

                <div className='subnavbar-link' onClick={() => linkPath('blog')}>
                    <OpenInNewRoundedIcon fontSize='small' className='subnavbar-link-logo' />
                    <span>BLOG</span>
                </div>

                <div className='subnavbar-link' onClick={() => linkPath('resume')}>
                    <OpenInNewRoundedIcon fontSize='small' className='subnavbar-link-logo' />
                    <span>RESUME</span>
                </div>
            </div>
        </div>
    )
}

export default SubNavbar