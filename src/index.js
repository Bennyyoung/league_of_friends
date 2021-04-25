import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App, NavBar } from 'components';
import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
   <Router>
    <NavBar />
    <App />
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
