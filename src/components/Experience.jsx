import React from 'react';
import '../index.css';
import '../css/experience.css';
import Transition from './Transition';

function Experience() {
  document.title = "Experience";
  return (
    <div className="card" id="experience">
      <div id="experience-content">
        <div id="reu">
          <span className="label-theme">CAHSI Local REU Program</span>
          <div className="paragraph" id="reu-tasks">
            <li>I collaberated with other students on a research project involving analysis of covid related tweets
              using machine learning.
            </li>
            <li>Research involved training models to recognize emotions and sentiments in covid related tweets.</li>
            <li>I created a research poster on the project.</li>
            <li>I annotated large datasets that was used to train various machine learning models.</li>
            <li>I recieved a stipend of $3,000.</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
