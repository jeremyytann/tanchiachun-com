import { CloseRounded, FacebookRounded, GitHub, Instagram, LinkedIn, OpenInNewRounded, Twitter } from '@mui/icons-material';
import { Drawer } from '@mui/material';
import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/Components/Drawers/Drawer.css'

export const DrawerContext = createContext();

const DrawerProvider = ({ children }) => {
    const [drawer, setDrawer] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setDrawer(true);
    };

    const closeDrawer = () => {
        setDrawer(false);
    }

    const methods = { drawer, toggleDrawer }

    const handleWidthChange = () => {
        if (document.body.clientWidth > 767) {
            setDrawer(false);
        }
    }

    function linkSocial(social) {
        if (social === 'facebook') {
            window.open('https://www.facebook.com/tanchiachunj/', '_blank');
        } else if (social === 'github') {
            window.open('https://github.com/jeremyytann', '_blank');
        } else if (social === 'instagram') {
            window.open('https://www.instagram.com/tanchiachun/', '_blank');
        } else if (social === 'linkedin') {
            window.open('https://www.linkedin.com/in/jeremyytann/', '_blank');
        } else if (social === 'twitter') {
            window.open('https://twitter.com/tanchiachun', '_blank');
        }
    }

    const linkPath = (path) => {
        if (path === 'blog') {
            closeDrawer();
            window.open('https://jeremyytann.github.io/', '_blank');
        } else if (path === 'home') {
            closeDrawer();
            navigate('/');
        } else {
            closeDrawer();
            navigate(`/${path}`);
        }
    }

    window.onresize = () => handleWidthChange();

    return (
        <DrawerContext.Provider value={ methods }>
            <Drawer
                anchor='left'
                open={drawer}
                onClose={() => closeDrawer()}>
                <div className='drawer-container'>
                    <div className='drawer-nav-close-container'>
                        <CloseRounded onClick={() => closeDrawer()} className='drawer-nav-close-logo' />
                    </div>

                    <div className='drawer-nav-outer-container'>
                        <div className='drawer-nav-container'>
                            <span className='drawer-nav-text' onClick={() => linkPath('home')}>HOME</span>
                        </div>

                        <div className='drawer-nav-container'>
                            <span className='drawer-nav-text' onClick={() => linkPath('experience')}>EXPERIENCE</span>
                        </div>

                        <div className='drawer-nav-container'>
                            <span className='drawer-nav-text' onClick={() => linkPath('project')}>PROJECT</span>
                        </div>

                        <div className='drawer-nav-container'>
                            <span className='drawer-nav-text' onClick={() => linkPath('contact')}>CONTACT</span>
                        </div>

                        <div className='drawer-nav-container'>
                            <span className='drawer-nav-text' onClick={() => linkPath('about')}>ABOUT</span>
                        </div>

                        <div className='drawer-nav-container'>
                            <div className='drawer-nav-text-container' onClick={() => linkPath('blog')}>
                                <OpenInNewRounded fontSize='large' className='drawer-nav-link-logo' />
                                <span className='drawer-nav-text'>BLOG</span>
                            </div>
                        </div>

                        <div className='drawer-nav-container'>
                            <div className='drawer-nav-text-container' onClick={() => linkPath('resume')}>
                                <OpenInNewRounded fontSize='large' className='drawer-nav-link-logo' />
                                <span className='drawer-nav-text'>RESUME</span>
                            </div>
                        </div>
                    </div>

                    <div className='drawer-social-container'>
                        <FacebookRounded fontSize='large' onClick={() => linkSocial('facebook')} className='drawer-social-logo' />
                        <GitHub fontSize='large' onClick={() => linkSocial('github')} className='drawer-social-logo' />
                        <Instagram fontSize='large' onClick={() => linkSocial('instagram')} className='drawer-social-logo' />
                        <LinkedIn fontSize='large' onClick={() => linkSocial('linkedin')} className='drawer-social-logo' />
                        <Twitter fontSize='large' onClick={() => linkSocial('twitter')} className='drawer-social-logo' />
                    </div>
                </div>
            </Drawer>

            { children }
        </DrawerContext.Provider>
    )
}

export default DrawerProvider