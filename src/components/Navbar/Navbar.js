import React from 'react'
import './navbar.scss'
import logo from '../../logo.png'


export default function Navbar() {
    return (
      <nav className="navbar">
        <a href="#">
          <img
            src={logo}
            alt="city tours logo"
            style={{ width: 60, height: 60 }}
          ></img>{" "}
          <text id="brand">Tours</text>
        </a>

        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              About Us
            </a>
          </li>
          <li>
            <a href="/" className="nav-link active ">
              Distanations
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Blog
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    );
}
