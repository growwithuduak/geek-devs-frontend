import React from "react";
import '../Nav.css'


export const Nav = () => {


    return (
        <div className="nav-bar">
            <div className="nav-left">
            <h1 className="hero">
                <div className="Trello_logo">T</div>
                rello
            </h1>

            <ul className="nav-list">
                <li className="listItems one">Workspaces</li>
                <li className="listItems two">Recent</li>
                <li className="listItems three">Starred</li>
                <li className="listItems four">Templates</li>  
            </ul>

            <button id="create-btn" >Create</button>
            </div>


          <div className="right-col">
          <input className="search-btn" placeholder="🔍 Search"></input>
            <div>🔔</div>
            <div>❔</div>
            <div>⚡</div>
          </div>
            
        </div>
    )
}