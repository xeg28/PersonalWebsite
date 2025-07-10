import '../../css/tabcard.css'
import Tabentry from './Tabentry';
import { useState } from 'react';

function Tabcard() {
  const [tab, setTab] = useState("education");
  const clickTab = (event) => {
    const target = event.target;
    if(target.id === "education-tab") {
      setTab('education');
    }
    else {
      setTab('work');
    }
  }

  return (
    <div className="tabcard">
      <div className="tabs">
        <button className={tab==="education" ? "tab-button active" : "tab-button"} id="education-tab" onClick={clickTab}>Education</button>
        <button className={tab==="work" ? "tab-button active" : "tab-button"}  id="work-tab" onClick={clickTab}>Work</button>
      </div>
      <div className="tabcard-content">
        <div className="vertical-line"></div>
        {tab==="education" && (
          <div>
            <Tabentry id="csula" img="images/CSULA.png" date="Aug 2020 - May 2025"
            title="California State University, Los Angeles" desc="BS in Computer Science"
            list={["Graduated with Summa Cum Laude", "8-time recipient of the Dean's Honor List", "Cumulative GPA of 3.92"]}
            moreTitle="Relevant Coursework" moreBtnId="college-coursework"
            more={["Object Oriented Programming", "Programming with Data Structures", "Software Engineering",
              "Principles of Database Systems", "Analysis of Algorithms", "Web and Internet Programming"
            ]}
            />
          </div>
        )}
        {tab==="work" && (
          <div>
            <Tabentry id="reu" img="images/cahsi.jpg" date="Feb 2023 – May 2023"
            title="CAHSI Local Research Experience for Undergraduates (LREU)" desc="Research Assistant"
            list={["Collaborated on a research project using machine learning to recognize emotions in COVID-19–related tweets", 
              "Labeled thousands of tweets with emotion categories such as joy, anger, sadness, surprise, fear, and claim", 
              "Co-created a research poster presenting background, methodology, results, and future work"]}
          />
          </div>
        )}
      </div>
    </div>
  )
}

export default Tabcard;