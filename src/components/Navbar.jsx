import React from 'react';
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import '../css/navbar.css'
function Navbar() {
    const navigate = useNavigate();
    var pathname = useLocation().pathname;
    return (
    <>
        <nav className="navbar">
            <div className="btn-group">
                <a className={pathname == '/' ? 'active route' : 'route'} onClick={() => navigate('/')}>Home</a>
                <a className={pathname == '/experience' ? 'active route' : 'route'} onClick={() => navigate('/experience')}>Experience</a>
                <a className={pathname == '/projects' ? 'active route' : 'route'} onClick={() => navigate('/projects')}>Projects</a>
            </div>
            <div className="social-group">
                 <a href="https://github.com/xeg28"><span className="github icon"></span></a>
                 <a href="https://www.linkedin.com/in/xeg28/"><span className='linkedin icon'></span></a>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/experience" element={ <Experience/> } />
            <Route path="/projects" element={ <Projects/> } />
        </Routes>
    </>);
 }

export default Navbar;