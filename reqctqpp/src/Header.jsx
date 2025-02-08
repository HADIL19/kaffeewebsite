import React from 'react';
import './index.css'; // Import the CSS file

function Header() {
  return (
    <header className="header">
      <h1>My Website</h1>
      <nav>
        <ul className="navbar">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
