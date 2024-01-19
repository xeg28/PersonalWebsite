  import {React, useEffect} from 'react';
  import '../index.css';
  import '../css/home.css';
  import headshotWebP from '../assets/headshot.webp';
  import headshot from '../assets/headshot.png';

  function Home() {

    return (
      <div className="card" id="home">
        <div id="home-content">
          <div className="contact">
            <div className="pic-text">
              <span className="monospace" id="name">Emmanuel Gonzalez</span>
              <span className="monospace" id="occ">Computer Science Student</span>
            </div>
            <picture>
              <source
                srcSet={headshotWebP}
                type="image/webp"
              />
              <source
                srcSet={headshot}
                type="image/png"
              />

              <img src={headshot} alt="headshot" id="headshot" loading="lazy"/> 
            </picture>
              
            <div className="contact-info">
              <h2 className='monospace' style={{margin: '0 auto'}}>Contact</h2>
              <div className="email">
              <a style={{height: "20px"}} href="mailto:eg2895@gmail.com"><span className="icon" id="email"></span></a>
                <span><a className="monospace" href="mailto:eg2895@gmail.com">eg2895@gmail.com</a></span>
              </div>
              <div className="phone">
                <a style={{height: '30px'}} href="tel:5623902955"><span className="icon" id="phone"></span></a>
                <span><a className="monospace" href="tel:5623902955">(562)-390-2955</a></span>
              </div>
            </div>
          </div>
          <div className="about-me">
              <span className="label-theme">About Me</span>
              <span className="paragraph">
                I am a senior at California State University Los Angeles majoring in computer science. As a kid, 
                I spent a lot of time on the computer playing games and I would often encounter issues with software. 
                Troubleshooting these issues made me develop an interest in not only problem solving, but also developed 
                a curiosity about the inner workings of software.
              </span>
                {/* <br/><br/> */}
                <span className="paragraph">
                  I've had the opportunity to participate in a CAHSI LREU program where I gained research experience. I helped 
                  with a research project that involved using machine learning to detect emotions and sentiments in tweets related to 
                  COVID-19. While my primary focus is not machine learning, I improved my skills in data analysis and research methodology. 
                </span>

                {/* <br/><br/> */}
                <span className="paragraph">
                  My current goal is to obtain an internship in software development so I can gain professional experience, learn new technologies,
                  and improve my ability to work in a team.
                </span>
              {/* </span> */}
          </div>
        </div>
      </div>
    );
  }

  export default Home;
