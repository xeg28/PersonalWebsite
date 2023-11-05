import React from 'react';
import Home from './Home';
import Projects from './Projects';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Link from 'react-scroll'

function Navbar() {
    const navigate = useNavigate();
    var pathname = useLocation().pathname;
    return (
    <>
        <nav className="navbar">
            <div className="btn-group">
                <button className={pathname == '/' ? 'active' : ''} onClick={() => navigate('/')}>Home</button>
                <button className={pathname == '/projects' ? 'active' : ''} onClick={() => navigate('/projects')}>Projects</button>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/projects" element={ <Projects/> } />
        </Routes>
    </>);
 }

export default Navbar;