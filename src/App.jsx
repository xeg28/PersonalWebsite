import React from 'react';
import {Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';

import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education'
import Projects from './components/Projects';

function App() {
   const location = useLocation();

    return (
    <>
         <Navbar/>
        <AnimatePresence mode="wait">
            <Routes location = {location} key = {location.pathname}>
                <Route index element={<Home/>}></Route>
                <Route path="/education" element={ <Education/>} />
                <Route path="/experience" element={ <Experience/> } />
                <Route path="/projects" element={ <Projects/> } />
            </Routes>
        </AnimatePresence>
    </>
    );
 }

export default App;