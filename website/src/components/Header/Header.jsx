import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>chinmay_sawant</h1>
      <p className="subtitle">backend_developer.go | mumbai, india</p>
      <div className="links">
        <a href="https://github.com/chinmay-sawant" target="_blank" rel="noopener noreferrer">
          github.com/chinmay-sawant
        </a>
        <a href="https://www.linkedin.com/in/chinmaysawant06" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/chinmaysawant06
        </a>
      </div>
    </header>
  );
};

export default Header;
