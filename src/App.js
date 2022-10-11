import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './Pages/AboutPage';
import BlogHomePage from './Pages/Blogs/BlogHomePage';
import ContactPage from './Pages/ContactPage';
import HomePage from "./Pages/HomePage";
import ProjectHomePage from './Pages/Projects/ProjectHomePage';
import ResumePage from './Pages/ResumePage';
import './Utilities/Styles/App.css'
import './Utilities/Themes/ThemeProps.css'

function App() {
    return (
        <div className='app-container'>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='/about' element={<AboutPage />}></Route>
                    <Route path='/blog' element={<BlogHomePage />}></Route>
                    <Route path='/contact' element={<ContactPage />}></Route>
                    <Route path='/project' element={<ProjectHomePage />}></Route>
                    <Route path='/resume' element={<ResumePage />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
