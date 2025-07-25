

function Tabentry(props) {

  const handleMore = (id) => {
    const div = document.getElementById(id);
    if(div) div.classList.toggle("show-text")
  }

  return (
    <div className="tab-entry" id={props.id}>
        <div className="tab-entry-img">
          <img src={props.img} alt="" />
        </div>
        <div className="entry-text">
          <div className="entry-date">{props.date}</div>
          <div className="entry-title">{props.title}</div>
          <div className="entry-desc">{props.desc}</div>
          <ul className="entry-list">
            {props.list.map((item, index) => (
              <li key={props.id + "_bullet_"+index}>{item}</li>
            ))}
          </ul>
         
          {props.moreTitle && props.more && (
            <div className="entry-more">
              <button className="show-more-link" onClick={()=> handleMore(props.moreBtnId)} style={{marginBottom: "0px"}}>
                <strong>{props.moreTitle}</strong> <img src="svg/diagonal-arrow-right-down.svg" alt="" />
                </button>
              <div className="show-more-wrapper" id={props.moreBtnId}>
                <ul className="entry-list">
                  {props.more.map((item, index) => (
                  <li key={props.id + "_bullet_more_"+index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Tabentry;