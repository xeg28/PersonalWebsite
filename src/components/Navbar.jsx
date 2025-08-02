import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import '../css/navbar.css'
import Tooltip from './Tooltip';
import NavLink from './NavLink';


function activateLinks() {
  let top = window.scrollY;
  let links = document.querySelectorAll('.route');
  let sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    let offset = section.offsetTop - 120;
    let height = section.offsetHeight;
    let id = section.id;

    if (top >= offset && top < offset + height) {
      links.forEach(link => {
        link.classList.remove('active');
      });
      const activeLink = document.getElementById('lk-' + id);
      const smallActiveLink = document.getElementById('lks-' + id);
      if (activeLink) activeLink.classList.add('active');
      if (smallActiveLink) smallActiveLink.classList.add('active');
    }
  });

}

function Navbar() {

  const [navOffset, setNavOffset] = useState(70);
  const [theme, setTheme] = useState("");
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const [onMainPage, setOnMainPage] = useState(location.pathname === '/');

  const toggleTheme = () => {
    if (theme === "dark") {
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
    activateLinks();
    if (location.pathname === '/contact') {
      setOnMainPage(false);
    } 
    else if(location.pathname === '/'){
      setOnMainPage(true);
    }
  }, [location])

  useEffect(() => {
    activateLinks();
  }, [showNav])

  useEffect(() => {
    if(!onMainPage) return;
    const state = location.state;
    if(state && state.scrollTo) {
      let scrollId = state.scrollTo;
      let link = document.getElementById(scrollId);
      if(link) link.click();
    }
  }, [onMainPage])

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
    }
    else if (theme === "light") {
      localStorage.setItem("theme", "light");
    }
    const root = document.querySelector(":root");
    const storageTheme = localStorage.getItem("theme");
    if (storageTheme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
      setTheme("light");
    }
    else {
      root.classList.add("dark");
      root.classList.remove("light");
      setTheme("dark");
    }
  }, [theme])

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth <= 700) {
        setNavOffset(60);
      } else {
        setNavOffset(75);
      }

      if (window.innerWidth <= 500) {
        setIsMobile(true);
        if (showNav)
          document.querySelector("body").classList.add("no-scroll");
      }
      else {
        setIsMobile(false);
        if (showNav)
          document.querySelector("body").classList.add("no-scroll");
      }
    };


    updateOffset();
    window.addEventListener('scroll', activateLinks);
    window.addEventListener('resize', updateOffset);

    return () => {
      window.removeEventListener('resize', updateOffset);
      window.removeEventListener('scroll', activateLinks);
    };
  }, []);


  return (
    <>
      <div className="nav-container">
        <nav className="navbar">
          <div className="nav-content">
            {(!isMobile) &&
              (<div className="btn-group nav-links" id="btn-group">
                <NavLink id='lk-home' to={`${onMainPage ? 'home' : '/'}`} navOffset={navOffset} text='About' 
                  {... !onMainPage && {doesRoute: true}} active/>
                <NavLink id='lk-experience' to={`${onMainPage ? 'experience' : '/'}`} navOffset={navOffset} 
                  text='Experience' {... !onMainPage && {doesRoute: true}}/>
                <NavLink id='lk-projects' to={`${onMainPage ? 'projects' : '/'}`} navOffset={navOffset} 
                  text='Projects' {... !onMainPage && {doesRoute: true}}/>
                <NavLink id='lk-contact' to='/contact' navOffset={navOffset} text='Contact' doesRoute/>
              </div>)

            }

              <button className="theme-toggle" onClick={toggleTheme}>
              {theme == "dark" ?
                (<img src="svg/light.svg" alt="" />) :
                (<img src="svg/dark.svg" alt="" />)}
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
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <NavLink id='lks-home' to={`${onMainPage ? 'home' : '/'}`} navOffset={navOffset} text='About' 
                  {... !onMainPage && {doesRoute: true}} {...onMainPage && {onClick: toggleNav}} active/>
              <NavLink id='lks-experience' to={`${onMainPage ? 'experience' : '/'}`} navOffset={navOffset} 
                  text='Experience' {... !onMainPage && {doesRoute: true}} {...onMainPage && {onClick: toggleNav}}/>
              <NavLink id='lks-projects' to={`${onMainPage ? 'projects' : '/'}`} navOffset={navOffset} 
                text='Projects' {... !onMainPage && {doesRoute: true}} {...onMainPage && {onClick: toggleNav}}/>
              <NavLink id='lks-contact' to='/contact' navOffset={navOffset} text='Contact' doesRoute onClick={toggleNav}/>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>);
}


export default Navbar;