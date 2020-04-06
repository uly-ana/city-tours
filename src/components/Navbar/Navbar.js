import React from 'react'
import './navbar.scss'
import logo from '../../logo.png'


export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="city tours logo" style={{width: 60, height:50}}></img>
            <ul className="nav-links">
                <li><a href="/" className="nav-link">
                    About
                </a></li>
                <li><a href="/" className="nav-link ">
                    Blog
                </a></li>
                <li><a href="/" className="nav-link active">
                    Tours
                </a></li>
            </ul>
        </nav>
    )
}
