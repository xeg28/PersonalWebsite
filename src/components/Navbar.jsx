import {React, useEffect, useState} from 'react';
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
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        let offset = card.offsetTop-120;
        let height = card.offsetHeight;
        let id = card.id;
    
        if(top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
            });
            document.getElementById('lk-' + id).classList.add('active');
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


function navToggle() {
    const navbar = document.querySelector('.navbar');
    const body = document.querySelector('body');
    document.getElementById("nav-btn-menu").classList.toggle('hide');
    document.getElementById("nav-btn-x").classList.toggle('hide');
    body.classList.toggle('no-scroll');
    navbar.classList.toggle('menu-open');
    
}

function closeMenu() {
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    const navbar = document.querySelector('.navbar');
    const body = document.querySelector('body');
    var elements = document.getElementsByClassName('route');
   
    window.addEventListener('resize', function() {

        setVhVariable();
        
        if(!mediaQuery.matches && navbar.classList.contains('menu-open')) {
            body.classList.remove('no-scroll');
        }
     
        if(mediaQuery.matches && navbar.classList.contains('menu-open')) { 
            body.classList.add('no-scroll');
            this.window.scrollTo(0,0);
        }

    });

    for(let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function(event) { 
            if(navbar.classList.contains('menu-open')) {
                navbar.classList.remove('menu-open');
                document.getElementById("nav-btn-menu").classList.toggle('hide');
                document.getElementById("nav-btn-x").classList.toggle('hide');
            }
            if(body.classList.contains('no-scroll')) 
                body.classList.remove('no-scroll');
        });
    }
}


function Navbar() {

    const [navOffset, setNavOffset] = useState(70);
    
    useEffect(() => {
        const updateOffset = (newOffset) => {
            if(window.innerWidth <= 700) {
                setNavOffset(60);
            } else {
                setNavOffset(75);
            }
        };
        closeMenu();
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
        <nav className="navbar">
            <Link
                to="home"
                smooth={true} 
                offset={-navOffset}
                duration={500}
                className="nav-icon"
                ><span alt="nav-icon" className="logo"></span></Link>
             
            <div className="nav-content">
                <Link
                to="home"
                smooth={true} 
                offset={-navOffset}
                duration={500}
                className="nav-icon"
                ><span alt="nav-icon" className="logo"></span></Link>
                <div className="btn-group" id="btn-group">
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
                </div>
                <div className="social-group">
                    <a className="github icon" href='https://github.com/xeg28' target="_blank"></a>
                    <a className="linkedin icon" href='https://www.linkedin.com/in/xeg28/' target="_blank"></a>
                </div>
            </div>
            <a className="nav-btn" style={{height: '30px'}} id='nav-btn-menu' onClick={() => navToggle()}><span className="nav-btn-icon icon"></span></a>
            <a className="nav-btn hide" style={{height: '30px'}} id='nav-btn-x' onClick={() => navToggle()}><span className="nav-btn-x icon"></span></a>
        </nav>
       
    </>);
 }


export default Navbar;