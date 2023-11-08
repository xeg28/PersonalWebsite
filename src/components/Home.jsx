import React from 'react';
import '../index.css';
import '../css/home.css';

function Home() {
  document.title = "Home";
  return (
    <div className="container">
      <div className="grid">
        <div className="contact">
          <div className="picture-frame"></div>
          <div className="contact-info">
            <div className="email">
            <a style={{height: "20px"}} href="mailto:eg2895@gmail.com"><span className="icon" id="email"></span></a>
              <span><a href="mailto:eg2895@gmail.com">eg2895@gmail.com</a></span>
            </div>
            <div className="phone">
              <a style={{height: '30px'}} href="tel:5623902955"><span className="icon" id="phone"></span></a>
              <span><a href="tel:5623902955">(562)-390-2955</a></span>
            </div>
          </div>
        </div>
        <div className="about-me">
          <span>Emmanuel Gonzalez</span><br/>
          <span>Computer Science Student</span><br/>
          <span>This is a span</span><br/>
        </div>
      </div>
    </div>
  );
}

export default Home;
