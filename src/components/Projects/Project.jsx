
import '../../css/projects.css';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ImageWithLoader from '../ImageWithLoader';
import Tooltip from '../Tooltip';

const technologies = {
  'js': { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  'codeigniter': { name: 'CodeIgniter', url: 'https://codeigniter.com/user_guide/intro/index.html' },
  'bootstrap': { name: 'Bootstrap', url: 'https://getbootstrap.com/docs/5.1/getting-started/introduction/' },
  'dropzonejs': { name: 'Dropzone', url: 'https://docs.dropzone.dev/' },
  'css': { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  'html': { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  'java': { name: 'Java', url: 'https://docs.oracle.com/en/java/' },
  'jquery': { name: 'jQuery', url: 'https://api.jquery.com/' },
  'php': { name: 'PHP', url: 'https://www.php.net/docs.php' },
  'react': { name: 'React', url: 'https://react.dev/learn' },
  'javafx': { name: 'JavaFX', url: 'https://docs.oracle.com/javase/8/javafx/get-started-tutorial/jfx-overview.htm#JFXST784' },
  'unity': { name: 'Unity', url: 'https://docs.unity.com/' },
  'csharp': { name: 'C#', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
  'mysql': { name: "MySQL", url: 'https://dev.mysql.com/doc/' },
  'sql': { name: "SQL", url: 'https://learn.microsoft.com/en-us/sql/?view=sql-server-ver17' },
  'ts': { name: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
  "aspnet": { name: "ASP.NET", url: "https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-9.0" },
  "pgsql": {name:"PostgreSQL", url: "https://www.postgresql.org/docs/"}
};

function Project(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [slideAnimation, setSlideAnimation] = useState({});
  useEffect(() => {
    const handleResize = () => {
      const technologies = document.getElementById(props.id + "_technologies");
      if (!technologies) return;
      const parent = technologies.parentElement;

      if (parent && parent.offsetWidth < technologies.scrollWidth) {
        const diff = technologies.scrollWidth - parent.offsetWidth;
        const dur = (diff / 100) * 5;
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
          transition: {}
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
        <div className="">
          <ImageWithLoader src={props.img} alt="ProjectImage" className="project-img-container" enlargeable />
          <div className="project-summary" style={{ marginTop: ".25em" }}>
            <div className='project-title'>{props.title}</div>
            <div>{props.description}</div>
          </div>
        </div>
        <div>
          {props.technologies && (
            <AnimatePresence>
              <div className="sliding-track">
                <motion.div {...slideAnimation}
                  className="technologies" id={props.id + "_technologies"}>
                  {props.technologies.map((technology, index) => (
                    <div key={"technology_" + index}>
                      <Tooltip text={technologies[technology].name} >
                        <a href={technologies[technology].url} target="_blank">
                          <img src={`svg/${technology}.svg`} alt={technologies[technology].name} />
                        </a>
                      </Tooltip>
                    </div>
                  ))}
                </motion.div>
              </div>
            </AnimatePresence>
          )}

          <div className='project-links'>
            {props.website &&
              (<a className='project-btn' href={props.website} target="_blank">
                <img src="svg/website.svg" alt="" />
                <span>Website</span>
              </a>)}
            {props.play &&
              (<a className='project-btn' href={props.play} target="_blank">
                <img src="svg/play.svg" alt="" />
                <span>Play</span>
              </a>)}
            {props.github &&
              (<a className='project-btn' href={props.github} target="_blank">
                <img src="svg/github.svg" alt="" />
                <span>GitHub</span>
              </a>)}

          </div>
          <button className="show-more-link" onClick={handlePopup}><strong>Learn More</strong> <img src="svg/diagonal-arrow-right-down.svg" alt="" /></button>
        </div>
      </div>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(2px)" }}
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
                <div className="mb-1" dangerouslySetInnerHTML={{ __html: props.detail }}/>
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
                    <div key={"technologylg_" + index} >
                      <Tooltip text={technologies[technology].name}>
                        <a href={technologies[technology].url} target="_blank">
                          <img src={`svg/${technology}.svg`} alt={technologies[technology].name} />
                        </a>
                      </Tooltip>
                    </div>
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
