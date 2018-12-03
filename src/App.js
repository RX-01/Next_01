import React, { Component } from 'react';

import { Router } from "@reach/router";
import { Container,Container_Router } from './Components/Layout_Style';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Sample from './Pages/Sample';
import Contact from './Pages/Contact';
import './App.css';

// git remote add origin https://github.com/RX-01/Next_01.git
// git push -u origin master
class App extends Component {
  render() {
    return (
      <Container>
      <Navbar />
      <Router className = 'Container_Body'>
        <Home path="/" />
        <Sample path="sample/:sampleID" />
        <Contact path="contact" />
      </Router>
    </Container>
    );
  }
}

export default App;
