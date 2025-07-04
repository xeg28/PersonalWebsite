import {useState} from 'react';
import '../index.css';
import '../css/home.css';
import { motion, AnimatePresence } from "framer-motion";


function Home() {
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const handleMore = () => {
    const moreDiv = document.getElementById("more-about");
    console.log(moreDiv);
    moreDiv.classList.toggle("show-text");
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("eg2895@gmail.com").then(() => {
      setShowCopyMessage(true);

      setTimeout(() => {
        setShowCopyMessage(false);
      }, 2500)
  });
  }

  return (
    <div class="section" id="home">
      <div id="about">
        <div id="about-text">
          <div className="monospace fs-700" id="name">Emmanuel Gonzalez</div>
          <div className='picture'><img src="images/headshot.webp" alt="" /></div>
          <div className="monospace fs-400 text-primary">
            I'm a Computer Science graduate from California State University, Los Angeles, 
            with a strong interest in software development driven by early experiences troubleshooting 
            games. I'm now seeking a software development internship to build professional skills, learn 
            new technologies, and grow as a team contributor.
          </div>
        </div>
        <div className='picture'><img src="images/headshot.webp" alt="" /></div>
      </div>

      <div>
        <div className="show-more-link" onClick={handleMore}><strong>More about me</strong> <img src="svg/diagonal-arrow-right-down.svg" alt="" /></div>
        <div id="more-about" >
          <div id="more-text">
            <span className="paragraph">
              I am an alumnus of California State University, Los Angeles, with a Bachelor's degree in Computer Science. As a kid,
              I spent a lot of time on the computer playing games and I would often encounter issues with software.
              Troubleshooting these issues made me develop an interest in not only problem-solving but also developed
              a curiosity about the inner workings of software.
            </span>
            {/* <br/><br/> */}
            <span className="paragraph">
              I've had the opportunity to participate in a CAHSI LREU program where I gained research experience. I helped
              with a research project that involved using machine learning to detect emotions and sentiments in tweets related to
              COVID-19. While my primary focus is not machine learning, I improved my skills in data analysis and research methodology.
            </span>

            {/* <br/><br/> */}
            <span className="paragraph">
              My current goal is to obtain an internship in software development so I can gain professional experience, learn new technologies,
              and improve my ability to work in a team.
            </span>
          </div>
        </div>
        <div className="links">
          <a id="resume-btn" href="https://docs.google.com/document/d/1a-rLQc_nsyZ85JaXSYLviFeQ45Sbbyy5frLvyy8ehso/export?format=pdf" download>Resume
            <img src="svg/doc-download.svg" alt=""/>
          </a>
          <a className="github icon" href='https://github.com/xeg28' target="_blank" title="GitHub">
            <img src="svg/github.svg" alt="" />
          </a>
          <a className="linkedin icon" href='https://www.linkedin.com/in/xeg28/' target="_blank" title="LinkedIn">
          <img src="svg/linkedin.svg" alt="" />
          </a>
          <button className="email icon" onClick={copyEmail} title="Copy Email">
            <img src="images/email.png" alt="" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {showCopyMessage && (
            <motion.div 
            class="copy-message"
            initial={{bottom: "-10%", left:"50%", opacity: 1}}
            animate={{bottom: "5%", left:"50%"}}
            exit={{bottom: "-10%", left:"50%", opacity: 0}}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <img src="svg/copy.svg" alt="" />
            Email copied
          </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
}

export default Home;
