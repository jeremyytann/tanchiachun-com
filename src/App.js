import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ExperiencePage from './Pages/ExperiencePage';
import HomePage from "./Pages/HomePage";
import ProjectPage from './Pages/ProjectPage';
import ResumePage from './Pages/ResumePage';
import DrawerProvider from './Utilities/Contexts/DrawerContext';
import { SystemThemeContext } from './Utilities/Contexts/SystemThemeContext';
import './Utilities/Styles/App.css'
import './Utilities/Themes/ThemeProps.css'

function App() {
    const { getCurrentTheme } = useContext(SystemThemeContext);
    const [systemTheme, setSystemTheme] = useState('light');

    useEffect(() => {
        setSystemTheme(getCurrentTheme());
    }, [getCurrentTheme]);

    if (systemTheme === 'light') {
        document.body.style.background = '#fafafa';
    } else if (systemTheme === 'dark') {
        document.body.style.background = '#121212';
    }
    
    return (
        <div className='app-container'>
            <Router>
                <DrawerProvider>
                    <Routes>
                        <Route path='/' element={<HomePage />}></Route>
                        <Route path='/about' element={<AboutPage />}></Route>
                        <Route path='/contact' element={<ContactPage />}></Route>
                        <Route path='/experience' element={<ExperiencePage />}></Route>
                        <Route path='/project' element={<ProjectPage />}></Route>
                        <Route path='/resume' element={<ResumePage />}></Route>
                    </Routes>
                </DrawerProvider>
            </Router>
        </div>
    );
}

export default App;
