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
