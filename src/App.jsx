import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();

    return (
    <>
        <div className="navbar">
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/projects')}>Projects</button>
        </div>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/projects" element={ <Projects/> } />
        </Routes>
    </>);
 }

export default App;