

function Tabentry(props) {

  return (
    <div class="tab-entry" id={props.id}>
        <img src={props.img} alt="" />
        <div className="entry-text">
          <div class="entry-date">{props.date}</div>
          <div class="entry-title">{props.title}</div>
          <div class="entry-desc">{props.desc}</div>
          <div class="entry-list">
            {props.list.map((item) => (
              <li><span>{item}</span></li>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Tabentry;