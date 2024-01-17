import {React} from 'react';
import '../index.css';
import '../css/projects.css';

import SnakeMenu from '../assets/SnakeGameMenu.png';
import SnakeGameplay from '../assets/SnakeGameplay.png';
import TypingTestTitle from '../assets/TypingTestTitle.png';
import TypingTestResults from '../assets/TypingTestResults.png';


function imageClicked(id) {
  const mediaQuery = window.matchMedia('(max-width: 750px)');
  if(mediaQuery.matches) return;

  const element = document.getElementById(id);
  const parent = element.parentElement;

  if(element.classList.contains('image-right')) {
    element.classList.toggle('focused-right');
    let sibling = parent.firstChild;
    if(!element.classList.contains("top-image")) element.classList.add('top-image');
    if(sibling.classList.contains("top-image")) sibling.classList.remove('top-image');
  }

  if(element.classList.contains('image-left')) {
    element.classList.toggle('focused-left');
    let sibling = parent.lastChild;
    if(!element.classList.contains("top-image")) element.classList.add('top-image');
    if(sibling.classList.contains("top-image")) sibling.classList.remove('top-image');
  }

  parent.classList.toggle('focused-image');
}

function Projects() {
  return (
    <div className="card" id="projects">
      <div id="projects-content">

        <div className="flex-container" id="snake-game">
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
            <img 
              className="project-image image-left" 
              id="snake-menu" src={SnakeMenu} 
              alt="Snake Game Menu" loading="lazy" onClick={imageClicked.bind(null, 'snake-menu')}/>

            <img 
              className="project-image image-right"
              id="snake-gameplay" src={SnakeGameplay}
              alt="Snake Gameplay" loading="lazy" onClick={imageClicked.bind(null, 'snake-gameplay')}/>
          </div>

          <div className="grid-container">
            <span className="monospace fs-500 fw-600">Try it now</span>
            <a className='monospace fs-400' href="https://xeg28.github.io/Snake-Game">Snake Game</a>
          </div>
        </div>
        
        <hr/>

        <div className="flex-container" id="typing-speed-test">
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
            <img 
              src={TypingTestTitle} alt="Typingtest Main Page"
              id="typing-main" onClick={imageClicked.bind(null, 'typing-main')}
              className="project-image image-left" loading="lazy"/>
            <img 
              src={TypingTestResults} alt="Typingtest Results Page" 
              id="typing-results" onClick={imageClicked.bind(null, 'typing-results')}
              className="project-image image-right" loading="lazy"/>
          </div>

          <div className="grid-container">
            <span className="monospace fs-500 fw-600">How to install</span>
            <span className="monospace fs-400">
              You will need to install <a className="monospace fs-400" href="https://www.oracle.com/java/technologies/downloads/">Java 17</a>.
              You can check out the project on <a className="monospace fs-400" href="https://github.com/xeg28/Typingtest">GitHub</a>.
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
