import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import './app.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <Router basename='/PersonalWebsite/'>
          <Navbar/>
          <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/contact" element={(
              <div className="container" ><Contact /></div>
            )} />
          </Routes>
        </Router>
      </React.StrictMode>
    );
