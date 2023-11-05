import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import './app.css'
import {HashRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <HashRouter>
          <Navbar />
       </HashRouter>
      </React.StrictMode>
    );
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom/client';
// import { HashRouter, Route, Routes} from 'react-router-dom';
// import Home from './components/Home';
// import Projects from './components/Projects';
// import './app.css';

// class App extends Component {
//   render() {
//     return (
//       <HashRouter>
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/projects" element = {<Projects />}></Route>
//         </Routes>
//       </HashRouter>
//     );
//   }
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />, );