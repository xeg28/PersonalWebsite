import React from 'react';
import '../index.css';
import '../css/home.css';
import Transition from './Transition';

function Home() {
  document.title = "Home";
  return (
    <Transition>
    <div className="container">
      <div className="card">
        <div id="home-content">
          <div className="contact">
            <div className="pic-text">
              <span className="monospace" id="name">Emmanuel Gonzalez</span>
              <span className="monospace" id="occ">Computer Science Student</span>
            </div>
              <img src="./headshot.png" alt="headshot" id="headshot"/>
            
            <div className="contact-info">
              <h2 className='monospace' style={{margin: '0 auto'}}>Contact</h2>
              <div className="email">
              <a style={{height: "20px"}} href="mailto:eg2895@gmail.com"><span className="icon" id="email"></span></a>
                <span><a className="monospace" href="mailto:eg2895@gmail.com">eg2895@gmail.com</a></span>
              </div>
              <div className="phone">
                <a style={{height: '30px'}} href="tel:5623902955"><span className="icon" id="phone"></span></a>
                <span><a className="monospace" href="tel:5623902955">(562)-390-2955</a></span>
              </div>
            </div>
          </div>
          <div className="about-me">
              <span className="label-theme">About Me</span>
              <span className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores labore possimus incidunt nihil omnis consequatur perferendis repellat sunt, cum earum nisi repellendus dolores commodi reiciendis. Rem odit quibusdam aspernatur?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fuga doloremque vero perferendis cumque blanditiis, autem ducimus, rerum neque temporibus, fugiat culpa ad expedita minus labore et sint laudantium quidem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vitae esse sed quia aperiam quaerat perferendis laboriosam voluptatem labore, ipsum expedita id officia consectetur odit consequuntur eos dignissimos aliquid odio.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti pariatur atque vero delectus sint aut repellendus eius distinctio inventore provident magnam, laudantium in nostrum mollitia cum ut debitis animi dignissimos.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt reiciendis fugiat hic, id corrupti quaerat, explicabo, repellat sit accusamus at? Animi laudantium repudiandae vitae, libero consequatur quisquam tempore quibusdam!
              </span>
          </div>
        </div>
      </div>
    </div>
    </Transition>
  );
}

export default Home;
