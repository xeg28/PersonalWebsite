// import {React} from 'react';
// import Navbar from './components/Navbar';

// import Home from './components/Home';
// import Experience from './components/Experience';
// import Education from './components/Education'
// import Projects from './components/Projects';

// function App() {
//     document.title = "Emmanuel Gonzalez";
//     return (      
//         <>
//             <Navbar/>
//             <div className="container">
//                 <Home/>
//                 <Education/>
//                 <Experience/>
//                 <Projects/>
//             </div>
//         </>
//     );
//  }

// export default App;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';



function App() {
    useEffect(() => {
        const images = [
            'images/SnakeGameMenu.png', 
            'images/SnakeGameplay.png', 
            'images/TypingTestTitle.png',
            'images/TypingTestResults.png', 
            'images/mediaProject(home).webp',
            'images/mediaProject(upload).webp',
            'images/mediaProject(viewImage).webp', 
            'images/mediaProject(viewVideo).webp',
            'images/PongGame(Gameplay).webp',
            'images/PongGame(Settings).webp', 
            'images/OverwrappedMenu.webp',
            'images/OverwrappedGame.webp'
        ]   
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);
    

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handlePageLoad = () => {
            setIsLoading(false);
        };

        // Wait for the window to load completely
        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
        }

        return () => {
            window.removeEventListener('load', handlePageLoad);
        };
    }, []);

    document.title = "Emmanuel Gonzalez";

    return (
        <>
            {isLoading ? (
                // Loading screen
               <div className="container" style={{width:"100%", height:"100%"}}>
                 <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
               </div>
            ) : (
                // Main app content
                <>
                    <Navbar />
                    <div className="container">
                        <Home />
                        <Education />
                        <Experience />
                        <Projects />
                    </div>
                </>
            )}
        </>
    );
}

export default App;

