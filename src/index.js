import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App, NavBar, FooterSection } from 'components';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from 'context';



ReactDOM.render(
 <React.StrictMode>
   <Router>
    <NavBar />
  <ContextProvider>
    <App />
  </ContextProvider>
   </Router>
   <FooterSection />
 </React.StrictMode>,

 document.getElementById('root')
);
