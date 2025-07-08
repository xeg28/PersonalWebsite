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
          <Tabentry id="education" img="images/CSULA.png" date="Aug 2020 - May 2025"
            title="California State University, Los Angeles" desc="BS in Computer Science"
            list={["Graduated with Summa Cum Laude", "8-time recipient of the Dean's Honor List"]}
          />
        )}

        {tab==="work" && (
          <div>Work</div>
        )}
      </div>
    </div>
  )
}

export default Tabcard;