import {React, useEffect, useState} from 'react';
import {Link} from 'react-scroll';
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
    const mediaQuery = window.matchMedia('(max-width: 700px)');
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
    let offset =  85;
    useEffect(() => {
        closeMenu();
        const cards = document.querySelectorAll('.card');
        // console.log(cards);
        cards.forEach((el) => observer.observe(el));
        window.addEventListener('scroll', activateLinks);
    }, []);

    return (
    <>
        <nav className="navbar">
            <div className="nav-content">
                <div className="btn-group" id="btn-group">
                    <li><Link 
                        className={'route active'}
                        id="lk-home"
                        to="home"
                        smooth={true} 
                        offset={-offset}
                        duration={500}
                        activeClass=''
                        >Home</Link></li>
                    <li><Link 
                    className={ 'route'} 
                        id="lk-education"
                        to={"education"}
                        smooth={true} 
                        offset={-offset}
                        duration={500}
                        activeClass=''
                        >Education</Link></li>
                    <li><Link 
                        className={'route'} 
                        id="lk-experience"
                        to="experience"
                        smooth={true}
                        offset={-offset}
                        duration={500}
                        activeClass=''
                        >Experience</Link></li>
                    <li>
                        <Link className={ 'route'} 
                        id="lk-projects"
                        to="projects"
                        smooth={true}
                        offset={-offset}
                        duration={500}
                        activeClass=''
                        >Projects</Link></li>
                </div>
                <div className="social-group">
                    <a className="github icon" href='https://github.com/xeg28'></a>
                    <a className="linkedin icon" href='https://www.linkedin.com/in/xeg28/'></a>
                </div>
            </div>
            <a className="nav-btn hide" style={{height: '30px'}} id='nav-btn-x' onClick={() => navToggle()}><span className="nav-btn-x icon"></span></a> 
            <a className="nav-btn" style={{height: '30px'}} id='nav-btn-menu' onClick={() => navToggle()}><span className="nav-btn-icon icon"></span></a> 
        </nav>
       
    </>);
 }


export default Navbar;