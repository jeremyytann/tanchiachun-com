import React, { useContext, useEffect, useState } from 'react'
import '../../Utilities/Styles/Components/Navbars/Navbar.css'
import { 
    DarkModeRounded, Email, FacebookRounded, GitHub, Instagram, 
    LightModeRounded, LinkedIn,
    MenuRounded, Twitter 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SubNavbar from './SubNavbar';
import { SystemThemeContext } from '../../Utilities/Contexts/SystemThemeContext';
import { DrawerContext } from '../../Utilities/Contexts/DrawerContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { toggleDrawer } = useContext(DrawerContext);
    const { changeSystemTheme, getCurrentTheme } = useContext(SystemThemeContext);
    const [systemTheme, setSystemTheme] = useState('light');

    useEffect(() => {
        setSystemTheme(getCurrentTheme());
    }, [getCurrentTheme]);

    const changeTheme = () => {
        changeSystemTheme();
    }
    
    const linkPath = (path) => {
        if (path === 'home') {
            navigate('/');
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
        } else if (social === 'email') {
            window.open('mailto:jeremyyytannn.work@gmail.com');
        }
    }

    return (
        <div>
            <div className='navbar-container'>
                <div className='navbar-social-container'>
                    <FacebookRounded onClick={() => linkSocial('facebook')} className='navbar-social-logo' />
                    <GitHub onClick={() => linkSocial('github')} className='navbar-social-logo' />
                    <Instagram onClick={() => linkSocial('instagram')} className='navbar-social-logo' />
                    <LinkedIn onClick={() => linkSocial('linkedin')} className='navbar-social-logo' />
                    <Twitter onClick={() => linkSocial('twitter')} className='navbar-social-logo' />
                    <Email onClick={() => linkSocial('email')} className='navbar-social-logo' />
                </div>

                <div className='navbar-social-container-mobile'>
                    <MenuRounded onClick={() => toggleDrawer()} className='navbar-social-logo' />
                </div>

                <div className='navbar-title-container'>
                    <span onClick={() => linkPath('home')} className='navbar-title'>tanchiachun</span>
                </div>

                <div className='navbar-theme-container'>
                    { systemTheme === 'light' ? <DarkModeRounded onClick={() => changeTheme()} className='navbar-theme-logo' /> : '' }
                    { systemTheme === 'dark' ? <LightModeRounded onClick={() => changeTheme()} className='navbar-theme-logo' /> : '' }
                </div>
            </div>

            <SubNavbar />
        </div>
    )
}

export default Navbar