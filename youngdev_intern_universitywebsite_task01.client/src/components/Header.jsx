import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo-title">
          <h1>University of Pakitan</h1>
        </div>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
