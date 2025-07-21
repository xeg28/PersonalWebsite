// import {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import '../index.css';
// import '../css/projects.css';


// function Project(props) {
//   const [isImageVisible, setIsImageVisible] = useState(false);
//   const [imagePosition, setImagePosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
//   const [focusedImage, setFocusedImage] = useState(null);
//   const [animatedClass, setAnimatedClass] = useState(false);
//   function imageClicked(id) {
//     const mediaQuery = window.matchMedia('(max-width: 750px)');
//     if(mediaQuery.matches) return;
//     setIsImageVisible(true);
//     const element = document.getElementById(id);
//     const rect = element.getBoundingClientRect();
    
    
//     setImagePosition({
//       top: rect.top,  
//       left: rect.left,
//       width: rect.width,
//       height: rect.height,
//     });
    
//     setFocusedImage(element);

//   }

//   // Add 'animated' class after component mounts
//   useEffect(() => {
//     if (isImageVisible) {
//       const timeoutId = setTimeout(() => {
//         setAnimatedClass(true); // Add the animated class after a short delay
//         animateToCenter();
//       }, 10); // A small delay to ensure the element has been rendered

//       return () => clearTimeout(timeoutId); // Cleanup timeout
//     }
//     setAnimatedClass(false); // Remove the animated class when the image is not visible
//   }, [isImageVisible]);

//   const renderFocusContainer = () => {
//     if (!isImageVisible) return null;

//     return ReactDOM.createPortal(
//       <div className={`focus-container ${animatedClass ? 'animated' : ''}`}>
//         <img
//           className={`focused-image ${animatedClass ? 'animated' : ''}`}
//           src={focusedImage.getAttribute('src')}
//           style={{
//             position: 'absolute',
//             top: `${imagePosition.top}px`,
//             left: `${imagePosition.left}px`,
//             width: `${imagePosition.width}px`,
//             height: `${imagePosition.height}px`,
//             borderRadius: '1vw'
//           }}
//           onClick={removeImageFocus}
//         />
//       </div>,
//       document.getElementById('root') // Target the #root element
//     );
//   };

// function removeImageFocus() {
//   setIsImageVisible(false)
// }

// function animateToCenter() {
//   if(!isImageVisible) return;
//   const image = document.querySelector('.focused-image');
//   const windowWidth = window.innerWidth;
//   const windowHeight = window.innerHeight;

//   const elementWidth = image.offsetWidth;
//   const elementHeight = image.offsetHeight;

//   // Calculate the difference between the element's current position and the center of the viewport
//   const currentX = parseFloat(image.style.left);
//   const currentY = parseFloat(image.style.top);
//   const imgRatio = elementHeight/elementWidth;
//   const newWidth = 0.9*windowWidth;
//   const newHeight = Math.min(newWidth*imgRatio, windowHeight*.90);
//   const deltaX = (windowWidth - newWidth) / 2 - currentX;
//   const deltaY = (windowHeight - newHeight) / 2 - currentY;

//   // Animate the element to its new position
//   image.style.transition = 'transform 0.5s ease, width 0.5s ease, border-radius 0.5s ease'; 
//   image.style.borderRadius = '0'
//   image.style.transform = `translate(${deltaX}px, ${deltaY}px)`; 
//   image.style.width = '90vw';
//   image.style.height = 'auto';
// }

// useEffect(() => {
//   // Add event listener for window resize
//   window.addEventListener('resize', animateToCenter);

//   // Cleanup the event listener on component unmount
//   return () => {
//     window.removeEventListener('resize', animateToCenter);
//   };
// }, []);

//   const technologies = {'js':{name:'JavaScript', url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
//                       'codeigniter':{name:'CodeIgniter', url:'https://codeigniter.com/user_guide/intro/index.html'},
//                       'bootstrap':{name:'Bootstrap', url:'https://getbootstrap.com/docs/5.1/getting-started/introduction/'},
//                       'dropzonejs':{name:'Dropzone', url:'https://docs.dropzone.dev/'}, 
//                       'css':{name:'CSS', url:'https://developer.mozilla.org/en-US/docs/Web/CSS'},
//                       'html':{name:'HTML', url:'https://developer.mozilla.org/en-US/docs/Web/HTML'},
//                       'java':{name:'Java', url:'https://docs.oracle.com/en/java/'},
//                       'jquery':{name:'jQuery', url:'https://api.jquery.com/'},
//                       'php':{name:'PHP', url:'https://www.php.net/docs.php'}, 
//                       'react':{name:'React', url:'https://react.dev/learn'}, 
//                       'javafx':{name:'JavaFX', url:'https://docs.oracle.com/javase/8/javafx/get-started-tutorial/jfx-overview.htm#JFXST784'},
//                       'unity':{name:'Unity', url:'https://docs.unity.com/'},
//                       'csharp':{name: 'C#', url:'https://learn.microsoft.com/en-us/dotnet/csharp/'}
//                       };                 
//   return (
//     <div className="flex-container">
//       <span className="label-theme">{props.title}</span>
//       <span className="paragraph">{props.description}</span>

//       <span className="monospace fs-500 fw-600">Technologies</span>
//       <div className="row technologies">
//         {(props.technologies) ? props.technologies.map((technology) => (
//           <a href={technologies[technology].url} target="_blank" title={technologies[technology].name}>
//             <img src={`svg/${technology}.svg`} alt={technologies[technology].name} />
//           </a>
//         )): ("")}
//       </div>

//       <div className="grid-container">
//         <span className="monospace fs-500 fw-600">Features</span>
//         <div className="monospace fs-400" id="features">
//           {props.features.map((feature) => (
//             <li>{feature}</li>
//           ))}
//         </div>
//       </div>

//       <div className="grid-container">
//         <span className="monospace fs-500 fw-600">How to use</span>
//         <span className='monospace fs-400'>{props.howToUse}</span>
//       </div>
      
//       {props.imagePairs.map((pair) => (
//         <div className="img-container">
//          <img 
//             className="project-image image-left" 
//             id={pair.imageLeft.id} src={pair.imageLeft.src} 
//             alt={pair.imageLeft.id} loading="lazy" onClick={imageClicked.bind(null, pair.imageLeft.id)}/>

//           <img 
//             className="project-image image-right"
//             id={pair.imageRight.id} src={pair.imageRight.src}
//             alt={pair.imageRight.id} loading="lazy" onClick={imageClicked.bind(null, pair.imageRight.id)}/>
//         </div>
//       ))}
//       {renderFocusContainer()}

//       <div className="grid-container">
//         <span className="monospace fs-500 fw-600">Try it now</span>
//         {(props.url) ? <a className='monospace fs-400' href={props.url} target="_blank">{props.title}</a>: 
//           props.links
//         }
//       </div>
//       {(props.last == 'true') ? '' : <hr/>}
//     </div>
//   );
// }

// export default Project;

  const technologies = {'js':{name:'JavaScript', url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
                      'codeigniter':{name:'CodeIgniter', url:'https://codeigniter.com/user_guide/intro/index.html'},
                      'bootstrap':{name:'Bootstrap', url:'https://getbootstrap.com/docs/5.1/getting-started/introduction/'},
                      'dropzonejs':{name:'Dropzone', url:'https://docs.dropzone.dev/'}, 
                      'css':{name:'CSS', url:'https://developer.mozilla.org/en-US/docs/Web/CSS'},
                      'html':{name:'HTML', url:'https://developer.mozilla.org/en-US/docs/Web/HTML'},
                      'java':{name:'Java', url:'https://docs.oracle.com/en/java/'},
                      'jquery':{name:'jQuery', url:'https://api.jquery.com/'},
                      'php':{name:'PHP', url:'https://www.php.net/docs.php'}, 
                      'react':{name:'React', url:'https://react.dev/learn'}, 
                      'javafx':{name:'JavaFX', url:'https://docs.oracle.com/javase/8/javafx/get-started-tutorial/jfx-overview.htm#JFXST784'},
                      'unity':{name:'Unity', url:'https://docs.unity.com/'},
                      'csharp':{name: 'C#', url:'https://learn.microsoft.com/en-us/dotnet/csharp/'},
                      'mysql':{name: "MySQL", url:'https://dev.mysql.com/doc/'}, 
                      'sql':{name: "SQL", url:'https://learn.microsoft.com/en-us/sql/?view=sql-server-ver17'},
                      'ts':{name:"TypeScript", url:"https://www.typescriptlang.org/docs/"},
                      "aspnet": {name:"ASP.NET", url:"https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-9.0"}
                      };    
import '../../css/projects.css';
import {useEffect, useState} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
function Project(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [slideAnimation, setSlideAnimation] = useState({});
  useEffect(() => {
    const handleResize = () => {
      const technologies = document.getElementById(props.id + "_technologies");
      if(!technologies) return;
      const parent = technologies.parentElement;
      
      if(parent && parent.offsetWidth < technologies.scrollWidth) {
        const diff = technologies.scrollWidth - parent.offsetWidth;
        const dur = (diff/100) * 5;
        setSlideAnimation({
          initial: { x: 0 },
          animate: { x: [0, -diff] },
          transition: { 
            duration: dur, 
            ease: "linear",
            repeat: Infinity, 
            repeatType: "mirror",
            repeatDelay: 2,
          }
        });
      }
      else {
        setSlideAnimation({
          initial: { x: 0 },
          animate: { x: 0 },
          transition: { }
        });
      }

    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const handlePopup = (event) => {
    const body = document.querySelector("body");
    body.classList.toggle("no-scroll");
    setShowPopup((prev) => {
      return !prev;
    });
  }

  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-img-container">
          <img src={props.img} alt="" />
          <div className='project-title'>{props.title}</div>
          <div>{props.description}</div>
        </div>
        <div>
          {props.technologies && (
            <AnimatePresence>
              <div className="sliding-track">
                <motion.div {...slideAnimation}
                className="technologies" id={props.id + "_technologies"}>
                  {props.technologies.map((technology, index) => (
                    <a key={"technology_" + index} href={technologies[technology].url} target="_blank" title={technologies[technology].name}>
                      <img src={`svg/${technology}.svg`} alt={technologies[technology].name} />
                    </a>
                  ))}
                </motion.div>
              </div>
            </AnimatePresence>
          )}
          
          <div className='project-links'>
            {props.website && 
              (<a className='project-btn' href={props.website} target="_blank">
                <img src="svg/website.svg" alt=""/>
                <span>Website</span>
              </a>)}
              {props.play && 
              (<a className='project-btn' href={props.play} target="_blank">
                <img src="svg/play.svg" alt=""/>
                <span>Play</span>
              </a>)}
              {props.github && 
              (<a className='project-btn' href={props.github} target="_blank">
                <img src="svg/github.svg" alt=""/>
                <span>GitHub</span>
              </a>)}
              
          </div>
           <button className="show-more-link" onClick={handlePopup}><strong>Learn More</strong> <img src="svg/diagonal-arrow-right-down.svg" alt="" /></button>
        </div>
      </div>
      <AnimatePresence>
        {showPopup && (
        <motion.div 
        initial={{opacity: 0, backdropFilter: "blur(0px)"}}
        animate={{opacity: 1, backdropFilter: "blur(2px)"}}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="project-popup">
          <div className="relative">
            <div className="title-color fs-600 fw-600 relative">
              {props.title}
            </div>
            <button className='close-popup' onClick={handlePopup}>
              <img src="svg/close.svg" alt="" />
            </button>
            <div className='scroll custom-scroll'>
              <div className="mb-1">{props.detail}</div>
              <div className="mb-1">
                <div className="title-color fs-400 fw-600">Features{props.inProgress && (<span>&nbsp;Completed</span>)} </div>
                  <ul className="project-features">
                    {props.features.map((feature, index) => (
                      <li key={"project-feature-" + index}>{feature}</li>
                    ))}
                  </ul>
              </div>
              <div className="title-color fs-400 fw-600">Technologies</div>
              <div className="technologies-lg">
                {props.technologies.map((technology, index) => (
                <a key={"technologylg_" + index} href={technologies[technology].url} target="_blank" title={technologies[technology].name}>
                  <img src={`svg/${technology}.svg`} alt={technologies[technology].name} />
                </a>
              ))}
              </div>
              <div className='project-links'>
                {props.website && (
                <a className="project-btn-lg" href={props.website} target="_blank">
                  <img src="svg/website.svg" alt="" />
                  <span>Website</span>
                </a>
                )}
                {props.play && (
                <a className="project-btn-lg" href={props.play} target="_blank">
                  <img src="svg/play.svg" alt="" />
                  <span>Play</span>
                </a>
                )}
                {props.github && (
                <a className="project-btn-lg" href={props.github} target="_blank">
                  <img src="svg/github.svg" alt="" />
                  <span>GitHub</span>
                </a>
                )}
                
              </div>
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  )
}

export default Project
