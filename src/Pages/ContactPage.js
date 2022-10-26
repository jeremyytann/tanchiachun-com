import React from 'react'
import Navbar from '../Components/Navbars/Navbar'
import { OpenInNewRounded} from '@mui/icons-material';
import '../Utilities/Styles/Pages/ContactPage.css'

const ContactPage = () => {
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
            window.open('mailto:jeremyyytannn.work@gmail.com', '_blank');
        }
    }

    return (
        <div>
            <Navbar />

            <div className='contact-container'>
                <div className='contact-mail-container'>
                    <span className='contact-title-text'>
                        MAIL
                    </span>

                    <div className='contact-social-list-container'>
                        <OpenInNewRounded onClick={() => linkSocial('email')} className='contact-social-logo' />

                        <span onClick={() => linkSocial('email')} className='contact-social-text'>
                            Email
                        </span>
                    </div>
                </div>

                <div className='contact-social-container'>
                    <span className='contact-title-text'>
                        SOCIAL
                    </span>

                    <div>
                        <div className='contact-social-list-container'>
                            <OpenInNewRounded onClick={() => linkSocial('facebook')} className='contact-social-logo' />
                            
                            <span onClick={() => linkSocial('facebook')} className='contact-social-text'>
                                Facebook
                            </span>
                        </div>

                        <div className='contact-social-list-container'>
                            <OpenInNewRounded onClick={() => linkSocial('github')} className='contact-social-logo' />
                            
                            <span onClick={() => linkSocial('github')} className='contact-social-text'>
                                GitHub
                            </span>
                        </div>

                        <div className='contact-social-list-container'>
                            <OpenInNewRounded onClick={() => linkSocial('instagram')} className='contact-social-logo' />
                            
                            <span onClick={() => linkSocial('instagram')} className='contact-social-text'>
                                Instagram
                            </span>
                        </div>

                        <div className='contact-social-list-container'>
                            <OpenInNewRounded onClick={() => linkSocial('linkedin')} className='contact-social-logo' />
                            
                            <span onClick={() => linkSocial('linkedin')} className='contact-social-text'>
                                LinkedIn
                            </span>
                        </div>

                        <div className='contact-social-list-container'>
                            <OpenInNewRounded onClick={() => linkSocial('twitter')} className='contact-social-logo' />
                            
                            <span onClick={() => linkSocial('twitter')} className='contact-social-text'>
                                Twitter
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage