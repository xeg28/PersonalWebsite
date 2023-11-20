import React from 'react';
import '../index.css';
import '../css/education.css';

function Education() {
  document.title = "Education";
  return (
    <div className="container">
      <div className="card">
        <div id="education-content">
          <div id="college">
            <div className="small-label">
              <span className="label-theme">California State University</span><br/>
              <span className="label-theme">Los Angeles (In Progress)</span>
            </div>
            <span className="label-theme school-label">California State University - Los Angeles (In Progress)</span>
            <span className="paragraph">
              <strong>GPA: 3.66<br/>
              Expected Graduation Date: May 2025</strong>
            </span>
            <div id="courses-container">
              <span className="monospace fs-500"style={{fontWeight: 600}}>Courses Taken</span>
              <div className="monospace fs-400" id="courses">
                <li>Object Oriented Programming</li>
                <li>Programming with Data Structures</li>
                <li>Introduction to Relational Databases</li>
                <li>Discrete Structures</li>
                <li>Programming Paradigms</li>
                <li>Linear Algebra</li>
                <li>Software Engineering</li>
                <li>Analysis of Algorithms</li>
                <li>Web and Internet Programming</li>
              </div>
              <span className="monospace fs-500" style={{fontWeight: 600}}>Courses in Progress</span>
              <div className="monospace fs-400" id="courses">
                <li>Introduction to Automata Theory</li>
                <li>Introcuction to Operating Systems</li>
                <li>Artificial Intelligence</li>
                <li>Concurrent and Distributed Programming</li>
              </div>
            </div>
          </div>
          <div id="high-school">
            <span className="label-theme">Bell Senior High</span>
            <span className="paragraph">
               <strong>
                GPA: 3.8<br/>
                Graduation Date: June 2020
               </strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
