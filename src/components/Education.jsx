import {React, useEffect} from 'react';
import '../index.css';
import '../css/education.css';
import Transition from './Transition'

function changeText() {
  changeSchoolLabel();
  window.addEventListener('resize', function() {
    changeSchoolLabel()
  });
}

function changeSchoolLabel() {
  var mediaQuery = window.matchMedia('(max-width: 900px)');
  const collegeLabel = document.getElementById('college-label');
    if(mediaQuery.matches && collegeLabel) {
     collegeLabel.innerHTML = "Cal State LA (In Progress)";
    }
    else if(collegeLabel){
        document.getElementById('college-label').innerHTML = "California State University Los Angeles (In Progress)";
    }
}

function Education() {
  useEffect(() => {
    changeText();
  }, []);
  return (
    <div className="card" id="education">
      <div id="education-content">
        <div className="flex-container" id="college">
          <span className="label-theme school-label" id="college-label">
            California State University Los Angeles (In Progress)
          </span>
          <span className="paragraph">
            <strong>Higher Education GPA: 3.74<br/>
            Cal State LA GPA: 3.91<br/>
            Degree: Bachelor of Science in Computer Science<br/>
            Expected Graduation Date: May 2025</strong>
          </span>
          <div id="courses-container">
            <span className="monospace fs-500 fw-600">Courses Taken</span>
            <div className="monospace fs-400" id="courses">
              <li>Object Oriented Programming</li>
              <li>Programming with Data Structures</li>
              <li>Principles of Database Systems</li>
              <li>Discrete Structures</li>
              <li>Programming Paradigms</li>
              <li>Linear Algebra</li>
              <li>Software Engineering</li>
              <li>Analysis of Algorithms</li>
              <li>Web and Internet Programming</li>
              <li>Introduction to Automata Theory</li>
              <li>Introcuction to Operating Systems</li>
              <li>Artificial Intelligence</li>
              <li>Concurrent and Distributed Programming</li>
              <li>Introduction to 3D Game Programming</li>
              <li>Computer Networking Protocols</li>
            </div>
            {/* <span className="monospace fs-500" style={{fontWeight: 600}}>Courses in Progress</span>
            <div className="monospace fs-400" id="courses"> */} 
            {/* </div> */}
          </div>
        </div>
        <hr />
        <div className="flex-container" id="high-school">
          <span className="label-theme school-label">Bell Senior High</span>
          <span className="paragraph">
              <strong>
              GPA: 3.8<br/>
              Graduation Date: June 2020
              </strong>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Education;
