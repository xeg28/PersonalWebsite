import {React} from 'react';
import '../index.css';
import '../css/projects.css';
import Project from './Project';

import SnakeMenu from '../assets/SnakeGameMenu.png';
import SnakeGameplay from '../assets/SnakeGameplay.png';
import TypingTestTitle from '../assets/TypingTestTitle.png';
import TypingTestResults from '../assets/TypingTestResults.png';
import MediaProjectHome from '../assets/mediaProject(home).webp';
import MediaProjectUpload from '../assets/mediaProject(upload).webp';
import MediaProjectViewImage from '../assets/mediaProject(viewImage).webp';
import MediaProjectViewVideo from '../assets/mediaProject(viewVideo).webp';
import PongGameGameplay from '../assets/PongGame(Gameplay).webp';
import PongGameSettings from '../assets/PongGame(Settings).webp';

function Projects() {
  return (
    <div className="card" id="projects">
      <div id="projects-content">
      <Project 
        title="Media Management System" 
        description="This project was originally a group project for
            my software engineering course but I completely refactored the project, added new features, and deployed it. 
            This project allows you to upload image, video, and audio files to the web for storage. This website 
            also allows you to view the files you have uploaded."
        technologies={['codeigniter', 'php', 'js', 'dropzonejs', 'html', 'css', 'bootstrap']}
        features={["You can register an account", "The files uploaded can be viewed in the site.", 
        "Allows users to upload image, video, and audio files to the site. These files are only visible the user that uploaded the file.",
        "Users can share files to other registered users.", "Users can download any file they uploaded.", 
        "There is a search feature allowing users to search for files by name.",
        "Users can rename files, add a description, and delete files.", 
        "Users can delete and share multiple files by right clicking them and selecting them."  
        ]}
        howToUse="You need to register an account which will ask for name, email, and password.
              Once you logged in, you can click on the upload link in the navbar. Here you can upload
              image, video, and audio files."
        imagePairs={[
                      {imageLeft: {id:"media-project-home", src:MediaProjectHome},
                      imageRight: {id:"media-project-upload", src:MediaProjectUpload}
                      },
                      {imageLeft: {id:"media-project-viewImage", src:MediaProjectViewImage},
                      imageRight: {id:"media-project-viewVideo", src:MediaProjectViewVideo}
                      }
                    ]  
        }
        url="https://xeg28.serv00.net/"
        />

        <Project 
          title="Pong Game"
          description="I recreated the Pong Game using JavaScript, HTML, and CSS. I decided to 
              create this project to help me gain experience with frontend development."
          technologies={['html', 'js', 'css']}
          features={["Users can play against another player or an AI.",
                    "There is an options menu where users can change the speed of the game, the size of the paddle, and the difficulty of the AI.",
                    "Users can choose between dark and light theme.",
                    "Users can pause the game.",
                    "All of your options are saved in your browser."
          ]}
          howToUse="When you load up the game there is a controls menu showing how to move the paddles. 
          When you click to start the game, you have to predict where the ball is going and move the paddle
          to block the ball. When the ball hits the paddle, its direction and speed is random to make it hard to predict."
          imagePairs={[{imageLeft: {id:"pong-game-gameplay", src:PongGameGameplay},
                        imageRight: {id:"pong-game-settings", src:PongGameSettings}
          }]}   
          url="https://xeg28.github.io/PongGame"
        />

        <Project 
          title="Snake Game"
          description="I recreated the Snake game using JavaScript, HTML, and CSS. I decided to 
              create this project to help me gain experience with frontend development."
          technologies={['html', 'js', 'css']}
          features={["The game includes screen wrapping which allows the snake to pass through one edge of the screen and reappear on the opposite edge.",
                    "The game can be paused.",
                    "The game can be sped up through the menu. The game speeds include slow, fast, and full speed.",
                    "Your highest score is kept by your browser."
          ]}
          howToUse="You will control the snake and the goal is to catch the red square. Everytime you catch a square, 
                your score will go up by one point. If you crash into yourself, the game is over."
          imagePairs={[{imageLeft: {id:"snake-menu", src:SnakeMenu},
                        imageRight: {id:"snake-Gameplay", src:SnakeGameplay}
            }]}
          url="https://xeg28.github.io/Snake-Game"
        />

        <Project 
        title="Typing Speed Test"
        description="I created a typing speed test using JavaFX and CSS. I created this application
            because I liked testing my typing speed and I wanted to gain experience with 
            Java and GUI development."
        technologies={['java', 'javafx']}
        features={["During a test, the user can see their WPM update in a label.",
                  "If the user types the text prompt correctly, it is highlighted in green.",
                  "If the user makes a mistake, the mistake is highlighted in red.",
                  "Users can use custom texts that are not saved locally.",
                  "Users can create a quote which are saved locally.",
                  "The program allows you to create users which tracks the user's progress.",
                  "The program saves the user's average WPM and highest WPM.",
                  "The program saves the user's top five tests for every quote.",
                  "This program also has a leaderboard for every quote which shows the fastest users for a quote."
        ]}
        howToUse="Click on the quote text field to focus and begin typing to start a test. You can also
              focus textfields and buttons by pressing tab. The program provides shortcuts that allows
              you to restart a test or give you a random quote from your list of quotes. These 
              shortcuts only work when the quote text field is in focus."
        imagePairs={[{imageLeft: {id:"typing-main", src:TypingTestTitle},
                      imageRight: {id:"typing-results", src:TypingTestResults}
                    }]}
        links={<span className="monospace fs-400">
              You will need to install <a className="monospace fs-400" href="https://www.oracle.com/java/technologies/javase" target="_blank">Java 17</a>.
              You can check out the project on <a className="monospace fs-400" href="https://github.com/xeg28/Typingtest" target="_blank">GitHub</a>.
            </span>}
        last='true'
        />

      </div>
    </div>
  );
}

export default Projects;
