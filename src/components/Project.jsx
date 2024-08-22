import React from "react";
import '../index.css';
import '../css/projects.css';

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

function Project(props) {
  let technologies = {'js':{name:'JavaScript', url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
                      'codeigniter':{name:'CodeIgniter', url:'https://codeigniter.com/user_guide/intro/index.html'},
                      'bootstrap':{name:'Bootstrap', url:'https://getbootstrap.com/docs/5.1/getting-started/introduction/'},
                      'dropzonejs':{name:'Dropzone', url:'https://docs.dropzone.dev/'}, 
                      'css':{name:'CSS', url:'https://developer.mozilla.org/en-US/docs/Web/CSS'},
                      'html':{name:'HTML', url:'https://developer.mozilla.org/en-US/docs/Web/HTML'},
                      'java':{name:'Java', url:'https://docs.oracle.com/en/java/'},
                      'jquery':{name:'jQuery', url:'https://api.jquery.com/'},
                      'php':{name:'PHP', url:'https://www.php.net/docs.php'}, 
                      'react':{name:'React', url:'https://react.dev/learn'}, 
                      'javafx':{name:'JavaFX', url:'https://docs.oracle.com/javase/8/javafx/get-started-tutorial/jfx-overview.htm#JFXST784'}
                      }                 
  return (
    <div className="flex-container">
      <span className="label-theme">{props.title}</span>
      <span className="paragraph">{props.description}</span>

      <span className="monospace fs-500 fw-600">Technologies</span>
      <div className="row technologies">
        {(props.technologies) ? props.technologies.map((technology) => (
          <a href={technologies[technology].url} target="_blank" title={technologies[technology].name}>
            <img src={`svg/${technology}.svg`} alt={technologies[technology].name} />
          </a>
        )): ("")}
      </div>

      <div className="grid-container">
        <span className="monospace fs-500 fw-600">Features</span>
        <div className="monospace fs-400" id="features">
          {props.features.map((feature) => (
            <li>{feature}</li>
          ))}
        </div>
      </div>

      <div className="grid-container">
        <span className="monospace fs-500 fw-600">How to use</span>
        <span className='monospace fs-400'>{props.howToUse}</span>
      </div>
      
      {props.imagePairs.map((pair) => (
        <div className="img-container">
         <img 
            className="project-image image-left" 
            id={pair.imageLeft.id} src={pair.imageLeft.src} 
            alt={pair.imageLeft.id} loading="lazy" onClick={imageClicked.bind(null, pair.imageLeft.id)}/>

          <img 
            className="project-image image-right"
            id={pair.imageRight.id} src={pair.imageRight.src}
            alt={pair.imageRight.id} loading="lazy" onClick={imageClicked.bind(null, pair.imageRight.id)}/>
        </div>
      ))}

      <div className="grid-container">
        <span className="monospace fs-500 fw-600">Try it now</span>
        {(props.url) ? <a className='monospace fs-400' href={props.url} target="_blank">{props.title}</a>: 
          props.links
        }
      </div>
      {(props.last == 'true') ? '' : <hr/>}
    </div>
  );
}

export default Project;