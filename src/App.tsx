import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { Header, Navbar, RecommendedServices, Needs, LastProjects, Contact, Footer } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (


    <div className="app">
      
      <Header />
      <RecommendedServices />
      <Needs />
      <LastProjects />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
