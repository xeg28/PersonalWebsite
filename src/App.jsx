import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Tabcard from './components/TabCard/Tabcard';
import Projects from './components/Projects/Projects';



function App() {

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
                    <div className="container">
                        <Home />
                        <Tabcard />
                        <Projects />
                    </div>
                </>
            )}
        </>
    );
}

export default App;

