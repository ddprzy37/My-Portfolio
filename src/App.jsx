import React from 'react';
import { Element, scroller } from 'react-scroll';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="portfolio" className="element">
        <Portfolio />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
      <Element name="resume" className="element">
        <Resume />
      </Element>
      <Footer />
    </>
  );
};

export default App;
