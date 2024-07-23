import React from 'react';
import { Link } from 'react-scroll';

const Header = () => (
  <header>
    <h1>Developer's Portfolio</h1>
    <nav>
      <Link to="about" smooth={true} duration={500}>About Me</Link>
      <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
      <Link to="contact" smooth={true} duration={500}>Contact</Link>
      <Link to="resume" smooth={true} duration={500}>Resume</Link>
    </nav>
  </header>
);

export default Header;
