import {React} from 'react';
import '../index.css';
import '../css/projects.css';
import Project from './Project';


function Projects() {

  const images = {
    'SnakeMenu':'images/SnakeGameMenu.png', 
    'SnakeGameplay':'images/SnakeGameplay.png', 
    'TypingTestTitle':'images/TypingTestTitle.png',
    'TypingTestResults':'images/TypingTestResults.png', 
    'MediaProjectHome':'images/mediaProject(home).webp',
    'MediaProjectUpload':'images/mediaProject(upload).webp',
    'MediaProjectViewImage':'images/mediaProject(viewImage).webp', 
    'MediaProjectViewVideo':'images/mediaProject(viewVideo).webp',
    'PongGameGameplay':'images/PongGame(Gameplay).webp',
    'PongGameSettings':'images/PongGame(Settings).webp', 
    'OverwrappedMenu':'images/OverwrappedMenu.webp',
    'OverwrappedGame':'images/OverwrappedGame.webp'
  }

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
                      {imageLeft: {id:"media-project-home", src:images.MediaProjectHome},
                      imageRight: {id:"media-project-upload", src:images.MediaProjectUpload}
                      },
                      {imageLeft: {id:"media-project-viewImage", src:images.MediaProjectViewImage},
                      imageRight: {id:"media-project-viewVideo", src:images.MediaProjectViewVideo}
                      }
                    ]  
        }
        url="https://xeg28.serv00.net/"
        />

        <Project 
          title="Overwrapped"
          description="I created this game along with two other group members for my 3D Game Development course. 
          This was a semester long project where we had to create a local co-op game in unity. Our game took inspiration
          from a game called Overcooked but it is Christmas themed."
          technologies={['unity', 'csharp']}
          features={["Supports two keyboard players and multiple controller players.",
                    "Players can sprint, jump, throw items, drop items, and work on items.", 
                    "Has a user interface that provides information about each player.", 
                    "In later levels, there's obstacles like falling snowballs and icicles."
          ]}
          howToUse="When loading the site, the description of the game will show the controls
          for keyboard and controller. The goal of the game is to create toys as fast as possible. There is
          a time limit for each toy and players need to work together to get them done in time. If three toys 
          are not finished in time, the level is failed."
          imagePairs={[{imageLeft: {id:"overwrapped-menu", src:images.OverwrappedMenu},
                        imageRight: {id:"overwrapped-game", src:images.OverwrappedGame}
          }]}   
          url="https://simmer.io/@paperclip_1/overwrapped-version-1"
        />

      <Project 
          title="Personal Website"
          description="I created this website to provide information about myself such as my interests, education,
           experience, and projects. I decided to create this site with the React Framework because I wanted to learn 
           how to use a popular frontend framework."
          technologies={['react', 'js', 'css']}
          features={["Includes a navbar that will scroll to certain sections of the website.", 
                      "Includes animations when scrolling to a section.", 
                      "Users can click on an images to enlarge.", 
                      "The website is responsive so it can be used on mobile."
          ]}
          howToUse="Users can scroll to sections or use the navbar which will automatically scroll to a section. 
          Users can click on project images to enlarge them."
          imagePairs={[]}   
          url="https://xeg28.github.io/PersonalWebsite"
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
          imagePairs={[{imageLeft: {id:"pong-game-gameplay", src:images.PongGameGameplay},
                        imageRight: {id:"pong-game-settings", src:images.PongGameSettings}
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
          imagePairs={[{imageLeft: {id:"snake-menu", src:images.SnakeMenu},
                        imageRight: {id:"snake-Gameplay", src:images.SnakeGameplay}
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
        imagePairs={[{imageLeft: {id:"typing-main", src:images.TypingTestTitle},
                      imageRight: {id:"typing-results", src:images.TypingTestResults}
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
