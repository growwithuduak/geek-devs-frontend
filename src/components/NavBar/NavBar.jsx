import React, {useState} from "react";

import './NavBar.css';


export const NavBar = () => {
       const [selectedItem, setSelectedItem] = useState(false);

       const handleClick = (item) => {
        setSelectedItem(item);
       }

    return (
        <nav className="navbar">
            <div className="logo">
                <h1> Music App</h1>
            </div>
            <ul className="nav-items" >
                <li 
                   className={selectedItem === 'contact' ? 'active' : ''}
                   onClick={() => handleClick('contact')}
                >
                    Contact us
                    </li>
                <li
                     className={selectedItem === 'playlist' ? 'active' : ''}
                     onClick={() => handleClick('playlist')}
                >
                    Public playlist
                    </li>
                <li
                        className={selectedItem === 'login' ? 'active' : ''}
                        onClick={() => handleClick('login')}
                >
                    Login
                    </li>
            </ul>
        </nav>
    )
}