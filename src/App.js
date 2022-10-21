import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ExperiencePage from './Pages/ExperiencePage';
import HomePage from "./Pages/HomePage";
import ProjectPage from './Pages/ProjectPage';
import ResumePage from './Pages/ResumePage';
import DrawerProvider from './Utilities/Contexts/DrawerContext';
import './Utilities/Styles/App.css'
import './Utilities/Themes/ThemeProps.css'

function App() {
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
