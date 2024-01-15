import {React, useEffect} from 'react';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';

import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education'
import Projects from './components/Projects';

function App() {
    document.title = "Emmanuel Gonzalez";
    return (      
        <>
            <Navbar/>
            {/* <AnimatePresence mode="wait"> */}
                {/* <Routes location = {location} key = {location.pathname}>
                    <Route path={"/"} element={<Home/>}></Route>
                    <Route path={"/education"} element={ <Education/>} />
                    <Route path={"/experience"} element={ <Experience/> } />
                    <Route path={"/projects"} element={ <Projects/> } />
                </Routes> */}
            <div className="container">
                <Home/>
                <Education/>
                <Experience/>
                <Projects/>
            </div>
            {/* </AnimatePresence> */}
        </>
    );
 }

export default App;