import React from 'react';
import {Routes, Route, useLocation, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';

import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education'
import Projects from './components/Projects';

function App() {
    const location = useLocation();
    const url = "/PersonalWebsite"
    return (
    <>
         <Navbar/>
        <AnimatePresence mode="wait">
            <Routes location = {location} key = {location.pathname}>
                <Route index path={url} element={<Home/>}></Route>
                <Route path="*" element={<Navigate to={url} replace/>} />
                <Route path={url+"/education"} element={ <Education/>} />
                <Route path={url+"/experience"} element={ <Experience/> } />
                <Route path={url+"/projects"} element={ <Projects/> } />
            </Routes>
        </AnimatePresence>
    </>
    );
 }

export default App;