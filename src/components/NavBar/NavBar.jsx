import React from "react";

import './NavBar.css';


export const NavBar = () => {

    return (
        <nav className="navbar">
            <div className="logo">
                <h1> Music App</h1>
            </div>
            <ul className="nav-items">
                <li>Contact us</li>
                <li>Public playlist</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}