import { Link } from 'react-scroll';
import { Link as LinkRoute } from 'react-router-dom';

function NavLink({id, to, navOffset, text, doesRoute, active, onClick}) {
  return !doesRoute ? (
    <li><Link
      className={`route ${active ? 'active' :''}`}
      id={id}
      to={to}
      smooth={true}
      offset={-navOffset}
      duration={500}
      activeClass=''
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault(); 
          e.target.click(); 
        }
      }}
      onClick={onClick}
    >{text}</Link></li>
  ) :
  (
    <li>
    <LinkRoute className={'route'}
      id={id}
      to={to}
      tabIndex="0"
      state={{scrollTo: id}}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault(); 
          e.target.click(); 
        }
      }}
      onClick={onClick}
    >{text}</LinkRoute></li>
  );
}

export default NavLink