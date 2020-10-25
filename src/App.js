import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/App.sass';

import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Contact from './pages/ContactMe.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div id="content">
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/projects'>
            <Projects />
          </Route>

          <Route exact path='/contact'>
            <Contact />
          </Route>
        </div>


      </div>
    </Router>
  );
}

export default App;
