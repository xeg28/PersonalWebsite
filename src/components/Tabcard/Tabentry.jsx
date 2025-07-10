

function Tabentry(props) {

  const handleMore = (id) => {
    const div = document.getElementById(id);
    if(div) div.classList.toggle("show-text")
  }

  return (
    <div class="tab-entry" id={props.id}>
        <img src={props.img} alt="" />
        <div className="entry-text">
          <div class="entry-date">{props.date}</div>
          <div class="entry-title">{props.title}</div>
          <div class="entry-desc">{props.desc}</div>
          <ul class="entry-list">
            {props.list.map((item, index) => (
              <li>{item}</li>
            ))}
          </ul>
         
          {props.moreTitle && props.more && (
            <div className="entry-more">
              <button className="show-more-link" onClick={()=> handleMore(props.moreBtnId)} style={{marginBottom: "0px"}}>
                <strong>{props.moreTitle}</strong> <img src="svg/diagonal-arrow-right-down.svg" alt="" />
                </button>
              <div className="show-more-wrapper" id={props.moreBtnId}>
                <ul class="entry-list">
                  {props.more.map((item) => (
                  <li>{item}</li>
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