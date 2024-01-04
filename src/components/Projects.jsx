import React from 'react';
import '../index.css';
import '../css/projects.css';
import Transition from './Transition';
function Projects() {
  document.title = "Projects";
  return (
    <Transition>
    <div className="container">
      <div className="card">
        <div id="projects-content">
          <div id="snake-game">
            <span className="label-theme">Snake Game</span>
            <span className="paragraph">
              This is the description of the snake game
            </span>
            <div id="features-container">
              <span className="monospace fs-500 fw-600">Features</span>
              <div className="monospace fs-400" id="features">
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
      </div>
    </div>
    </Transition>
  );
}

export default Projects;
