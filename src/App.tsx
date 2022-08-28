import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { Header, WhyToChose, WhatWeDo,  Contact, Footer, OurTeam } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (


    <div className="app">
      
      <Header />
      <WhyToChose />
      <WhatWeDo />
      <OurTeam />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
