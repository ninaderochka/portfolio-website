import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import AppRouter from './components/AppRouter';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Works from './components/Works';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter>

<Home />
<Bio />
<Contact />
<Works />
    <App />
    </AppRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
