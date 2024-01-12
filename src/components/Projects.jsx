import {React} from 'react';
import '../index.css';
import '../css/projects.css';

import Transition from './Transition';
import SnakeMenu from '../assets/SnakeGameMenu.png';
import SnakeGameplay from '../assets/SnakeGameplay.png';
import TypingTestTitle from '../assets/TypingTestTitle.png';
import TypingTestResults from '../assets/TypingTestResults.png';


function Projects() {
  document.title = "Projects";
  return (
    <Transition>
    <div className="container">
      <div className="card">
        <div id="projects-content">

          <div className="project" id="snake-game">
            <span className="label-theme">Snake Game</span>
            <span className="paragraph">
              I recreated the Snake game using JavaScript, HTML, and CSS. I decided to 
              create this project to help me gain experience with frontend development. 
            </span>

            <div className="grid-container">
              <span className="monospace fs-500 fw-600">Features</span>
              <div className="monospace fs-400" id="features">
                <li>The game includes screen wrapping which allows the snake to pass through one edge of the screen and 
                  reappear on the opposite edge.
                </li>
                <li>The game can be paused.</li>
                <li>The game can be sped up through the menu. The game speeds include slow, fast, and full speed</li>
                <li>Your highest score is kept by your browser.</li>
              </div>
            </div>

            <div className="grid-container">
              <span className="monospace fs-500 fw-600">How to play</span>
              <span className='monospace fs-400'>
                You will control the snake and the goal is to catch the red square. Everytime you catch a square, 
                your score will go up by one point. If you crash into yourself, the game is over.
              </span>
            </div>

            <div className="img-container">
              <img className="project-image" src={SnakeMenu} alt="Snake Game Menu" loading="lazy"/>
              <img className="project-image" src={SnakeGameplay} alt="Snake Gameplay" loading="lazy"/>
            </div>

            <div className="grid-container">
              <span className="monospace fs-500 fw-600">Try it now</span>
              <a className='monospace fs-400' href="https://xeg28.github.io/Snake-Game">Snake Game</a>
            </div>
          </div>
          
          <hr/>

          <div className="project" id="typing-speed-test">
            <span className='label-theme'>Typing Speed Test</span>
            <span className="paragraph">
              I created a typing speed test using JavaFX and CSS. I created this application
              because I liked testing my typing speed and I wanted to gain experience with 
              Java and GUI development. 
            </span>

            <div className="grid-container">
              <span className="monospace fs-500 fw-600" >Features</span>
              <div className="monospace fs-400" id="features">
                <li>During a test, the user can see their WPM update in a label.</li>
                <li>If the user types the text prompt correctly, it is highlighted in green. </li>
                <li>If the user makes a mistake, the mistake is highlighted in red.</li>
                <li>Users can use custom texts that are not saved locally. </li>
                <li> Users can create a quote which are saved locally. </li>
                <li>The program allows you to create users which tracks the user's progress.</li>
                <li>The program saves the user's average WPM and highest WPM.</li>
                <li>The program saves the user's top five tests for every quote.</li>
                <li>This program also has a leaderboard for every quote which shows the fastest
                  users for a quote.</li>
              </div>
            </div>

            <div className="grid-container">
              <span className="monospace fs-500 fw-600">How to use</span>
              <span className="monospace fs-400">
                Click on the quote text field to focus and begin typing to start a test. You can also
                focus textfields and buttons by pressing tab. The program provides shortcuts that allows
                you to restart a test or give you a random quote from your list of quotes. These 
                shortcuts only work when the quote text field is in focus.
              </span>
            </div>

            <div className="img-container">
              <img src={TypingTestTitle} alt="Typingtest Main Page" className="project-image" loading="lazy"/>
              <img src={TypingTestResults} alt="Typingtest Results Page" className="project-image" loading="lazy"/>
            </div>

            <div className="grid-container">
              <span className="monospace fs-500 fw-600">How to install</span>
              <span className="monospace fs-400">
                You will need to install <a href="https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html">Java 17</a>.
                Then you can download and run the <a href="https://github.com/xeg28/Typingtest/raw/main/out/artifacts/Executable/Executable.jar">file</a>.
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
    </Transition>
  );
}

export default Projects;
