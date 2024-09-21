import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <a href="./home"><span>©</span> Code By Ruben Mooren</a>
        <ul>
          <li><a href="/Work">Work</a></li>
          <li><a href="/Experience">Experience</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
