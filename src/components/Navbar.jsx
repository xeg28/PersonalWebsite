import {useEffect, useState} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {Link} from 'react-scroll';
// import navIconDark from '../assets/logo-dark.png';
import '../css/navbar.css'


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

function activateLinks() {
    let top = window.scrollY;
    let links = document.querySelectorAll('.route');
    let cards = document.querySelectorAll('.section');
    cards.forEach(card => {
        let offset = card.offsetTop-120;
        let height = card.offsetHeight;
        let id = card.id;
    
        if(top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.getElementById('lk-' + id);
            if(activeLink) activeLink.classList.add('active');
        }
    });
 
} 

// Dynamically changes the vertical height. This is particularly useful
// when on mobile because the menu disappears and reappears 
// when scrolling
function setVhVariable() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
}


function Navbar() {

    const [navOffset, setNavOffset] = useState(70);
    const [theme, setTheme] = useState("");
    const [showNav, setShowNav] = useState(false);
    const [isMobile, setIsMobile] = useState(false);


    const toggleTheme = () => {
        if(theme === "dark") {
            setTheme("light");
        }
        else {
            setTheme("dark");
        }
    }

    const toggleNav = () => {
        const body = document.querySelector('body');
        body.classList.toggle("no-scroll")
        setShowNav((prevVal) => {
            return !prevVal
        });

    }

    useEffect(() => {
        if(theme === "dark") {
            localStorage.setItem("theme", "dark");
        } 
        else if(theme === "light") {
            localStorage.setItem("theme", "light");
        }
        const root = document.querySelector(":root");
        const storageTheme = localStorage.getItem("theme");
        if(storageTheme === "dark") {
            root.classList.add("dark");
            root.classList.remove("light");
            setTheme("dark");
        } 
        else {
            root.classList.add("light");
            root.classList.remove("dark");
            setTheme("light");
        }
    }, [theme])

    useEffect(() => {
        const updateOffset = (newOffset) => {
            if(window.innerWidth <= 700) {
                setNavOffset(60);
            } else {
                setNavOffset(75);
            }

            if(window.innerWidth <= 500) {
                setIsMobile(true);
                if(showNav)
                    document.querySelector("body").classList.add("no-scroll");
            }
            else {
                setIsMobile(false);
                if(showNav)
                    document.querySelector("body").classList.remove("no-scroll");
            }
        };
        updateOffset();
        const cards = document.querySelectorAll('.card');
        cards.forEach((el) => observer.observe(el));
        window.addEventListener('scroll', activateLinks);
        window.addEventListener('resize', updateOffset);

        return () => {
            window.removeEventListener('resize', updateOffset);
        };
    }, []);


    return (
    <>
       <div className="nav-container">
         <nav className="navbar">             
            <div className="nav-content">
                    { (!isMobile) &&
                    (<div className="btn-group nav-links" id="btn-group">
                        <li><Link 
                            className={'route active'}
                            id="lk-home"
                            to="home"
                            smooth={true} 
                            offset={-navOffset}
                            duration={500}
                            activeClass=''
                            >About</Link></li>
                        <li><Link 
                        className={ 'route'} 
                            id="lk-education"
                            to={"education"}
                            smooth={true} 
                            offset={-navOffset}
                            duration={500}
                            activeClass=''
                            >Education</Link></li>
                        <li><Link 
                            className={'route'} 
                            id="lk-experience"
                            to="experience"
                            smooth={true}
                            offset={-navOffset}
                            duration={500}
                            activeClass=''
                            >Experience</Link></li>
                        <li>
                            <Link className={ 'route'} 
                            id="lk-projects"
                            to="projects"
                            smooth={true}
                            offset={-navOffset}
                            duration={500}
                            activeClass=''
                            >Projects</Link></li>
                    </div>)

                    }
                <button class="theme-toggle" onClick={toggleTheme}>
                    {theme == "dark" ? 
                    (<img src="svg/light.svg" alt="" />) :
                    (<img src="svg/dark.svg" alt="" />) }
                </button>
                <button className="nav-btn" onClick={toggleNav}>
                    {showNav ? 
                    (<img src="svg/close.svg" alt="" />) : 
                    (<img src="svg/menu.svg" alt="" />)}
                </button>
            </div>
        </nav>
        <AnimatePresence>
        {(showNav && isMobile) && (
        <motion.div className="mobile-nav nav-links"
        initial={ {x: "-100%", opacity: 0 }}
        animate={ {x: 0, opacity: 1} }
        exit= {{ x: "-100%", opacity: 0 }}
        transition = { {duration: 0.3} }
        >
        <li><Link 
                className={'route active'}
                id="lk-home"
                to="home"
                smooth={true} 
                offset={-navOffset}
                duration={500}
                activeClass=''
                onClick={toggleNav}
                >About</Link></li>
            <li><Link 
            className={ 'route'} 
                id="lk-education"
                to={"education"}
                smooth={true} 
                offset={-navOffset}
                duration={500}
                activeClass=''
                onClick={toggleNav}
                >Education</Link></li>
            <li><Link 
                className={'route'} 
                id="lk-experience"
                to="experience"
                smooth={true}
                offset={-navOffset}
                duration={500}
                activeClass=''
                onClick={toggleNav}
                >Experience</Link></li>
            <li>
                <Link className={ 'route'} 
                id="lk-projects"
                to="projects"
                smooth={true}
                offset={-navOffset}
                duration={500}
                activeClass=''
                onClick={toggleNav}
                >Projects</Link></li>     
        </motion.div>
            )}
    </AnimatePresence>

       </div>
    </>);
 }


export default Navbar;