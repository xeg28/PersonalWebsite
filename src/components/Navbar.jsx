import {React, useEffect} from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import '../css/navbar.css'



function navToggle() {
    const menuButton = document.getElementById('nav-btn');
    const navbar = document.querySelector('.navbar');
    const body = document.querySelector('body');
    body.classList.toggle('no-scroll');
    navbar.classList.toggle('menu-open');
    
}

function closeMenu() {
    const navbar = document.querySelector('.navbar');
    const body = document.querySelector('body');
    var elements = document.getElementsByClassName('route');
    for(let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function(event) {
            if(navbar.classList.contains('menu-open')) {
                navbar.classList.remove('menu-open');
            }
            if(body.classList.contains('no-scroll')) 
                body.classList.remove('no-scroll');
        });
    }
}


function Navbar() {
    const navigate = useNavigate();
    const location = useLocation;
    var pathname = useLocation().pathname;
    const url = "/PersonalWebsite"
    useEffect(() => {
        closeMenu();
    }, []);

    return (
    <>
        <nav className="navbar">
            <div className="nav-content">
                <div className="btn-group" id="btn-group">
                    <Link className={pathname == url ? 'active route' : 'route'} to={url}>Home</Link>
                    <Link className={pathname == url +'/education' ? 'active route' : 'route'} to={url+"/education"}>Education</Link>
                    <Link className={pathname == url + '/experience' ? 'active route' : 'route'} to={url + "/experience"}>Experience</Link>
                    <Link className={pathname == url + '/projects' ? 'active route' : 'route'} to={url + "/projects"}>Projects</Link>
                    {/* <a className={pathname == '/' ? 'active route' : 'route'} onClick={() => navigate('/')}>Home</a>
                    <a className={pathname == '/education' ? 'active route' : 'route'} onClick={() => navigate('/education')}>Education</a>
                    <a className={pathname == '/experience' ? 'active route' : 'route'} onClick={() => navigate('/experience')}>Experience</a>
                    <a className={pathname == '/projects' ? 'active route' : 'route'} onClick={() => navigate('/projects')}>Projects</a> */}
                </div>
                <div className="social-group">
                    <Link className="github icon" to='https://github.com/xeg28'></Link>
                    <Link className="linkedin icon" to='https://www.linkedin.com/in/xeg28/'></Link>
                    {/* <a href="https://github.com/xeg28"><span className="github icon"></span></a>
                    <a href="https://www.linkedin.com/in/xeg28/"><span className='linkedin icon'></span></a> */}
                </div>
            </div>
            <a className="nav-btn" style={{height: '30px'}} id='nav-btn' onClick={() => navToggle()}><span className="nav-btn-icon icon"></span></a>
        </nav>
       
    </>);
 }


export default Navbar;